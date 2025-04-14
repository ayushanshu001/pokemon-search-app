import Link from 'next/link';

export default function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer text-center">
      <img src={pokemon.image} alt={pokemon.name} className="mx-auto h-24 mb-2" />
      <h3 className="text-lg font-semibold capitalize text-gray-700">{pokemon.name}</h3>
      <Link href={`/${pokemon.name}`} className="text-primary text-sm hover:underline">Details →</Link>
    </div>
  );
}