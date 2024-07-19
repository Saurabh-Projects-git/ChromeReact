import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SearchResult from "./Components/SearchResult";
import { AppContext } from "./Utils/ContextApi";
function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startIndex" exact element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
