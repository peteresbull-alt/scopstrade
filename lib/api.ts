import { BACKEND_URL } from "./constants";

/**
 * Fetch wrapper that always includes credentials for HTTPOnly cookie auth.
 * Use this for all API calls to the backend.
 *
 * @param endpoint - The API endpoint path (e.g., "/login/")
 * @param options - Standard fetch options (method, body, etc.)
 */
export async function apiFetch(
  endpoint: string,
  options: RequestInit = {},
): Promise<Response> {
  const url = `${BACKEND_URL}${endpoint}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  return fetch(url, {
    ...options,
    headers,
    credentials: "include",
  });
}
