import { useSelector, useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../body/config";
import {deleteallitems} from "../../ReduxSlice/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  console.log(cartItems);

    useEffect(() => {
        // calculate price of all items
        let price = 0;
        cartItems.forEach(item => {
            if(item.card.info.price){
                price+=item.card.info.price
            }
            else{
                price+=item.card.info.defaultPrice;
            }
        });
        setPrice(price);
    }, [cartItems])

    const clearCart = () => {
        dispatch(deleteallitems());
    }

  return (
    <div className="w-[80%] mx-auto h-screen">
      {
        cartItems.length === 0 ? <h1 className="text-center text-2xl font-semibold mt-4">Cart is Empty</h1> :
        <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>clearCart()}>
            Clear Cart
          </button>
        </div>
        <div className="mt-8">
          {cartItems.map((item) => (
            <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
              <div className="flex-shrink-0">
                <img
                   src={IMG_CDN_URL + item.card.info.imageId}
                  alt="Product image"
            
                  className="w-32 h-32 object-cover"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-lg font-bold">{item.card.info.name}</h2>
                <p className="mt-2 text-gray-600">{item.card.info.category}</p>
                <div className="mt-4 flex items-center">
                  <span className="mr-2 text-gray-600">Quantity:</span>
                  <div className="flex items-center px-2">
                    <button
                      className="bg-gray-200 rounded-l-lg px-2 py-1"
                      disabled
                    >
                      -
                    </button>
                    <span className="mx-2 text-gray-600">1</span>
                    <button
                      className="bg-gray-200 rounded-r-lg px-2 py-1"
                      disabled
                    >
                      +
                    </button>
                  </div>
                  {
                    item.card.info.price?<span className="ml-auto font-bold">Rs {item.card.info.price}</span>
                    :<span className="ml-auto font-bold">Rs {item.card.info.defaultPrice}</span>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center mt-8">
          <span className="text-gray-600 mr-4">Subtotal:</span>
          <span className="text-xl font-bold">{price}</span>
        </div>
      </div>
      }
    </div>
  );
};

export default Cart;
