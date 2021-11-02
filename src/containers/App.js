import React, { Component } from "react";
import {connect} from 'react-redux';

import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBar from "../components/SearchBar";

import {setSearchField} from '../actions'


const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFieldChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robo: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robo: users });
      });
  }

  render() {

    const {searchField ,onSearchFieldChange} = this.props;

    const filteredRobos = this.state.robo.filter(robo => {
      return robo.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    if (this.state.robo.length === 0) {
      return (
        <div className="tc load animated infinite heartBeat delay-0s">
          <h1>Loading</h1>
        </div>
      );
    } else {
      return (
        <div className="tc">
          <h1>Robo Search</h1>
          <SearchBar searchChange={onSearchFieldChange} />
          <Scroll>
            <CardList robo={filteredRobos} />
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
