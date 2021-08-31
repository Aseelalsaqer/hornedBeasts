import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

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

  select = ()=>{
    this.props.callback(this.props.item);
  };
  render() {
    if(!this.props.item) return( <>No Item</>);
    
    return (
      <>
        {/* <h2>{this.props.item.title}</h2>
        <img src={this.props.item.imageUrl}></img>
        <p> {this.props.item.description}</p> */}
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={this.props.item.image_url}
              onClick={this.select}
            />

            <Card.Body>
              <Card.Title>{this.props.item.title}</Card.Title>
              <Card.Text>
                <p> {this.props.item.description}</p>
                <p> Number Of Votes :{this.state.numberOfVotes}</p>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default HornedBeasts;
