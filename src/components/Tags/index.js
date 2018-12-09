import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.less'

export default class Tags extends Component {
  constructor(props) {
    super(...arguments)
    this.state = {

    }
  }
  render() {
    return (
      <Text className='tags'>{this.props.tagName}</Text>
    )
  }
}

Tags.propTypes = {
  tagName: PropTypes.string
}