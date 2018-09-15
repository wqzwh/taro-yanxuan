import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Icon extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <View className={`u-icon u-icon-${this.props.type}`}></View>
    )
  }
}

