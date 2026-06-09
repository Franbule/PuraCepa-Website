import { useState, useEffect } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  navLinks: NavLink[];
}

export default function MobileMenu({ navLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        className="p-2 text-negro"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: '#FAF7F2' }}
        >
          {/* Header del menú */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-[#E9DECB]">
            <a
              href="/"
              onClick={close}
              className="flex flex-col leading-none"
              aria-label="PuraCepa Catering - Inicio"
            >
              <span className="font-serif text-2xl font-light" style={{ color: '#161412' }}>PuraCepa</span>
              <span className="text-xs font-light tracking-widest uppercase" style={{ color: '#BFA15F' }}>Catering</span>
            </a>
            <button
              onClick={close}
              aria-label="Cerrar menú"
              className="p-2"
              style={{ color: '#161412' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navegación */}
          <nav className="flex flex-col px-8 py-10 gap-2 flex-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="font-serif text-4xl font-light py-2 transition-colors duration-200 hover:text-dorado"
                style={{ color: '#161412' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-8 pb-12">
            <a
              href="/contacto"
              onClick={close}
              className="block text-center py-4 text-sm font-medium tracking-widest uppercase text-white transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: '#BFA15F' }}
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
