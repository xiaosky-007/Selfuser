const baseUrl = 'https://ecc.xzfclub.com:13306/log/' 
const API_pkey = '3b5949e0c26b87767a4752a276de9570'
let _this = this 

var return_code = {
    success_code: 200,
    error_code: '1',
    log_over: 500
}
const comIds = '5gVsGCjVG93y1Q5Fc/mgOA=='  // 100

//整理参数验签
function paramSort(data) {
    var newkey = Object.keys(data).sort();
    var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
    var newString = '';
    for (var i = 0; i < newkey.length; i++) { //遍历newkey数组
        newObj[newkey[i]] = data[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
        newString += newObj[newkey[i]]
    }
    return newString
}

function HTTPrequests(url, data) {
    url = encodeURI(baseUrl + url)
   
    if (!data || data == null) {
        data = {};
    }
    
    return axios.post(url, _this.Qs.stringify(data)).then(res => {
        
        if (res.data.code == return_code.log_over) {
            // if(window.confirm('登录已过期,请重新登录')){
            //alert("确定");
            alert(res.data.msg)
            return
        }
        var requestData = res.data
        return requestData
    }).catch(error => {
        console.log('请求失败:')
        console.log(error)
        // window.sessionStorage.removeItem('sessionId')
        // router.push('/login')
    })
}

//登录
function loadLogCount(data) {
    return HTTPrequests('loadLogCount', data)
}

function loadFailLog(data) {
    return HTTPrequests('loadFailLog', data)
}
function loadErrorLog(data) {
    return HTTPrequests('loadErrorLog', data)
}
function loadInitLog(data) {
    return HTTPrequests('loadInitLog', data)
}

