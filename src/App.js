import Logo from "./componentes/logo/Logo";
import Nav from "./componentes/nav/Nav";
import Container from "./componentes/container/Container";
import BarraDePesquisa from "./componentes/BarraDePesquisa/BarraDePesquisa"
import SociaMedia from "./componentes/SocialMedia/SocialMedia"

import "./modulo_scss/App.css"


function App() {
  
  return (
    <>
      <header>
        <Logo/>
        <Nav/>
      </header>

      <main>
        <Container/>
      </main>

      <footer>
        <SociaMedia/>
        <Logo/>
        <BarraDePesquisa/>
      </footer>
    </>
  );
}

export default App;
