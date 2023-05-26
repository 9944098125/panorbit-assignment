import { Provider } from "react-redux";
import "./App.css";
import BaseRoutes from "./Routing/BaseRoutes";
import store from "./Redux/Store/Store";

function App() {
  return (
    <Provider store={store}>
      <BaseRoutes />
    </Provider>
  );
}

export default App;
// clone this code from github and install dependencies
// with command  "npm install" in the terminal and start the app with
// command "npm start"
