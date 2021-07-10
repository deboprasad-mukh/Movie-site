import React, { useState,useEffect } from "react";
import request from "./request";
import axios from "axios";
import "./Row.css";
import ReactHlsPlayer from 'react-hls-player';

function Hording(){
    const [movie,setMovie]=useState([]);
    const[isPlaying,setIsplaying]=useState(false);

    useEffect(()=>{
        async function fetchData(){
            const requests= await axios.get(request.page4);
            setMovie(
            requests.data.results [
            Math.floor(Math.random()*requests.data.results.length-1)
            ]
            )
        }
        fetchData();

    },[])
    const handleClick=(preview)=>{
       

        if(isPlaying){
            setIsplaying(false)
        }
        else{
            setIsplaying(true)
        }
    }

    
    return(
        
            <header className="hoarding" style={{
                backgroundSize:"cover",
                backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                backgroundPosition:"center center",
               
                
                }}>
                    <div className="video">{ isPlaying &&
           <ReactHlsPlayer
                    src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
                    autoPlay={isPlaying}
                     controls={true}
                     width="100%"
                     height="auto"
                     
              />
                }
              </div>
                  
                <div className="content">
                <h2>{movie?.original_title}</h2>
                  <div className="hoarding_button">
                    <button className="btn" onClick={()=>handleClick()}>▶ Play</button>
                  </div>
                  <h5 className="overview">{movie?.overview}</h5>
                </div>
                <div className="fade_bottom"/>

                

            </header>


       

    )
}
export default Hording;