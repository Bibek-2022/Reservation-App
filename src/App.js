import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
