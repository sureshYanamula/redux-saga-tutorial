import React from "react";
import { userData } from "../functions/userData";

function TypicodeUsers() {
  const [typicodeUser, setTypicodeUser] = React.useState({
    loading: true,
    userData: [],
    error: "",
  });

  React.useEffect(() => {
    setTypicodeUser({ ...typicodeUser, loading: true });
    userData()
      .then((resp) => {
        setTypicodeUser({
          ...typicodeUser,
          loading: false,
          userData: resp.data,
        });
      })
      .catch((err) => {
        setTypicodeUser({
          ...typicodeUser,
          loading: false,
          error: "something went wrong please try again after some time",
        });
      });
  }, []);

  return (
    <div>
      {typicodeUser.loading && <h1>Loading...</h1>}
      {typicodeUser.error && <h1>{typicodeUser.error}</h1>}
      {typicodeUser.userData.length
        ? typicodeUser.userData.map((item) => (
            <table>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </table>
          ))
        : null}
    </div>
  );
}

export default TypicodeUsers;
