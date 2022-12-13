import React,{useState,useEffect} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState("")
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
  },[props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results!==0){
        console.log(response.data.results[0]);
        setUrlId(response.data.results[0])
      }
      else{
        console.log("array is empty");
      }
      
    })
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movies.map((obj)=>
            <img onClick={()=>{
              handleMovie(obj.id)
            }} className={props.isSmall?"small_poster":"poster"} src={`${imageUrl+obj.poster_path}`} alt="poster" />

            )
          }
          </div>
         {urlId && <Youtube videoId={urlId.key} opts={opts}/>}

    </div>
  )
}

export default RowPost