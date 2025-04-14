import { fetchPokemonDetails } from '../lib/api';
import Breadcrumb from '../components/Breadcrumb';

export default async function PokemonDetailsPage({ params }) {
    const pokemon = await fetchPokemonDetails(params.name);
    return (
      <section className="p-6 max-w-3xl mx-auto">
        <Breadcrumb path={["Home", pokemon.name]} />
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <img src={pokemon.image} alt={pokemon.name} className="mx-auto w-40 h-40 mb-4" />
          <h2 className="text-3xl font-bold capitalize mb-2">{pokemon.name}</h2>
          <div className="text-sm mb-2">
            <strong>Type:</strong> {pokemon.types.join(', ')}
          </div>
          <div className="text-sm mb-2">
            <strong>Stats:</strong> {Object.entries(pokemon.stats).map(([k, v]) => `${k}: ${v}`).join(', ')}
          </div>
          <div className="text-sm">
            <strong>Abilities:</strong> {pokemon.abilities.join(', ')}
          </div>
        </div>
      </section>
    );
  }