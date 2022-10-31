// 处理时间函数
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


//处理了图片路径拼接
export function imgSplice(img) {
  return `http://192.168.43.209:${img}`
}