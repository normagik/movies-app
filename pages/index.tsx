import Head from 'next/head'
import Image from 'next/image'
import  {AiOutlineSearch}  from 'react-icons/ai'
import {FiPlus} from 'react-icons/fi'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Movies App</title>
        <meta name="description" content="Find your favorite movies and tv shows" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <nav className=" flex items-center justify-between py-1 mb-12 bg-[#032541]">
          <ul className='flex items-center text-white'>
            <li className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 mr-4' ><a className='' href="#">TMDB</a></li>
            <li><a className='mr-4' href="#">Movies</a></li>
            <li><a className='mr-4' href="#">TV Shows</a></li>
            <li><a className='mr-4' href="#">People</a></li>
            <li><a className='mr-4' href="#">More</a></li>
         </ul>

          <ul className="flex items-center text-white  ">
            <li><a className='' href="#"><FiPlus/></a></li>
            <li><a className='mx-4' href="#">EN</a></li>
            <li><a className='mr-4' href="#">Login</a></li>
            <li><a className='mr-4' href="#">Join TMDB</a></li>
            <li><a className='text-[#00B4E4] text-2xl mx-4' href="#"><AiOutlineSearch/></a></li>
          </ul>


        </nav>


      </main>

    </div>
  )
}
