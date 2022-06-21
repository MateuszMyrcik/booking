import axios from "axios";

export const API_URI = "https://warm-scrubland-27930.herokuapp.com";

type IApiPath =
  | "/login"
  | "/rooms"
  | "/users"
  | "/user"
  | "/register"
  | "/reservations";

type IFetchMethod = "POST" | "GET" | "DELETE";

const fetchData = async (
  path: IApiPath,
  body?: any,
  query: any = "",
  method: IFetchMethod = "GET"
) => {
  const url = `${API_URI}${path}`;

  console.log("fetchData", path, body, method, url);
  debugger;

  return await axios(url, {
    data: body,
    method: method,
    params: query,
  })
    .then((res) => res)
    .catch((err) => {
      console.error(`Fetching data on ${url}`, err);
      return err.response;
    });
};

export { fetchData };
