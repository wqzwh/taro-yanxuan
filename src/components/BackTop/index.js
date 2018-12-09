import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'
import './index.less'
import { ASSETSURL } from '../../public/constants'

export default class BackTop extends Component {
  constructor(props) {
    super(...arguments)
  }
  onBackTop() {
    if (_isFunction(this.props.onBackTop)) {
      this.props.onBackTop()
    }
  }
  render() {
    const rootClass = classNames(
      'back-top',
      {
        'show': this.props.isShow
      }
    )
    const imgUrl = `${ASSETSURL}/img/back-top.png`
    return (
      <View className={rootClass} onClick={this.onBackTop.bind(this)}>
        <Image src={imgUrl}/>
      </View>
    )
  }
}

BackTop.propTypes = {
  isShow: PropTypes.bool
}