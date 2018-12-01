import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Image, Text } from '@tarojs/components'
import './index.less'

import { ASSETSURL } from '../../public/constants'

export default class KingkongCarousel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      navList: [{
        icon: `${ASSETSURL}/img/1.png`,
        txt: '居家'
      },{
        icon: `${ASSETSURL}/img/2.png`,
        txt: '鞋包服饰'
      },{
        icon: `${ASSETSURL}/img/3.png`,
        txt: '服装'
      },{
        icon: `${ASSETSURL}/img/4.png`,
        txt: '电器'
      },{
        icon: `${ASSETSURL}/img/5.png`,
        txt: '婴童'
      },{
        icon: `${ASSETSURL}/img/6.png`,
        txt: '饮食'
      },{
        icon: `${ASSETSURL}/img/7.png`,
        txt: '洗护'
      },{
        icon: `${ASSETSURL}/img/8.png`,
        txt: '餐厨'
      },{
        icon: `${ASSETSURL}/img/9.png`,
        txt: '文本'
      },{
        icon: `${ASSETSURL}/img/10.png`,
        txt: '超级会员'
      }]
    }
  }

  render () {
    const { navList } = this.state
    const listItems = navList.map((item, index) => {
      return <Navigator key={index} className='nav-style'>
              <View className='kingkong-item'>
                <View className='icon'>
                  <Image src={item.icon}/>
                </View>
                <View className='txt'>{item.txt}</View>
              </View>
            </Navigator>
    })
    return (
      <View className='m-kingKongModule'>
        <View className='swiper-container'>
          <View className='swiper-wrapper'>
            <View className='swiper-slide'>
              {listItems}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

