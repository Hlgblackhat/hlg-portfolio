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
      type: "standard",
    };

    (function (d, t) {
      const BASE_URL = "https://app.chatwoot.com";
      const g = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      if (s && s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_TOKEN || "PASTE_YOUR_TOKEN_HERE",
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }, []);

  return null;
};

export default ChatwootWidget;
