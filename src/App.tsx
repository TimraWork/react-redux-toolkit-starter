import React from "react";
import { Counter } from "./components/Counter/Counter";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { Footer } from "./components/Footer/Footer";
import { Posts } from "./components/Posts/Posts";
// import { Login } from "./components/Login/Login";

const App: React.FC = React.memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main className="App">
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/" component={Posts} />
          <Route exact path="/about" component={Counter} />
        </Switch>
      </main>
      <Footer />
    </ThemeProvider>
  );
});

export default App;
