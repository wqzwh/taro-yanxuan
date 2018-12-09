import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import WIcon from '../Icon/index'

export default class TopFix extends Component {

  render () {
    return (
      <View className='top-fix-wrap'>
        <View className='top-fix-row'>
          <WIcon type='home'/>
          <WIcon type='logo'/>
          <View className='right'>
            <WIcon type='search'/>
            <WIcon type='cart'/>
          </View>
        </View>
      </View>
    )
  }
}

