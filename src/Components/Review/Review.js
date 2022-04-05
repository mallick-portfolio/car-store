import React from 'react';
import useCar from '../../usehooks/useCar';
import CartReview from '../CartReview/CartReview';

const Review = () => {
    //hooks
    const [cars]=useCar();
    return (
        <div className='grid md:grid-cols-3 justify-center items-center md:w-[70%] mx-auto gap-5 md:my-10 px-3 py-3'>
            
            {
                cars.map(car=><CartReview
                car={car}
                key={car.id}
                ></CartReview>)
            }
        </div>
    );
};

export default Review;