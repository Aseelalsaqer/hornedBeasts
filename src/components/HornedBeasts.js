import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfVotes: 0,
    };
  }
  incrementNumberOfVotes = () => {
    this.setState({
      numberOfVotes: this.state.numberOfVotes + 1,
    });
  };
  render() {
    return (
      <>
        {/* <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl}></img>
        <p> {this.props.description}</p> */}

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.imageUrl}
            onClick={this.incrementNumberOfVotes}
          />

          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              <p> {this.props.description}</p>
              <p> Number Of Votes :{this.state.numberOfVotes}</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default HornedBeasts;
