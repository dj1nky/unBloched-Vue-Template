import { Ref, onMounted, onUnmounted, ref } from "vue";
import { ANIMATIONS } from "~/components/AppDiv/animations.js";

// Public types
export type AnimationKey = keyof typeof ANIMATIONS;

interface AnimationConfig {
  class: string;
  triggers?: string[];
}

export interface UseIntersectionAnimationOptions {
  animation?: string; // Key in ANIMATIONS map
  threshold?: number; // IntersectionObserver threshold
  triggerChildren?: boolean; // Reveal matched child animation classes
  disableOnMobile?: boolean; // Skip animations on small screens
  mobileQuery?: string; // Media query string to detect mobile
}

export interface UseIntersectionAnimationResult {
  animationRef: Ref<HTMLElement | null>;
  isVisible: Ref<boolean>;
}

/**
 * useIntersectionAnimation (TypeScript version)
 * Handles:
 *  - Adding initial animation class
 *  - IntersectionObserver reveal
 *  - Optional child triggering
 *  - Mobile disable + resize re-enable
 *  - prefers-reduced-motion support
 */
export function useIntersectionAnimation(
  options: UseIntersectionAnimationOptions = {}
): UseIntersectionAnimationResult {
  const {
    animation = "",
    threshold = 0.6,
    triggerChildren = true,
    disableOnMobile = true,
    mobileQuery = "(max-width: 767px)",
  } = options;

  const animationRef = ref<HTMLElement | null>(null);
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;
  let resizeHandler: (() => void) | null = null;
  const isMobile = ref(false);

  const teardownObserver = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  const setupObserver = (config: AnimationConfig) => {
    if (!animationRef.value || observer) return;
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          isVisible.value = true;
          entry.target.classList.add("is-visible");

          if (triggerChildren) {
            if (config.triggers && config.triggers.length) {
              config.triggers.forEach(t => {
                const key = t as AnimationKey;
                const childCfg = ANIMATIONS[key];
                if (!childCfg) return;
                const childNodes = entry.target.querySelectorAll(
                  `.${childCfg.class}`
                );
                childNodes.forEach(c => c.classList.add("is-visible"));
              });
            }
            const sameType = entry.target.querySelectorAll(`.${config.class}`);
            sameType.forEach(c => {
              if (c !== entry.target) c.classList.add("is-visible");
            });
          }
          observer?.unobserve(entry.target);
        });
      },
      { threshold }
    );
    observer.observe(animationRef.value);
  };

  onMounted(() => {
    if (!animationRef.value) return;
    if (!animation) return;
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mq = window.matchMedia(mobileQuery);
    const evaluate = () => {
      isMobile.value = mq.matches;
    };

    if (disableOnMobile || prefersReduced) {
      evaluate();
      const shouldDisable =
        prefersReduced || (disableOnMobile && isMobile.value);
      if (shouldDisable) {
        isVisible.value = true;
        if (animationRef.value) {
          animationRef.value.classList.remove(
            "fade-in",
            "fade-in-up",
            "fade-in-down",
            "fade-in-left",
            "fade-in-right",
            "scale-in"
          );
          animationRef.value.classList.add("is-visible");
          (animationRef.value as HTMLElement).style.transition = "none";
        }
      }
      if (!prefersReduced) {
        resizeHandler = () => {
          const wasMobile = isMobile.value;
          evaluate();
          if (!disableOnMobile) return;
          if (isMobile.value && !wasMobile) {
            // Entered mobile -> reveal immediately
            if (!isVisible.value) {
              isVisible.value = true;
              animationRef.value?.classList.add("is-visible");
              if (animationRef.value) {
                (animationRef.value as HTMLElement).style.transition = "none";
              }
            }
            teardownObserver();
          } else if (!isMobile.value && wasMobile) {
            // Left mobile -> start animation if still hidden
            if (!isVisible.value) {
              const cfg = ANIMATIONS[animation as AnimationKey];
              if (cfg && animationRef.value) {
                animationRef.value.classList.add(cfg.class);
                setupObserver(cfg);
              }
            }
          }
        };
        window.addEventListener("resize", resizeHandler);
      }
      if (shouldDisable) return; // Stop further setup
    }

    const config = ANIMATIONS[animation as AnimationKey];
    if (!config) return;
    animationRef.value?.classList.add(config.class);
    setupObserver(config);
  });

  onUnmounted(() => {
    teardownObserver();
    if (resizeHandler && typeof window !== "undefined") {
      window.removeEventListener("resize", resizeHandler);
    }
  });

  return { animationRef, isVisible };
}
