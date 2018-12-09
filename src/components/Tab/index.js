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
        value: 2,
        label: '居家'
      },{
        value: 3,
        label: '鞋包配饰'
      },{
        value: 4,
        label: '服装'
      },{
        value: 5,
        label: '电器'
      },{
        value: 6,
        label: '洗护'
      },{
        value: 7,
        label: '饮食'
      },{
        value: 8,
        label: '餐厨'
      }]
    }
  }
  selected(item, e) {
    const { tabData } = this.state
    for(let v of tabData) {
      if(v.value === item.value) {
        v.selected = true
      } else {
        v.selected = false
      }
    }
    this.setState({
      leftNav: this.state.tabData
    })
  }
  render () {
    const scrollCon = this.tabData.map((item) => {
      return <View className="tab" key={item.value} onClick={this.selected.bind(this, item)}>
        <Text className={item.selected ? 'txt selected' : 'txt'}>{item.label}</Text>
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