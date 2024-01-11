import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";

import Footer from "./Components/Footer/Footer";
import Video from "./pages/Video";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<Video />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
