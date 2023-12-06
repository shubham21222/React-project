import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

const Tag = () => {
  const[tag,setTag] = useState('car');
 
  const[gif,setGif] = useState('');
  const[loading,setLoading] = useState('false');

  async function fechData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=TKoTK1At2GQtZS02RUk66dGRDrEA0fT7&tag=${tag}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url
    setGif (imageSource);
    setLoading(false);
  }
  useEffect( () => {
    fechData();
  },[] )

  function clickHandler() {
    fechData();
  }


  function changeHandler(event) {
    setTag(event.target.value)
  }

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>
         Random {tag} Gif
      </h1>

    {loading ? (<Spinner/>): (<img src={gif} alt='a' width="450"></img>)}

      <input className='w-10/12 text-lg rounded-lg cursor-pointer mb-[3px] text-center' onChange={changeHandler} value={tag}></input>
      
      <button onClick={clickHandler} className='w-10/12 bg-yellow-400 py-2 text-lg rounded-lg cursor-pointer mb-[15px]'>
        Genrate
      </button>
    </div>
  )
}


export default Tag;
