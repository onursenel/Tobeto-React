import React, { useDebugValue, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {

  const myAsyncFunciton = () => {
    return new Promise((resolve,reject)=>{
      //async işlem
      setTimeout(()=>{
        //resolve("veri örneği"); // işlemin başarılı olması
        reject("istek başarısız");// işlemin başarısız olması
      },3000)
    });
  }

  useEffect(() => {
    //thenCatchFinally();
    asyncAwait();
    
  },[]);

  const asyncAwait =async ()=> {
    try{
      let response = await myAsyncFunciton();
      console.log(response);

    }catch(e)
    {
      console.log(e)
    }
 
  }

  const thenCatchFinally = () => {

    myAsyncFunciton()
    .then(response => {console.log("bir cevap geldi ", response)})
    .catch(err => {console.log("bir hata geldi", err)})
    .finally(() => {console.log("Async işlem sonlandı")});

  }

  //JS ASYNC
  //Built-in Promise
  


  return (
    <div>
      Homepage sayfası
      <br/>

      <a href="/products">Ürünler sayfası</a>

      <br />

      <Link to={"/products"}>Ürünler sayfası</Link>
      </div>
  )
}
