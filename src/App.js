import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Data from "./components/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./components/SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      imageUrl: '',
      description: '',
      data: Data,
    };
  }
  showModal = () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });

    
  };
  updateSelectedBeastData = (title, imageUrl, description) => {
    this.setState({
      title: title,
      imageUrl: imageUrl,
      description: description,
    });
  };
  render() {
    return (
      <>
        <Header />

        <Main
          Data={Data}
          showModal={this.showModal}
          updateSelectedBeastData={this.updateSelectedBeastData}
        />
        <SelectedBeast
          handleClose={this.handleClose}
          show={this.state.show}
          title={this.state.title}
          imageUrl={this.state.imageUrl}
          description={this.state.description}
        />

        <Footer />
      </>
    );
  }
}

export default App;
