import "./styles/main.css"
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
