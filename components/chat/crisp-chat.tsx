"use client";

import { useEffect } from "react";

// Extend Window interface for Crisp
declare global {
  interface Window {
    $crisp: unknown[];
    CRISP_WEBSITE_ID: string;
  }
}

interface CrispChatProps {
  websiteId?: string;
}

export function CrispChat({ websiteId }: CrispChatProps) {
  useEffect(() => {
    // Don't load if no website ID provided
    // Users should replace this with their actual Crisp website ID
    const crispId = websiteId || process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

    if (!crispId) {
      console.log("Crisp Chat: No website ID provided. Get one at https://crisp.chat");
      return;
    }

    // Initialize Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = crispId;

    // Load Crisp script
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const existingScript = document.querySelector(
        'script[src="https://client.crisp.chat/l.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
      // Clean up Crisp global variables
      if (window.$crisp) {
        delete (window as Partial<Window>).$crisp;
      }
      if (window.CRISP_WEBSITE_ID) {
        delete (window as Partial<Window>).CRISP_WEBSITE_ID;
      }
    };
  }, [websiteId]);

  return null;
}
