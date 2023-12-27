import axios from 'axios';
import React, { useState } from 'react'

export default function AddProduct() {
    const [productInfo, setProductInfo] = useState({
        title: '',
        description: '',
        price: '',
        discountPercentage: '',
        rating: '',
        stock: '',
        brand: '',
        category: '',
        thumbnail: ''

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", productInfo.title);
        formData.append("description", productInfo.description);
        formData.append("price", productInfo.price);
        formData.append("discountPercentage", productInfo.discountPercentage);
        formData.append("rating", productInfo.rating);
        formData.append("stock", productInfo.stock);
        formData.append("brand", productInfo.brand);
        formData.append("category", productInfo.category);
        formData.append("thumbnail", productInfo.thumbnail);

        console.log('Form submitted:', productInfo);

        try {
            const response = await axios.post(
                `https://dummyjson.com/products/add`, formData
            );

            if (response.status === 200) {
                setProductInfo({
                    title: '',
                    description: '',
                    price: '',
                    discountPercentage: '',
                    rating: '',
                    stock: '',
                    brand: '',
                    category: '',
                    thumbnail: ''
                });
                alert("Product added successfully!");
                console.log(productInfo);
            }
        } catch (error) {
            alert("Error adding product: " + error.message);
        }
    };
    return (
        <div>
            <h1>Ürün Bilgileri</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Başlık:
                    <input type="text" name="title" value={productInfo.title} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Açıklama:
                    <textarea name="description" value={productInfo.description} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Fiyat:
                    <input type="number" name="price" value={productInfo.price} onChange={handleChange} />
                </label>
                <br />
                <label>
                    İndirim Yüzdesi:
                    <input type="number" name="discountPercentage" value={productInfo.discountPercentage} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Değerlendirme:
                    <input type="number" name="rating" value={productInfo.rating} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Stok:
                    <input type="number" name="stock" value={productInfo.stock} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Marka:
                    <input type="text" name="brand" value={productInfo.brand} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Kategori:
                    <input type="text" name="category" value={productInfo.category} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Thumbnail:
                    <input type="text" name="thumbnail" value={productInfo.thumbnail} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
