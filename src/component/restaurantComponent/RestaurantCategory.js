import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IMG_CDN_URL } from "../body/config";
import { useDispatch } from "react-redux";
import { additem } from "./../../ReduxSlice/cartSlice";

const Section = ({ info }) => {
  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    dispatch(additem(item))
  }

  return (
    <div className=" mt-4">
      {/* Description */}
      <div className="flex flex-col text-left">
        {info.itemCards.map((item) => {
          const card = item.card.info;
          return (
            <div
              key={card.id}
              className="text-gray-600 flex flex-col md:flex-row gap-4 border-b-[1px] border-gray-600 py-2 px-6"
            >
              <div className="flex flex-col w-3/4">
                <h1 className="font-semibold tracking-wide text-md">
                  {card.name}{" "}
                  <span className="text-xs font-normal">
                    PKR {card.price} /-
                  </span>
                </h1>
                <p className="font-normal text-xs tracking-wide text-gray-400 mt-2">
                  {card.description}
                </p>
              </div>

              <div className="relative 1/4">
              <img
                src={IMG_CDN_URL + card.imageId}
                className="relative z-0  h-20 object-fill"
              />
              <button className="absolute z-10 top-14 translate-x-[70%] bg-white px-3 py-2 
              text-xs font-medium shadow-md  rounded-md "
              onClick={()=>handleAddItem(item)}
              >ADD</button>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RestaurantCategory = ({ data, isVisible, setIsVisible }) => {


  return (
    <div className=" shadow-lg rounded-lg flex flex-col items-start p-4">
      {/* Header */}

      <div className="flex justify-between w-full">
        <h1 className="font-medium text-lg">
          {data.card.title} ({data.card.itemCards.length})
        </h1>
        {/* Show / Hide Button  */}
        <button
          onClick={() => {
            isVisible == data.card.title
              ? setIsVisible("")
              : setIsVisible(data.card.title);
          }}
          className=""
        >
          {isVisible == data.card.title ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      {isVisible == data.card.title ? <Section info={data.card} /> : null}
    </div>
  );
};
export default RestaurantCategory;
