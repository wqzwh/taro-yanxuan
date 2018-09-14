import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.less'

export default class Banner extends Component {

  onClick = (e) => {
    console.log(e)
  }

  render () {
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
                <SwiperItem>
                  <View className='swiper-slide'>
                    <Image src="https://yanxuan.nosdn.127.net/2ac89fb96fe24a2b69cae74a571244cb.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=Y2U5MTg5YmQ0NzY0NGE5ODYwMDUxZTNhYjFkNDM0M2QucG5n|imageView&quality=75&thumbnail=750x0"/>
                  </View>
                </SwiperItem>
                <SwiperItem>
                <View className='swiper-slide'>
                    <Image src="https://yanxuan.nosdn.127.net/a9e80a3516c99ce550c7b5574973c22f.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=Y2U5MTg5YmQ0NzY0NGE5ODYwMDUxZTNhYjFkNDM0M2QucG5n|imageView&quality=75&thumbnail=750x0"/>
                  </View>
                </SwiperItem>
                <SwiperItem>
                  <View className='swiper-slide'>
                    <Image src="https://yanxuan.nosdn.127.net/b9697a8725f0c2d274bbfa85bde91885.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=Y2U5MTg5YmQ0NzY0NGE5ODYwMDUxZTNhYjFkNDM0M2QucG5n|imageView&quality=75&thumbnail=750x0"/>
                  </View>
                </SwiperItem>
              </Swiper>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

