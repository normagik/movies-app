import Head from 'next/head'
import Image from 'next/image'
import  {AiOutlineSearch}  from 'react-icons/ai'
import {FiPlus} from 'react-icons/fi'
import {RiArrowRightSLine} from 'react-icons/ri'

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
            <li className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 ml-8 mr-4' ><a className='' href="#">TMDB</a></li>
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
            <li><a className='text-[#00B4E4] text-2xl ml-4 mr-10' href="#"><AiOutlineSearch/></a></li>
          </ul>
        </nav>
        <section className="ml-8">
          <h1 className='text-xl mb-4'>Popular Movies</h1>
          <div className="w-1/4 grid col-span-1">
          <button className="shadow-lg p-4 mb-4 rounded-xl">Sort<RiArrowRightSLine className='inline-block'/></button>
          <button className="shadow-lg p-4 rounded-xl">Where To Watch<RiArrowRightSLine className='inline-block'/></button>
          
          <div className=" block shadow-lg  rounded-xl divide-y">
            <h2 >Filters</h2>
            <div className=''>
            <p>Show Me</p>
            <fieldset>
            <div>
            <input id="everything" type="radio" value="" name="everything" checked />
            <label htmlFor="everything">Everything</label>
            </div>
            <div>
            <input id="seen" type="radio" value="" name="seen" />
            <label htmlFor="seen">Movies I Have Seen</label>
            </div>
            <div>
            <input id="not-seen" type="radio" value="" name="not seen" />
            <label htmlFor="not-seen">Movies I Haven't Seen</label>
            </div>
            </fieldset>
            </div>
            <div>
            <p>Availabilities</p>
            <div>
            <input id="availabilities" type="checkbox" value="" name="availabilities" checked />
            <label  htmlFor="availabilities">Everything</label>
            </div>
            </div>
            <div>
            <p>Release Dates</p>
            <div>
            <input id="releases" type="checkbox" value="" name="releases" checked />
            <label  htmlFor="releases">Search All Releases?</label>
            </div>
            <p>from</p>
            <p>to</p>
            </div>
            <div>
            <p>Genres</p>
            </div>

</div>

          </div>

        </section>


      </main>

    </div>
  )
}
