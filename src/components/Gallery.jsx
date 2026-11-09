import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import "./Gallery.css";

// Large image + thumbnail strip. Arrow keys, swipe and a fullscreen view.
export default function Gallery({ images, title }) {
  const [index, setIndex] = useState(0);
  const stripRef = useRef(null);
  const dialogRef = useRef(null);
  const touchStart = useRef(null);
  const count = images.length;
  const current = images[index];

  const go = (delta) => setIndex((i) => (i + delta + count) % count);

  // Keep the active thumbnail visible without scrolling the page vertically.
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.children[index];
    if (!strip || !thumb) return;
    const left = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
    strip.scrollTo({ left, behavior: "smooth" });
  }, [index]);

  // Once someone starts browsing, warm up the neighbouring images.
  const interacted = useRef(false);
  useEffect(() => {
    if (!interacted.current) return;
    [images[(index + 1) % count], images[(index - 1 + count) % count]].forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, [index, images, count]);

  const select = (i) => {
    interacted.current = true;
    setIndex(i);
  };
  const step = (delta) => {
    interacted.current = true;
    go(delta);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
  };

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") touchStart.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (touchStart.current == null) return;
    const dx = e.clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
  };

  const openFull = () => dialogRef.current?.showModal();
  const closeFull = () => dialogRef.current?.close();

  return (
    <div
      className="gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      onKeyDown={onKeyDown}
    >
      <div
        className="gallery__stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (touchStart.current = null)}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.caption}
          className="gallery__img"
          loading="lazy"
          decoding="async"
          draggable="false"
        />

        {count > 1 && (
          <>
            <button className="gallery__nav gallery__nav--prev" onClick={() => step(-1)} aria-label="Previous image">
              <Icon name="chevronLeft" size={22} />
            </button>
            <button className="gallery__nav gallery__nav--next" onClick={() => step(1)} aria-label="Next image">
              <Icon name="chevronRight" size={22} />
            </button>
          </>
        )}
        <button className="gallery__expand" onClick={openFull} aria-label="View full screen">
          <Icon name="expand" size={18} />
        </button>
      </div>

      <div className="gallery__meta">
        <p className="gallery__caption" aria-live="polite">{current.caption}</p>
        <span className="gallery__count">
          {index + 1} / {count}
        </span>
      </div>

      {count > 1 && (
        <div className="gallery__strip" ref={stripRef}>
          {images.map((img, i) => (
            <button
              key={img.src}
              className={`gallery__thumb${i === index ? " is-active" : ""}`}
              onClick={() => select(i)}
              aria-label={`Show image ${i + 1}: ${img.caption}`}
              aria-current={i === index ? "true" : undefined}
            >
              <img src={img.thumb} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={`${title}: ${current.caption}`}
        onClick={(e) => e.target === dialogRef.current && closeFull()}
      >
        <figure className="lightbox__figure">
          <img src={current.src} alt={current.caption} />
          <figcaption>
            <span>{current.caption}</span>
            <span className="gallery__count">
              {index + 1} / {count}
            </span>
          </figcaption>
        </figure>
        {count > 1 && (
          <>
            <button className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label="Previous image">
              <Icon name="chevronLeft" size={26} />
            </button>
            <button className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Next image">
              <Icon name="chevronRight" size={26} />
            </button>
          </>
        )}
        <button className="lightbox__close" onClick={closeFull} aria-label="Close full screen view">
          <Icon name="close" size={22} />
        </button>
      </dialog>
    </div>
  );
}
