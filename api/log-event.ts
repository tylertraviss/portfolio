import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const ip =
    (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ??
    req.socket.remoteAddress ??
    "unknown";

  const userAgent = req.headers["user-agent"] ?? "unknown";

  const { event, payload } = (req.body as any) || {};

  console.log(
    JSON.stringify({
      type: "client_event",
      event: event ?? "unknown_event",
      payload: payload ?? {},
      ip,
      userAgent,
      timestamp: new Date().toISOString(),
    })
  );

  res.status(204).end();
}

