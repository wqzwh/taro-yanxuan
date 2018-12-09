import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

import TopFix from '../../components/TopFix/index'
import GList from '../../components/List/index'
import BackTop from '../../components/BackTop/index';

import { ASSETSURL } from '../../public/constants'

export default class List extends Component {
  constructor() {
    this.state = {

    }
  }

  render () {
    const imgUrl = `${ASSETSURL}/img/list-banner.jpg`
    return (
      <View className='list-wrap'>
        <TopFix isFixed/>
        <View className='list-banner'>
          <Image src={imgUrl} />
        </View>
        <GList name='床品套件' desc='MUJI等品牌制造商出品'/>
        <BackTop/>
      </View>
    )
  }
}

