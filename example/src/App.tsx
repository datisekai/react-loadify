import { DBar, DDot, DSpinner } from "react-loadify";
import "react-loadify/dist/react-loadify.min.css";
import "./App.css";

function App() {
  return (
    <>
      <DSpinner size={100} color="red" borderWidth={10} speed={1000} />
      <DDot color="#000" size={50} speed={1000} />
      <DBar color="#000" size={30} speed={1000} />
      {/* <DBlob1 color="#000" size={50} speed={1000} /> */}
    </>
  );
}

export default App;
