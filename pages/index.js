import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Searcher from '../components/searcher'


export default function Home() {
  return (
    <>
      <Header />
      <Searcher />
    </>
  )
}
