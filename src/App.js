import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <div className="App">
        <Weather defaultCity="Los Angeles" />
      </div>
      <Footer />
    </div>
  );
}
