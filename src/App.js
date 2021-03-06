import React from "react";
import { connect, Provider } from "react-redux";
import Router from "./Route";
import store from "./redux/store";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.general.isLoading,
});

const mapDispatchToProps = {};

const MyApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ isLoading }) => {
  return (
    <div className="App">
      {isLoading && (
        <div
          style={{ zIndex: 1000 }}
          className="min-w-full min-h-full w-full h-full fixed top-0 left-0 bg-white bg-opacity-40 flex items-center justify-center"
        >
          <div class="lds-dual-ring"></div>
        </div>
      )}
      <Router />
    </div>
  );
});

export default App;
