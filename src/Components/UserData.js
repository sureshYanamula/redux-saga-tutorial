import React from "react";
import { useSelector } from "react-redux";

function UserData() {
  let { user } = useSelector((state) => ({
    ...state,
  }));
  return (
    <div>
      <table>
        {user?.length
          ? user.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))
          : null}
      </table>
    </div>
  );
}

export default UserData;
