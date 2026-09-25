import React, { useEffect, useRef, useState } from 'react';

export interface HeroTickerMessage {
  label: string;
  message: string;
}

interface HeroTickerProps {
  messages: readonly HeroTickerMessage[];
}

const SLIDE_DURATION = 500;
const SLIDE_INTERVAL = 3500;
const SLIDE_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

export const HeroTicker: React.FC<HeroTickerProps> = ({ messages }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const [isSliding, setIsSliding] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const animationFrame = useRef<number | null>(null);
  const transitionTimeout = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || messages.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setIsSliding(false);
      setActiveIndex((currentIndex) => {
        setOutgoingIndex(currentIndex);
        return (currentIndex + 1) % messages.length;
      });

      animationFrame.current = window.requestAnimationFrame(() => setIsSliding(true));
      transitionTimeout.current = window.setTimeout(() => {
        setOutgoingIndex(null);
        setIsSliding(false);
      }, SLIDE_DURATION);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(interval);
  }, [messages.length, prefersReducedMotion]);

  useEffect(() => () => {
    if (animationFrame.current !== null) {
      window.cancelAnimationFrame(animationFrame.current);
    }
    if (transitionTimeout.current !== null) {
      window.clearTimeout(transitionTimeout.current);
    }
  }, []);

  if (messages.length === 0) {
    return null;
  }

  const staticMessage = messages[0];

  return (
    <div
      aria-live="polite"
      className="absolute -bottom-5 -right-4 w-72 max-w-[320px] h-[76px] rounded-xl border border-[#E5D4B8] bg-[#FBF6EC] p-4 shadow-lg"
    >
      {prefersReducedMotion ? (
        <div className="flex h-full flex-col justify-center text-left">
          <p className="text-[11px] uppercase tracking-wider font-semibold text-[#B8860B]">{staticMessage.label}</p>
          <p className="mt-1 text-sm font-medium text-[#151413]">{staticMessage.message}</p>
        </div>
      ) : (
        <div className="relative h-full overflow-hidden">
          {messages.map((item, index) => {
            const isActive = index === activeIndex;
            const isOutgoing = index === outgoingIndex;
            const transform = isOutgoing
              ? isSliding ? 'translateX(-100%)' : 'translateX(0)'
              : isActive
                ? outgoingIndex === null || isSliding ? 'translateX(0)' : 'translateX(100%)'
                : 'translateX(100%)';

            return (
              <div
                key={`${item.label}-${item.message}`}
                aria-hidden={!isActive}
                className="absolute inset-0 flex flex-col justify-center text-left"
                style={{
                  transform,
                  transition: `transform ${SLIDE_DURATION}ms ${SLIDE_EASING}`,
                }}
              >
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#B8860B]">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-[#151413]">{item.message}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
