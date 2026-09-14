import React from "react";
import ReactDOM from "react-dom/client";
import arLogo from "./images/AR.png";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://cdn.dribbble.com/userupload/22636569/file/original-6e345e102a5f8c975b24b3268bf5c22e.jpg"
                    alt="AR Food Delivery logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurentCard
                
                resName="Nawabs Restaurent"
                cuisine="Biryani,BunMaska,Tea"
                />
               
            </div>
              <div className="res-container">
                <RestaurentCard
                
                resName="KFC Restaurent"
                cuisine="Chicken Wings , Pizza"
                />
               
            </div>
        </div>
    )
}

const RestaurentCard = (props) => {
    console.log(props)
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/wqosucfihcmzg1dyqc2k" />
            <h3>Nawabs Hotel</h3>
            <h4>Biryani,BunMaska,Tea</h4>
            <h4>4.5</h4>
           
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
