import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Banner from '../../../../components/Banner/index'
import WIcon from '../../../../components/Icon/index'


export default class MTop extends Component {

  render () {
    return (
      <View className="m-indexFloor">
        <Banner/>
        <View className="m-indexServicePolicy">
          <View className="g-grow">
            <View className="item">
              <WIcon/>
              <Text className="text">网易自营品牌</Text>
            </View>
            <View className="item">
              <WIcon/>
              <Text className="text">30天无忧退货</Text>
            </View>
            <View className="item">
              <WIcon/>
              <Text className="text">48小时快速退款</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}