// cloudinaryUpload.js
import Constants from 'expo-constants';
const CLOUD_NAME = Constants.expoConfig.extra.CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = Constants.expoConfig.extra.CLOUDINARY_UPLOAD_PRESET;


export const uploadImageToCloudinary = async (uri) => {
  const data = new FormData();
  data.append('file', {
    uri,
    type: 'image/jpeg',
    name: 'profile.jpg',
  });
  data.append('upload_preset', UPLOAD_PRESET);

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: data,
    });
    const result = await res.json();
    if (result.secure_url) {
      return result.secure_url;
    }
    throw new Error('Error uploading image');
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
};
