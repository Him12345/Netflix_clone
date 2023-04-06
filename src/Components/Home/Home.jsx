import React,{useEffect,useState} from 'react'
import './Home.scss'
import axios from 'axios'
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"


const apikey="e482a197e9d85146f2994eec6ca6fb5b";
const url="https://api.themoviedb.org/3/";
const upcoming='upcoming';
const popular='popular';
const now_playing='now_playing';
const top_rated='top_rated';

const imgurl='https://image.tmdb.org/t/p/original'


const Card = ({img}) => (
   
        <img className='card' src={img} alt="cover" />
    
)


  const Row = ({title, arr=[]
}) => (
  
      <div className='row'>
 

        <h2>{title}</h2>
        <div>

        {
            arr.map((item,index)=>{
                return(
                    <Card key={index} img={`${imgurl}/${item.poster_path}`}/>

                )

            })
        }

        </div>
  
  
     
  
           
  
      </div>
    
  )

const Home = () => {
    const [popularmovie, setpopularmovie] = useState([]);
    const [upcomingmovie, setupcomingmovie] = useState([]);
    const [now_playingmovie, setnow_playingmovie] = useState([]);
    const [top_ratedmovie, settop_ratedmovie] = useState([]);

    

    useEffect(() => {
        return () => {


            const fetchpopularmovie=async()=>{
             const {data:{results}}=await axios.get(`${url}movie/${popular}?api_key=${apikey}`)
            setpopularmovie(results)

            }
            const fetchupcomingmovie=async()=>{
                const {data:{results}}=await axios.get(`${url}movie/${upcoming}?api_key=${apikey}`)
                setupcomingmovie(results)
   
               }
               const fetchnow_playingmovie=async()=>{
                const {data:{results}}=await axios.get(`${url}movie/${now_playing}?api_key=${apikey}`)
                setnow_playingmovie(results)
   
               }
               const fetchtop_ratedmovie=async()=>{
                const {data:{results}}=await axios.get(`${url}movie/${top_rated}?api_key=${apikey}`)
                settop_ratedmovie(results)
   
               }
               fetchpopularmovie();
               fetchupcomingmovie();
               fetchnow_playingmovie();
               fetchtop_ratedmovie();




        };



    }, [])
  return (
  <section className='home'>

   <div className="banner"  style={{
    backgroundImage:popularmovie[0]?`url(${imgurl}/${popularmovie[0].poster_path})`:'black'

   }}> 
     {/* <h1>{popularmovie[0].original_title}</h1>
      <p>{popularmovie[0].overview}</p>

      <button><BiPlay/>Play</button>
      <button>My List<AiOutlinePlus/></button> */}
   </div>


       <Row title={"Popular "} arr={popularmovie}/>
       <Row title={"Upcoming "} arr={upcomingmovie}/>
       <Row title={"Now Playing "} arr={now_playingmovie}/>
       <Row title={"Top Rated"} arr={top_ratedmovie}/>
     

     

  
  </section>
  )
}

export default Home
