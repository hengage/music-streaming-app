import { useState, useEffect} from "react";
import "../css/navbar.css";



const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => { 
        setIsActive(!isActive);
        console.log(setIsActive)
        console.log(isActive)
    };

    useEffect(() => {
        
    })

    return ( 
        <section className="navbar">
            <div className="container">
                
                <img 
                    src="/images/peermusic_logo.png" 
                    alt="peermusic logo"
                    className="logo" 
                    />
                <div className="nav">
                    <div 
                        className="menu-btn" 
                        id="menubtn"
                        onClick={toggleMenu}
                    >
                        <div className={`bar1 ${isActive ? "change": "bar1"}`}></div>
                        <div className={`bar2 ${isActive ? "change": ""}`}></div>
                        <div className={`bar3 ${isActive ? "change": ""}`}></div>

                        {/* <div className={isActive ? "bar1" : "hidden"}></div>
                        <div className={isActive ? "bar2" : "hidden"}></div>
                        <div className={isActive ? "bar3" : "hidden"}></div> */}

                        
                    </div>

                    <div className="nav-item">
                        <ul>
                            <li>Songs</li>
                            <li>albums</li>
                            <li>Account</li>
                            <li>My playlist</li>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
     );
}
 

export default Navbar;