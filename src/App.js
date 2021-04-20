import RoutesComponent from "./routes/routes";
import { store } from "./actions/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <RoutesComponent />
    </Provider>
  );
}

export default App;
