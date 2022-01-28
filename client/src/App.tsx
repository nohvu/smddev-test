import React from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { CreateForm } from "./pages/Form/CreateForm";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/admin" component={CreateForm} exact />
      <Route path="/catalog" component={Catalog} exact />
    </div>
  );
}

export default App;
