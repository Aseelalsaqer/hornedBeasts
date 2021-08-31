import React from "react";
import HornedBeasts from "./HornedBeasts";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";


class Main extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      data: props.data
    };
  }

  render() {
    var Data = this.state.data;

    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {Data.map((dItem) => {
            return (
              <HornedBeasts
                item = {dItem}
                callback ={this.props.onClickCallback}
              />
            );
          })}
        </Row>
      </>
    );
  }
}

export default Main;
