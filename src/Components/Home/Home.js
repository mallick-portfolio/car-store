import React from 'react';
import { Link } from 'react-router-dom';
import useCar from '../../usehooks/useCar';
import p1 from '../../img/2.png'
import HomeReview from '../HomeReview/HomeReview';
 const Home = () => {
     //hooks
    const [cars] = useCar();
    let getCar= cars.slice(0, 3);

    return (
        <div>
            <div className='grid md:grid-cols-2  justify-items-center px-4 py-5 bg-[#040869] width-full'>
                <div className='md:order-2 order-1'>
                    <h1 className='md:text-[30px] text-xl text-white  mb-10'>You are your Choices</h1>
                    <p className='text-white mb-3'>Life is a struggle for single father Chris Gardner. Evicted from their apartment, he and his young son find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son</p>
                    <Link to='/books' type="button" className="py-3 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-lime-600 rounded-full border border-gray-200">Latest Collection</Link>
                </div>
                <div className='border-2 px-1 py-1 rounded-lg md:order-1 order-2'>
                    <img className='rounded-lg' src={p1} alt="" />
                </div>
            </div>
            <div className='bg-[#2e54c5] py-5'>
                <h1 className='text-4xl text-white'>Customer Reviews</h1>
                <div className='grid md:grid-cols-3 justify-center items-center w-[70%] mx-auto gap-5 my-10 border-2 px-3 py-3 rounded'>
                    {
                        getCar.map(car => <HomeReview
                            car={car}
                            key={car.id}

                        ></HomeReview>)
                    }
                </div>
                <div className='mt-5'>
                    <Link to='/review' type="button" className="py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sell All Reviews </Link>
                </div>
                 <br />
                
            </div>
        </div>
    );
};

export default Home;