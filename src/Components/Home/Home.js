import React from 'react';
import { Link } from 'react-router-dom';
//import useCar from '../../hooks/useCar';
import photo1 from '../../img/2.png'
 const Home = () => {
    //const [cars] = useCar();
    // let getCar= cars.slice(0, 3);

    return (
        <div>
            <div className='grid md:grid-cols-2  justify-items-center px-4 py-5 bg-[#040869] width-full'>
                <div className='md:order-2 order-1'>
                    <h1 className='md:text-[30px] text-xl text-white  mb-10'>You are your Choices</h1>
                    <p className='text-white mb-3'>Life is a struggle for single father Chris Gardner. Evicted from their apartment, he and his young son find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son</p>
                    <Link to='/books' type="button" className="py-3 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-lime-600 rounded-full border border-gray-200">Latest Collection</Link>
                </div>
                <div className='border-2 px-1 py-1 rounded-lg md:order-1 order-2'>
                    <img className='rounded-lg' src={photo1} alt="" />
                </div>
            </div>
             
        </div>
    );
};

export default Home;