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
const resList = [
    {
        "info": {
            "id": "1125473",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/a35398d6-c1d8-4593-b1ce-0c522da671f6_1125473.JPG",
            "locality": "Gandipet Mandal",
            "areaName": "Manikonda Jagir Village",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "630",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.9K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-14 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                        "description": "Top-rated for Burger, based on user votes."
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                        "description": "Top-rated for Corporate, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Burger, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Corporate, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-d73d2ef6-d559-4e8a-bfcd-16e1b7b43bf6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/mcdonalds-gandipet-mandal-manikonda-jagir-village-rest1125473",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "111504",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/16/0d23c755-c641-47c9-94f6-affa73a833c0_111504.JPG",
            "locality": "OU Colony Manikonda",
            "areaName": "Shaikpet",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "6249",
            "avgRatingString": "4.5",
            "totalRatingsString": "17K+",
            "sla": {
                "deliveryTime": 14,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-d73d2ef6-d559-4e8a-bfcd-16e1b7b43bf6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/nic-ice-creams-ou-colony-manikonda-shaikpet-rest111504",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "1034906",
            "name": "Alanati",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/27/60f31935-0621-4cbc-ba4d-1bf26be61a48_1034906.JPG",
            "locality": "ABINANDANA SHIKAR",
            "areaName": "Manikonda",
            "costForTwo": "₹800 for two",
            "cuisines": [
                "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "420111",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.5K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-14 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹550 OFF",
                "subHeader": "ABOVE ₹2499",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-d73d2ef6-d559-4e8a-bfcd-16e1b7b43bf6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/alanati-abinandana-shikar-manikonda-rest1034906",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "620620",
            "name": "Agra Sweets Banjara",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/13/635e93bf-a5ef-4e83-bdec-49dcfd663254_620620.jpg",
            "locality": "Rahul Colony",
            "areaName": "Tolichowki",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Sweets",
                "Desserts",
                "Chaat",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "34",
            "avgRatingString": "4.4",
            "totalRatingsString": "6.6K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-14 23:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹40",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-d73d2ef6-d559-4e8a-bfcd-16e1b7b43bf6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/agra-sweets-banjara-rahul-colony-tolichowki-rest620620",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "1061328",
            "name": "Crimson Chopsticks",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/27/8bb74c38-ebec-458b-8781-a457ab7d186f_1061328 (1).jpg",
            "locality": "Jubilee Hills",
            "areaName": "Jubilee Hills",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Fast Food",
                "Thai",
                "Hyderabadi"
            ],
            "avgRating": 4.1,
            "parentId": "616251",
            "avgRatingString": "4.1",
            "totalRatingsString": "1.6K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-d73d2ef6-d559-4e8a-bfcd-16e1b7b43bf6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/crimson-chopsticks-jubilee-hills-rest1061328",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "1037718",
            "name": "Biryani Souq",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/4/ba813b8e-d3df-4ec7-9a1d-668abd805784_1037718.sss.jpg",
            "locality": "Jubilee Hills",
            "areaName": "Jubilee Hills",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Biryani",
                "Hyderabadi",
                "Kebabs",
                "North Indian",
                "Tandoor",
                "Starters"
            ],
            "avgRating": 4.1,
            "parentId": "603972",
            "avgRatingString": "4.1",
            "totalRatingsString": "4.1K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-d73d2ef6-d559-4e8a-bfcd-16e1b7b43bf6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/biryani-souq-jubilee-hills-rest1037718",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "365019",
            "name": "Chaitanya's modern kitchen",
            "cloudinaryImageId": "tbypygkqjlefqmngxlhs",
            "locality": "Chaitanya Enclave",
            "areaName": "Manikonda",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Biryani",
                "Chinese",
                "South Indian"
            ],
            "avgRating": 4,
            "parentId": "57324",
            "avgRatingString": "4.0",
            "totalRatingsString": "8.7K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-14 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-d73d2ef6-d559-4e8a-bfcd-16e1b7b43bf6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/chaitanyas-modern-kitchen-chaitanya-enclave-manikonda-rest365019",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "1140766",
            "name": "Marhaba Shawarma - Yalla Habibi !",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/7e2904f6-cf41-4ec4-ad9c-d96eea7b927b_1140766.jpg",
            "locality": "Jubilee Hills",
            "areaName": "Jubilee Hills",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "shawarma",
                "Arabian",
                "Lebanese",
                "Kebabs",
                "Biryani"
            ],
            "avgRating": 4,
            "parentId": "687921",
            "avgRatingString": "4.0",
            "totalRatingsString": "1.0K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹40",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {},
                "commsStyling": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-d73d2ef6-d559-4e8a-bfcd-16e1b7b43bf6"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/marhaba-shawarma-yalla-habibi-jubilee-hills-rest1140766",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "228215",
            "name": "Cafe Niloufer Premium Lounge",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/20/7b00effa-06ea-4f92-b502-ab891ffe8022_228215.jpg",
            "locality": "Banjara Hills",
            "areaName": "Banjara Hills",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Beverages",
                "Snacks",
                "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "392382",
            "avgRatingString": "4.6",
            "totalRatingsString": "55K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 00:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "Serves only 100% vegetarian food, with no non-veg items."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹30",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.5",
                    "ratingCount": "9.6K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/cafe-niloufer-premium-lounge-banjara-hills-rest228215",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "34634",
            "name": "Shah Ghouse Hotel & Restaurant",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/284a1ea2-2eed-4595-b53c-c9eb58e7f223_34634.jpg",
            "locality": "Tolichowki",
            "areaName": "Tolichowki",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Biryani",
                "Chinese",
                "Mughlai",
                "Tandoor"
            ],
            "avgRating": 4.3,
            "parentId": "19271",
            "avgRatingString": "4.3",
            "totalRatingsString": "332K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-21 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/67_Best%20in%20Mughlai2026.png",
                        "description": "Top-rated for Mughlai, based on user votes."
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                        "description": "Top-rated for Bolt, based on user votes."
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/87_Best%20in%20Hyderabadi%20Biryani2026.png",
                        "description": "Top-rated for Hyderabadi Biryani, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Top-rated for Mughlai, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/67_Best%20in%20Mughlai2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Bolt, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Hyderabadi Biryani, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/87_Best%20in%20Hyderabadi%20Biryani2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹29",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.8",
                    "ratingCount": "7.3K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/shah-ghouse-hotel-and-restaurant-tolichowki-rest34634",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "728895",
            "name": "Chaayos Chai+Snacks=Relax",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_728895.JPG",
            "locality": "LANCO HILLS",
            "areaName": "GANDIPET",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Beverages",
                "Chaat",
                "Bakery",
                "Snacks",
                "Street Food",
                "healthy",
                "Home Food",
                "Maharashtrian",
                "Italian",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "281782",
            "avgRatingString": "4.3",
            "totalRatingsString": "2.5K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "51% OFF",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/chaayos-chai-snacks-relax-lanco-hills-gandipet-rest728895",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "436045",
            "name": "Bakingo",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/1/9a8850e7-70fb-4c4d-8e31-440d4817d0b6_436045.JPG",
            "locality": "Anand Vihar Apartments",
            "areaName": "Tolichowki",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 4.5,
            "parentId": "3818",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-14 23:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                        "description": "Top-rated for Cakes & Desserts, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Cakes & Desserts, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/bakingo-anand-vihar-apartments-tolichowki-rest436045",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "663781",
            "name": "Subway",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/3c6e56a7-3400-4413-ab8d-c4def8da598e_663781.jpg",
            "locality": "Manikonda",
            "areaName": "Divyasree Techridge",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "sandwich",
                "Salads",
                "wrap",
                "Healthy Food"
            ],
            "avgRating": 4.2,
            "parentId": "2",
            "avgRatingString": "4.2",
            "totalRatingsString": "3.3K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 06:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                        "description": "Meals with high protein, low calorie and no added sugar"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Meals with high protein, low calorie and no added sugar",
                                    "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹69",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/subway-manikonda-divyasree-techridge-rest663781",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "9863",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/fca12d51-1bb5-4ff2-af4c-959c3fc5b5db_9863.JPG",
            "locality": "OU colony shaikpet manikonda",
            "areaName": "Shaikpet",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.2",
            "totalRatingsString": "9.9K+",
            "sla": {
                "deliveryTime": 14,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 01:15:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                        "description": "Meals with high protein, low calorie and no added sugar"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                        "description": "Top-rated for Ice Cream, based on user votes."
                    },
                    {
                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                        "description": "Top-rated for Ice Cream, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Meals with high protein, low calorie and no added sugar",
                                    "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Ice Cream, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Ice Cream, based on user votes.",
                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹15",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/baskin-robbins-ice-cream-desserts-ou-colony-manikonda-shaikpet-rest9863",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "484589",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/3be44c7c-209e-4d2c-9e2e-d520f1fa880f_484589.JPG",
            "locality": "Manikonda Main Road",
            "areaName": "Manikonda",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            "avgRating": 3.7,
            "parentId": "547",
            "avgRatingString": "3.7",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                        "description": "Top-rated for Burger, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated for Burger, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/kfc-main-road-manikonda-rest484589",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "720359",
            "name": "Wendy's Burgers",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/120003e0-7b80-43b8-b2ea-ccb1f7ad315f_720359.JPG",
            "locality": "First Floor, Shaikpet Village, beside Thick shake factory",
            "areaName": "Shaikpet",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "wrap"
            ],
            "avgRating": 3.8,
            "parentId": "972",
            "avgRatingString": "3.8",
            "totalRatingsString": "3.3K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/wendys-burgers-first-floor-village-beside-thick-shake-factory-shaikpet-rest720359",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "156136",
            "name": "The Good Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/57c96de5-aa1c-4e9b-bdab-3bd2ba95e491_156136.jpg",
            "locality": "Shaikpet FC",
            "areaName": "Shaikpet",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "7918",
            "avgRatingString": "4.1",
            "totalRatingsString": "2.3K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/the-good-bowl-fc-shaikpet-rest156136",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "189386",
            "name": "The Biryani Life",
            "cloudinaryImageId": "zlqt99wfzbapcojwcfoj",
            "locality": "First Floor, Shaikpet Village, beside Thick shake factory",
            "areaName": "Shaikpet",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.4,
            "parentId": "8496",
            "avgRatingString": "3.4",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "android/static-assets/icons/big_rx.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "android/static-assets/icons/big_rx.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/the-biryani-life-first-floor-village-beside-thick-shake-factory-shaikpet-rest189386",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "124173",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/4/54835162-6618-45a4-b90c-8aaf3ef3cf7d_124173.JPG",
            "locality": "Jubilee Hills",
            "areaName": "Jubilee Hills",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.2,
            "parentId": "195515",
            "avgRatingString": "4.2",
            "totalRatingsString": "3.5K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 7.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "7.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
                        "description": "Top-rated for Coffee & Tea, based on user votes."
                    },
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                        "description": "Top-rated vegetarian cafes, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Top-rated for Coffee & Tea, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Top-rated vegetarian cafes, based on user votes.",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "2.2K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/starbucks-coffee-jubilee-hills-rest124173",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "220932",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "bqmnmlkww1dwdpcgk8ob",
            "locality": "Film Nagar",
            "areaName": "Film Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.9,
            "parentId": "4961",
            "avgRatingString": "3.9",
            "totalRatingsString": "12K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹89",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "228"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/la-pinoz-pizza-film-nagar-rest220932",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "18904",
            "name": "Theobroma",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/2/7d814722-fc54-4f32-953f-3b87d60db8e0_18904.JPG",
            "locality": "Manikonda",
            "areaName": "Manikonda",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 4.3,
            "parentId": "1040",
            "avgRatingString": "4.3",
            "totalRatingsString": "8.0K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                        "description": "Top-rated for Gourmet, based on user votes."
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Top-rated for Gourmet, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                                    "theme": ""
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                    "imageId": "newg.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹47",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "394"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/theobroma-manikonda-rest18904",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "208191",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/bf914dfb-b9b5-49bb-aa59-af8b06983a1d_208191.JPG",
            "locality": "Lanco Hills",
            "areaName": "Manikonda",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 3.7,
            "parentId": "721",
            "avgRatingString": "3.7",
            "totalRatingsString": "13K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                        "description": "Top-rated for Pizza, based on user votes."
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Top-rated for Pizza, based on user votes.",
                                    "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                    "theme": ""
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "1.7K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/pizza-hut-lanco-hills-manikonda-rest208191",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "562831",
            "name": "CakeZone Patisserie",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/1/a510f465-03b3-41e8-8998-80cefd5eecd0_562831.JPG",
            "locality": "BESIDE PANCHAVATI COLONY",
            "areaName": "Panchavati Colony",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Sweets",
                "Ice Cream"
            ],
            "avgRating": 4.1,
            "parentId": "7003",
            "avgRatingString": "4.1",
            "totalRatingsString": "4.3K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2026-09-15 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                    "text": "BENEFITS"
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "priceComparisonComms": {}
        },
        "analytics": {
            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/cakezone-patisserie-beside-panchavati-colony-rest562831",
            "type": "WEBLINK"
        }
    },
      {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1125473",
                                            "name": "McDonald's",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/a35398d6-c1d8-4593-b1ce-0c522da671f6_1125473.JPG",
                                            "locality": "Gandipet Mandal",
                                            "areaName": "Manikonda Jagir Village",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Beverages",
                                                "Cafe",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "630",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "1.9K+",
                                            "sla": {
                                                "deliveryTime": 18,
                                                "lastMileTravel": 2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-09-14 22:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                        "description": "Top-rated for Burger, based on user votes."
                                                    },
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                                        "description": "Top-rated for Corporate, based on user votes."
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Top-rated for Burger, based on user votes.",
                                                                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                                                    "theme": ""
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Top-rated for Corporate, based on user votes.",
                                                                    "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                                                    "theme": ""
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹100 OFF",
                                                "subHeader": "ABOVE ₹199",
                                                "discountTag": "FLAT DEAL",
                                                "logoCtx": {
                                                    "text": "BENEFITS"
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/hyderabad/mcdonalds-gandipet-mandal-manikonda-jagir-village-rest1125473",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "111504",
                                            "name": "NIC Ice Creams",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/16/0d23c755-c641-47c9-94f6-affa73a833c0_111504.JPG",
                                            "locality": "OU Colony Manikonda",
                                            "areaName": "Shaikpet",
                                            "costForTwo": "₹120 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "6249",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "17K+",
                                            "sla": {
                                                "deliveryTime": 14,
                                                "lastMileTravel": 1.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "1.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-09-15 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹49",
                                                "logoCtx": {
                                                    "text": "BENEFITS"
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/hyderabad/nic-ice-creams-ou-colony-manikonda-shaikpet-rest111504",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1034906",
                                            "name": "Alanati",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/27/60f31935-0621-4cbc-ba4d-1bf26be61a48_1034906.JPG",
                                            "locality": "ABINANDANA SHIKAR",
                                            "areaName": "Manikonda",
                                            "costForTwo": "₹800 for two",
                                            "cuisines": [
                                                "Chinese"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "420111",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "1.5K+",
                                            "sla": {
                                                "deliveryTime": 26,
                                                "lastMileTravel": 3.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-09-14 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹550 OFF",
                                                "subHeader": "ABOVE ₹2499",
                                                "discountTag": "FLAT DEAL",
                                                "logoCtx": {
                                                    "text": "BENEFITS"
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/hyderabad/alanati-abinandana-shikar-manikonda-rest1034906",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "620620",
                                            "name": "Agra Sweets Banjara",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/13/635e93bf-a5ef-4e83-bdec-49dcfd663254_620620.jpg",
                                            "locality": "Rahul Colony",
                                            "areaName": "Tolichowki",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Sweets",
                                                "Desserts",
                                                "Chaat",
                                                "Snacks",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "34",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "6.6K+",
                                            "sla": {
                                                "deliveryTime": 20,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-09-14 23:45:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹40",
                                                "logoCtx": {
                                                    "text": "BENEFITS"
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/hyderabad/agra-sweets-banjara-rahul-colony-tolichowki-rest620620",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1061328",
                                            "name": "Crimson Chopsticks",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/27/8bb74c38-ebec-458b-8781-a457ab7d186f_1061328 (1).jpg",
                                            "locality": "Jubilee Hills",
                                            "areaName": "Jubilee Hills",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Asian",
                                                "Fast Food",
                                                "Thai",
                                                "Hyderabadi"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "616251",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "1.6K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 4.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "4.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-09-15 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹149",
                                                "logoCtx": {
                                                    "text": "BENEFITS"
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/hyderabad/crimson-chopsticks-jubilee-hills-rest1061328",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1037718",
                                            "name": "Biryani Souq",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/4/ba813b8e-d3df-4ec7-9a1d-668abd805784_1037718.sss.jpg",
                                            "locality": "Jubilee Hills",
                                            "areaName": "Jubilee Hills",
                                            "costForTwo": "₹600 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Hyderabadi",
                                                "Kebabs",
                                                "North Indian",
                                                "Tandoor",
                                                "Starters"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "603972",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "4.1K+",
                                            "sla": {
                                                "deliveryTime": 27,
                                                "lastMileTravel": 4.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "4.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-09-15 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "70% OFF",
                                                "subHeader": "UPTO ₹140",
                                                "logoCtx": {
                                                    "text": "BENEFITS"
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/hyderabad/biryani-souq-jubilee-hills-rest1037718",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "365019",
                                            "name": "Chaitanya's modern kitchen",
                                            "cloudinaryImageId": "tbypygkqjlefqmngxlhs",
                                            "locality": "Chaitanya Enclave",
                                            "areaName": "Manikonda",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Chinese",
                                                "South Indian"
                                            ],
                                            "avgRating": 4,
                                            "parentId": "57324",
                                            "avgRatingString": "4.0",
                                            "totalRatingsString": "8.7K+",
                                            "sla": {
                                                "deliveryTime": 26,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-09-14 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "70% OFF",
                                                "subHeader": "UPTO ₹140",
                                                "logoCtx": {
                                                    "text": "BENEFITS"
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-998e83ff-3c52-44f8-9d2e-c476c0d7934a"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/hyderabad/chaitanyas-modern-kitchen-chaitanya-enclave-manikonda-rest365019",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
]
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurentCard resData={resList[0]}
                />
                <RestaurentCard resData={resList[1]} />
                <RestaurentCard resData={resList[2]} />
                <RestaurentCard resData={resList[3]} />
                <RestaurentCard resData={resList[4]} />
                <RestaurentCard resData={resList[5]} />
                <RestaurentCard resData={resList[6]} />
                <RestaurentCard resData={resList[7]} />
  <RestaurentCard resData={resList[8]} />
    <RestaurentCard resData={resList[9]} />
      <RestaurentCard resData={resList[10]} /> 
       <RestaurentCard resData={resList[11]} />
        <RestaurentCard resData={resList[12]} />
         <RestaurentCard resData={resList[13]} />
<RestaurentCard resData={resList[14]} />
<RestaurentCard resData={resList[15]} />
<RestaurentCard resData={resList[16]} />
<RestaurentCard resData={resList[17]} />
<RestaurentCard resData={resList[18]} />
<RestaurentCard resData={resList[19]} />
<RestaurentCard resData={resList[20]} />
<RestaurentCard resData={resList[21]} />
<RestaurentCard resData={resList[22]} />
<RestaurentCard resData={resList[23]} />
<RestaurentCard resData={resList[24]} />
<RestaurentCard resData={resList[25]} />
            </div>

        </div>
    )
}

const img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/"

const RestaurentCard = (props) => {
    const { resData } = props
    console.log(props)
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
            <img
                className="res-logo"
                alt={`${resData.info.name || 'Restaurant'} logo`}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/${resData.info.cloudinaryImageId}`}
            />            <h3>{resData.info.name}</h3>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.rating}</h4>
            <h4>{resData.info.costForTwoMessage}</h4>
            <h4>{resData.info.avgRatingString}</h4>
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
