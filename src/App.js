
import './App.css';
import Header from './components/Header';

import pic1 from './images/pic.png';
import pic2 from "./images/InstagramLogo.jpg";
import pic3 from "./images/LinkedinLogo.jpg";

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header imgSource={pic1} />
      <Footer imgSource2={pic2} imgSource3={pic3} />
    </div>
  );
}

export default App;
