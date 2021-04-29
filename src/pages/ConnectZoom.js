import React, { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { postConnectZoom } from "../api/user";
import { login } from "../utils/auth";
import handleErrorApi from "../utils/handleErrorApi";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function AuthenZoom() {
  const history = useHistory();
  let query = useQuery();
  const token = query.get("code");
  useEffect(async () => {
    try {
      if (token) {
        const res = await postConnectZoom({ token });
        history.replace("/register/profile");
      }
    } catch (err) {
      handleErrorApi(err);
    }
  }, [token]);
  return null;
}
