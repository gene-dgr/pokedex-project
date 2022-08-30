import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Searcher from '../components/searcher'
import Body from '@/components/body'


export default function Home() {

  const [pokemons, setPokemons] = useState([]);
  
  const [filter, setFilter] = useState("1");
  const [pokemonsSearched, setPokemonsSearched] = useState([]);

  useEffect(() => {
    fetchPokemon(filter);
  }, []);
  


  async function fetchPokemon(){ //get SHORT list of POKEMONS
    
      const initial = await fetch(
        `https://pokeapi.co/api/v2/pokemon/`
      );
      const allPokemons = await initial.json();

      const pokemonsDetails = allPokemons.results.map(async (i) => {
        const preFetchPokemons = await fetch(i.url);
        return preFetchPokemons.json();
      });
       
      const payload = (await Promise.all(pokemonsDetails)).map((data) => ({
        ...data
      }));

      setPokemons(payload)
      console.log("short",payload)
    }

    const sortPokemons = (filter) =>{
      const sortedPokemons = [...pokemons]
      switch(filter){
        case '1':
          console.log("case 1")
          setPokemons( sortedPokemons.sort((a, b) => a.id - b.id) )
          break;
        case '2':
          setPokemons( sortedPokemons.sort((a, b) => a.id - b.id).reverse() ) //TODO: hacer reverse de todos los pokemons, no solo los cargados
          break;
        case '3':
          setPokemons(sortedPokemons.sort((a, b) => a.name.localeCompare(b.name)))
          break;
        case '4':
          console.log("hola")
          setPokemons( sortedPokemons.sort((a, b) => a.name - b.name).reverse() )
          break;
        case '5':
          setPokemons(sortedPokemons.sort((a, b) => 0.5 - Math.random()))
          break;

      }
    }

  function handleSetFilter(value){
    console.log("setfilter",value)
    sortPokemons(value)
  }


  function handleSearch(value){
    console.log(value)
    // const searchedPokemons = [...pokemons]
    // const searchValue = value.toLowerCase();
    // let result = [];
    
    // searchedPokemons.filter(pokemon => {
    //   const pokemonName = pokemon.name.toLowerCase();
    //   result = pokemonName.includes(searchValue);
    // })
      
    

  }
 


  return (
    <>
      <Header />
      <Searcher setSearch={(value) => handleSearch(value)} />
      <Body data={pokemons} setFilter={(value) => handleSetFilter(value)} />
    </>
  )
}
