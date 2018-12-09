import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'

import './index.less'

import { ASSETSURL } from '../../public/constants'
import WIcon from '../Icon/index'

export default class Modal extends Component {

  constructor(props) {
    super(...arguments)
    const { isOpened } = props
    this.state = {
      _isOpened: isOpened
    }
  }

  onClose(e) {
    if (_isFunction(this.props.onClose)) {
      this.props.onClose()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isOpened } = nextProps
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
    }
  }

  render() {
    const { _isOpened } = this.state
    const rootClass = classNames(
      'modal-wrap',
      {
        'modal-wrap-open': _isOpened
      }
    )
    const bgImg = `background-image: url('${ASSETSURL}/img/modal-bg.png') no-repeat`
    return (
      <View className={rootClass}>
        <View className='mask' onClick={this.onClose.bind(this)}></View>
        <View className='icon-wrap' onClick={this.onClose.bind(this)}>
          <WIcon className='close' type='modalClose'/>
        </View>
        <View className='wrap'>
          <View className='modal' style={bgImg}></View>
        </View>
      </View>
    )
  }
}

Modal.propTypes = {
  isOpened: PropTypes.bool
}

