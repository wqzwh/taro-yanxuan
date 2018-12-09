import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.less'
import WIcon from '../Icon/index'

export default class CartTools extends Component {

  constructor(props) {
    super(...arguments)
  }

  render() {
    const { isFixed } = this.props
    const rootClass = classNames(
      'tools-wrap',
      {
        'tools-fix': isFixed
      }
    )
    return (
      <View className={rootClass}>
        <View className='tools-row'>
          <Button className='btn kefu'>
            <WIcon type='detail-kefu'/>
          </Button>
          <Button className='btn pay'>立即购买</Button>
          <Button className='btn cart'>加入购物车</Button>
        </View>
      </View>
    )
  }
}

CartTools.propTypes = {
  isFixed: PropTypes.bool
}