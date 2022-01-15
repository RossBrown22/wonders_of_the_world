import WondersContainer from "../containers/WondersContainer";


function Ancient() {
  return (
    <div id="grid">
            <header id="header">
                <h1>Wonders</h1>
            </header>
            <nav id="nav-bar">
            <h2>Nav</h2>
            </nav>
            <section id="content-1">
              <WondersContainer />
            </section>
            <footer id="footer">
              <h3>Footer</h3>
            </footer>
    </div>
  );
}

export default Ancient;