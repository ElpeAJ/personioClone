import './App.css';
import YellowNav from '../components/YellowNav/YellowNav';
import WebDemo from "../components/WebDemo/WebDemo";
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <YellowNav/>
      <div className='padding-side'>
      <WebDemo/>
      <Newsletter/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
