import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon, SimplePokemon } from '@/app/pokemons';

interface PokemonsState {
    [key: string]: SimplePokemon
}

// const getInitialState = (): PokemonsState => {
//     if (typeof localStorage === 'undefined') return {}
//     const favorites = JSON.parse( localStorage.getItem('favorite-pokemon') ?? '{}' )
//     return favorites
// }


const initialState: PokemonsState = {
    // ...getInitialState()
    // '1': {id:'1', name:'bulbasur'},
    // '4': {id:'4', name:'charmander'},
    // '5': {id:'5', name:'charmeleon'}
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

        setFavoritePokemons(state, action:PayloadAction<{ [key: string]: SimplePokemon }>) {
            state= action.payload
        },

        toggleFavorite(state, action: PayloadAction<SimplePokemon>){
            const pokemon = action.payload;
            const { id } = pokemon;
            if(!!state[id]){
                delete state[id];
            } else {
                state[id]=pokemon;
            }

            // localStorage.setItem('favorite-pokemon', JSON.stringify( state ));


        }
    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions
export default pokemonsSlice.reducer