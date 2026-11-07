type ErrorContext = Record<string, unknown>;

export function reportError(error: unknown, context: ErrorContext = {}) {
  if (typeof window === "undefined") {
    console.error("[SSR Error Boundary]", error, context);
    return;
  }

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  const payload = {
    message,
    stack: error instanceof Error ? error.stack : undefined,
    url: window.location.href,
    pathname: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...context,
  };

  console.error("[Application Error Boundary]", payload);

  try {
    window.dispatchEvent(
      new CustomEvent("app:error", {
        detail: { error, payload },
      }),
    );
  } catch {
    // Ignore dispatch failure in non-standard environments
  }
}

