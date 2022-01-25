import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import { LocationContext } from './LocationContext';

import Home from './Pages/Home';
import Location from './Pages/Location';

import { BottomBar } from './Components';

function App()
{
    const [ location, setLocation ] = useState({});

    const value = { location, setLocation };

    return (
        <LocationContext.Provider value={ value }>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <Home/> }/>
                        <Route path="/location/:selected" element={ <Location/> }/>
                    </Routes>

                    <BottomBar/>
                </BrowserRouter>
            </div>
        </LocationContext.Provider>
    );
}

export default App;
