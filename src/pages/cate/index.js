import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

import Search from '../../components/Search/index'
import { ASSETSURL } from '../../public/constants'

export default class Cate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftNav: [{
        value: 1,
        label: '12.12专区',
        selected: true
      },{
        value: 1,
        label: '冬季专区'
      },{
        value: 1,
        label: '爆品专区'
      },{
        value: 1,
        label: '新品专区'
      },{
        value: 1,
        label: '居家'
      },{
        value: 1,
        label: '鞋包服饰'
      },{
        value: 1,
        label: '服装'
      },{
        value: 1,
        label: '电器'
      },{
        value: 1,
        label: '服装'
      },{
        value: 1,
        label: '洗护'
      },{
        value: 1,
        label: '饮食'
      },{
        value: 1,
        label: '餐厨'
      }],
      banner: `${ASSETSURL}/img/cate.jpg`,
      cateList: [{
        icon: `${ASSETSURL}/img/cate1.png`,
        txt: '类目1'
      },{
        icon: `${ASSETSURL}/img/cate2.png`,
        txt: '类目3'
      },{
        icon: `${ASSETSURL}/img/cate3.png`,
        txt: '类目2'
      }]
    }
  }
  render () {
    const leftNavItem = this.leftNav.map((item) => {
      return <View className={item.selected ? 'cate-left-item selected' : 'cate-left-item'} key={item.value}>{item.label}</View>
    })
    const cateListItem = this.cateList.map((item) => {
      return <View className='item' key={item.value}>
      <Image src={item.icon} />
      <View className='txt'>{item.txt}</View>
    </View>
    })
    return (
      <View className='cate-wrap'>
        <View className='cate-top-search'>
          <Search className='search-wrap'/>
        </View>
        <View className='cate-left'>
          <View className='item-wrap'>
            {leftNavItem}
          </View>
        </View>
        <View className='cate-right'>
          <View className='banner'>
            <Image src={banner} />
          </View>
          <View className='cate-right-wrap'>
            {cateListItem}
          </View>
        </View>
      </View>
    )
  }
}

