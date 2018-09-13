import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shops: props
    }
  }

  onClick = (e) => {
    console.log(e)
  }

  render () {
    return (
      <View onClick={this.onClick} className="m-topSearchIpt ipt">
        <View className="icon"></View>
        <View className="placeholder">搜索商品, 共13674款好物</View>
      </View>
    )
  }
}