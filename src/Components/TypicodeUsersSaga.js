import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TypicodeUsersSaga() {
  const dispatch = useDispatch();
  const { typicode } = useSelector((state) => ({ ...state }));

  //   typicode = {
  //     loading: false,
  //     userData: [],
  //     error: "",
  //   };

  useEffect(() => {
    dispatch({
      type: "USER_PENDING",
      payload: [],
    });
  }, []);
  return (
    <div>
      {typicode.error && <h1>{typicode.error}</h1>}
      {typicode.loading && <h1>Loading...</h1>}
      {typicode.userData.length &&
        typicode.userData.map((item) => (
          <div key={item.id} style={{ backgroundColor: "yellow" }}>
            <table>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </table>
          </div>
        ))}
    </div>
  );
}

export default TypicodeUsersSaga;
