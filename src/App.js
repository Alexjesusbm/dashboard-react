import BarraLateral from "./components/BarraLateral";
import Dashboard from "./components/Dashboard";

function App() {
  return (
  <div>
    <header>
      <h1>Data Toys</h1>
      <p>Visão Geral - Análise Comercial</p>
    </header>
      <BarraLateral/>
      <Dashboard></Dashboard>
  </div>
    );
  }

export default App;