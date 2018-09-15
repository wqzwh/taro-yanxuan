import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class FloorHeader extends Component {

  render () {
    return (
      <View className='hd'>
        <Text className="hd-text">品牌制造商直供</Text>
        <View className='u-icon'></View>
      </View>
    )
  }
}