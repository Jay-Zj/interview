    console.log(1<2<3) //true
    console.log(3>2>1) //false

    console.log(1==true) //true
    console.log(1===true) //false
    console.log(0.1+0.2===0.3)//false(经典)

    console.log(0.1+0.2) //0.30000000000000004
    console.log(0.1+1.1) //1.2000000000000002
    console.log(1.1+1.2) //2.3
    console.log(1.1+1) // 2.1
    console.log(1+1) //2

    function foo(){
        var a = b =2;
    }
    解析：一般来说，等号赋值的方向是从右至左，上述写法等同于：
    function foo(){
        b =2;
        var a =b;
        //因此a是局部变量，外部不可访问,b是全局变量
    }
    console.log(a) //报错
    console.log(b) //2

    当变量提升时，变量和函数名重名了，一般而言函数优先，会将函数赋给变量值

    手写代码题：
        防抖，节流，实现call,bind,call,数组去重，数组排序,深拷贝，浅拷贝S