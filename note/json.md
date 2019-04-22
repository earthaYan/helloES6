#   json
##  JSON对象
-   JSON.stringfy(json对象)
-   JSON.parse(json字符串)
##  JSON简写
-   key和value一样可以简写
```
    let a=2,b=5
    let json2={a:a,b:b}==>{a,b}
```
-   方法存在的话:和function一起删掉
···
        let json2={
            a:a,
            b:b,
            show(){
                alert(this.a)
            }
        }
···
##  JSON字符串标准写法
1.  只能用双引号
2.  所有的key必须用双引号标起来
`'{"a":12,"b":5}'`