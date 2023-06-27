import axios from "axios";

export const userData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};
