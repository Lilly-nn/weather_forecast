import CityCards from "./components/CityCards";
import Input from "./components/Input";
import TripForecastSection from "./components/TripForecastSection";
import AppContext from "./context/AppContext";

function App() {
  return (
    <AppContext>
      <main className="app">
        <h1 className="app__title">Weather <span className="app__title--bold">Forecast</span></h1>
        <section>
          <Input />
          <CityCards />
          <TripForecastSection />
        </section>
      </main>
    </AppContext>

  );
}

export default App;
