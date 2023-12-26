import React, { useEffect } from 'react'
import { Link, json } from 'react-router-dom'

export default function HomePage() {

    const myAsyncFunction = () => {
        return new Promise((resolve, reject) => {
            resolve("http verisi");
        });
    }
    useEffect(() => {
        makeAsyncCall();
        makeHttpCall();
    }, []);

    const makeHttpCall = async () => {
        // fetch("https://dummyjson.com/products")
        // .then(response=>c.json() )
        // .then(json=>console.log(json))
        // .catch(err=>console.log(err))
        let response =await fetch("https://dummyjson.com/products");
        let json=await response.json();
        console.log(json);

    };
    const makeAsyncCall = async () => {
        // myAsyncFunction().then(response => {
        //     console.log("işlem başarılı cevap", response);
        // })//async işlemi  başarılı ise (resolve edildiğinde)
        // .catch(error => {
        //     console.log("işlem başarısız cevap", error);
        // })//async işlemi  başarısız ise (reject edildiğinde)
        // .finally(() => {
        //     console.log("işlem tamamlandı");
        // });//her türlü çalışır
        // console.log("merhaba");

        //es7 async-await

        //reject edilirse hata atar try catch manuel olmalı
        try {
            let response = await myAsyncFunction();
            console.log(response);
        } catch (e) {
            console.log(e);
        }

    };
    return (
        <div>
            <button className='btn btn-primary'> Homapage</button>
            <br />
            {/*Spalarda(single page app) href kullanımı yanlıştır*/}{/*<a href="/about">About'a Git</a>*/}
            <Link to={"/about"}>About'a Git</Link>
        </div>
    )
}
