import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Searcher from '../components/searcher'
import Body from '@/components/body'


export default function Home() {
  
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const initial = await fetch(
        `https://pokeapi.co/api/v2/pokemon/`
      );
      const allPokemons = await initial.json();
      //console.log("allpokemons",allPokemons.results); // data array

      const pokemonsDetails = allPokemons.results.map(async (i) => {
        const preFetchPokemons = await fetch(i.url);
        return preFetchPokemons.json();
      });

      // uncomment this code if you want to see how it looks await Promise.all(detailsData)
      // const response = await Promise.all(detailsData)
       
      const payload = (await Promise.all(pokemonsDetails)).map((data) => ({
        ...data
      }));
      setPokemons(payload);
    };

    fetchPokemon();
  }, []);
    


  return (
    <>
      <Header />
      <Searcher />
      <Body data={pokemons}/>
    </>
  )
}
