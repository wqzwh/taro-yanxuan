import Taro, { Component } from '@tarojs/taro'
import { View, Image, ScrollView } from '@tarojs/components'
import './index.less'
import WIcon from '../Icon/index'

export default class GoodGrid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tabData: [{
        value: 1,
        label: '推荐'
      },{
        value: 1,
        label: '推荐'
      },{
        value: 1,
        label: '推荐'
      },{
        value: 1,
        label: '推荐'
      },{
        value: 1,
        label: '推荐'
      }]
    }
  }

  render () {
    const scrollCon = this.tabData.map((post) => {
      return <View className="item" key={post.value}>
        <View className="hd">
          <View className="wraper">
            <Image className="wrap-img" src="http://yanxuan.nosdn.127.net/a10ed5c19533c9e1e2abf1d8cb843c24.png?imageView&quality=65&thumbnail=330x330"/>
          </View>
        </View>
        <View className="name">
          仲秋·拾月 锦时趣蛋黄酥礼盒 60克*8
        </View>
        <View className="newItemDesc">
          外酥里润，咸甜有味
        </View>
        <View className="price">
          ¥122
        </View>
      </View>
    })
    return (
      <View className='m-goodGrid m-goodGrid-newItem'>
        <View className="inner">
          <ScrollView
            className='list'
            scrollX
            scrollWithAnimation
            scrollLeft='0'
            style='width: 100%'>
            {scrollCon}
          </ScrollView>
        </View>
      </View>
    )
  }
}

