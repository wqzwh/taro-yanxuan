import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class FloorHeader extends Component {

  render () {
    return (
      <View className='hd'>
        <View className="hd-text">新品首发</View>
        <View className="all">
          <View className="wrap">
            <Text>查看全部</Text>
            <View className="arrow-right"></View>
          </View>
        </View>
      </View>
    )
  }
}