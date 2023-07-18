import React from 'react';
import "../components/styles/HeroSection.css";

const DonatePage = () => {
    return (

        <div className="hero-section-background">
            <div className="hero-section-container">
                <div className="section-left">
                    <h1>Inamdar Delights</h1>
                    <p>We believe that every child deserves love, care, and the opportunity to thrive. Sadly, many orphaned children around the world are facing hardships and are in desperate need of support. By donating money to orphaned children, you can make a tangible difference in their lives. Your contribution can provide them with access to education, healthcare, nutritious meals, and a safe shelter. It can give them hope, stability, and the chance for a brighter future. Your generosity can bring smiles to their faces, help them overcome adversity, and provide them with the resources they need to build a better life. Together, let's extend a helping hand to these vulnerable children and make a lasting impact. Donate today and become a source of hope and opportunity for an orphaned child.   </p>
                    <button className="btn">
                        <a href="https://www.savethechildren.in/donate/" target="_blank" rel="noopener noreferrer">
                            Donate
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DonatePage
