import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.less'

export default class Tab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tabData: [{
        value: 1,
        label: '推荐',
        selected: true
      },{
        value: 1,
        label: '居家'
      },{
        value: 1,
        label: '鞋包配饰'
      },{
        value: 1,
        label: '服装'
      },{
        value: 1,
        label: '电器'
      },{
        value: 1,
        label: '洗护'
      },{
        value: 1,
        label: '饮食'
      },{
        value: 1,
        label: '餐厨'
      }]
    }
  }
  render () {
    const scrollCon = this.tabData.map((post) => {
      return <View className="tab" key={post.value}>
        <Text className={post.selected ? 'txt selected' : 'txt'}>{post.label}</Text>
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