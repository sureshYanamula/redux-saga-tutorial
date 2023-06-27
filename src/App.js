import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const handleDispatchData = () => {
    dispatch({
      type: "LOGOUT",
      payload: "",
    });
  };
  return (
    <div className="App">
      <button onClick={handleDispatchData}>Dispatch action</button>
    </div>
  );
}

export default App;
