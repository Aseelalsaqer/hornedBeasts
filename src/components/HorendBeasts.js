import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfVotes: 0,
    };
  }
  incrementNumberOfVotes = () => {
    this.setState({ numberOfVotes: this.state.numberOfVotes + 1 });
  };
  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={this.props.imageUrl}
              onClick={this.incrementNumberOfVotes}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>Number of votes ={this.state.numberOfVotes}</Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default HornedBeasts;
