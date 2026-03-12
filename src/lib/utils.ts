import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let cachedSessionId: string | null = null;

function getSessionId() {
  if (typeof window === "undefined") return "server";
  if (cachedSessionId) return cachedSessionId;

  const key = "tt_portfolio_session_id";
  const existing = window.localStorage.getItem(key);
  if (existing) {
    cachedSessionId = existing;
    return existing;
  }

  const id = (window.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2)) as string;
  window.localStorage.setItem(key, id);
  cachedSessionId = id;
  return id;
}

export function logClientEvent(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const body = JSON.stringify({
    event,
    payload: {
      ...payload,
      sessionId: getSessionId(),
      path: window.location.pathname,
    },
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/log-event", body);
  } else {
    fetch("/api/log-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
      keepalive: true,
    }).catch(() => {
      // ignore errors
    });
  }
}

