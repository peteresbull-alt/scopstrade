import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_ORIGIN || "http://localhost:8000";

type RouteContext = { params: Promise<{ path: string[] }> };

export async function GET(request: NextRequest, ctx: RouteContext) {
  const { path } = await ctx.params;
  return proxyRequest(request, path);
}

export async function POST(request: NextRequest, ctx: RouteContext) {
  const { path } = await ctx.params;
  return proxyRequest(request, path);
}

export async function PUT(request: NextRequest, ctx: RouteContext) {
  const { path } = await ctx.params;
  return proxyRequest(request, path);
}

export async function DELETE(request: NextRequest, ctx: RouteContext) {
  const { path } = await ctx.params;
  return proxyRequest(request, path);
}

export async function PATCH(request: NextRequest, ctx: RouteContext) {
  const { path } = await ctx.params;
  return proxyRequest(request, path);
}

async function proxyRequest(request: NextRequest, path: string[]) {
  const pathname = path.join("/");
  // Django requires trailing slash — Next.js strips it, so always add it
  const url = `${BACKEND_URL}/api/auth/${pathname}${pathname.endsWith("/") ? "" : "/"}`;

  // Forward cookies from the browser to Django
  const cookieHeader = request.headers.get("cookie") || "";

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (cookieHeader) {
    headers["Cookie"] = cookieHeader;
  }

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

    const responseBody = await response.text();

    // Create Next.js response with Django's body and status
    const nextResponse = new NextResponse(responseBody, {
      status: response.status,
      statusText: response.statusText,
    });

    // Forward Set-Cookie headers from Django to the browser
    const setCookieHeaders = response.headers.getSetCookie();
    setCookieHeaders.forEach((cookie) => {
      nextResponse.headers.append("Set-Cookie", cookie);
    });

    // Forward other response headers (except encoding-related ones)
    const skipHeaders = ["set-cookie", "content-encoding", "content-length", "transfer-encoding"];
    response.headers.forEach((value, key) => {
      if (!skipHeaders.includes(key.toLowerCase())) {
        nextResponse.headers.set(key, value);
      }
    });

    return nextResponse;
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Failed to connect to backend" },
      { status: 502 },
    );
  }
}
