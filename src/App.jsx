import { Component } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Drag</h1>
        <div>
          <RoolDice />
        </div>
      </div>
    </>
  );
}
export default App;

export class Dice extends Component {
  render() {
    let cls = `./images/${this.props.img}`;
    return (
      <div>
        <h1>Player1</h1>
        <img src={cls} />
      </div>
    );
  }
}

export class RoolDice extends Component {
  static defaultProps = {
    sides: [
      "dice1.png",
      "dice2.png",
      "dice3.png",
      "dice4.png",
      "dice5.png",
      "dice6.png",
    ],
  };
  state = { dice1: "dice1.png", dice2: "dice2.png", rolling: false };
  roll = () => {
    const newDice1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDice2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({ dice1: newDice1, dice2: newDice2, rolling: true });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 3000);
  };
  render() {
    return (
      <div>
        <div className="dice">
          <Dice img={this.state.dice1} rolling={this.state.rolling} />
          <Dice img={this.state.dice2} rolling={this.state.rolling} />
        </div>
        <button
          className="btn"
          onClick={this.roll}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? (
            "Rolling..."
          ) : (
            <i className="fa-solid fa-shuffle"></i>
          )}{" "}
        </button>
      </div>
    );
  }
}
