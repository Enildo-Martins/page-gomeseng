// Importando as imagens das bandeiras que você salvou
import spFlag from '../assets/flags/SP.png';
import mgFlag from '../assets/flags/MG.png';
import prFlag from '../assets/flags/PR.png';
import msFlag from '../assets/flags/MS.png';
import mtFlag from '../assets/flags/MT.png';
import dfFlag from '../assets/flags/DF.png';
import goFlag from '../assets/flags/GO.png';
import baFlag from '../assets/flags/BA.png';
import ceFlag from '../assets/flags/CE.png';
import piFlag from '../assets/flags/PI.png';
import peFlag from '../assets/flags/PE.png';
import toFlag from '../assets/flags/TO.png';

// Array com os dados dos estados
const states = [
  { name: "São Paulo", flag: spFlag },
  { name: "Minas Gerais", flag: mgFlag },
  { name: "Paraná", flag: prFlag },
  { name: "Mato Grosso do Sul", flag: msFlag },
  { name: "Mato Grosso", flag: mtFlag },
  { name: "Distrito Federal", flag: dfFlag },
  { name: "Goiás", flag: goFlag },
  { name: "Bahia", flag: baFlag },
  { name: "Ceará", flag: ceFlag },
  { name: "Piauí", flag: piFlag },
  { name: "Pernambuco", flag: peFlag },
  { name: "Tocantins", flag: toFlag }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Serviços Prestados em Todo o Brasil</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Temos orgulho de levar nossa expertise em engenharia para diversos estados, contribuindo para o desenvolvimento de grandes projetos pelo país.
          </p>
        </div>
        
        {/* Grid para exibir as bandeiras dos estados */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
          {states.map((state, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 p-1 border-2 border-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <img
                  src={state.flag}
                  alt={`Bandeira de ${state.name}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="mt-4 font-semibold text-muted-foreground">{state.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}