import {
    BrowserRouter, Route, Routes
}
from "react-router-dom";

import Home from './components/Home';
import PokemonDetail from "./components/PokemonDetail";

import './App.css';
import Nav from "./components/Nav";

const App = () => {



    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" 
                element={<Home />}> 
                </Route>

                <Route path="/:name" 
                element={<PokemonDetail />}> 
                </Route>

            </Routes>
        </BrowserRouter>
    )
    }



   




export default App;
