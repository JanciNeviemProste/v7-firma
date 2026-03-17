import { useScrollAnimation } from '../hooks/useScrollAnimation';

const REASONS = [
  {
    icon: '✅',
    title: 'Certifikovaní odborníci',
    description:
      'Náš tím tvoria výhradne certifikovaní elektrotechnici s oprávnením podľa vyhlášky č. 508/2009 Z. z. Pravidelne sa vzdelávame v najnovších technológiách a normách.',
  },
  {
    icon: '⏰',
    title: 'Dodržiavame termíny',
    description:
      'Vážime si váš čas. Na každý projekt vypracujeme presný harmonogram a dodržíme dohodnutý termín dokončenia. V prípade pohotovosti reagujeme do 2 hodín.',
  },
  {
    icon: '🏆',
    title: 'Záruka na všetky práce',
    description:
      'Na všetky realizované práce poskytujeme záruku minimálne 24 mesiacov. Používame výhradne certifikované materiály od overených dodávateľov.',
  },
  {
    icon: '💰',
    title: 'Transparentné ceny',
    description:
      'Pred začatím prác vám vždy poskytneme podrobnú cenovú ponuku bez skrytých poplatkov. Platíte len za to, na čom sme sa dohodli.',
  },
];

export default function WhyUs() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="preco-my" className="py-16 lg:py-24 bg-gray-950">
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
            Prečo si vybrať nás
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stavíme na skúsenostiach, profesionalite a spokojnosti každého zákazníka.
            Tu sú dôvody, prečo nám dôverujú stovky klientov.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REASONS.map((reason, index) => {
            const [cardRef, cardVisible] = useScrollAnimation(0.1);
            return (
              <div
                key={reason.title}
                ref={cardRef}
                className={`flex gap-6 bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500 cursor-pointer ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl flex-shrink-0">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
