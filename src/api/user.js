import handleApi from "./handleApi";

export const postLogin = (data) =>
  handleApi({ url: "/auth/normal ", method: "post", data });

export const postRegister = (data) =>
  handleApi({ url: "/user/create", method: "post", data });

export const postUpdateProfile = (data) =>
  handleApi({ url: "/user/update", method: "post", data });

export const postConnectZoom = ({ token }) =>
  handleApi({
    url: "/teacher/attach",
    method: "post",
    data: { access_code: token },
  });

export const postUploadImage = (data) => {
  return handleApi({
    url: "/upload",
    method: "post",
    data,
    option: { headers: { "Content-Type": "multipart/form-data" } },
  });
};

export const postCreateClass = (data) =>
  handleApi({ url: "/teacher/class", method: "post", data });

export const delCreateClass = (id) =>
  handleApi({ url: `/teacher/class/${id}`, method: "delete" });

export const getMyClass = () =>
  handleApi({ url: "/teacher/class", method: "get" });

export const getProfile = () => handleApi({ url: "/user/me", method: "get" });
