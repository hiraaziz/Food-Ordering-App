import React, { useEffect, useState } from 'react';
import { CORS_API, REST_API } from '../body/config'
import Shimmer from "./../body/Shimmer"
import Carousal from './Crousal'

const Restaurantdata = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(REST_API + CORS_API);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      //console.log(json);

      // Extracting data from JSON
      const newTitle = json?.data?.cards[0]?.card?.card?.header?.title;
      const newData =  json?.data?.cards[0]?.card?.card?.imageGridCards?.info

      // Setting state
      setTitle(newTitle);
      setData(newData);
      //console.log(setData);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  if (data === null || data === undefined) {
    return <Shimmer />;
  }

  return (
    <>
      {/* <Header /> */}
      <div className="slider lg:px-16 lg:my-10 md:px-16 my-3 md:my-5 w-full pt-3">
        <div className="w-full lg:pb-2 md:pb-2 pb-2 pt-2">
          {data && (
            <span
              className="w-full text-left lg:pb-6  md:pb-6  mt-4 font-black lg:text-2xl md:text-2xl text-xl tracking-tight"
            >
              {title || "What's on your mind?"}
            </span>
          )}
        </div>

        <div className="slider__content md:pt-3  pt-2 flex h-[150px]">
          {data?.map((rest) => (
            <Carousal key={rest?.id} restData={rest} />
          ))}
        </div>
        <hr className="my-8 border-t border-gray-300" />
      </div>
      
    </>
  );
};

export default Restaurantdata;