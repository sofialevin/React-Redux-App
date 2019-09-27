import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Search from './components/Search';
import RecipeList from './components/RecipesList';

import { getRecipes } from "./actions";

import { connect } from 'react-redux';

function App(props) {
  const [ searchInput, setSearchInput ] = useState("");

  const textInput = React.createRef();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
}

const addToSearch = (ingredient) => {
    setSearchInput(searchInput + ingredient)
}

  const getRecipes = (ingredients) => {
    props.getRecipes(ingredients.split(/[ ,]+/).join(','));
    console.log(props);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getRecipes(searchInput);
    setSearchInput("");
}

  return (
    <div className="App">
      <Search getRecipes={getRecipes} textInput={textInput} searchInput={searchInput} recipes={props.recipes} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <RecipeList recipes={props.recipes} textInput={textInput} addToSearch={addToSearch} isFetching={props.isFetching}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    error: state.error,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getRecipes })(App);