export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
export const FETCH_RESTAURANTS_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
export const FETCH_MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
export const REST_API=
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
export const CORS_API = 
"https://strange-fawn-gabardine.cyclic.app/api/proxy/swiggy/dapi/"
export const CARD_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";
  
const restList = [
  {
    id: 2,
    title: "Burger King",
    image:
      "https://images.deliveryhero.io/image/fd-pk/LH/gxye-listing.jpg?width=400&height=292",
    type: "Burger",
    rating: {
      number: 4.4,
      totaluser: 1000,
    },
  },
  {
    id: 3,
    title: "Italian Foods",
    image:
      "https://images.deliveryhero.io/image/fd-pk/LH/k0xu-listing.jpg?width=400&height=292",
    type: "Pizza",
    rating: {
      number: 3.9,
      totaluser: 250,
    },
  },
  {
    id: 4,
    title: "Bakery",
    image:
      "https://images.deliveryhero.io/image/fd-pk/LH/l18i-listing.jpg?width=400&height=292",
    type: "Sweets",
    rating: {
      number: 4.7,
      totaluser: 200,
    },
  },
];
export default restList