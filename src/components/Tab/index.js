import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.less'

export default class Tab extends Component {

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

  onClick = (e) => {
    console.log(e)
  }

  render () {
    const scrollCon = this.tabData.map((post) => {
      return <View className="tab" key={post.value}>
        <Text className="txt">{post.label}</Text>
      </View>
    })
    return (
      <View className='m-tabs'>
        <View className="m-tabs-bd">
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
      </View>
    )
  }
}