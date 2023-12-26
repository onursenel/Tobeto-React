import React, { useDebugValue, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Homepage() {
   //http isteği


  useEffect(() => {
    //gelen veriyi json olarak console'a yazdır.
      // fetch("https://dummyjson.com/products")
      //     .then(response => response.json())
      //     .then(json => {console.log(json)})
      //     .catch(err => {console.log(err)});

      //awaitFatch();
      axiosGet();
   },[]);

   const awaitFatch = async () => {
      let response =await fetch ("https://dummyjson.com/products")
      let json =await response.json();
      console.log(json);
   };


   const axiosGet = async () => {
    let response = await axios.get("https://dummyjson.com/products")
    console.log(response.data);
   }



  return (
    <div>
      Homepage sayfası
      <br/>
      {/*SPA'larda href attribute'u kullanımı yanlıştır */}
      <a href="/products">Ürünler sayfası</a>

      <br />

      <Link to={"/products"}>Ürünler sayfası</Link>
      </div>
  )
}
