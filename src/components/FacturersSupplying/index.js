import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'
import WIcon from '../Icon/index'

export default class FacturersSupplying extends Component {

  render () {
    return (
      <View className='m-indexManufacturersSupplying'>
        <View className="list">
          <View className="item">
            <View className="cnt">
              <View className="title">海外制造商</View>
              <View>
                <Text className="price1">9.9</Text>
                <Text className="price2">元起</Text>
              </View>
              <WIcon type="new"/>
            </View>
            <Image src="https://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&amp;thumbnail=355x0&amp;quality=65" style="opacity: 1;"/>
          </View>
          <View className="item">
            <View className="cnt">
              <View className="title">海外制造商</View>
              <View>
                <Text className="price1">9.9</Text>
                <Text className="price2">元起</Text>
              </View>
              <WIcon type="new"/>
            </View>
            <Image src="https://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&amp;thumbnail=355x0&amp;quality=65" style="opacity: 1;"/>
          </View>
          <View className="item">
            <View className="cnt">
              <View className="title">海外制造商</View>
              <View>
                <Text className="price1">9.9</Text>
                <Text className="price2">元起</Text>
              </View>
              <WIcon type="new"/>
            </View>
            <Image src="https://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&amp;thumbnail=355x0&amp;quality=65" style="opacity: 1;"/>
          </View>
          <View className="item">
            <View className="cnt">
              <View className="title">海外制造商</View>
              <View>
                <Text className="price1">9.9</Text>
                <Text className="price2">元起</Text>
              </View>
              <WIcon type="new"/>
            </View>
            <Image src="https://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&amp;thumbnail=355x0&amp;quality=65" style="opacity: 1;"/>
          </View>
        </View>
      </View>
    )
  }
}