import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.target.reset();
  };

  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kontaktujte nás
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Potrebujete elektrikára? Napíšte nám alebo zavolajte — ozveme sa vám
            do 24 hodín s cenovou ponukou.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 md:p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Meno a priezvisko *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                placeholder="Ján Novák"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                placeholder="jan.novak@email.sk"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Telefón
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                placeholder="+421 9XX XXX XXX"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Správa *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 resize-none"
                placeholder="Opíšte, s čím vám môžeme pomôcť..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Odoslať správu
            </button>

            {submitted && (
              <p className="text-green-400 text-center font-medium">
                Ďakujeme! Vaša správa bola odoslaná. Ozveme sa vám čo najskôr.
              </p>
            )}
          </form>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Kontaktné údaje</h3>

              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div>
                  <p className="font-medium text-white">Adresa</p>
                  <p className="text-gray-400">Elektrická 42, 831 04 Bratislava</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">📞</span>
                <div>
                  <p className="font-medium text-white">Telefón</p>
                  <p className="text-gray-400">+421 903 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">✉️</span>
                <div>
                  <p className="font-medium text-white">E-mail</p>
                  <p className="text-gray-400">info@elektroservis.sk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🕐</span>
                <div>
                  <p className="font-medium text-white">Otváracie hodiny</p>
                  <p className="text-gray-400">Po – Pi: 7:00 – 17:00</p>
                  <p className="text-gray-400">So: 8:00 – 12:00 (len pohotovosť)</p>
                  <p className="text-gray-400">Ne: zatvorené</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-3">🚨 Pohotovostný servis</h3>
              <p className="text-gray-300 leading-relaxed">
                V prípade havarijnej situácie sme vám k dispozícii nepretržite.
                Zavolajte na naše pohotovostné číslo a technik bude u vás do 2 hodín.
              </p>
              <p className="text-2xl font-bold text-blue-400 mt-4">
                +421 903 456 000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
