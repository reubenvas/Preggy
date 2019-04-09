import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import BlogCard from './BlogCard';
import { View } from 'native-base';

export class BlogCarousel extends Component {

    constructor(props){
        super();
        this._carousel = {};
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
          ],
        };
    
      }
    
      _renderItem = ( {item, index} ) => {
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
                sliderWidth={800}
                itemWidth={280}
                layout={'default'}
              />
          );
        }
      }
    
