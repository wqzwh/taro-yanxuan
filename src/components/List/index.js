import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.less'

import Tags from '../Tags/index'
export default class GList extends Component {

  constructor(props) {
    super(...arguments)
    this.state = {
      listData: [
        {
          url: 'http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330',
          title: '猪莉·粉糖四件套',
          price: '399',
          type: 'new'
        },
        {
          url: 'http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330',
          title: '猪莉·粉糖四件套',
          price: '399',
          type: 'th'
        },
        {
          url: 'http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330',
          title: '猪莉·粉糖四件套',
          price: '399',
          type: 'new'
        },
        {
          url: 'http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330',
          title: '猪莉·粉糖四件套',
          price: '399',
          type: 'new'
        },
        {
          url: 'http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330',
          title: '猪莉·粉糖四件套',
          price: '399',
          type: 'new'
        },
        {
          url: 'http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330',
          title: '猪莉·粉糖四件套',
          price: '399',
          type: 'th'
        },
        {
          url: 'http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330',
          title: '猪莉·粉糖四件套',
          price: '399',
          type: 'new'
        },
        {
          url: 'http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330',
          title: '猪莉·粉糖四件套',
          price: '399',
          type: 'th'
        },
        {
          url: 'http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330',
          title: '猪莉·粉糖四件套',
          price: '399',
          type: 'new'
        }
      ]
    }
  }

  render() {
    const { listData } = this.state
    const listItem = listData.map((item, index) => {
      return <View className='list-item' key={index}>
        <View className='goods'>
          <Image src={item.url}/>
          <View className='goods-title'>{item.title}</View>
          <View className='goods-price'>¥{item.price}</View>
          <View className='tag-wrap'>
            {item.type === 'new' && <Tags tagName='新品' />}
            {item.type === 'th' && <Tags tagName='特惠' />}
          </View>
        </View>
      </View>
    })
    return (
      <View className='list-wrap'>
        <View className='list-top'>
          <View className='list-name'>{this.props.name}</View>
          <View className='list-desc'>{this.props.desc}</View>
        </View>
        <View className='list-goods'>
          {listItem}
        </View>
      </View>
    )
  }
}

GList.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string
}