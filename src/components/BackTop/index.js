import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'
import { ASSETSURL } from '../../public/constants'

export default class BackTop extends Component {
  render() {
    const imgUrl = `${ASSETSURL}/img/back-top.png`
    return (
      <View className='back-top'>
        <Image src={imgUrl}/>
      </View>
    )
  }
}

