import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import store from "./configureStore"

import Greeting from "./components/Greeting"
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <div className="cont">
        <Greeting />
      </div>
      </Provider>

    );
  }
}

App.propTypes = {
  greeting: PropTypes.string
};
export default App
