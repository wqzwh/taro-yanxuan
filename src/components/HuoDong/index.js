import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Image, Text } from '@tarojs/components'
import './index.less'

import { ASSETSURL } from '../../public/constants'

export default class HuoDong extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hdImg: `${ASSETSURL}/img/hd.gif`
    }
  }

  render () {
    const { hdImg } = this.state
    const top1 = `${ASSETSURL}/img/hd_1.png`
    const top2 = `${ASSETSURL}/img/hd_2.png`
    const top3 = `${ASSETSURL}/img/hd_3.png`
    const bot1 = `${ASSETSURL}/img/hd_4.png`
    const bot2 = `${ASSETSURL}/img/hd_5.png`
    return (
      <View className='m-hd'>
        <View className='index-hd'>
          <Image src={hdImg} />
        </View>
        <View className='hd-wrap'>
          <View className='top'>
            <Image className='top1' src={top1} />
            <View className='top-r'>
              <Image src={top2} />
              <Image src={top3} />
            </View>
          </View>
          <View className='bot'>
            <Image src={bot1} />
            <Image src={bot2} />
          </View>
        </View>
      </View>
    )
  }
}

