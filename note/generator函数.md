#   generator   生成器，函数
-   普通函数
    -   一路到底
-   generator函数
    -   中间能暂停
-   使用场景
    -   请求数据
    ```
    function 函数(){
        //code
        ajax(xx,function(){
            //code回调方式
        })
        //code
    }
    function *函数(){
        //code
        yield ajax(xxx)
        //yield将整个生成函数分割成若干个普通小函数，通过next()依次执行函数
        //code
    }
    ```
#   yield
-   传参
```
        function *show(){
            alert(1)
            let a=yield
            alert(2)
        }
        let gen=show()
        //如果第一个next想要传参的话直接同正常函数一样
        function *show(num1,num2){
            alert(`${num1},${num2}`)
            alert(1)
            let a=yield
            alert(2)
        }
        let gen=show()
        let gen=show(99,88)
        gen.next(12)//第一个next没法给yield传参
        gen.next(5)
```
![yield传参执行过程](./img/yield.png)

-   返回
```
        function *show(){
            alert('a')
            yield 12
            alert('b')
        }
        let gen=show()
        res1=gen.next()
        console.log(res1)//{value:12,done:false}
        res2=gen.next()
        console.log(res2)//{value:undefined(取决于函数体中的return值),done:true}
```