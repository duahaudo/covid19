import Landing from "./pages/landing";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// register chart
import { Chart, registerables } from "chart.js"
Chart.register(...registerables);

const App = () => {
  return <div className="main-wrapper" >
    <Landing />
  </div>
}

export default App;
