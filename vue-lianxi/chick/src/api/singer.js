import axios from '../utils/axios.js'
import jsonp from 'jsonp'

// 获取总的混乱的歌手的信息 请求的方式是jsonp
export const singerList = ()=>{
  return new Promise((resolve,reject)=>{
    let url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq'
    // &jsonpCallback=jp0
    // 错误的回调优先  
    jsonp(url,{param:'jsonpCallback'},(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
     
  })
}


// 获取detail 页面的歌手的所有的歌单

// https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=002J4UUk29y8BY&jsonpCallback=jp1

export const getDetail = (mid)=>{
  return new Promise((resolve,reject)=>{
    let url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=${mid}`
    // &jsonpCallback=jp1
    jsonp(url,{param:'jsonpCallback'},(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}



// 每首歌专辑的图片
// https://y.gtimg.cn/music/photo_new/T002R300x300M000000MKKJW0TJaQf.jpg?max_age=2592000
// albmmid
export const getAlbummid=(mid)=>{
  return  `https://y.gtimg.cn/music/photo_new/T002R300x300M000${mid}.jpg?max_age=2592000`
}

//去qq 音乐获取真实的url 地址

export const getSongPurl = ()=>{
  return new Promise((resolve,reject)=>{
    let url = '/hehe/cgi-bin/musics.fcg'
    let data={
      "-":"getplaysongvkey9362879388627472",
      "g_tk": 5381,
      "loginUin": 0,
      "hostUin": 0,
      "format": "json",
      "inCharset": "utf8",
      "outCharset": "utf-8",
      "notice": 0,
      "platform": "yqq.json",
      "needNewCode": 0,
      "data":{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"5728840647","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"5728840647","songmid":["001Qu4I30eVFYb"],"songtype":[0],"uin":"1318839214","loginflag":1,"platform":"20"}},"comm":{"uin":1318839214,"format":"json","ct":24,"cv":0}}
    }
    axios.get(url,{params:data})
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

