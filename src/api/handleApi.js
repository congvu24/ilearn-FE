import axios from "axios";
import cookie from "js-cookie";
import { offLoading, setLoading } from "../redux/actions/general";
import store from "../redux/store";

const BASE_API = process.env.REACT_APP_BASE_HOST;

export default async function callApi({ url, method, data, option }) {
  const token = cookie.get("userToken") ?? "";
  return new Promise((resolve, reject) => {
    store.dispatch(setLoading(true));
    axios({
      method,
      url: `${BASE_API}${url}`,
      data,
      headers: { ...option?.headers, Authorization: `Bearer ${token}` },
      // ...option,
    })
      .then((res) => {
        store.dispatch(offLoading());
        resolve(res.data);
      })
      .catch((err) => {
        store.dispatch(offLoading());
        reject(err);
      });
  });
}

const resources = {};

const makeRequestCreator = () => {
  let cancel;
  const token = cookie.get("userToken") ?? "";

  return async ({ url, method = "get", data = {} }) => {
    if (cancel) {
      // Cancel the previous request before making a new request
      cancel.cancel();
    }
    // Create a new CancelToken
    cancel = axios.CancelToken.source();
    try {
      if (resources[url]) {
        // Return result if it exists
        return resources[url];
      }
      const res = await axios(url, {
        method,
        data,
        cancelToken: cancel.token,
        headers: { Authorization: token },
      });
      const result = res.data;
      // Store response
      resources[url] = result;

      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
      } else {
        // Handle usual errors
      }
    }
  };
};

export const replaceRequest = makeRequestCreator();
