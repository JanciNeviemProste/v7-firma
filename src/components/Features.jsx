import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SERVICES = [
  {
    icon: '⚡',
    title: 'Kompletné elektroinštalácie',
    description:
      'Realizujeme elektroinštalácie v novostavbách aj pri rekonštrukciách rodinných domov, bytov a komerčných priestorov. Navrhneme a nainštalujeme kompletné rozvody podľa najnovších noriem a vašich požiadaviek. Každý projekt zakončíme revíznou správou a zárukou na vykonané práce.',
  },
  {
    icon: '🔧',
    title: 'Opravy a údržba',
    description:
      'Riešime poruchy elektrických rozvodov, výmenu zásuviek, vypínačov a ističov. Diagnostikujeme problémy s elektrickými obvodmi pomocou profesionálneho meracieho vybavenia a zabezpečíme ich spoľahlivú opravu. V prípade núdze sme k dispozícii aj mimo pracovnú dobu.',
  },
  {
    icon: '📋',
    title: 'Revízie a kontroly',
    description:
      'Vykonávame odborné revízie elektrických zariadení v domácnostiach aj firmách. Revízna správa je povinná pre kolaudáciu, poistné udalosti aj pravidelnú kontrolu bezpečnosti vašich elektrických rozvodov. Poskytujeme aj periodické revízie podľa platnej legislatívy.',
  },
  {
    icon: '💡',
    title: 'Inteligentné osvetlenie',
    description:
      'Navrhujeme a inštalujeme moderné osvetľovacie systémy vrátane energeticky úsporných LED riešení a inteligentného ovládania. Pomôžeme vám znížiť spotrebu energie až o 60 % a zároveň zvýšiť komfort bývania s plne automatizovaným osvetlením.',
  },
  {
    icon: '🏠',
    title: 'Domová automatizácia',
    description:
      'Inštalujeme systémy inteligentnej domácnosti — od ovládania osvetlenia a kúrenia cez zabezpečovacie systémy až po centrálne riadenie. Ovládajte svoj domov jednoducho z mobilu alebo hlasovým asistentom odkiaľkoľvek na svete.',
  },
  {
    icon: '🛡️',
    title: 'Hromozvody a uzemnenie',
    description:
      'Projektujeme a inštalujeme bleskozvody a uzemňovacie sústavy pre rodinné domy aj komerčné budovy. Chránime váš majetok pred účinkami blesku v súlade s normou STN EN 62305. Vykonávame aj pravidelné revízie existujúcich bleskozvodov.',
  },
];

function ServiceCard({ icon, title, description, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-base text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Features() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="sluzby" className="py-16 lg:py-24 bg-gray-900">
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
            Naše služby
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Poskytujeme komplexné elektrikárske služby pre domácnosti aj firmy.
            Každú zákazku realizujeme s dôrazom na bezpečnosť, kvalitu a spoľahlivosť.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
