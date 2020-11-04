import React from "react";

const HeroBackground = () => {
    return (
        <div className="hero" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: "#4158D0",
            background: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
            backgroundSize: "400% 400%",
            animation: "gradient 100s ease infinite",
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }}>

        </div>
    )
}

export default HeroBackground


