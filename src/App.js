// This is our Root Component.

import React, { Suspense } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import ShowPlayer from "./ShowPlayer/ShowPlayer";
import AddPlayerComponent from "./AddPlayerComponent/AddPlayerComponent";
import AppContext from "./AppContext";
function App() {
  const [player, setPlayer] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3001/players")
      .then(res => {
        setPlayer(res.data);
      })
  }, []);
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Suspense fallback={<div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>}>
          <AppContext.Provider value={[player,setPlayer]}>
            <Routes>
              <Route path="/" element={<ShowPlayer />} />
              <Route path="/addplayer" element={<AddPlayerComponent />} />
            </Routes>
          </AppContext.Provider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
