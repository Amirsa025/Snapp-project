import "styles/global.scss";
import { Provider } from "react-redux";
import store from "./store/store";
import MainLayout from "./layout/MainLayout";
import {Header} from "./components/scss";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
          <Header />
         <MainLayout/>
      </div>
    </Provider>
  );
}

export default App;
