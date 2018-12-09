import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.less'

import Tags from '../Tags/index'
export default class GList extends Component {

  constructor(props) {
    super(...arguments)
    this.state = {

    }
  }

  render() {
    return (
      <View className='list-wrap'>
        <View className='list-top'>
          <View className='list-name'>{this.props.name}</View>
          <View className='list-desc'>{this.props.desc}</View>
        </View>
        <View className='list-goods'>
          <View className='list-item'>
            <View className='goods'>
              <Image src="http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330"/>
              <View className='goods-title'>猪莉·粉糖四件套</View>
              <View className='goods-price'>¥399</View>
              <View className='tag-wrap'>
                <Tags tagName='新品' />
                <Tags tagName='特惠' />
              </View>
            </View>
          </View>
          <View className='list-item'>
            <View className='goods'>
              <Image src="http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330"/>
              <View className='goods-title'>猪莉·粉糖四件套</View>
              <View className='goods-price'>¥399</View>
              <View className='tag-wrap'>
                <Tags tagName='新品' />
                <Tags tagName='特惠' />
              </View>
            </View>
          </View>
          <View className='list-item'>
            <View className='goods'>
              <Image src="http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330"/>
              <View className='goods-title'>猪莉·粉糖四件套</View>
              <View className='goods-price'>¥399</View>
              <View className='tag-wrap'>
                <Tags tagName='新品' />
                <Tags tagName='特惠' />
              </View>
            </View>
          </View>
          <View className='list-item'>
            <View className='goods'>
              <Image src="http://yanxuan.nosdn.127.net/4a00fd1035efe874d70d51dfc04c5cee.png?imageView&quality=65&thumbnail=330x330"/>
              <View className='goods-title'>猪莉·粉糖四件套</View>
              <View className='goods-price'>¥399</View>
              <View className='tag-wrap'>
                <Tags tagName='新品' />
                <Tags tagName='特惠' />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

GList.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string
}