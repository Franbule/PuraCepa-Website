import { useState, useEffect, useCallback } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
}

export default function Gallery({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setActiveIndex((prev) => {
        if (prev === null) return null;
        return (prev + dir + images.length) % images.length;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, navigate]);

  return (
    <>
      {/* Grid masonry */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="w-full block mb-3 break-inside-avoid overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-dorado"
            aria-label={`Ver foto: ${img.alt}`}
            style={{ display: 'block' }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(22,20,18,0.97)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
          onClick={close}
        >
          {/* Cerrar */}
          <button
            className="absolute top-4 right-4 p-3 text-white/70 hover:text-white transition-colors duration-200"
            onClick={close}
            aria-label="Cerrar galería"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Anterior */}
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors duration-200"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Imagen anterior"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Imagen activa */}
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="max-w-full max-h-[85vh] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />

          {/* Siguiente */}
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors duration-200"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Imagen siguiente"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Contador */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-sm tracking-widest">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
