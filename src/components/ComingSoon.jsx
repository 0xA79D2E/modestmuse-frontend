import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const ComingSoon = () => {

    const [comingSoonProducts, setComingSoonProducts] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {

        // Filter products that are marked as 'coming soon'
        const upcomingProducts = products.filter((item) => item.comingSoon)
        setComingSoonProducts(upcomingProducts.slice(0, 5))

    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"COMING"} text2={"SOON"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Stay tuned for our upcoming products. We're working hard to bring you the best in fashion, launching soon!</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    comingSoonProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default ComingSoon
