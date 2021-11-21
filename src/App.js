import './styles/reset.css'
import './styles/global.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Home from './Home';
import Produtos from './Produtos';
import Formulario from './Formulario';

function App() {
  return (
    <div className="App">
     <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/produtos" exact element={<Produtos/>}></Route>
          <Route path="/formulario" exact element={<Formulario/>}></Route>
        </Routes>
      </Router>
    </>
    </div>
  );
}

export default App;
