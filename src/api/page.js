import handleApi from "./handleApi";

export const postLiveSearch = (query) =>
  handleApi({ url: `/search?query=${query}`, method: "get" });

export const getNewClass = () => handleApi({ url: "/class", method: "get" });
export const getClassDetail = (id) =>
  handleApi({ url: `/class/${id}`, method: "get" });