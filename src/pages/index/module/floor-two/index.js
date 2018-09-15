import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import FloorHeader from '../../../../components/FloorHeader/index'
import FacturersSupplying from '../../../../components/FacturersSupplying/index';


export default class MTop extends Component {

  render () {
    return (
      <View className="m-indexFloor">
        <FloorHeader/>
        <FacturersSupplying/>
      </View>
    )
  }
}

