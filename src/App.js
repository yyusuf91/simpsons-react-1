import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    characters: [],
  };

  getQoute = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=20`
    );

    this.setState({
      characters: results.data[Math.floor(Math.random() * results.data.length)],
    });
  };

  render() {
    return (
      <>
        <main className="container  ">
          <div
            key={this.state.characters.quote}
            className="card position-absolute top-50 start-50 translate-middle"
            style={{ width: 500, backgroundColor: " #ffca2c" }}
          >
            <img
              src={this.state.characters.image}
              className="card-img-top rounded float-start"
              alt={this.state.characters.character}
            />
            <div className="card-body" style={{ backgroundColor: "purple" }}>
              <h5 style={{ color: "white" }} className="card-title">
                {this.state.characters.character}
              </h5>
              <p style={{ color: "white" }} className="card-text">
                {this.state.characters.quote}
              </p>
              <button
                style={{ color: "white", fontWeight: "bold" }}
                onClick={this.getQoute}
                className="btn btn-warning"
              >
                next Qoute
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
