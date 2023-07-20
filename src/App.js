import { useDispatch } from "react-redux";
import "./App.css";
import UserData from "./Components/UserData";
import TypicodeUsers from "./Components/TypicodeUsers";
import TypicodeUsersSaga from "./Components/TypicodeUsersSaga";
import TypicodeUsersRedux from "./Components/TypicodeUsersRedux";

function App() {
  const dispatch = useDispatch();

  const handleDispatchData = () => {
    dispatch({
      type: "LOGOUT",
      payload: "",
    });
  };
  return (
    <div>
      <TypicodeUsersRedux />
      {/* <UserData /> */}
      {/* <TypicodeUsers /> */}
      {/* <TypicodeUsersSaga /> */}
      {/* <button onClick={handleDispatchData}>Dispatch action</button> */}
    </div>
  );
}

export default App;
