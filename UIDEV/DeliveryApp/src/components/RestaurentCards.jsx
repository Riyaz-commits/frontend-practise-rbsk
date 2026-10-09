import {CDN_URL} from '../../utils/constants'

const RestaurentCard = (props) => {
  const { resData } = props;
  console.log(props);
  const {
    name,
    cloudinaryImageId,
    areaName,
    cuisines,
    rating,
    costForTwo,
    avgRatingString,
  } = resData?.info;
  return (
    <div
      className="m-4 p-4 w-[200px] rounded-2xl"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt={`${name || "Restaurant"} logo`}
        src={CDN_URL+cloudinaryImageId}
      />{" "}
      <h3 className='font-bold py-2 text-lg'>{name}</h3>
      <h4>{areaName}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString}⭐</h4>
    </div>
  );
};

export default RestaurentCard;