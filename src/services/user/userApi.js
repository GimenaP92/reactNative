import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = process.env.EXPO_PUBLIC_BASE_RTDB_URL

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    tagTypes: ['UserData'], 
  endpoints: (builder) => ({
    getProfilePicture: builder.query({
      query: (localId) => `profilePictures/${localId}.json`,
    }),
    putProfilePicture: builder.mutation({
      query: ({ localId, profileImage }) => ({
        url: `profilePictures/${localId}.json`,
        method: "PUT",
        body: { profileImage },
      }),
    }),
getUserData: builder.query({
    query: (localId) => `users/${localId}.json`,
    providesTags: (result, error, arg) => [{ type: 'UserData', id: arg }],
  }),
  putUserData: builder.mutation({
    query: ({ localId, data }) => ({
      url: `users/${localId}.json`,
      method: "PUT",
      body: data,
    }),
    invalidatesTags: (result, error, { localId }) => [{ type: 'UserData', id: localId }],
  }),

  }),
});

export const {
  useGetProfilePictureQuery,
  useLazyGetProfilePictureQuery,
  usePutProfilePictureMutation,
  useGetUserDataQuery,
  usePutUserDataMutation,
} = userApi;
