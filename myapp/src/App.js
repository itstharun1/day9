import { BrowserRouter, Route, Routes } from "react-router-dom"



import Nav from "./components/Nav"
import About from "./components/About"
import Home from "./components/Home"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"

const App=()=>(
  
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>  
        <Route path="/about" element={<About />}></Route>  
        <Route path="/contact" element={<Contact />}></Route> 
        <Route path="*" element={<NotFound />}></Route>  
      </Routes> 
    </BrowserRouter>
  
)

export default App