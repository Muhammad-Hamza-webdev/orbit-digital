"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // Only initialize on devices supporting fine pointer hover (desktops/laptops with a mouse)
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      speed: 0.55,
      skewing: 1.5,
      skewingText: 1,
      skewingIcon: 1,
      skewingMedia: 1,
      stickDelta: 0.15,
      stateDetection: {
        "-pointer": 'a, button, [role="button"], input[type="submit"], input[type="button"], label[for], select, summary, .interactive',
        "-hidden": "iframe"
      }
    });

    cursorRef.current = cursor;

    return () => {
      if (cursorRef.current) {
        cursorRef.current.destroy();
        cursorRef.current = null;
      }
    };
  }, []);

  // Reset lingering states when navigating to a new route in Next.js
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.removeText();
      cursorRef.current.removeStick();
      cursorRef.current.removeState("-pointer");
      cursorRef.current.removeState("-text");
      cursorRef.current.removeState("-active");
      cursorRef.current.show();
    }
  }, [pathname]);

  return null;
}
