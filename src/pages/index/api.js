import { WxHttp } from '../../public/wxHttp'

export default {
  // 获取banner数据
  getBanner: (params = {}) => WxHttp.get('/index/banner', params),
}