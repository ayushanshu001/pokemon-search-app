'use client';
import { useState, useEffect } from 'react';
import { fetchPokemonList, fetchPokemonTypes } from '../app/lib/api';
import PokemonCard from '../app/components/PokemonCard';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [types, setTypes] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonTypes().then(setTypes);
    fetchPokemonList().then(setPokemonList);
  }, []);

  const filteredList = pokemonList.filter(pokemon =>
    pokemon.name.includes(search.toLowerCase()) &&
    (!type || pokemon.types.includes(type))
  );

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-md mb-6 flex flex-col md:flex-row gap-4 md:items-center">
        <select value={type} onChange={e => setType(e.target.value)} className="border rounded-md px-4 py-2 w-full md:w-1/4">
          <option value="">All Types</option>
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search Pokémon..." className="border rounded-md px-4 py-2 w-full md:w-1/2" />
        <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Search</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
      </div>
    </section>
  );
}