import React, {Component} from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends Component {
  constructor() {
    super()

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit }));
  }

  handleChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }


  render() {
    return (
      <FruitBasket
      fruit = {this.state.fruit}
      filters = {this.state.filters}
      handleChange = {this.handleChange}
      currentFilter = {this.state.currentFilter}
      />
    )
  }
}

export default App;
