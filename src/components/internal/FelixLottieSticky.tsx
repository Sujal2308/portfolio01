import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef, useState } from "react";

export function FelixLottieSticky() {
  const [stuck, setStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setStuck(entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );
    const sentinel = sentinelRef.current; // Copy ref value
    if (sentinel) {
      observer.observe(sentinel);
    }
    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, []);
  return (
    <>
      <div
        className={
          stuck
            ? "absolute right-0 bottom-0 pointer-events-none select-none"
            : "fixed right-0 bottom-0 pointer-events-none select-none z-20"
        }
        style={{ width: 500, height: 500 }}
      >
        <DotLottieReact
          src="/animations/lottie/felix.lottie"
          autoplay
          loop={false}
          style={{ width: 500, height: 500, opacity: 0.25 }}
        />
      </div>
      {/* Sentinel div just above the footer */}
      <div
        ref={sentinelRef}
        style={{
          position: "absolute",
          bottom: "52px",
          width: "100%",
          height: 1,
        }}
      />
    </>
  );
}
