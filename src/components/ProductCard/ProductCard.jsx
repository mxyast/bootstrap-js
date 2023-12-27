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
                        <Link to={"/product-detail/" + props.product.id} className="btn btn-primary">Details</Link>
                        <button onClick={() => { productDelete(); }} className="btn btn-danger">Sil</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
