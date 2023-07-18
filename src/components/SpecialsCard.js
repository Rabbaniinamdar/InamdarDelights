import React from 'react'
import "../components/styles/SpecialsCard.css"
import {specialMenus} from "./Api/MenuList"

const SpecialsCard = () => {
    
    const specialMenusItems = specialMenus.map((menu, index) => {
        const image = menu.image;
        const title = menu.title;
        const price = menu.price;
        const description = menu.description;

        return (
            <div key={index}>
                <div className="special-card-container">
                    <div className="image-container">
                        <img src={image} alt="Special dessert" />
                    </div>
                    <div className="special-card-text">
                        <div className="special-card-title">
                            <h3>{title}</h3>
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
            <div className="special-card">
                {specialMenusItems}
            </div>
        </div>
    )
}

export default SpecialsCard
