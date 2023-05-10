import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/create" element={<AddBlog />}></Route>
          <Route path="/blog/:id/" element={<BlogDetail />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
