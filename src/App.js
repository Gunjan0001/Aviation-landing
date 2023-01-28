import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Booknow from "./Components/Booknow";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Customer from "./Components/Customer";
import Header from "./Components/Header";
import Memories from "./Components/Memories";
import Subscribe from "./Components/Subscribe";
import Tickets from "./Components/Tickets";
import Flight from "./Components/Flight";

function App() {
  return (
    <>
      <Header />
      <Feature />
      <Booknow />
      <Flight />
      <Tickets />
      <Customer />
      <Memories />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
