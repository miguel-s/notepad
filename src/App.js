import React, { Component } from 'react';
import { Header, Content } from './components';
import { getMaxId } from './utils';
import './App.css';

class App extends Component {

  // component initialization
  state = {
    notes: [],
    selectedNoteId: null,
  };

  handleAddNote = () => {
    const id = getMaxId(this.state.notes) + 1;
    this.setState({ notes: [...this.state.notes, { id, body: '' }]});
  };

  handleSaveNote = (id) => {
    // TODO:
    // save notes to parse server
  };

  handleClickNote = (id) => this.setState({ selectedNoteId: id });

  // component lifecycle methods
  componentDidMount() {
    // TODO:
    // fetch notes from parse server
    this.setState({
      notes: [
        { id: 1, body: 'Lorem ipsum los' },
        { id: 2, body: 'Lorem ipsum' },
      ],
      selectedNoteId: 1,
    });
  }

  // component render
  render() {
    return (
      <div className="App">
        <Header handleAddNote={this.handleAddNote} />
        <Content handleClickNote={this.handleClickNote} {...this.state} />
      </div>
    );
  }
}

export default App;
