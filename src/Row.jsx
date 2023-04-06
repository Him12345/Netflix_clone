import React,{useEffect,useState} from 'react'
import Card from './Card'
import './Components/Home/Home.scss'
import axios from 'axios';


const Row = (props) => {
  const [data, setdata] = useState()

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=e482a197e9d85146f2994eec6ca6fb5b&language=en-US&page=1").then((result)=>{
      result.json().then((resp)=>{
         setdata(resp)
     })
    })
    }, [])
    //  console.log(data);

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div>

      {
          data.map((item)=>{
       <Card  img={item.poster_path} />
                 
          })
      }
      
       <Card />
       <Card />
       <Card />
       <Card />


   

         

       </div>
    </div>
  )
}

export default Row
