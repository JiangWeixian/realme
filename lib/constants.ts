export const API_URL = process.env.NODE_ENV === 'development' ? `http://localhost:3000/api/v1` : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1`