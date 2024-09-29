'use client'
import React, { useEffect,useState} from 'react'
import Image from 'next/image'
const Products = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch('https://fakestoreapi.com/products');
              const result = await response.json();
              console.log(result)
              setData(result);
              setLoading(false);  // Turn off loading when data is fetched
            } catch (error) {
              setError(error);
              setLoading(false);
            }
          };

          fetchData()
    },[])
  return (
    <div className='m-20'>
        <h2 className='font-bold text-4xl '>All Products</h2>
        {loading?<h4>Loading...</h4>:null}
        <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="flex flex-wrap -mx-2">
        {data?data.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow-lg p-4">
              <img src={product.image} alt={product.name}  className="w-full h-40 object-cover rounded-t" />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        )):null}
      </div>
    </div>
    </div>
  )
}

export default Products