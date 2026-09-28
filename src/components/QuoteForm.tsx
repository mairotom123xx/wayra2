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
      newErrors.empresa = 'Por favor ingresa el nombre de tu empresa, agencia o evento.';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'Por favor ingresa tu correo electrónico de contacto.';
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
      newErrors.personas = 'Indica el número estimado de personas / invitados.';
    } else if (isNaN(personasNum) || personasNum < 1) {
      newErrors.personas = 'Indica una cantidad válida de asistentes para calcular el mobiliario.';
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
    <section id="cotizacion" className="py-20 md:py-28 bg-[#F9FAFB] border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#B3802A] block mb-2">
            Paso final
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Cotiza sillas, mesas, toldos y entelado para tu evento
          </h2>
          <p className="text-base text-gray-600">
            Completa tus datos y te enviaremos una propuesta formal ajustada al número de invitados, requerimientos de mobiliario y locación en Cusco.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-md">
          {isSubmitted && submittedData ? (
            /* Thank you confirmation message without reloading page */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-[#B3802A]/10 text-[#B3802A] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                  ¡Gracias por comunicarte con Sumaq Alquileres Cusco, {submittedData.nombre}!
                </h3>
                <p className="text-base text-gray-600 max-w-xl mx-auto">
                  Hemos recibido tu solicitud para <strong className="font-semibold text-gray-900">{submittedData.empresa}</strong>. Nos comunicaremos a tu correo ({submittedData.correo}) y celular ({submittedData.celular}) con la cotización detallada.
                </p>
              </div>

              <div className="bg-[#F9FAFB] p-6 rounded-xl border border-gray-200 max-w-md mx-auto text-left text-sm text-gray-700 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Fecha tentativa:</span>
                  <span className="font-semibold text-gray-900">{submittedData.fecha}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Invitados estimados:</span>
                  <span className="font-semibold text-gray-900">{submittedData.personas} personas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Servicios solicitados:</span>
                  <span className="font-semibold text-gray-900">Sillas, mesas, toldos y entelado</span>
                </div>
                {submittedData.como_nos_conociste && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Nos conociste:</span>
                    <span className="font-semibold text-gray-900 text-right">{submittedData.como_nos_conociste}</span>
                  </div>
                )}
                {submittedData.mensaje && (
                  <div className="pt-2 border-t border-gray-200">
                    <span className="text-gray-500 block mb-1">Requerimientos:</span>
                    <p className="text-xs text-gray-900 bg-white p-2.5 rounded border border-gray-200 whitespace-pre-wrap">
                      {submittedData.mensaje}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-sm font-semibold text-[#B3802A] bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
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
                    className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
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
                      errors.nombre ? 'border-red-600 ring-1 ring-red-600' : 'border-gray-300'
                    } focus:border-[#B3802A] focus:ring-2 focus:ring-[#B3802A]/20 transition-all outline-none`}
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
                    className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
                  >
                    Empresa, agencia o nombre del evento <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Ej. Boda Mendoza o Eventos Cusco"
                    className={`w-full px-4 py-3 text-sm bg-white rounded-lg border ${
                      errors.empresa ? 'border-red-600 ring-1 ring-red-600' : 'border-gray-300'
                    } focus:border-[#B3802A] focus:ring-2 focus:ring-[#B3802A]/20 transition-all outline-none`}
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
                    className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
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
                      errors.correo ? 'border-red-600 ring-1 ring-red-600' : 'border-gray-300'
                    } focus:border-[#B3802A] focus:ring-2 focus:ring-[#B3802A]/20 transition-all outline-none`}
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
                    className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
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
                      errors.celular ? 'border-red-600 ring-1 ring-red-600' : 'border-gray-300'
                    } focus:border-[#B3802A] focus:ring-2 focus:ring-[#B3802A]/20 transition-all outline-none`}
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
                    className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
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
                      errors.fecha ? 'border-red-600 ring-1 ring-red-600' : 'border-gray-300'
                    } focus:border-[#B3802A] focus:ring-2 focus:ring-[#B3802A]/20 transition-all outline-none`}
                    required
                  />
                  {errors.fecha && (
                    <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.fecha}
                    </p>
                  )}
                </div>

                {/* 6. Número de personas */}
                <div>
                  <label
                    htmlFor="personas"
                    className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
                  >
                    Número estimado de personas / invitados <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="number"
                    id="personas"
                    name="personas"
                    min="1"
                    value={formData.personas}
                    onChange={handleChange}
                    placeholder="Cantidad de invitados (ej. 30, 80, 150...)"
                    className={`w-full px-4 py-3 text-sm bg-white rounded-lg border ${
                      errors.personas ? 'border-red-600 ring-1 ring-red-600' : 'border-gray-300'
                    } focus:border-[#B3802A] focus:ring-2 focus:ring-[#B3802A]/20 transition-all outline-none`}
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
                    className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
                  >
                    ¿Cómo nos conociste?
                  </label>
                  <select
                    id="como_nos_conociste"
                    name="como_nos_conociste"
                    value={formData.como_nos_conociste}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white rounded-lg border border-gray-300 focus:border-[#B3802A] focus:ring-2 focus:ring-[#B3802A]/20 transition-all outline-none cursor-pointer text-gray-900"
                  >
                    <option value="">Selecciona una opción (opcional)</option>
                    <option value="Recomendación de otra empresa o colega">Recomendación de otra empresa o colega</option>
                    <option value="Búsqueda en Google">Búsqueda en Google</option>
                    <option value="Redes sociales (Instagram, Facebook, TikTok)">Redes sociales (Instagram, Facebook, TikTok)</option>
                    <option value="Wedding Planner o Productora de eventos">Wedding Planner o Productora de eventos</option>
                    <option value="Hotel o local aliado en Cusco">Hotel o local aliado en Cusco</option>
                    <option value="Otro medio">Otro medio</option>
                  </select>
                </div>

                {/* 8. Mensaje */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="mensaje"
                    className="block text-xs sm:text-sm font-semibold text-gray-800 mb-2"
                  >
                    Detalle de sillas, mesas, toldos o entelado requerido
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué necesitas: cantidad de sillas (vestidas o plásticas), mesas (redondas o tablones), medidas de toldo estructural, decoración con entelado, locación en Cusco o Valle Sagrado..."
                    className="w-full px-4 py-3 text-sm bg-white rounded-lg border border-gray-300 focus:border-[#B3802A] focus:ring-2 focus:ring-[#B3802A]/20 transition-all outline-none resize-y"
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
                    className="mt-1 w-4 h-4 text-[#B3802A] border-gray-300 rounded focus:ring-[#B3802A] cursor-pointer"
                    required
                  />
                  <label htmlFor="consentimiento" className="text-xs sm:text-sm text-gray-700 leading-normal cursor-pointer">
                    Acepto que mis datos sean utilizados exclusivamente para gestionar la cotización y coordinación de sillas, mesas, toldos y entelado para mi evento, de acuerdo con el{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacyModal}
                      className="text-[#B3802A] font-semibold underline hover:text-[#93641B] cursor-pointer"
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
                  className="w-full py-4 px-8 text-base font-semibold text-white bg-[#B3802A] hover:bg-[#93641B] active:bg-[#744E17] disabled:opacity-75 disabled:cursor-not-allowed rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B3802A]"
                >
                  <span>{isSubmitting ? 'Enviando solicitud...' : 'Solicitar cotización para mi evento'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-center text-gray-500 mt-3">
                  Sin compromiso. Cotización detallada con puntualidad, limpieza y montaje seguro en Cusco.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
