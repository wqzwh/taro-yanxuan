import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

import TopFix from '../../components/TopFix/index'
import BackTop from '../../components/BackTop/index'
import CartTools from '../../components/CartTools/index';

import { ASSETSURL } from '../../public/constants'

export default class Detail extends Component {
  constructor() {
    this.state = {
      detailData: [
        {
          url: `${ASSETSURL}/img/detail-1.jpg`
        },
        {
          url: `${ASSETSURL}/img/detail-2.jpg`
        }
      ],
      current: 0,
      isShow: false
    }
  }

  animationfinish(e) {
    this.setState({
      current: e.detail.current
    })
  }

  onPageScroll({scrollTop}) {
    const { isShow } = this.state
    if(scrollTop > 300 && !isShow) {
      this.setState({
        isShow: true
      })
    } else {
      if(scrollTop < 300 && isShow) {
        this.setState({
          isShow: false
        })
      }
    }
  }

  onBackTop() {
    Taro.pageScrollTo({
      scrollTop: 0
    })
  }

  render () {
    const { detailData } = this.state
    const listItems = detailData.map((item, index) => {
      return <SwiperItem key={index}>
              <View className='swiper-banner'>
                <Image src={item.url}/>
              </View>
            </SwiperItem>
    })
    return (
      <View className='detail-wrap'>
        <TopFix isFixed/>
        <View className='swiper-wrap'>
          <Swiper 
            className='swiper-bd' 
            current={this.state.current}
            onAnimationfinish={this.animationfinish.bind(this)}>
            {listItems}
          </Swiper>
          <View className='swiper-pagination'>
            <View className='current-total'>{this.state.current + 1}/{this.state.detailData.length}</View>
          </View>
        </View>
        <View className='detal-con'>
          <View><Image src="http://yanxuan.nosdn.127.net/cca70131c2f32fa981b266d38c89f38c.jpg" _src="http://yanxuan.nosdn.127.net/cca70131c2f32fa981b266d38c89f38c.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/d2ba7d186e8ca8c552675430edba5f16.jpg" _src="http://yanxuan.nosdn.127.net/d2ba7d186e8ca8c552675430edba5f16.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/8c6618e1fc2930251bbb780c08958a41.jpg" _src="http://yanxuan.nosdn.127.net/8c6618e1fc2930251bbb780c08958a41.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/16820848d1f35b95891390db41a6f441.jpg" _src="http://yanxuan.nosdn.127.net/16820848d1f35b95891390db41a6f441.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/86aa7b8af448a73af12db8d72a0888a4.jpg" _src="http://yanxuan.nosdn.127.net/86aa7b8af448a73af12db8d72a0888a4.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/c093dfbbefdda8f8be22d3e66814036b.jpg" _src="http://yanxuan.nosdn.127.net/c093dfbbefdda8f8be22d3e66814036b.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/0514979a88b6568b7cd2786854ba7433.jpg" _src="http://yanxuan.nosdn.127.net/0514979a88b6568b7cd2786854ba7433.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/787942f1d037517b4aa38a5704b70157.jpg" _src="http://yanxuan.nosdn.127.net/787942f1d037517b4aa38a5704b70157.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/a511c17045b4bdbef7a71c63e99ab89c.jpg" _src="http://yanxuan.nosdn.127.net/a511c17045b4bdbef7a71c63e99ab89c.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/d1b7eb4c6be547b02f01f910bcfe843b.jpg" _src="http://yanxuan.nosdn.127.net/d1b7eb4c6be547b02f01f910bcfe843b.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/97c29035f04f3912faf1a18431904a00.jpg" _src="http://yanxuan.nosdn.127.net/97c29035f04f3912faf1a18431904a00.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/7132607e355988ee45e84717ecd59df8.jpg" _src="http://yanxuan.nosdn.127.net/7132607e355988ee45e84717ecd59df8.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/735c8c60fc8eb52d1e51b13c6f64659d.jpg" _src="http://yanxuan.nosdn.127.net/735c8c60fc8eb52d1e51b13c6f64659d.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/d96182593217e8682d6fe71da8d27538.jpg" _src="http://yanxuan.nosdn.127.net/d96182593217e8682d6fe71da8d27538.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/92f844580d3c9fed8b82b555faddd352.jpg" _src="http://yanxuan.nosdn.127.net/92f844580d3c9fed8b82b555faddd352.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/ff4c685654a77eb90ed4b28354a296ec.jpg" _src="http://yanxuan.nosdn.127.net/ff4c685654a77eb90ed4b28354a296ec.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/25b39ec8810ce59a37f1ebfef3614cd9.jpg" _src="http://yanxuan.nosdn.127.net/25b39ec8810ce59a37f1ebfef3614cd9.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/6d03785c213fa5a0810840ba8b610e89.jpg" _src="http://yanxuan.nosdn.127.net/6d03785c213fa5a0810840ba8b610e89.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/879562ba343069423d2af8868e434954.jpg" _src="http://yanxuan.nosdn.127.net/879562ba343069423d2af8868e434954.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/757519b2360a7c3559c7c362123315de.jpg" _src="http://yanxuan.nosdn.127.net/757519b2360a7c3559c7c362123315de.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/16beb1e8860da262b0159d4efd7dc1c6.jpg" _src="http://yanxuan.nosdn.127.net/16beb1e8860da262b0159d4efd7dc1c6.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/20997b29c36bf421f1b76050ab1682b9.jpg" _src="http://yanxuan.nosdn.127.net/20997b29c36bf421f1b76050ab1682b9.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/dd148fa5add9262e6f2c7c16c77349ce.jpg" _src="http://yanxuan.nosdn.127.net/dd148fa5add9262e6f2c7c16c77349ce.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/1e67391537a0f245d5573c3a98fcce41.jpg" _src="http://yanxuan.nosdn.127.net/1e67391537a0f245d5573c3a98fcce41.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/5b212c56e861c94bdeedf2859ea235a9.jpg" _src="http://yanxuan.nosdn.127.net/5b212c56e861c94bdeedf2859ea235a9.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/0dc2f69256a56ee9c78e158e73e2dc68.jpg" _src="http://yanxuan.nosdn.127.net/0dc2f69256a56ee9c78e158e73e2dc68.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/72ef3b69497d7ec6117c4fa6db643ed5.jpg" _src="http://yanxuan.nosdn.127.net/72ef3b69497d7ec6117c4fa6db643ed5.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/dbbbcb469695ca5c27b5c35ce5f51327.jpg" _src="http://yanxuan.nosdn.127.net/dbbbcb469695ca5c27b5c35ce5f51327.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/f846972b6762aebabfaa93364a2e4a0e.jpg" _src="http://yanxuan.nosdn.127.net/f846972b6762aebabfaa93364a2e4a0e.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/3e7c6a2f2beb6d714ec1b4fb62bd801a.jpg" _src="http://yanxuan.nosdn.127.net/3e7c6a2f2beb6d714ec1b4fb62bd801a.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/9448b5b4d70cdf42e321e5dd0f5a1354.jpg" _src="http://yanxuan.nosdn.127.net/9448b5b4d70cdf42e321e5dd0f5a1354.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/36a4526682a780c7e318de5cca0ddc98.jpg" _src="http://yanxuan.nosdn.127.net/36a4526682a780c7e318de5cca0ddc98.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/607461923e1b91686e1a7451f924cf1c.jpg" _src="http://yanxuan.nosdn.127.net/607461923e1b91686e1a7451f924cf1c.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/01b08572e1f8f7c81f42a38cbecf7aec.jpg" _src="http://yanxuan.nosdn.127.net/01b08572e1f8f7c81f42a38cbecf7aec.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/e5357004352d59408a261d3623fa6db4.jpg" _src="http://yanxuan.nosdn.127.net/e5357004352d59408a261d3623fa6db4.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/d78e455496f2d8ce08ee2f6ffeeceef6.jpg" _src="http://yanxuan.nosdn.127.net/d78e455496f2d8ce08ee2f6ffeeceef6.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/3a12f91febf3e6f0de82e1e36f1fd189.jpg" _src="http://yanxuan.nosdn.127.net/3a12f91febf3e6f0de82e1e36f1fd189.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/b5ef9709cefe5959381190dd48336ed4.jpg" _src="http://yanxuan.nosdn.127.net/b5ef9709cefe5959381190dd48336ed4.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/6834026aaef2523ae52dd5476ca97d98.jpg" _src="http://yanxuan.nosdn.127.net/6834026aaef2523ae52dd5476ca97d98.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/2c1b40d85e173410338ba7f8f78fdf6d.jpg" _src="http://yanxuan.nosdn.127.net/2c1b40d85e173410338ba7f8f78fdf6d.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/7a6ff63ef52dc8d0367186228ec3ccd9.jpg" _src="http://yanxuan.nosdn.127.net/7a6ff63ef52dc8d0367186228ec3ccd9.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/a3f1e7d723fb10a2027fea9a43ed708f.jpg" _src="http://yanxuan.nosdn.127.net/a3f1e7d723fb10a2027fea9a43ed708f.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/8f37d538720167a5101b416b92867d67.jpg" _src="http://yanxuan.nosdn.127.net/8f37d538720167a5101b416b92867d67.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/9ef3d4891fe981fd7d987fa1bd4fed48.jpg" _src="http://yanxuan.nosdn.127.net/9ef3d4891fe981fd7d987fa1bd4fed48.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/7a702909fb81a72d85678c1977c1bbd1.jpg" _src="http://yanxuan.nosdn.127.net/7a702909fb81a72d85678c1977c1bbd1.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/fc786a1d1f991a02756146d1fd4912fb.jpg" _src="http://yanxuan.nosdn.127.net/fc786a1d1f991a02756146d1fd4912fb.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/d12be9800d784c803dafc8a6269567e0.jpg" _src="http://yanxuan.nosdn.127.net/d12be9800d784c803dafc8a6269567e0.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/0814bfc11474065a5a34597d24ef1d6c.jpg" _src="http://yanxuan.nosdn.127.net/0814bfc11474065a5a34597d24ef1d6c.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/593121b3ffbcd3033fedb9324f2934fa.jpg" _src="http://yanxuan.nosdn.127.net/593121b3ffbcd3033fedb9324f2934fa.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/fb92aa7d48846c49dc5abacff3db8507.jpg" _src="http://yanxuan.nosdn.127.net/fb92aa7d48846c49dc5abacff3db8507.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/51f17afd7ae4ab84faaae6e04a860633.jpg" _src="http://yanxuan.nosdn.127.net/51f17afd7ae4ab84faaae6e04a860633.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/0b172a016ef7e62cae713115a40c6377.jpg" _src="http://yanxuan.nosdn.127.net/0b172a016ef7e62cae713115a40c6377.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/3114a532144c56b358eedabe9adf075b.jpg" _src="http://yanxuan.nosdn.127.net/3114a532144c56b358eedabe9adf075b.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/09dad662042f0c10f25d38004cbde232.jpg" _src="http://yanxuan.nosdn.127.net/09dad662042f0c10f25d38004cbde232.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/a9567ad83db0f9479b7cb6a9b7f5d161.jpg" _src="http://yanxuan.nosdn.127.net/a9567ad83db0f9479b7cb6a9b7f5d161.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/967516e341abd1e5042ecfdc635a8584.jpg" _src="http://yanxuan.nosdn.127.net/967516e341abd1e5042ecfdc635a8584.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/5d8e3d999fb3bc2b0406ef0fb5db0182.jpg" _src="http://yanxuan.nosdn.127.net/5d8e3d999fb3bc2b0406ef0fb5db0182.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/b10cc9445fb7f430a41849620bf8a94d.jpg" _src="http://yanxuan.nosdn.127.net/b10cc9445fb7f430a41849620bf8a94d.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/d50cfc8007b4bac348e349ffa78bc3e5.jpg" _src="http://yanxuan.nosdn.127.net/d50cfc8007b4bac348e349ffa78bc3e5.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/9e8144ccf011f25ad5aca4b834a656fa.jpg" _src="http://yanxuan.nosdn.127.net/9e8144ccf011f25ad5aca4b834a656fa.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/eca8925de9d08dade2ff4c4e69afed3b.jpg" _src="http://yanxuan.nosdn.127.net/eca8925de9d08dade2ff4c4e69afed3b.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/5eefd98438ee25db11d84ebc5b3c944e.jpg" _src="http://yanxuan.nosdn.127.net/5eefd98438ee25db11d84ebc5b3c944e.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/f8a8e6274e8fc30ac8d72790ccc1fb04.jpg" _src="http://yanxuan.nosdn.127.net/f8a8e6274e8fc30ac8d72790ccc1fb04.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/69c80e09576cccde24fa548736e90d99.jpg" _src="http://yanxuan.nosdn.127.net/69c80e09576cccde24fa548736e90d99.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/d3716bfa778e38917bda1e1d771a31a1.jpg" _src="http://yanxuan.nosdn.127.net/d3716bfa778e38917bda1e1d771a31a1.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/8f090ad22e36eed58d87b08ff6376ba6.jpg" _src="http://yanxuan.nosdn.127.net/8f090ad22e36eed58d87b08ff6376ba6.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/04e52187779512e7eebd5553af8cc630.jpg" _src="http://yanxuan.nosdn.127.net/04e52187779512e7eebd5553af8cc630.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/bc8169363cc03d8e321e30bf193d35db.jpg" _src="http://yanxuan.nosdn.127.net/bc8169363cc03d8e321e30bf193d35db.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/87e2bbb2068497e5960771a67c4012d0.jpg" _src="http://yanxuan.nosdn.127.net/87e2bbb2068497e5960771a67c4012d0.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/b1555b323f6f77e5dcedb5660a46ed71.jpg" _src="http://yanxuan.nosdn.127.net/b1555b323f6f77e5dcedb5660a46ed71.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/deff2ea53fb20ba7073ac72f263f1025.jpg" _src="http://yanxuan.nosdn.127.net/deff2ea53fb20ba7073ac72f263f1025.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/ea7ff17b74a0a9010b4039b999663cc4.jpg" _src="http://yanxuan.nosdn.127.net/ea7ff17b74a0a9010b4039b999663cc4.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/2e9874d8d6eb1ee1d7b0e5637be6761e.jpg" _src="http://yanxuan.nosdn.127.net/2e9874d8d6eb1ee1d7b0e5637be6761e.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/28ffaaad895070e0c74dcc31abc5378a.jpg" _src="http://yanxuan.nosdn.127.net/28ffaaad895070e0c74dcc31abc5378a.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/5fc15398a28963ae67ddb0972e0540e1.jpg" _src="http://yanxuan.nosdn.127.net/5fc15398a28963ae67ddb0972e0540e1.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/6405db227d95f2502d583918d30bb2de.jpg" _src="http://yanxuan.nosdn.127.net/6405db227d95f2502d583918d30bb2de.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/ff38dcf37f037b8a174946f3d5444343.jpg" _src="http://yanxuan.nosdn.127.net/ff38dcf37f037b8a174946f3d5444343.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/d4d7b742127af373f246d7c3db8765a8.jpg" _src="http://yanxuan.nosdn.127.net/d4d7b742127af373f246d7c3db8765a8.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/7d7c6be1d18b77fb60c9c0627b6116eb.jpg" _src="http://yanxuan.nosdn.127.net/7d7c6be1d18b77fb60c9c0627b6116eb.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/87a25e7bc34e64ef38aab39ff7304b1d.jpg" _src="http://yanxuan.nosdn.127.net/87a25e7bc34e64ef38aab39ff7304b1d.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/a4245c80915fac0b8aae2d2bc0edb831.jpg" _src="http://yanxuan.nosdn.127.net/a4245c80915fac0b8aae2d2bc0edb831.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/46ba74c1baf8846898df0884045270b4.jpg" _src="http://yanxuan.nosdn.127.net/46ba74c1baf8846898df0884045270b4.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/c3a014e207444539905b3e25fe4d3817.jpg" _src="http://yanxuan.nosdn.127.net/c3a014e207444539905b3e25fe4d3817.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/87745a079ea8b55a7b1ea16d0c2ba0e4.jpg" _src="http://yanxuan.nosdn.127.net/87745a079ea8b55a7b1ea16d0c2ba0e4.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/9669b70840b86214b5e3b4e326143bb2.jpg" _src="http://yanxuan.nosdn.127.net/9669b70840b86214b5e3b4e326143bb2.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/43a09d667a0a00d48c535d6588234044.jpg" _src="http://yanxuan.nosdn.127.net/43a09d667a0a00d48c535d6588234044.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/92865bd46621f8bd67a0941d9afbb6e7.jpg" _src="http://yanxuan.nosdn.127.net/92865bd46621f8bd67a0941d9afbb6e7.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/7dc1acdcbde47355db9dfeab79c865d9.jpg" _src="http://yanxuan.nosdn.127.net/7dc1acdcbde47355db9dfeab79c865d9.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/af17ff61a9a8c11c4e2d184659b202d0.jpg" _src="http://yanxuan.nosdn.127.net/af17ff61a9a8c11c4e2d184659b202d0.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/c74cf78fb57dd9419ec909e8e3fc0816.jpg" _src="http://yanxuan.nosdn.127.net/c74cf78fb57dd9419ec909e8e3fc0816.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/3e44114ac0cd4fb9726d6f43e9860bd1.jpg" _src="http://yanxuan.nosdn.127.net/3e44114ac0cd4fb9726d6f43e9860bd1.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/6aafb796942e075bc1396988fe06d224.jpg" _src="http://yanxuan.nosdn.127.net/6aafb796942e075bc1396988fe06d224.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/7371291b0dff48ab549cd276a84dbb05.jpg" _src="http://yanxuan.nosdn.127.net/7371291b0dff48ab549cd276a84dbb05.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/713c4ea349d58a39f4834f639566acf8.jpg" _src="http://yanxuan.nosdn.127.net/713c4ea349d58a39f4834f639566acf8.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/95a08f272d43bc786ef967ec396533dc.jpg" _src="http://yanxuan.nosdn.127.net/95a08f272d43bc786ef967ec396533dc.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/35ec176c9ed18509722b6e85efe5058e.jpg" _src="http://yanxuan.nosdn.127.net/35ec176c9ed18509722b6e85efe5058e.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/402db49f70055a3666e4c93b7458276a.jpg" _src="http://yanxuan.nosdn.127.net/402db49f70055a3666e4c93b7458276a.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/a0e644bc967e23a5a768d3e7b2c22f06.jpg" _src="http://yanxuan.nosdn.127.net/a0e644bc967e23a5a768d3e7b2c22f06.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/3ebbf721703f1a69478683bca79549c9.jpg" _src="http://yanxuan.nosdn.127.net/3ebbf721703f1a69478683bca79549c9.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/a0e1e62e6a11a35d62ca792c428102bb.jpg" _src="http://yanxuan.nosdn.127.net/a0e1e62e6a11a35d62ca792c428102bb.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/3f0b880791cf9f24ac729392aafbf2da.jpg" _src="http://yanxuan.nosdn.127.net/3f0b880791cf9f24ac729392aafbf2da.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/fc94701399fc6e6fd47e8b6c17814cb0.jpg" _src="http://yanxuan.nosdn.127.net/fc94701399fc6e6fd47e8b6c17814cb0.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/9db1ce616709dfa2c6c2c342c42c1100.jpg" _src="http://yanxuan.nosdn.127.net/9db1ce616709dfa2c6c2c342c42c1100.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/4e559839a63353c5a491098006dde274.jpg" _src="http://yanxuan.nosdn.127.net/4e559839a63353c5a491098006dde274.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/2be43ddc03362e9694c289ce40040a9f.jpg" _src="http://yanxuan.nosdn.127.net/2be43ddc03362e9694c289ce40040a9f.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/512d538ebc7dca777ac6e18da5da2597.jpg" _src="http://yanxuan.nosdn.127.net/512d538ebc7dca777ac6e18da5da2597.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/7a02239b356367f81ee6afed493432ca.jpg" _src="http://yanxuan.nosdn.127.net/7a02239b356367f81ee6afed493432ca.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/6aa348b8268d41cc15c4b64129d83246.jpg" _src="http://yanxuan.nosdn.127.net/6aa348b8268d41cc15c4b64129d83246.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/6fc763ffcb97ce199a4b5a92e87729bd.jpg" _src="http://yanxuan.nosdn.127.net/6fc763ffcb97ce199a4b5a92e87729bd.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/d3dedff21454f674c28a26d9a99dbf18.jpg" _src="http://yanxuan.nosdn.127.net/d3dedff21454f674c28a26d9a99dbf18.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/cdb73a18d481d87ef38e1fb38b5a3477.jpg" _src="http://yanxuan.nosdn.127.net/cdb73a18d481d87ef38e1fb38b5a3477.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/58a942c72f49959c50fd7a24f34c685b.jpg" _src="http://yanxuan.nosdn.127.net/58a942c72f49959c50fd7a24f34c685b.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/86d29819d87e9d7a766c59cb5d796db9.jpg" _src="http://yanxuan.nosdn.127.net/86d29819d87e9d7a766c59cb5d796db9.jpg" style="" /></View>
          <View><Image src="http://yanxuan.nosdn.127.net/1e88cd8d8486d4bd99351c2bdeffd151.jpg" _src="http://yanxuan.nosdn.127.net/1e88cd8d8486d4bd99351c2bdeffd151.jpg" style="" /></View>
        </View>
        <CartTools isFixed/>
        <BackTop isShow={isShow} onBackTop={this.onBackTop.bind(this)}/>
      </View>
    )
  }
}

