import "./App.css";

import Photos from "./Components/Photos/Photos";
import Add  from "./Components/Add/Add"
import Edit from "./Components/Edit/Edit";

import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Photos/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/Edit/:id" element={<Edit/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
