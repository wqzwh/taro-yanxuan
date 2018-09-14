import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Logo from '../../../../components/Logo/index'
import Search from '../../../../components/Search/index'
import Tab from '../../../../components/Tab/index'
import Banner from '../../../../components/Banner/index'
import WIcon from '../../../../components/Icon/index'


export default class MTop extends Component {

  render () {
    return (
      <View className="m-index">
        <View className="hdWraper">
          <View className="m-hd">
            <View className="m-indexHd">
              <View className="line">
                <Logo/>
                <Search/>
              </View>
              <Tab/>
            </View>
          </View>
        </View>
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
      </View>
      
    )
  }
}

