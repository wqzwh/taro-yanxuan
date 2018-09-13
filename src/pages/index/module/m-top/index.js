import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Logo from '../../../../components/Logo/index'
import Search from '../../../../components/Search/index'
import Tab from '../../../../components/Tab/index'


export default class MTop extends Component {

  onClick = (e) => {
    console.log(e)
  }

  render () {
    return (
      <View className="hdWraper">
        <View className="m-hd">
          <View className="m-indexHd">
            <View className="line">
              <Logo/>
              <Search/>
            </View>
            <Tab/>
          </View>
        </View>
      </View>
    )
  }
}

