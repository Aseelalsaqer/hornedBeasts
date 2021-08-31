import React from "react";
import HornedBeasts from "./HornedBeasts";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Data.json";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {Data.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                imageUrl={item.image_url}
                discription={item.description}
                keyword={item.keyword}
              />
            );
          })}
        </Row>
      </>
    );
  }
}

export default Main;
