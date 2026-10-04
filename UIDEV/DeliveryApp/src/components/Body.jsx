import RestaurentCard from "./RestaurentCards";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [listOfFilteredRestaurents, setListOfFilteredRestaurents] = useState(listOfRestaurents);

  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?key=webdemo1&url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D17.3945408%26lng%3D78.39040349999999%26collection%3D83649%26tags%3Dlayout_CCS_Biryani%26sortBy%3D%26filters%3D%26type%3Drcv2%26offset%3D0%26page_type%3Dnull",
    );
    console.log(data);
    const results = await data.json();
    // Get the cards array, defaulting to an empty array if undefined
    const cardsArray = results?.data?.cards || [];

    // Filter for only the Restaurant cards, then extract the 'info' object
    const restaurantDataList = cardsArray
      .filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      )
      .map((item) => item?.card?.card);

    setListOfRestaurents(restaurantDataList);
    setListOfFilteredRestaurents(restaurantDataList)


  };
  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button onClick={() => {
            console.log(searchText)
            const updatedList = listOfRestaurents.filter((e) =>
              e.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setListOfFilteredRestaurents(updatedList)

          }}>Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating >= 4,
            );
            console.log(filteredList);
            filteredList(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfFilteredRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
