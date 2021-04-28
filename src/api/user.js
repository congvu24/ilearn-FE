import handleApi from "./handleApi";

export const postLogin = (data) =>
  handleApi({ url: "/login", method: "post", data });

export const postRegister = (data) =>
  handleApi({ url: "/register", method: "post", data });
