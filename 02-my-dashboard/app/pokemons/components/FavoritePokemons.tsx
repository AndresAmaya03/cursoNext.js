'use client'
import React, { useEffect } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/app/store'
import { useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons));
    // const [pokemons, setPokemons] = useState( favoritePokemons );

    // useEffect(() => {
    //   setPokemons(favoritePokemons)
    // }, [favoritePokemons])
    
  return (
    <div>
        {/* <PokemonGrid pokemons={Object.values(favoritePokemons)} /> */}
        {
            favoritePokemons.length === 0
            ? (<NoFavorites/>)
            : (<PokemonGrid pokemons={ favoritePokemons } />)
        }
    </div>
  )
}

export const NoFavorites = () => {
    return(
      <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoHeartOutline size={100} className="text-red-500"/>
        <span className='text-3xl text-black'>There is no favorites</span>
      </div>
    )
  }