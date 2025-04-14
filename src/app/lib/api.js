export async function fetchPokemonTypes() {
    const res = await fetch('https://pokeapi.co/api/v2/type');
    const data = await res.json();
    return data.results.map(t => t.name);
  }
  
  export async function fetchPokemonList() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();
    const detailed = await Promise.all(data.results.map(async (p) => {
      const d = await fetch(p.url).then(r => r.json());
      return {
        name: p.name,
        image: d.sprites.front_default,
        types: d.types.map(t => t.type.name),
      };
    }));
    return detailed;
  }
  
  export async function fetchPokemonDetails(name) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const d = await res.json();
    return {
      name: d.name,
      image: d.sprites.front_default,
      types: d.types.map(t => t.type.name),
      stats: d.stats.reduce((acc, s) => ({ ...acc, [s.stat.name]: s.base_stat }), {}),
      abilities: d.abilities.map(a => a.ability.name),
    };
  }