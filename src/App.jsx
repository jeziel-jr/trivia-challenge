import { useState } from 'react'
import { GameScreen } from './pages/GameScreen'
import { Home } from './pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { GetApiData } from './components/GetApiData';
import { FinalScore } from './pages/FinalScore';


export const App = () => {


  return (
    <Provider store={store}>
      <GetApiData />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<GameScreen />} />
          <Route path="/finalscore" element={<FinalScore />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
