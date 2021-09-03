import React from "react";
import HornedBeasts from "./HorendBeasts";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {data.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
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
