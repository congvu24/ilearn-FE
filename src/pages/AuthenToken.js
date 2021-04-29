import React, { useEffect } from "react";
import { useParams } from "react-router";
import { login } from "../utils/auth";

export default function AuthenToken() {
  let { token } = useParams();
  useEffect(() => {
    if (token) {
      login({ token });
    }
  });
  return null;
}
