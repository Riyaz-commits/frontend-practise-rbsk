import RestaurentCard from "./RestaurentCards";
import { useState } from "react";
import {resList} from "../../utils/mockData"
const Body = () => {
 
  const [listOfRestaurents,setListOfRestaurents]=  useState(resList
    )

  
    
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                      const filteredList = listOfRestaurents.filter((res)=> res.info.avgRating>=4.5);
                       console.log(filteredList);
                       setListOfRestaurents(filteredList)
                    }}
                
                >
                    Top Rated Restaurents
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurents.map((restaurent) => (
                    <RestaurentCard key={restaurent.info.id} resData={restaurent} />
                ))}
            </div>
        </div>
    );
};

export default Body;
