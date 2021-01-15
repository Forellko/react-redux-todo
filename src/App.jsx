import React from "react";
import "./App.scss";
import Header from "./sections/Header/Header";
import Main from "./sections/Main/Main";
import Footer from "./sections/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <Main />
        <Footer />
      </section>
    );
  }
}

export default App;
