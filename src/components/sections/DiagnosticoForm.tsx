import React, { useState } from 'react';
import { CONTACT } from '../../config/brand';
import { SERVICE_OPTIONS } from '../../content/formOptions';
import { TextField, TextAreaField, SelectField, CheckboxField } from '../ui/FormField';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  service: string;
  message: string;
  consent: boolean;
}

const EMPTY: FormState = { name: '', email: '', phone: '', company: '', website: '', service: '', message: '', consent: false };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Lenient on purpose — clients aren't only in Spain, so this accepts any
// reasonable phone format (spaces, dashes, parens, leading +) rather than
// enforcing a 9-digit Spanish pattern. It just checks there's a plausible
// number of digits, not a specific country's format.
const PHONE_RE = /^[+()\d][\d\s\-().]{7,}$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function DiagnosticoForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Cuéntanos cómo te llamas.';
    if (!form.email.trim()) next.email = 'Necesitamos un email para responderte.';
    else if (!EMAIL_RE.test(form.email)) next.email = 'Revisa el formato del email.';
    if (!form.phone.trim()) next.phone = 'Necesitamos un teléfono de contacto.';
    else if (!PHONE_RE.test(form.phone.trim())) next.phone = 'Revisa el formato del teléfono.';
    if (!form.consent) next.consent = 'Tienes que aceptar la política de privacidad para continuar.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function buildMailto(): string {
    const subject = `Diagnóstico digital gratuito — ${form.company || form.name}`;
    const lines = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.phone}`,
      `Empresa: ${form.company || '(no indicada)'}`,
      `Web actual: ${form.website || '(no indicada)'}`,
      `Servicio de interés: ${form.service || '(no indicado)'}`,
      '',
      'Más contexto:',
      form.message || '(sin comentarios adicionales)',
    ];
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    // No backend/email API is wired up yet — this opens the visitor's own mail
    // client with everything pre-filled, which is a real send, just not silent.
    // Replace with a serverless function + email API before relying on this at scale.
    // Opening mailto: is synchronous, so this fires immediately — no artificial
    // delay on the one interaction here that should feel instant.
    try {
      window.location.href = buildMailto();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="reveal glass-subtle rounded-panel p-8 text-center">
        <p className="font-serif italic text-xl text-ink">Se ha abierto tu cliente de correo con todo listo.</p>
        <p className="mt-3 font-sans text-sm text-ink-secondary max-w-sm mx-auto">
          Solo tienes que darle a enviar. Si no se ha abierto nada, escríbenos directamente a{' '}
          <a href={`mailto:${CONTACT.email}`} className="text-ink underline underline-offset-2">
            {CONTACT.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY);
            setStatus('idle');
          }}
          className="mt-5 font-sans text-sm text-ink-secondary underline underline-offset-2 hover:text-ink"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="reveal flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <TextField
          htmlFor="df-name"
          name="name"
          label="Nombre"
          required
          value={form.name}
          onChange={(v) => set('name', v)}
          autoComplete="name"
          error={errors.name}
        />
        <TextField
          htmlFor="df-email"
          name="email"
          type="email"
          label="Email"
          required
          value={form.email}
          onChange={(v) => set('email', v)}
          autoComplete="email"
          error={errors.email}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <TextField
          htmlFor="df-phone"
          name="phone"
          type="tel"
          label="Teléfono"
          required
          placeholder="+34 600 000 000"
          value={form.phone}
          onChange={(v) => set('phone', v)}
          autoComplete="tel"
          error={errors.phone}
        />
        <TextField htmlFor="df-company" name="company" label="Empresa" value={form.company} onChange={(v) => set('company', v)} autoComplete="organization" />
      </div>
      <TextField htmlFor="df-website" name="website" label="Web actual" placeholder="tuempresa.com" value={form.website} onChange={(v) => set('website', v)} />
      <SelectField
        htmlFor="df-service"
        name="service"
        label="Servicio que te interesa"
        placeholder="Selecciona una opción…"
        options={SERVICE_OPTIONS}
        value={form.service}
        onChange={(v) => set('service', v)}
      />
      <TextAreaField
        htmlFor="df-message"
        name="message"
        label="Cuéntanos algo más (opcional)"
        value={form.message}
        onChange={(v) => set('message', v)}
        placeholder="¿Qué está pasando en tu negocio ahora mismo?"
      />
      <CheckboxField htmlFor="df-consent" name="consent" checked={form.consent} onChange={(v) => set('consent', v)} error={errors.consent}>
        He leído y acepto la política de privacidad.
      </CheckboxField>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-1 inline-flex items-center justify-center gap-2 font-sans font-bold uppercase tracking-[0.1em] text-[13px] px-8 py-4 rounded-full bg-brand-accent text-accent-ink hover:bg-surface-inverse hover:text-brand-accent hover:scale-[1.02] active:scale-[0.98] transition-[background-color,color,transform] duration-200 disabled:opacity-60 disabled:cursor-wait disabled:hover:scale-100"
      >
        {status === 'submitting' ? 'Enviando…' : 'Solicitar diagnóstico gratuito'}
      </button>
      <p className="font-sans text-[12.5px] text-ink-tertiary text-center">Sin spam. Sin compromiso. Te responderemos personalmente.</p>
    </form>
  );
}
