import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from '../body/config';
import useRestaurant from './../../utils/useRestaurant';
import Shimmer from '../body/Shimmer';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const { id } = useParams();
    const restaurants = useRestaurant(id)
    const [isVisible, setIsVisible] = useState();

    if (restaurants == null) return <Shimmer />;
    const restaurant = restaurants.cards[2].card.card.info
    console.log(restaurants.cards[2].card.card.info)
  
    const categories = restaurants?.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter((singleCategory) => singleCategory.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
    return (<div className='w-full py-10'>
        <div className="flex flex-col items-start w-96 m-auto md:w-[700px]  bg-white border-2 border-gray-200 rounded-lg   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-contain p-2 rounded-xl w-full" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="restaurant img" />
            <div className="flex flex-col justify-between  p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{restaurant?.name}</h5>
                <div className="flex items-center">

                    <p className=" text-sm font-bold text-gray-900 dark:text-white">{restaurant?.avgRating}</p>
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{restaurant?.totalRatings} reviews</a>
                </div>
                <h2 className='font-semibold m-left'><span className='font-normal'>City</span> : {restaurant.city}</h2>
            </div>
        </div>
        <div className='flex flex-col gap-4 py-10 w-96 m-auto md:w-[700px] '>
        {categories.map((singleCategory) => <RestaurantCategory key={singleCategory.card.card.title} data={singleCategory.card} isVisible={isVisible} setIsVisible={setIsVisible} />)}
        </div>
    </div>)

}

export default RestaurantMenu