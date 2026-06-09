import { useState, type FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guests: string;
  message: string;
  gdpr: boolean;
  botcheck: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guests: '',
  message: '',
  gdpr: false,
  botcheck: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.gdpr) return;

    setStatus('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.PUBLIC_WEB3FORMS_KEY,
          from_name: 'PuraCepa Catering — Web',
          subject: `Nueva solicitud: ${form.eventType || 'Sin tipo'}`,
          name: form.name,
          email: form.email,
          phone: form.phone || 'No indicado',
          'Tipo de evento': form.eventType,
          'Fecha del evento': form.eventDate || 'Por concretar',
          'Número de invitados': form.guests || 'Por concretar',
          message: form.message || '(Sin mensaje adicional)',
          botcheck: form.botcheck,
        }),
      });

      const data: { success: boolean } = await res.json();
      setStatus(data.success ? 'success' : 'error');
      if (data.success) setForm(INITIAL_STATE);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-14">
        <div
          className="inline-flex items-center justify-center w-16 h-16 mb-6 border"
          style={{ borderColor: '#BFA15F', color: '#BFA15F' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl mb-3" style={{ color: '#161412' }}>¡Mensaje enviado!</h3>
        <p style={{ color: '#6B6560' }} className="text-sm leading-relaxed">
          Nos pondremos en contacto contigo en menos de 24 horas.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 text-sm border bg-white focus:outline-none transition-colors duration-200 ' +
    'placeholder-[#6B6560]/50';
  const labelClass = 'block text-sm font-medium mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot anti-spam */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        checked={!!form.botcheck}
        onChange={handleChange}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label htmlFor="cf-name" className={labelClass} style={{ color: '#161412' }}>
            Nombre completo *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            style={{ borderColor: '#E9DECB', color: '#161412' }}
            placeholder="Tu nombre y apellidos"
          />
        </div>

        <div>
          <label htmlFor="cf-email" className={labelClass} style={{ color: '#161412' }}>
            Email *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            style={{ borderColor: '#E9DECB', color: '#161412' }}
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="cf-phone" className={labelClass} style={{ color: '#161412' }}>
            Teléfono
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            style={{ borderColor: '#E9DECB', color: '#161412' }}
            placeholder="+34 600 000 000"
          />
        </div>

        <div>
          <label htmlFor="cf-eventType" className={labelClass} style={{ color: '#161412' }}>
            Tipo de evento *
          </label>
          <select
            id="cf-eventType"
            name="eventType"
            required
            value={form.eventType}
            onChange={handleChange}
            className={inputClass}
            style={{ borderColor: '#E9DECB', color: form.eventType ? '#161412' : '#6B6560' }}
          >
            <option value="">Selecciona el tipo de evento</option>
            <option value="Boda">Boda</option>
            <option value="Evento corporativo">Evento corporativo</option>
            <option value="Comunión">Comunión</option>
            <option value="Bautizo">Bautizo</option>
            <option value="Celebración privada">Celebración privada</option>
            <option value="Cóctel / Aperitivo">Cóctel / Aperitivo</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="cf-date" className={labelClass} style={{ color: '#161412' }}>
            Fecha del evento
          </label>
          <input
            id="cf-date"
            name="eventDate"
            type="date"
            value={form.eventDate}
            onChange={handleChange}
            className={inputClass}
            style={{ borderColor: '#E9DECB', color: '#161412' }}
          />
        </div>

        <div>
          <label htmlFor="cf-guests" className={labelClass} style={{ color: '#161412' }}>
            Número de invitados
          </label>
          <input
            id="cf-guests"
            name="guests"
            type="number"
            min="1"
            value={form.guests}
            onChange={handleChange}
            className={inputClass}
            style={{ borderColor: '#E9DECB', color: '#161412' }}
            placeholder="Ej: 150"
          />
        </div>

      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass} style={{ color: '#161412' }}>
          Cuéntanos sobre tu evento
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          style={{ borderColor: '#E9DECB', color: '#161412', resize: 'none' }}
          placeholder="Lugar, horario, preferencias gastronómicas, necesidades especiales..."
        />
      </div>

      {/* Consentimiento RGPD */}
      <div className="flex items-start gap-3">
        <input
          id="cf-gdpr"
          name="gdpr"
          type="checkbox"
          required
          checked={form.gdpr}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 cursor-pointer flex-shrink-0"
          style={{ accentColor: '#BFA15F' }}
        />
        <label htmlFor="cf-gdpr" className="text-sm leading-relaxed" style={{ color: '#6B6560' }}>
          He leído y acepto la{' '}
          <a href="/politica-privacidad" className="underline hover:no-underline" style={{ color: '#BFA15F' }}>
            Política de privacidad
          </a>
          {' '}y consiento el tratamiento de mis datos para recibir información
          sobre los servicios de PuraCepa Catering. *
        </label>
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 px-4 py-3 border border-red-200">
          Ha ocurrido un error. Por favor, inténtalo de nuevo o llámanos directamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || !form.gdpr}
        className="w-full py-4 text-sm font-medium tracking-widest uppercase text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: '#BFA15F' }}
      >
        {status === 'loading' ? 'Enviando...' : 'Solicitar presupuesto gratuito'}
      </button>
    </form>
  );
}
