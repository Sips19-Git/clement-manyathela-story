import { useEffect, useRef } from "react";

export function GlowingCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursor.current;
    const halo = trail.current;
    if (!dot || !halo) return;
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let visible = false;

    const hide = () => {
      visible = false;
      dot.dataset.visible = "false";
      halo.dataset.visible = "false";
    };
    const configure = () => {
      document.documentElement.classList.toggle("custom-cursor-enabled", media.matches);
      if (!media.matches) hide();
    };
    const animate = () => {
      tx += (x - tx) * 0.32;
      ty += (y - ty) * 0.32;
      halo.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      if (visible && !reduced.matches && Math.abs(x - tx) + Math.abs(y - ty) > 0.1) {
        frame = requestAnimationFrame(animate);
      } else frame = 0;
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") { hide(); return; }
      x = event.clientX;
      y = event.clientY;
      if (!visible) { tx = x; ty = y; }
      visible = true;
      dot.dataset.visible = "true";
      halo.dataset.visible = reduced.matches ? "false" : "true";
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const target = event.target;
      dot.dataset.active = String(target instanceof Element && Boolean(target.closest("a, button:not(:disabled), input, select, textarea, [role='button'], .interview-row, .card-lift")));
      if (!frame) frame = requestAnimationFrame(animate);
    };
    configure();
    media.addEventListener("change", configure);
    document.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-cursor-enabled");
      media.removeEventListener("change", configure);
      document.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return <><div ref={trail} className="cursor-trail" aria-hidden="true" /><div ref={cursor} className="glowing-cursor" aria-hidden="true" /></>;
}