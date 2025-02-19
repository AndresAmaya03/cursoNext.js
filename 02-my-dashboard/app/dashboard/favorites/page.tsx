import { FavoritePokemons, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { PokemonGrid } from "../../pokemons/components/PokemonGrid";
import { useAppSelector } from "@/app/store";
import { IoHeartOutline } from "react-icons/io5";


export const metadata = {
 title: 'favorite pokemons',
 description: 'page that shows the favorite pokemons',
};

export default async function PokemonsPage() {


  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2 text-black text-center">Pokemons favoritos<small className="text-blue-500">Global State</small></span>
      <FavoritePokemons />

    </div>
  );
}