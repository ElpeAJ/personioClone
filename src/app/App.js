import style from "./App.module.css";
import YellowNav from "../components/YellowNav/YellowNav";
import WebDemo from "../components/WebDemo/WebDemo";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <YellowNav />
      <NavBar />
      <div className={style.paddingside}>
        <WebDemo />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
