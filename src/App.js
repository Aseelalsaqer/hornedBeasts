import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Data from "./components/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./components/SelectedBeast";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      imageUrl: "",
      description: "",
      filteredBeast: Data,
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
  Selected = (event) => {
    let newArray = Data.filter((n) => n.horns === parseInt(event.target.value));
    this.setState({
      filteredBeast: newArray,
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
        <Form onChange={this.Selected}>
          <Form.Group controlId="horns">
            <Form.Select aria-label="Select Horns Number">
              <option>Honrs Number</option>
              <option value="1">One Horns</option>
              <option value="2">Two Horns</option>
              <option value="3">Three Horns</option>
              <option value="100">wow</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          Data={this.state.filteredBeast}
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
