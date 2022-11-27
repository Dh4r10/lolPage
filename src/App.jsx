import React, { useState, useEffect } from "react";
import "./styles/App.css";
import ShowChamps from "./pages/ShowChamps";
import Information from "./pages/Information";
import Error from './pages/Error'
import { Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import Load from "./assets/images/loading.gif";

library.add(faFacebook, faTwitter, faInstagram, faFontAwesome);

function App() {
  //Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  //Loading

  return (
    <>
      <div className="App">
        {loading ? (
          <Routes>
            <Route path="/lolPage/" element={<ShowChamps />} />
            <Route path="/lolPage/information/:id" element={<Information />} />
            <Route path="*" element={<Error />} />
          </Routes>
        ) : (
          <div className="boxLoad">
            <img className="load" src={Load} alt="load" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

// Estructura principal:
//
// <>
// <div className="App">
//     <Routes>
//       <Route path="/lolPage/" element={<ShowChamps />} />
//       <Route path="/lolPage/information/:id" element={<Information />} />
//       <Route path="*" element={<Error />} /> 
//     </Routes>
// </div>
// </>

// Estructura Loading
// <>
//   <div className="App">
//     {loading ? (Estructura principal) : (GifLoading)}
//   </div>
// </> 