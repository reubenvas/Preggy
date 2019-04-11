import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import BlogCard from './BlogCard';
import { View } from 'native-base';

import preggyService from '../services/preggyService';

export class BlogCarousel extends Component {

  constructor(props) {
    super(props);
    this._carousel = {};
    this.state = {
      blogs:
      [],
    };
  }

  async componentDidMount(){
    const bloggArray = await this.fetchBlogInfo();
    const blogCards = bloggArray.map( blogg => {
      return this.createBlogCard(blogg);
    });
    this.setState( {blogs: [...blogCards]} );
  }
  
  fetchBlogInfo = async () => {
    return await preggyService.getBlogpostforWeek(this.props.week);
  }

  createBlogCard = (blogData) => {
    return { title: <BlogCard navigate={this.props.navigate} blogData={blogData} />};
  }

  _renderItem = ({ item }) => {
    return (
      <View>
        {item.title}
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.blogs}
        renderItem={this._renderItem.bind(this)}
        sliderWidth={800}
        itemWidth={280}
        layout={'default'}
      />
    );
  }
}

