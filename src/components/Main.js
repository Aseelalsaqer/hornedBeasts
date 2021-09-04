import React from "react";
import HornedBeasts from "./HorendBeasts";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {this.props.Data.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                keyword={item.keyword}
                showModal={this.props.showModal}
                updateSelectedBeastData={this.props.updateSelectedBeastData}
              />
            );
          })}
        </Row>
      </>
    );
  }
}
export default Main;
