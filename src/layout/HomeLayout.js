import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../utils/auth";

function HomeLayout({ children, user, ...props }) {
  const token = auth();
  useEffect(() => {
    if (token) {
      props.getProfile();
    }
  }, [token]);

  const history = useHistory();

  return (
    <div className="dashboard flex flex-col items-center justify-center w-full min-h-screen"></div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
