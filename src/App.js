import CityAsideForecast from "./components/CityAsideForecast";
import Modal from "./components/Modal";
import WeatherForecast from "./components/WeatherForecast";
import AppContext from "./context/AppContext";

function App() {
  return (
    <AppContext>
      <main className="app">
        <Modal/>
        <WeatherForecast />
        <CityAsideForecast />
      </main>
    </AppContext>

  );
}

export default App;
