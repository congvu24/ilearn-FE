import React, { Component } from "react";
// import Router from "next/router";
import cookie from "js-cookie";
import { Redirect, Route, Router } from "react-router";

export const auth = () => {
  const token = cookie.get("userToken");

  return token;
};

// Gets the display name of a JSX component for dev tools
const getDisplayName = (Component) =>
  Component.displayName || Component.name || "Component";

export const withAuthSync = (WrappedComponent) =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    // New: We bind our methods
    constructor(props) {
      super(props);

      this.syncLogout = this.syncLogout.bind(this);
    }

    // New: Add event listener when a restricted Page Component mounts
    componentDidMount() {
      window.addEventListener("storage", this.syncLogout);
    }

    // New: Remove event listener when the Component unmount and
    // delete all data
    componentWillUnmount() {
      window.removeEventListener("storage", this.syncLogout);
      window.localStorage.removeItem("logout");
    }

    // New: Method to redirect the user when the event is called
    syncLogout(event) {
      if (event.key === "logout") {
        window.location.href = "/login";
      }
    }

    render() {
      const token = auth();
      if (!token) return <Redirect to="/login" />;
      return <WrappedComponent {...this.props} />;
    }
  };

export const logout = () => {
  cookie.remove("userToken");
  window.location.href = "/login";
};

export const login = ({ token }) => {
  cookie.set("userToken", token, { expires: 1 });
  window.location.href = "/dashboard";
};
