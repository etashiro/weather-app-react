import "./App.css";
import Search from "./Search";
import Currentweather from "./Currentweather";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <div className="App">
        <Search />
        <Currentweather />
      </div>
      <Footer />
    </div>
  );
}
