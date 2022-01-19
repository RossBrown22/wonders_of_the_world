import NavBar from "./NavBar";
import WondersContainer from "../containers/WondersContainer";

const Natural = ({wonders, selectedWonder, mapSelectedWonder, onWonderSelected}) => {
    return (
        <div id="grid">
            <header id="header">
                <h1>The 7 Natural Wonders of the World</h1>
            </header>
            <nav id="nav-bar">
            <NavBar />
            </nav>
            <section id="content-1">
              <WondersContainer wonders={wonders} selectedWonder={selectedWonder} mapSelectedWonder={mapSelectedWonder} onWonderSelected={onWonderSelected} />
            </section>
    </div>
    );
}

export default Natural;