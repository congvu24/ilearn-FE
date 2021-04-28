import handleApi from "./handleApi";

export const postLiveSearch = (query) =>
  handleApi({ url: `/search?query=${query}`, method: "get" });
