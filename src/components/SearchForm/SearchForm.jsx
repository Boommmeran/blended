import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { RiTShirt2Fill } from 'react-icons/ri';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = evt => {
    this.setState({
      searchQuery: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.handleSubmit(this.state.searchQuery)
  };

  render() {
    return (
      <>
        <h2>SearchForm</h2>
        <SearchFormStyled onSubmit={this.handleSubmit}>
          <InputSearch
            placeholder="What do you want to write?"
            name="search"
            required
            autoFocus
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <FormBtn type="submit">
            <FiSearch />
          </FormBtn>
        </SearchFormStyled>
      </>
    );
  }
}
