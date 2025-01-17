import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component';

import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value }, () => console.log(this.state.searchField))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = searchField ? monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase())) : monsters;

    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
