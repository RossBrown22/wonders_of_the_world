import NavBar from "./NavBar";
import MapBox from '../components/MapBox.js'

const Map = ({ onWonderSelected, wonders }) => {
    return (
        <div id="grid">
            <header id="header">
                <h1>The 21 Wonders of the World</h1>
            </header>
            <nav id="nav-bar">
                <NavBar />
            </nav>
            <section id="content-1">
                <h2>Find your Favourite Wonder!</h2>
                <div id="mapbox-div">
                    {wonders ? <MapBox onWonderSelected={onWonderSelected} wonders={wonders} /> : null}
                </div>
            </section>
            <footer id="footer">
                <h3>Footer</h3>
            </footer>
        </div>
    );
}

export default Map;