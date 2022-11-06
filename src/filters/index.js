//01: 处理时间函数
export function fromData(time) {
  let num = Number(time)
  // 判断是否有小于10
  function addZero(value) {
    if (parseInt(value) < 10) {
      value = "0" + value
    }
    return value
  }
  //把毫秒数转化成具体日期   2021-06-04 00:00:00
  //参数 毫秒数  
  function formatMsToDate(ms) {
    if (ms) {
      var oDate = new Date(ms),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        // oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' +
        //   addZero(oMin) + ':' + addZero(oSen);
        oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay);
      return oTime;
    } else {
      return ""
    }
  }

  return formatMsToDate(num)
}


//02:处理了图片路径拼接
export function imgSplice(img) {
  return `http://192.168.43.209:${img}`
}



//处理了图片路径拼接
export function imgBgcsplice(img) {
  let imgs = img || "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202102%2F26%2F20210226073347_50f94.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670247493&t=57617974d1d6450e27baa661bf351057"


  if (imgs.slice(0, 4) == 'http') {
    return imgs
  } else {
    return `http://192.168.43.209:${imgs}`
  }


}