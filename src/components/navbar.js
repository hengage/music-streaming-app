import "../css/navbar.css";

const toggleMenu = (x) => {
    x.classList.toggle("change");
  }




const Navbar = () => {
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
                        onClick={()=>toggleMenu(this)}
                    >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
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