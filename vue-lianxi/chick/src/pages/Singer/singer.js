// 头像

// https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000
 export const getAvator = (mid='002J4UUk29y8BY')=>{
  return `https://y.gtimg.cn/music/photo_new/T001R300x300M000${mid}.jpg?max_age=2592000`
 }


// 歌手列表的数据
export const getData = (arrs)=>{
        // 将得到的数据像目标数据转化
      // hot  假设hot是一个已经存在的数组 将数据push进去
      // { title: Findex, list: [singerInfo] }
      let obj = { hot: { title: "hot", list: [] } };
      arrs.map((item, index) => {
        //提取有用的信息
        let { Findex, Fsinger_name, Fsinger_mid } = item;
        let singerInfo = { Findex, Fsinger_name, Fsinger_mid };
        //想数据中添加图片的数据
        // 处理图片的函数 
          singerInfo.avator = getAvator(Fsinger_mid)
        //  判断obj中是是否Findex 有 直接push 没有 创建新的数据结构
        if (index < 10) {
          obj.hot.list.push(singerInfo);
        }
        if (obj[Findex]) {
          obj[Findex].list.push(singerInfo);
        } else {
          obj[Findex] = { title: Findex, list: [singerInfo] };
        }
        return item;
      });
      // console.log(obj);
      // 将杂乱的字母按照顺序排列 要将hot 和 h 分来
      // 字典排列
      let hot = [];
      let other = [];
      for (const i in obj) {
        // 每个的key值
        if (i !== "hot" && i !== "9") {
          other.push(obj[i]);
        } else if (i === "hot") {
          hot.push(obj[i]);
        }
      }
      // console.log(other,hot)
      // 对象按照属性排序
      let order = other.sort((a, b) => {
        return a.title.charCodeAt() - b.title.charCodeAt();
      });
      // hot拼接 后面的
      let result = hot.concat(order)
      // console.log(result)
      return result
}