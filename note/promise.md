#   Promise
1.  **异步请求/操作**
-   异步：操作之间没有任何关系，可以同时进行多个操作
-   同步：同时只能做一件事

2.  **优缺点**
-   异步缺点：代码更复杂
-   同步优点：代码简单
```
//异步操作读取数据
ajax('./banners',function(banner_data){
    ajax('./hotItems',function(hotItem_data){
            ajax('./slides',function(slide_data){
        },function(){alert("读取失败")})
    },function(){alert("读取失败")})
},function(){alert("读取失败")})
//同步操作数据
let banner_data=ajax_sync('./banners')
let hotItem_data=ajax_sync('./hotItems')
let slide_data=ajax_sync('./slides')
```
3.  **Promise——清除异步操作**
-   本质：用同步一样的方式写异步
-   用法：
*基本的封装ajax*
```
        let p1=new Promise(function(resolve,reject){
            //异步代码
            //resolve成功
            //reject失败
            $.ajax({
                url:'https://easy-mock.com/mock/5cadb508b56fc13f6206ad0e/example/arr.txt',
                type:'get',
                dataType:'json',
                success(arr){
                    resolve(arr)
                },
                error(err){
                    reject(err)
                }
            })
        })
        p1.then(function(){},function(){})
```
*Promise.all()函数*
```
        let p1=new Promise(function(resolve,reject){
            //异步代码
            //resolve成功
            //reject失败
            $.ajax({
                url:'https://easy-mock.com/mock/5cadb508b56fc13f6206ad0e/example/arr.txt',
                type:'get',
                dataType:'json',
                success(arr){
                    resolve(arr)
                },
                error(err){
                    reject(err)
                }
            })
        })

        let p2=new Promise(function(resolve,reject){
            $.ajax({
                url:'https://easy-mock.com/mock/5cadb508b56fc13f6206ad0e/example/json.txt',
                dataType:'json',
                type:'get',
                success:function(data){
                    resolve(data)
                },
                error:function(err){
                    reject(err)
                }
            })
        })
        Promise.all([p1,p2]).then(function(arr){
            let [res1,res2]=arr
            console.log(res1,res2)
        },function(){
            alert("至少一个失败")
        })
```
*通用封装*
```
        function createPromise(url){
            return new Promise(function(resolve,reject){
            //异步代码
            //resolve成功
            //reject失败
            $.ajax({
                url:url,
                type:'get',
                dataType:'json',
                success(arr){
                    resolve(arr)
                },
                error(err){
                    reject(err)
                }
            })
        })
        }
        Promise.all([createPromise("https://easy-mock.com/mock/5cadb508b56fc13f6206ad0e/example/arr.txt"),createPromise("https://easy-mock.com/mock/5cadb508b56fc13f6206ad0e/example/json.txt")]).then(function(arr){
            let [res1,res2]=arr
            console.log(res1,res2)
        },function(){
            alert("至少一个失败")
        })
```
4.  有了promise之后的异步
```
Promise.all([$.ajax({]}),$.ajax({})]).then(
    results=>{
        //全部成功之后的操作
    },err=>{
        //失败
    }
)
```
5.  Promise其他用法
-   Promise.race() 竞速，与all区别是：只要有一个文件请求成功了就用谁，就会返回resolve
