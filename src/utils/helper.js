// helper file makes our code reusable, clean and readable
// makes our code testable, can write separate test cases
// maintainable - easy to debug 

export function filterData(searchText, allRestaurants) {
console.log(searchText);
console.log(allRestaurants);
    return allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }