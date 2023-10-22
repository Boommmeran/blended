import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    images:[]
  }

  getImages = async() => {
     try {
       const images = await ImageService.getImages(this.state.query, this.state.page)
     
     } catch (error) {
      console.log("Error") 
     }
  }


  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query || this.state.page !== prevState.page) {
      this.getImages()
    }
  }
  


  handleSubmit = (query) => {
    this.setState({
      query,
    })
  }

  render() {
    return (
      <>
        <SearchForm handleSubmit={this.handleSubmit} />
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
