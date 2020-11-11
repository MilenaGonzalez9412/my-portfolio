import "../assets/styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import About from "../components/About";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
