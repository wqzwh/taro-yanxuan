import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

import Logo from '../../components/Logo/index'
import Search from '../../components/Search/index'
import Tab from '../../components/Tab/index'
import Banner from '../../components/Banner/index'
import KingkongCarousel from '../../components/KingkongCarousel/index'
import HuoDong from '../../components/HuoDong/index';
import WIcon from '../../components/Icon/index'
import FloorHeader from '../../components/FloorHeader/index'
import FacturersSupplying from '../../components/FacturersSupplying/index'
import FloorNewHeader from '../../components/FloorNewHeader/index'
import GoodGrid from '../../components/GoodGrid/index'

import API from './api'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    this.state = { 
      bannerList:  []
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.getBanner()
    this.getProducts()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /** 
   * 
   * 获取banner数据
   * 
  */
  getBanner() {
    API.getBanner().then((res) => {
      if(res.code !== 200) return
      this.setState({
        bannerList: res.data
      })
    })
  }

  /** 
   * 
   * 获取商品数据
   * 
  */
  getProducts() {
    API.getProducts().then((res) => {
      // if(res.code !== 200) return
      console.log(res)
    })
  }

  render () {
    return (
      <View className='m-index'>
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
        <View className="m-indexFloor">
          <Banner data={this.state.bannerList}/>
          <View className="m-indexServicePolicy">
            <View className="g-grow">
              <View className="item">
                <WIcon/>
                <Text className="text">网易自营品牌</Text>
              </View>
              <View className="item">
                <WIcon/>
                <Text className="text">30天无忧退货</Text>
              </View>
              <View className="item">
                <WIcon/>
                <Text className="text">48小时快速退款</Text>
              </View>
            </View>
          </View>
        </View>
        <KingkongCarousel/>
        <HuoDong/>
        <View className="m-indexFloor">
          <FloorHeader/>
          <FacturersSupplying/>
        </View>
        <View className="m-indexFloor m-newItems">
          <FloorNewHeader/>
          <GoodGrid/>
        </View>
      </View>
    )
  }
}

