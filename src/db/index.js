import * as SQLite from 'expo-sqlite';

let db;

export const initDB = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync('session.db');
  }
};

export const initSessionTable = async () => {
  await initDB();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS session (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userEmail TEXT,
      localId TEXT,
      profileImage TEXT,
      phone TEXT,
      address TEXT
    );
  `);
  await migrateSessionTable();
};

export const migrateSessionTable = async () => {
  await initDB();

  try {
    await db.runAsync(`ALTER TABLE session ADD COLUMN name TEXT`);
  } catch (e) {
    if (!e.message.includes('duplicate column')) {
      console.warn('Error al agregar columna name:', e.message);
    }
  }

  try {
    await db.runAsync(`ALTER TABLE session ADD COLUMN lastName TEXT`);
  } catch (e) {
    if (!e.message.includes('duplicate column')) {
      console.warn('Error al agregar columna lastName:', e.message);
    }
  }
};

export const saveSession = async (session) => {
  const { userEmail, localId, profileImage, phone, address, name, lastName } = session;
  await initDB();
  await db.runAsync('DELETE FROM session');
  await db.runAsync(
    `INSERT INTO session (userEmail, localId, profileImage, phone, address, name, lastName) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [userEmail, localId, profileImage, phone, address, name, lastName]
  );
};

// Nueva función para actualizar sesión sin borrar la fila
export const updateSession = async (session) => {
  const { userEmail, localId, profileImage, phone, address, name, lastName } = session;
  await initDB();
  await db.runAsync(
    `UPDATE session SET 
      userEmail = ?, 
      localId = ?, 
      profileImage = ?, 
      phone = ?, 
      address = ?, 
      name = ?, 
      lastName = ?
    WHERE id = (SELECT id FROM session LIMIT 1)`,
    [userEmail, localId, profileImage, phone, address, name, lastName]
  );
};

export const getSession = async () => {
  await initDB();
  const result = await db.getAllAsync('SELECT * FROM session LIMIT 1');
  return result.length > 0 ? result[0] : null;
};

export const clearSession = async () => {
  await initDB();
  await db.runAsync('DELETE FROM session');
};
