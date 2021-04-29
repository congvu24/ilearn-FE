import handleApi from "./handleApi";

export const postLogin = (data) =>
  handleApi({ url: "/login", method: "post", data });

export const postRegister = (data) =>
  handleApi({ url: "/user/create", method: "post", data });

export const postUpdateProfile = (data) =>
  handleApi({ url: "/profile", method: "post", data });

export const postUploadImage = (data) =>
  handleApi({
    url: "/upload",
    method: "post",
    data,
    option: { headers: { "Content-Type": "multipart/form-data" } },
  });

export const postCreateClass = (data) =>
  handleApi({ url: "/teacher/class", method: "post", data });

export const delCreateClass = (id) =>
  handleApi({ url: `/teacher/class/${id}`, method: "delete" });

export const getMyClass = () =>
  handleApi({ url: "/teacher/class", method: "get" });
