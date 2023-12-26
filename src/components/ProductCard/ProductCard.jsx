import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    const [responseData, setResponseData] = useState(null);

    const productDelete = async () => {
        try {
            const response = axios.delete("https://dummyjson.com/products/" + props.product.id);
            setResponseData(response.data);
            console.log('Başarıyla silindi:', response.data);
        } catch (error) {
            console.log('Silme işlemi sırasında bir hata oluştu:', error);
        }
    }

    return (
        <div>
            <div className="card" >
                <img src={props.product.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">{props.product.description}</p>

                    <div>
                        <button className='btn btn-primary' onClick={productDelete}> Ürünü Sil</button>
                        <br />

                        <Link to="/about" state={{ state: props.product.id }} >Ürün Detayı</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
