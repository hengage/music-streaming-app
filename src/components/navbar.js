import "../css/navbar.css";


const Navbar = () => {
    return ( 
        <section className="navbar">
            <div className="container">
                
                <img 
                    src="/images/peermusic_logo.png" 
                    alt="peermusic logo"
                    className="logo" 
                    />
                <div className="menu-btn">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>

            </div>

        </section>
     );
}
 

export default Navbar;