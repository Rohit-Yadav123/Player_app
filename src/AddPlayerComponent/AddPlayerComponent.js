import React, { Component } from 'react'
import axios from "axios";
import AppContext from '../AppContext'

export default class AddPlayerComponent extends Component {
  static contextType = AppContext;
  constructor() {
    super();
    this.state = {
      playername: "",
      playercountry: "",
      totalmatches:""
    };
  }
  submitHandler(e) {
    e.preventDefault();
    const [player, setPlayer] = this.context;
    const newPlayer = {
      playername: this.state.playername,
      playercountry: this.state.playercountry,
      totalmatches: this.state.totalmatches,
    };
    this.setState({ playername: "", playercountry: "", totalmatches:"" });
    alert("New Player is added successfully");
    axios.post("http://localhost:3001/players",newPlayer)
      .then((data) => {
        setPlayer([...player, data.data]);
      });
     
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.submitHandler(e);
          }}
          style={{ width: "50%", margin: "40px" }}
        action="/"
        >
          <div className="form-group">
            <label htmlFor="playername">Player Name:</label>
            <input
              className="form-control input-field mt-2"
              id="name"
              value={this.state.playername}
              onChange={(e) => this.setState({ playername: e.target.value })}
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="country">Country:</label>
            <input
              className="form-control input-field mt-2"
              id="country"
              value={this.state.playercountry}
              onChange={(e) => this.setState({ playercountry: e.target.value })}
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="name">Matches Played:</label>
            <input
              className="form-control input-field mt-2"
              value={this.state.totalmatches}
              onChange={(e) => this.setState({ totalmatches: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Add Player
          </button>
        </form>
      </div>
    );
  }
  }
  AddPlayerComponent.contextType = AppContext;