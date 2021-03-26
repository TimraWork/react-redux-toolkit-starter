import React from "react";
import { Counter } from "./components/counter/Counter";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { Footer } from "./components/footer/Footer";
import { Posts } from "./components/posts/Posts";

const App: React.FC<{}> = React.memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main className="App">
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/about" component={Counter} />
        </Switch>
      </main>
      <Footer />
    </ThemeProvider>
  );
});

export default App;
