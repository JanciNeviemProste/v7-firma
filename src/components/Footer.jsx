export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <span className="text-2xl">⚡</span>
              <span>ElektroServis</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Profesionálne elektrikárske služby pre domácnosti a firmy v Bratislave a okolí.
              Kvalita, spoľahlivosť a bezpečnosť na prvom mieste.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Rýchle odkazy</h4>
            <nav className="space-y-2">
              <a href="#domov" className="block text-gray-400 hover:text-white transition-all duration-300">Domov</a>
              <a href="#sluzby" className="block text-gray-400 hover:text-white transition-all duration-300">Služby</a>
              <a href="#preco-my" className="block text-gray-400 hover:text-white transition-all duration-300">Prečo my</a>
              <a href="#kontakt" className="block text-gray-400 hover:text-white transition-all duration-300">Kontakt</a>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-400">
              <p>Elektrická 42, 831 04 Bratislava</p>
              <p>+421 903 456 789</p>
              <p>info@elektroservis.sk</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 ElektroServis. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}
