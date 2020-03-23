// 深拷贝
//方法一：
    function deepCopy(o){
        if (typeof o !== 'object') return;
        let newObj = o instanceof Array?[]:{};
        for (var key in o){
            if(o.hasOwnProperty(key)){
                newObj[key] = typeof o[key]==='object'?deepCopy(o[key]):o[key];
            }
        }
        return newObj;
    }

//方法二：
    function deepClone(obj={}){
        if(typeof obj !=='object' || typeof obj=='null'){
            return obj;
        }
        let result = obj instanceof Array?[]:{}
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                result[key]=deepClone(obj[key]);
            } 
        }
        return result;
    }


// 浅拷贝
    function shallowCopy(o){
        if(typeof o !=='object') return;
        let newObj = o instanceof Array?[]:{};
        for(var key in o){
            if(o.hasOwnProperty(key)){
                newObj[key]=o[key]
            }
        }
        return newObj;
    }

//防抖：函数需要被频繁触发，在一段时间内，函数只执行最后一次
    function deounce(fn,delay){
        var timer = null;
        return function(){
            clearTimeOut(timer);
            timer = setTimeOut(function(){
                fn.call(this)
            },delay);
        }
    }

//节流
    function throttle (fn,delay){
        var lastTime = 0;
        return function(){
            var nowTime = Date.now();
            if(nowTime-lastTime>delay){
                fn();
                lastTime=nowTime
            }
        }
    }

// 数组去重
//方法一：
    function unquied(){
        var res = [];
        for(var i = 0,arrayLen = array.length;i<arrayLen;i++){
            var item = array[i];
            if(res.indexOf(item)===-1){
                res.push(item);
            }
        }
        return res;
    }
//方法二：
    const newArr = [...new Set(arr)];

// 求数组的最大值（reduce）
    // 方案一：
    array=[1,2,3,4,5];
    function max (prev,next){
        return Math.max(prev,next)
    }
    const maxNumber = array.reduce(max);

    // 方案二（解构赋值）
    const maxNum = Math.max(...array);

    // 方案三：（apply）
    const maxValue = Math.max.apply(null,array);

// 数组排序
// 方案一：自带sort函数
    const a =[1,6,33,23,11,55,33];
    function mySort(x,y){
        if(x>y){
            return 1
        }else if(x<y){
            return -1
        }else if(x===y){
            return 0
        }
    }
    a.sort(mySort);

//方法二（冒泡排序）：
    function mySort(arr = []) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

// 反转数组：
    function myreverse(arr){
        for(let i = 0;i<arr.length/2;i++){
            var temp = arr[i];
            arr[i]=arr[a.length-1-i];
            arr[arr.length-1-i]=temp;
        }
        return arr;
    }

//数组扁平化：
    let a = [1,2,2,3,[5,4,6,[7,8]]];//将此数组扁平化，并最终得到一个升序不重复数组
//方法一：es6中flat()方法：
        let newArr = [...new Set(a.flat(infinity)).sort((x,y)=>x-y)]; //[1,2,3,4,5,6,7,8];

//方法二：将数组转化成为字符串
       let newArr= [...new Set(a.toString().split(',').map(item=>Number(item)))] //[1,2,3,4,5,6,7,8];s

// 实现(5).add(3).minus(2)等于6
    Number.prototype.add=function(n){
        return this+n
    }
    Number.prototype.minus=function(n){
        return this-n
    }
    const number = (5).add(3).minus(2);

// 将字符串‘aBC’大小写互换换成‘Abc’
    let str='aBc'
    const newStr = str.replace(/[a-zA-Z]/g,function(item){
        return item.toUpperCase()===item?item.toLowerCase():item.toUpperCase();
    })

//反转字符串：
    function strReverse(a=''){
        const b = a.split('').reverse().join('');
        return b;
    }

//将给定字符串转化为驼峰表示法：
    function toString(str) {
        var arr = str.split('-');
        arr.map((value, index) => {
            if (index !== 0) {
                arr[index] = value.charAt(0).toUpperCase() + value.substr(1, value.length - 1);
            }
        });
        return arr.join('');
    }

// 将url问号后的参数获取并解析成数组
    const url = 'www.baidu.com?a=1&b=2&c=3';
    function queryUrlParameter(str){
        let obj={};
        if (str.indexOf('?')<0) return obj;
        let parameter = str.split('?')[1];
        let arr = parameter.split('&');
        for(let i=0;i<arr.length;i++){
            let queryArr = arr[i].split('=');
            obj[queryArr[0]]=queryArr[1];
        }
        return obj;
    }
    console.log(queryUrlParameter(url));

//判断两个对象是否相等


//函数可里化:
   








