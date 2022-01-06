import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/movie/:id" component={Movie} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
