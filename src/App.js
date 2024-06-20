import BarraLateral from "./components/BarraLateral";
import Dashboard from "./components/Dashboard";
import { Chart } from "chart.js";
import { Chart } from "react-chartjs-2";

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