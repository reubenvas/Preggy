import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import BlogCard from './BlogCard';
import { View, Text } from 'native-base';

export class BlogCarousel extends Component {

    constructor(props){
        super();
        this.state = {
          errors: []
        }
        this.props = props;
        this._carousel = {};
        this.init();
      }
    
      init(){
        this.state = {
          songs: [
            {
              title: <BlogCard />
            }, 
            {
              title: <BlogCard />
            }, 
            {
              title: <BlogCard />
            }
          ]
        };
    
        console.log("Props: ", this.props)
      }
    
      handleSnapToItem(index){
        console.log("snapped to ", index)
      }
    
      _renderItem = ( {item, index} ) => {
        console.log("rendering,", index, item)
        return (
            <View>
                {item.title}
            </View>
        );
      }

    render () {

        return (
              <Carousel
                ref={ (c) => { this._carousel = c; } }
                data={this.state.songs}
                renderItem={this._renderItem.bind(this)}
                onSnapToItem={this.handleSnapToItem.bind(this)}
                sliderWidth={800}
                itemWidth={280}
                layout={'default'}
                firstItem={0}
              />
          );
        }
      }
    
