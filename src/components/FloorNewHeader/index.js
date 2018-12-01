import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'
import { ASSETSURL } from '../../public/constants'

export default class FloorHeader extends Component {

  render () {
    const img = `${ASSETSURL}/img/floor_1.jpg`
    return (
      <View className='hd'>
        <Image src={img} />
      </View>
    )
  }
}