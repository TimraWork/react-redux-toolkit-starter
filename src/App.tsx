import React from "react";
import { Counter } from "./components/counter/Counter";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { Footer } from "./components/footer/Footer";
import { Posts } from "./components/posts/Posts";
import { useTranslation } from "react-i18next";

const App: React.FC = React.memo(() => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main className="App">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <h1>{t("description.part1")}</h1>
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
