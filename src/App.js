import Footer from "./components/Footer"
import Headers from "./components/Header"
import Route from "./routers/router"

import Home from "./pages/home/index"
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
