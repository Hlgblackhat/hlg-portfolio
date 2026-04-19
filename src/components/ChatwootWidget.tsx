"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSettings: any;
    chatwootSDK: any;
  }
}

const ChatwootWidget = () => {
  useEffect(() => {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right",
      locale: "es",
      type: "expanded_bubble",
    };

    (function (d, t) {
      const BASE_URL = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || "https://app.chatwoot.com";
      const g = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      if (s && s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
      const token = process.env.NEXT_PUBLIC_CHATWOOT_TOKEN;
      const baseUrl = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || "https://app.chatwoot.com";

      if (!token) {
        console.warn("Chatwoot token is missing. Widget will not load.");
        return;
      }

      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: token,
          baseUrl: baseUrl,
        });
      };
    })(document, "script");
  }, []);

  return null;
};

export default ChatwootWidget;