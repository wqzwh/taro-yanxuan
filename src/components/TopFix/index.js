import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.less'
import WIcon from '../Icon/index'

export default class TopFix extends Component {

  constructor(props) {
    super(...arguments)
  }

  render() {
    const { isFixed } = this.props
    const rootClass = classNames(
      'top-wrap',
      {
        'top-fix': isFixed
      }
    )
    return (
      <View className={rootClass}>
        <View className='top-row'>
          <WIcon type='home'/>
          <WIcon type='logo'/>
          <View className='right'>
            <WIcon type='search'/>
            <WIcon type='cart'/>
          </View>
        </View>
      </View>
    )
  }
}

TopFix.propTypes = {
  isFixed: PropTypes.bool
}