import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    buttonVisible: false,
  };

  getImages = async () => {
    try {
      const images = await ImageService.getImages(
        this.state.query,
        this.state.page
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...images.photos],
        buttonVisible: images.page < Math.ceil(images.total_results/images.per_page),
      }));
    } catch (error) {
      console.log('Error');
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      this.state.page !== prevState.page
    ) {
      this.getImages();
    }
  }

  handleSubmit = query => {
    this.setState({
      query,
    });
  };

  buttonClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <SearchForm handleSubmit={this.handleSubmit} />
        <Grid>
          {this.state.images.map(({ id, avg_color, alt, src }) => {
            return (
              <GridItem key={id}>
                <CardItem color={avg_color}>
                  <img src={src.large} alt={alt} />
                </CardItem>
              </GridItem>
            );
          })}
        </Grid>
        {this.state.images.length === 0 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {this.state.buttonVisible && (
          <Button type="button" onClick={this.buttonClick}>
            Load more
          </Button>
        )}
      </>
    );
  }
}
