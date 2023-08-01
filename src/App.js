import CityAsideForecast from "./components/CityAsideForecast";
import WeatherForecast from "./components/WeatherForecast";
import AppContext from "./context/AppContext";

function App() {
  return (
    <AppContext>
      <main className="app">
        <WeatherForecast />
        <CityAsideForecast />
      </main>
    </AppContext>

  );
}

export default App;
