import axios from 'axios'

export const cloudinary_api = axios.create({
  baseURL: process.env.CLOUDINARY_ENDPOINT,
  timeout: 30000, // 30 seconds
})
