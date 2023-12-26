import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function About() {
    let { state } = useLocation();
    const [product, setProduct] = useState()
    const url=new URL('https://dummyjson.com/products?q='+state);// urlin sonua değişken eklenmediği için tek bir ürün çekilemedi
 

    const getProduct = async () =>{
        try {
            const response = await axios.get(url);
            console.log(response.data);
            setProduct(response.data)
          
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if (state) {
            // State içindeki ID'yi kullanarak ürünü getirme fonksiyonu
            getProduct(state.id);
           
        }
    }, [state]);

    return (
        <div>

            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}
