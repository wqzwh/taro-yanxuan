import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.less'

export default class Banner extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    const { data } = this.props
    const listItems = data.map((item) => {
      return <SwiperItem key={item.id}>
              <View className='swiper-slide'>
                <Image src={item.url}/>
              </View>
            </SwiperItem>
    })
    return (
      <View className='slideWarp'>
        <View className="m-slide m-indexSlide">
          <View className='slide-con'>
            <View className='swiper-container'>
              <Swiper
                className="swiper-wrapper"
                indicatorColor='rgba(255, 255, 255, .4)'
                indicatorActiveColor='rgba(255, 255, 255, 1)'
                circular
                indicatorDots
                autoplay>
                {listItems}
              </Swiper>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

