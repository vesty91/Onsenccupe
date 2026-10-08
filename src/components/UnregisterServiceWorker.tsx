"use client";

import { useEffect } from "react";

/**
 * Désenregistre les service workers parasites (ex. Restor_Pc sur :3000)
 * qui cassent le hot-reload / les chunks webpack de Next.js.
 */
export function UnregisterServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    void (async () => {
      try {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((reg) => reg.unregister()));

        if ("caches" in window) {
          const keys = await caches.keys();
          await Promise.all(keys.map((key) => caches.delete(key)));
        }
      } catch {
        // ignore
      }
    })();
  }, []);

  return null;
}
