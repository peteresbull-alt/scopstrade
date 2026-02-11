export const BACKEND_URL =
  process.env.NEXT_PUBLIC_APP_BACKEND_URL ||
  (process.env.NODE_ENV === "production"
    ? "/api/auth"
    : "http://127.0.0.1:8000/api/auth");

