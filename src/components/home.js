import "../css/home.css";

const Home = () => {
    return ( 
        <div className="container home">
            <h1>
            Listening to your favorite songs couldn’t be more pleasant</h1>

            <section className="song-list">
                <h2>Top Songs</h2>
                <ul>
                    <li>
                        <img src="/images/pexels-marcelo-chagas-music.jpg" alt="song cover" 
                        />
                    </li>
                    <li>
                        <img src="/images/pexels-marcelo-chagas-music.jpg" alt="song cover" 
                        />
                    </li>
                    <li>
                        <img src="/images/pexels-marcelo-chagas-music.jpg" alt="song cover" 
                        />
                    </li>
                    <li>
                        <img src="/images/pexels-marcelo-chagas-music.jpg" alt="song cover" 
                        />
                    </li>
                </ul>
            </section>
        </div>
     );
}
 

export default Home;