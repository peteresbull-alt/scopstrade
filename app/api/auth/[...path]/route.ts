import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_ORIGIN || "http://localhost:8000";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return proxyRequest(request, params.path);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return proxyRequest(request, params.path);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return proxyRequest(request, params.path);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return proxyRequest(request, params.path);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return proxyRequest(request, params.path);
}

async function proxyRequest(request: NextRequest, path: string[]) {
  const pathname = path.join("/");
  const url = `${BACKEND_URL}/api/auth/${pathname}`;

  // Get cookies from the request
  const cookieHeader = request.headers.get("cookie") || "";

  console.log("🔍 Proxying to:", url);
  console.log("🔍 Cookies:", cookieHeader ? "present" : "none");

  // Forward the request to Django
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  // Forward cookies
  if (cookieHeader) {
    headers["Cookie"] = cookieHeader;
  }

  // Forward other headers if needed
  const authHeader = request.headers.get("authorization");
  if (authHeader) {
    headers["Authorization"] = authHeader;
  }

  let body: BodyInit | undefined;
  if (request.method !== "GET" && request.method !== "HEAD") {
    body = await request.text();
  }

  try {
    const response = await fetch(url, {
      method: request.method,
      headers,
      body,
    });

    // Get response body
    const responseBody = await response.text();

    // Create Next.js response with Django's response
    const nextResponse = new NextResponse(responseBody, {
      status: response.status,
      statusText: response.statusText,
    });

    // Forward Set-Cookie headers from Django to browser
    const setCookieHeaders = response.headers.getSetCookie();
    setCookieHeaders.forEach((cookie) => {
      nextResponse.headers.append("Set-Cookie", cookie);
    });

    // Forward other headers
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== "set-cookie") {
        nextResponse.headers.set(key, value);
      }
    });

    return nextResponse;
  } catch (error) {
    console.error("🔍 Proxy error:", error);
    return NextResponse.json(
      { error: "Failed to connect to backend" },
      { status: 502 },
    );
  }
}
