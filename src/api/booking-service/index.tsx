import axios from "axios";

export const API_URI = "https://warm-scrubland-27930.herokuapp.com";

type IApiPath =
  | "/me"
  | "/login"
  | "/rooms"
  | "/users"
  | "/user"
  | "/register"
  | "/reservations";

type IFetchMethod = "POST" | "GET" | "DELETE" | "PATCH" | "PUT";

const fetchData = async (
  path: IApiPath,
  body?: any,
  query: Record<string, string | number> | string = "",
  method: IFetchMethod = "GET"
  // sort: string = "ASC"
) => {
  const url = `${API_URI}${path}`;

  const accessToken = localStorage.getItem("access_token");
  console.log("accessToken", accessToken);

  return await axios(url, {
    data: body,
    method: method,
    params: query,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res)
    .catch((err) => {
      console.error(`Fetching data on ${url}`, err);
      return err.response;
    });
};

export { fetchData };
