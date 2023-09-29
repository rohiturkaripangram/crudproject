import "./App.css";

import Photos from "./Components/Photos/Photos";
import Add  from "./Components/Add/Add";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Add />
      <Photos />
    </div>
  );
}

export default App;
