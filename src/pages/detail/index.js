import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

import TopFix from '../../components/TopFix/index'
import BackTop from '../../components/BackTop/index';

import { ASSETSURL } from '../../public/constants'

export default class Detail extends Component {
  constructor() {
    this.state = {
      detailData: [
        {
          url: `${ASSETSURL}/img/detail-1.jpg`
        },
        {
          url: `${ASSETSURL}/img/detail-2.jpg`
        }
      ],
      current: 0
    }
  }

  render () {
    const { detailData } = this.state
    const listItems = detailData.map((item, index) => {
      return <SwiperItem key={index}>
              <View className='swiper-banner'>
                <Image src={item.url}/>
              </View>
            </SwiperItem>
    })
    return (
      <View className='detail-wrap'>
        <TopFix isFixed/>
        <View className='swiper-wrap'>
          <Swiper className='swiper-bd' current={this.state.current}>
            {listItems}
          </Swiper>
          <View className='swiper-pagination'>
            <View className='current-total'>{this.state.current + 1}/{this.state.detailData.length}</View>
          </View>
        </View>
        <BackTop/>
      </View>
    )
  }
}

