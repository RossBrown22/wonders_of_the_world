import NavBar from "./NavBar";
import WondersContainer from "../containers/WondersContainer";
import MapBox from '../components/MapBox.js'

const Map = () => {
    return (
        <div id="grid">
            <header id="header">
                <h1>The 7 Ancient Wonders of the World</h1>
            </header>
            <nav id="nav-bar">
            <NavBar />
            </nav>
            <section id="content-1">
            <h2>Map</h2>
            <div id="mapbox-div">
                <MapBox />
            </div>
            </section>
            <footer id="footer">
            <h3>Footer</h3>
            </footer>
    </div>
    );
}

export default Map;