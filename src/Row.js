import axios from "axios";
import React, { useState ,useEffect} from "react";
import './Row.css';
import ReactHlsPlayer from 'react-hls-player';


const baseURL="https://image.tmdb.org/t/p/original/";

function Row ({title,fetchURL}){
    const [movies,setMovies] =useState([]);
    const[isPlaying,setIsplaying]=useState(false);

    useEffect(()=>{
        async function fetchData(){
            const requests= await axios.get(fetchURL);
            setMovies(requests.data.results);
            return requests
        }
        fetchData();

    },[fetchURL])
   
    const handleClick=(preview)=>{
       

        if(isPlaying){
            setIsplaying(false)
        }
        else{
            setIsplaying(true)
        }
        }
   

    return(
     <>
           <div className="row">
           

           <h2> {title}</h2> 
           </div>

           <div className="card" >
               {movies.map(preview=>(
                   <>
                   <button className="bton" onClick={()=>handleClick(preview)}>▶<br/>Preview</button>
                   <img key={preview.id} className="posters" src={`${baseURL}${preview.poster_path}`} alt={preview.original_title} />
                   
                 </>
               ))}
               
            

           </div> 
           <div>{ isPlaying &&
           <ReactHlsPlayer
                    src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
                    autoPlay={isPlaying}
                     controls={true}
                     width="100%"
                     height="auto"
              />
                }
              </div>
           

    </>
    )
}
export default Row;