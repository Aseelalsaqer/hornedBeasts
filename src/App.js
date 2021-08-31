import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Data from "./components/Data.json";
import SelectedBeast from "./components/SelectedBeast";

class App extends React.Component {
  state = {
    selectedItem: undefined,
  };

  onItemClick = (item) => {
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <>
        <SelectedBeast />
        {/* <HornedBeasts item={this.state.selectedItem} callback={null} /> */}
        <Header />
        <Main data={Data} onClickCallback={this.onItemClick} />

        <Footer />
      </>
    );
  }
}

export default App;
