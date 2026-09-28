import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

// Aquí se conectará después el webhook que recibirá las solicitudes.
export const WEBHOOK_URL = "https://hook.us2.make.com/0lv7u88gcg25bey48ghwsa93h8uv492h";

interface FormData {
  nombre: string;
  empresa: string;
  correo: string;
  celular: string;
  fecha: string;
  personas: string;
  como_nos_conociste: string;
  mensaje: string;
  consentimiento: boolean;
}

const initialFormData: FormData = {
  nombre: '',
  empresa: '',
  correo: '',
  celular: '',
  fecha: '',
  personas: '',
  como_nos_conociste: '',
  mensaje: '',
  consentimiento: false,
};

export const QuoteForm: React.FC<{ onOpenPrivacyModal: () => void }> = ({ onOpenPrivacyModal }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Por favor ingresa tu nombre y apellido.';
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = 'Por favor ingresa el nombre de tu empresa o agencia.';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'Por favor ingresa tu correo electrónico corporativo.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Ingresa un correo electrónico válido.';
    }

    if (!formData.celular.trim()) {
      newErrors.celular = 'Por favor ingresa tu número de celular para coordinar.';
    } else if (formData.celular.trim().length < 8) {
      newErrors.celular = 'Ingresa un número de celular válido (mínimo 8 dígitos).';
    }

    if (!formData.fecha) {
      newErrors.fecha = 'Por favor selecciona la fecha tentativa del evento.';
    }

    const personasNum = parseInt(formData.personas, 10);
    if (!formData.personas) {
      newErrors.personas = 'Indica el número de personas (10 a 40).';
    } else if (isNaN(personasNum) || personasNum < 10 || personasNum > 40) {
      newErrors.personas = 'El servicio está diseñado para grupos de 10 a 40 personas.';
    }

    if (!formData.consentimiento) {
      newErrors.consentimiento = 'Debes aceptar la casilla de consentimiento para continuar.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      // Envío de datos al webhook configurado
      if (WEBHOOK_URL) {
        try {
          await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
        } catch (err) {
          console.error("Error al enviar al webhook:", err);
        }
      }

      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="cotizacion" className="py-20 md:py-28 bg-[#F3ECE2] border-t border-[#E4D4C0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#8B4D24] block mb-2">
            Paso final
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3A1B0B] tracking-tight mb-4">
            Coordina el coffee break para tu evento
          </h2>
          <p className="text-base text-[#552912]">
            Completa tus datos y te enviaremos una propuesta formal ajustada al número de asistentes y a tu agenda en Cusco.
          </p>
        </div>

        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-2xl border border-[#E4D4C0] shadow-md">
          {isSubmitted && submittedData ? (
            /* Thank you confirmation message without reloading page */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-[#8B4D24]/10 text-[#8B4D24] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A1B0B]">
                  ¡Gracias por comunicarte con Wayra Café, {submittedData.nombre}!
                </h3>
                <p className="text-base text-[#552912] max-w-xl mx-auto">
                  Hemos recibido la solicitud para <strong className="font-semibold text-[#3A1B0B]">{submittedData.empresa}</strong>. Nos comunicaremos a tu correo ({submittedData.correo}) y celular ({submittedData.celular}) con la cotización detallada.
                </p>
              </div>

              <div className="bg-[#F3ECE2] p-6 rounded-xl border border-[#E4D4C0] max-w-md mx-auto text-left text-sm text-[#552912] space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#785E4F]">Fecha tentativa:</span>
                  <span className="font-semibold text-[#3A1B0B]">{submittedData.fecha}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#785E4F]">Grupo estimado:</span>
                  <span className="font-semibold text-[#3A1B0B]">{submittedData.personas} personas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#785E4F]">Servicio:</span>
                  <span className="font-semibold text-[#3A1B0B]">Café de especialidad La Convención</span>
                </div>
                {submittedData.como_nos_conociste && (
                  <div className="flex justify-between">
                    <span className="text-[#785E4F]">Nos conociste:</span>
                    <span className="font-semibold text-[#3A1B0B] text-right">{submittedData.como_nos_conociste}</span>
                  </div>
                )}
                {submittedData.mensaje && (
                  <div className="pt-2 border-t border-[#E4D4C0]">
                    <span className="text-[#785E4F] block mb-1">Mensaje:</span>
                    <p className="text-xs text-[#3A1B0B] bg-white/70 p-2.5 rounded border border-[#E4D4C0] whitespace-pre-wrap">
                      {submittedData.mensaje}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-sm font-semibold text-[#8B4D24] bg-white border border-[#E4D4C0] hover:bg-[#F3ECE2] rounded-lg transition-colors cursor-pointer"
                >
                  Enviar otra solicitud
                </button>
              </div>
            </div>
          ) : (
            /* Lead Capture Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Nombre y apellido */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-xs sm:text-sm font-semibold text-[#3A1B0B] mb-2"
                  >
                    Nombre y apellido <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Carlos Mendoza"
                    className={`w-full px-4 py-3 text-sm bg-white rounded-lg border ${
                      errors.nombre ? 'border-red-600 ring-1 ring-red-600' : 'border-[#E4D4C0]'
                    } focus:border-[#8B4D24] focus:ring-2 focus:ring-[#8B4D24]/20 transition-all outline-none`}
                    required
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.nombre}
                    </p>
                  )}
                </div>

                {/* 2. Nombre de la empresa o agencia */}
                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-xs sm:text-sm font-semibold text-[#3A1B0B] mb-2"
                  >
                    Nombre de la empresa o agencia <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Ej. Andina Travel Tours"
                    className={`w-full px-4 py-3 text-sm bg-white rounded-lg border ${
                      errors.empresa ? 'border-red-600 ring-1 ring-red-600' : 'border-[#E4D4C0]'
                    } focus:border-[#8B4D24] focus:ring-2 focus:ring-[#8B4D24]/20 transition-all outline-none`}
                    required
                  />
                  {errors.empresa && (
                    <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.empresa}
                    </p>
                  )}
                </div>

                {/* 3. Correo electrónico */}
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-xs sm:text-sm font-semibold text-[#3A1B0B] mb-2"
                  >
                    Correo electrónico <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="contacto@empresa.com"
                    className={`w-full px-4 py-3 text-sm bg-white rounded-lg border ${
                      errors.correo ? 'border-red-600 ring-1 ring-red-600' : 'border-[#E4D4C0]'
                    } focus:border-[#8B4D24] focus:ring-2 focus:ring-[#8B4D24]/20 transition-all outline-none`}
                    required
                  />
                  {errors.correo && (
                    <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.correo}
                    </p>
                  )}
                </div>

                {/* 4. Número de celular */}
                <div>
                  <label
                    htmlFor="celular"
                    className="block text-xs sm:text-sm font-semibold text-[#3A1B0B] mb-2"
                  >
                    Número de celular <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="tel"
                    id="celular"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    placeholder="+51 984 000 000"
                    className={`w-full px-4 py-3 text-sm bg-white rounded-lg border ${
                      errors.celular ? 'border-red-600 ring-1 ring-red-600' : 'border-[#E4D4C0]'
                    } focus:border-[#8B4D24] focus:ring-2 focus:ring-[#8B4D24]/20 transition-all outline-none`}
                    required
                  />
                  {errors.celular && (
                    <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.celular}
                    </p>
                  )}
                </div>

                {/* 5. Fecha tentativa del evento */}
                <div>
                  <label
                    htmlFor="fecha"
                    className="block text-xs sm:text-sm font-semibold text-[#3A1B0B] mb-2"
                  >
                    Fecha tentativa del evento <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm bg-white rounded-lg border ${
                      errors.fecha ? 'border-red-600 ring-1 ring-red-600' : 'border-[#E4D4C0]'
                    } focus:border-[#8B4D24] focus:ring-2 focus:ring-[#8B4D24]/20 transition-all outline-none`}
                    required
                  />
                  {errors.fecha && (
                    <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.fecha}
                    </p>
                  )}
                </div>

                {/* 6. Número de personas (10-40) */}
                <div>
                  <label
                    htmlFor="personas"
                    className="block text-xs sm:text-sm font-semibold text-[#3A1B0B] mb-2"
                  >
                    Número de personas (10-40) <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="number"
                    id="personas"
                    name="personas"
                    min="10"
                    max="40"
                    value={formData.personas}
                    onChange={handleChange}
                    placeholder="Cantidad de asistentes (10 a 40)"
                    className={`w-full px-4 py-3 text-sm bg-white rounded-lg border ${
                      errors.personas ? 'border-red-600 ring-1 ring-red-600' : 'border-[#E4D4C0]'
                    } focus:border-[#8B4D24] focus:ring-2 focus:ring-[#8B4D24]/20 transition-all outline-none`}
                    required
                  />
                  {errors.personas && (
                    <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.personas}
                    </p>
                  )}
                </div>

                {/* 7. ¿Cómo nos conociste? */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="como_nos_conociste"
                    className="block text-xs sm:text-sm font-semibold text-[#3A1B0B] mb-2"
                  >
                    ¿Cómo nos conociste?
                  </label>
                  <select
                    id="como_nos_conociste"
                    name="como_nos_conociste"
                    value={formData.como_nos_conociste}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white rounded-lg border border-[#E4D4C0] focus:border-[#8B4D24] focus:ring-2 focus:ring-[#8B4D24]/20 transition-all outline-none cursor-pointer text-[#3A1B0B]"
                  >
                    <option value="">Selecciona una opción (opcional)</option>
                    <option value="Recomendación de otra empresa o colega">Recomendación de otra empresa o colega</option>
                    <option value="Búsqueda en Google">Búsqueda en Google</option>
                    <option value="Redes sociales (Instagram, LinkedIn, Facebook)">Redes sociales (Instagram, LinkedIn, Facebook)</option>
                    <option value="Visita previa a Wayra Café en Cusco">Visita previa a Wayra Café en Cusco</option>
                    <option value="Agencia de turismo aliada">Agencia de turismo aliada</option>
                    <option value="Otro medio">Otro medio</option>
                  </select>
                </div>

                {/* 8. Mensaje */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="mensaje"
                    className="block text-xs sm:text-sm font-semibold text-[#3A1B0B] mb-2"
                  >
                    Mensaje o detalles del evento
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos si tienes alguna preferencia de horario, requerimientos dietéticos o detalles específicos de tu evento..."
                    className="w-full px-4 py-3 text-sm bg-white rounded-lg border border-[#E4D4C0] focus:border-[#8B4D24] focus:ring-2 focus:ring-[#8B4D24]/20 transition-all outline-none resize-y"
                  />
                </div>

              </div>

              {/* Casilla de consentimiento obligatoria */}
              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consentimiento"
                    name="consentimiento"
                    checked={formData.consentimiento}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#8B4D24] border-[#CEB496] rounded focus:ring-[#8B4D24] cursor-pointer"
                    required
                  />
                  <label htmlFor="consentimiento" className="text-xs sm:text-sm text-[#552912] leading-normal cursor-pointer">
                    Acepto que mis datos sean utilizados exclusivamente para gestionar la cotización y coordinación de mi evento corporativo, de acuerdo con el{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacyModal}
                      className="text-[#8B4D24] font-semibold underline hover:text-[#6F3918] cursor-pointer"
                    >
                      aviso de privacidad
                    </button>
                    . <span className="text-red-700">*</span>
                  </label>
                </div>
                {errors.consentimiento && (
                  <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.consentimiento}
                  </p>
                )}
              </div>

              {/* Botón de la llamada a la acción */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 text-base font-semibold text-white bg-[#8B4D24] hover:bg-[#6F3918] active:bg-[#552912] disabled:opacity-75 disabled:cursor-not-allowed rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B4D24]"
                >
                  <span>{isSubmitting ? 'Enviando solicitud...' : 'Solicitar cotización para mi evento'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-center text-[#785E4F] mt-3">
                  Sin compromiso. Coordinamos contigo la propuesta exacta para tu grupo en Cusco.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
