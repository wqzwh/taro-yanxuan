import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Logo extends Component {

  onClick = (e) => {
    console.log(e)
  }

  render () {
    return (
      <View onClick={this.onClick} className='logo'></View>
    )
  }
}

