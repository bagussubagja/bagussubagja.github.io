/**
 * src/motion/index.ts
 * Cinematic GSAP + Lenis motion system - Brooks portfolio style.
 * Skills: cinematic-gsap-lenis-motion-system, build-awwwards-quality-sites
 *
 * Init order:
 *   initMotion() → sets up Lenis + ScrollTrigger sync
 *   initTextReveals(), initScrollReveals(), initImageReveals()
 *   initParallax(), initMagnetic(), initCursor()
 *
 * Tear down:
 *   destroyMotion() - call on component unmount / route change
 */

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "power3.out", duration: 0.85 });

// ─── Shared state ────────────────────────────────────────────────────────────
let lenis: Lenis | null = null;
let ctx: gsap.Context | null = null;

export const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ─── Lenis + ScrollTrigger bootstrap ─────────────────────────────────────────
export function initMotion() {
  if (typeof window === "undefined") return;

  if (!reduceMotion) {
    lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis!.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  // Scoped GSAP context (cleans up on destroy)
  ctx = gsap.context(() => {
    initTextReveals();
    initScrollReveals();
    initImageReveals();
    initParallax();
    initMagnetic();
    initCursor();
  });

  window.addEventListener("load", () => ScrollTrigger.refresh());
}

export function destroyMotion() {
  ctx?.revert();
  ctx = null;
  lenis?.destroy();
  lenis = null;
  ScrollTrigger.getAll().forEach((t) => t.kill());
}

// ─── Text reveals ─────────────────────────────────────────────────────────────
function splitWords(element: HTMLElement) {
  if (element.dataset.motionSplit === "true") return;

  const text = element.textContent || "";
  const parts = text.split(/(\s+)/);
  element.textContent = "";
  element.setAttribute("aria-label", text.trim());

  let index = 0;
  parts.forEach((part) => {
    if (!part.trim()) {
      element.appendChild(document.createTextNode(part));
      return;
    }
    const mask = document.createElement("span");
    const word = document.createElement("span");
    mask.className = "motion-word-mask";
    mask.setAttribute("aria-hidden", "true");
    word.className = "motion-word";
    word.textContent = part;
    word.style.setProperty("--word-index", String(index));
    mask.appendChild(word);
    element.appendChild(mask);
    index += 1;
  });

  element.dataset.motionSplit = "true";
}

function initTextReveals() {
  if (reduceMotion) {
    gsap.set("[data-motion-text]", { autoAlpha: 1, clearProps: "all" });
    return;
  }

  gsap.utils.toArray<HTMLElement>("[data-motion-text='words']").forEach((el) => {
    splitWords(el);
    const words = el.querySelectorAll<HTMLElement>(".motion-word");
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(
      words,
      { yPercent: 110, autoAlpha: 0, filter: "blur(6px)" },
      {
        yPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.055,
        scrollTrigger: { trigger: el, start: "top 84%", once: true },
      }
    );
  });

  // Lines variant (for hero h1)
  gsap.utils.toArray<HTMLElement>("[data-motion-text='lines']").forEach((el) => {
    const lines = Array.from(el.children) as HTMLElement[];
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(
      lines,
      { yPercent: 100, autoAlpha: 0, filter: "blur(8px)" },
      {
        yPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 1.05,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );
  });
}

// ─── Scroll reveals ───────────────────────────────────────────────────────────
const revealPresets: Record<
  string,
  { from: gsap.TweenVars; to: gsap.TweenVars }
> = {
  "fade-up":    { from: { y: 32,  autoAlpha: 0 },                        to: { y: 0,  autoAlpha: 1 } },
  "blur-in":    { from: { y: 18,  autoAlpha: 0, filter: "blur(10px)" },  to: { y: 0,  autoAlpha: 1, filter: "blur(0px)" } },
  "scale":      { from: { scale: 0.96, autoAlpha: 0 },                   to: { scale: 1, autoAlpha: 1 } },
  "slide-left": { from: { x: 48,  autoAlpha: 0 },                        to: { x: 0,  autoAlpha: 1 } },
  "slide-right":{ from: { x: -48, autoAlpha: 0 },                        to: { x: 0,  autoAlpha: 1 } },
};

function initScrollReveals() {
  if (reduceMotion) {
    gsap.set("[data-reveal], [data-reveal-item]", { autoAlpha: 1, clearProps: "all" });
    return;
  }

  // Grouped stagger
  gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
    gsap.set(group, { autoAlpha: 1 });
    gsap.fromTo(
      items,
      { y: 36, autoAlpha: 0, filter: "blur(6px)" },
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.07,
        scrollTrigger: { trigger: group, start: "top 84%", once: true },
      }
    );
  });

  // Individual reveals
  gsap.utils.toArray<HTMLElement>("[data-reveal]:not([data-reveal-item])").forEach((el) => {
    const type = el.dataset.reveal || "fade-up";
    const preset = revealPresets[type] ?? revealPresets["fade-up"];
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(el, preset.from, {
      ...preset.to,
      duration: 0.9,
      ease: "power4.out",
      delay: Number(el.dataset.revealDelay ?? 0),
      scrollTrigger: { trigger: el, start: "top 84%", once: true },
    });
  });
}

// ─── Clip image reveals ───────────────────────────────────────────────────────
function initImageReveals() {
  if (reduceMotion) {
    gsap.set("[data-image-reveal]", { autoAlpha: 1, clipPath: "none" });
    return;
  }

  gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((figure) => {
    const image = figure.querySelector<HTMLElement>("img");
    gsap.set(figure, { autoAlpha: 1 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: figure, start: "top 84%", once: true },
    });

    tl.fromTo(
      figure,
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out" }
    );

    if (image) {
      tl.fromTo(
        image,
        { scale: 1.08, autoAlpha: 0.75 },
        { scale: 1, autoAlpha: 1, duration: 1.2, ease: "power4.out" },
        0
      );
    }
  });
}

// ─── Parallax ─────────────────────────────────────────────────────────────────
function initParallax() {
  if (reduceMotion) return;

  gsap.utils.toArray<HTMLElement>("[data-parallax-image]").forEach((layer) => {
    const speed = Number(layer.dataset.parallaxSpeed ?? 0.14);
    const section =
      layer.closest<HTMLElement>("[data-parallax-section]") ?? layer;

    gsap.to(layer, {
      y: () => window.innerHeight * speed * -1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });
  });
}

// ─── Magnetic buttons ─────────────────────────────────────────────────────────
function initMagnetic() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

  gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = Number(el.dataset.magneticStrength ?? 0.2);
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

    el.addEventListener("pointermove", (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      xTo((e.clientX - rect.left - rect.width / 2) * strength);
      yTo((e.clientY - rect.top - rect.height / 2) * strength);
    });

    el.addEventListener("pointerleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

// ─── Custom cursor ─────────────────────────────────────────────────────────────
function initCursor() {
  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;

  const cursor = document.querySelector<HTMLElement>("[data-cursor]");
  if (!cursor) return;

  const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3.out" });
  const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3.out" });

  document.addEventListener("pointermove", (e: PointerEvent) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  // Grow on links and buttons
  document
    .querySelectorAll<HTMLElement>("a, button, [data-magnetic]")
    .forEach((el) => {
      el.addEventListener("pointerenter", () =>
        gsap.to(cursor, { scale: 2.2, duration: 0.3, ease: "power3.out" })
      );
      el.addEventListener("pointerleave", () =>
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" })
      );
    });
}
