import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PaginationTwo from "./components/Pagination";
function App() {
  return (
    <div className="App">
      {/* <Route exact path="/"> */}
      {/* <Home /> */}
      {/* </Route> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home src="/img/mmmm.png" />} />

        <Route path="img1" element={<Home src="/img/img1.jpg" />} />
        <Route path="img2" element={<Home src="/img/img2.jpg" />} />
        <Route path="img3" element={<Home src="/img/img3.jpg" />} />
        <Route path="img4" element={<Home src="/img/img4.jpg" />} />
      </Routes>
      <PaginationTwo />
    </div>
  );
}

export default App;
