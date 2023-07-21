import Footer from "./components/Footer"
import Headers from "./components/Navbar"
import Route from "./routers/router"


function App() {
  return (
    <div  className="flex flex-col  min-h-screen justify-between">
     <Headers/>
      <Route/>
    <Footer/>
    </div>
  );
}

export default App;
