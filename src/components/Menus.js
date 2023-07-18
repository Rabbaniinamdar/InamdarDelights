import React from 'react'
import "../components/styles/SpecialsCard.css"
import { useEffect, useState } from 'react';
import MenusList from "./Api/MenuList"
const Menus = () => {
    
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://udayogra-indian-restaurants-menu-v1.p.rapidapi.com/dl?area=koramangala&city=bangalore'); // Replace with your API endpoint
                const result = await response.json();
                setData(result);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [data]);

    const specialMenusItems = MenusList.map((menu, index) => {
        const image = menu.image;
        const title = menu.title;
        const price = menu.price;
        const description = menu.description;

        return (
            <div key={index}>
                <div className="special-card-container">
                    <div className="image-container" style={{ height: "250px" }}>
                        <img src={image} alt="Special dessert" />
                    </div>
                    <div className="special-card-text">
                        <div className="special-card-title">
                            <h4>{title}</h4>
                            <h3 className="price-tag">{price}</h3>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div>
            <div className="special-card" style={{ margin: "50px" }}>
                {specialMenusItems}
            </div>
        </div>
    )
}

export default Menus
