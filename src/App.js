import React, { Component } from "react";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";
import Resume from "./resume.json";

class App extends Component {
  componentDidMount() {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");
  }
  // This is the main section which strutures every other section. Consider this as the root of the React DOM tree
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
