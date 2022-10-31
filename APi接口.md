# IMG  Share项目API接口

服务器访问地址 ：	【https://192.168.43.209:8848 】本机地址

## 一：home首页模块

​	https://192.168.43.209:8848/api/home

| 请求方式 | 接口Api | 参数                                    | 类型   | 必填 | 描述 | 实例 |
| -------- | --------------------------------------- | ------ | ---- |---- | ---- | ---- |
| get | /home | 无参数 | string | √    | 返回首页的数据 | https://192.168.43.209:8848/home |



返回示例：

```json
[
    [
      {
       _id:"uuid",
       title:"这只猫猫真可爱"，
       author:"FeiMao@110",
       imgUrl:"https://192.168.43.209:8848/public/demodate/img.jpg",
       bgcUrl:"https://192.168.43.209:8848/public/update/bgc.jpg",
       time:"2022/10/17"
       slogan:"分享美好瞬间"
       dianzan:10,
  	   pinglun:[
             {
              id:"uuid"
              author:"FeiMao@110",
              bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
              time:"2022/10/17"
            },
            {
              id:"uuid"
              author:"FeiMao@110",
              bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
              time:"2022/10/17"
            }
         ]，
        dianzan：10,
    	shocang：1
      }
    ]
    code:200,
    ok:true
]
```









## 二：搜索模块

​	https://192.168.43.209:8848/api/search&inputs="苹果"

| 请求方式 | 接口Api | 参数   | 类型   | 必填 | 描述             | 示例                                           |
| -------- | ------- | ------ | ------ | ---- | ---------------- | ---------------------------------------------- |
| get      | /search | inputs | string | √    | 返回搜索到的数据 | https://192.168.43.209:8848/search&inputs=苹果 |

返回示例：

```json
[
     data:[
          {
           _id:"uuid",
           title:"这个大海真美丽呀"，	 
           author:"FeiMao@110",
    	   originator:"31232134"
           imgUrl:"https://192.168.43.209:8848/img.jpg",
           bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
           time:"2022/10/17"
           slogan:"分享美好瞬间"
           dianzan:10,
           pinglun:[
                 {
                  id:"uuid"
                  author:"FeiMao@110",
                  bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
                  time:"2022/10/17"
                },
                {
                  id:"uuid"
                  author:"FeiMao@110",
                  bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
                  time:"2022/10/17"
                }
             ]
          }
        ],
    quantity:"2条数据",
    code:200,
    ok:true
]
```





## 三：个人中心模块



###	 01个人中心数据

​	https://192.168.43.209:8848/api/user&ncaub="账户名称"

| 请求方式 | 接口Api | 参数 | 类型   | 必填 | 描述                     | 示例                                             |
| -------- | ------- | ---- | ------ | ---- | ------------------------ | ------------------------------------------------ |
| get      | /user   | ger  | string | √    | 返回用户数据和 我的 数据 | https://192.168.43.209:8848/user&ger="feimao110" |



```json
[
    {
           _id:"uuid", 
           author:"FeiMao@110",
    	   originator:"31232134"
           bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
           phone:"18770726347",
           sex:"男"
           time:"2022/10/17",
           zhuce:"2022/10/1"
           slogan:"分享美好瞬间"
 
    },
    {
           _id:"uuid", 
           author:"FeiMao@110",
    	   originator:"31232134"
           bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
           phone:"18770726347",
           sex:"男"
           time:"2022/10/17",
           zhuce:"2022/10/1"
           slogan:"分享美好瞬间"
 
    }
]
```





### 02 我的模块数据

​	https://192.168.43.209:8848/api/wode&ncaub="账户名称"

| 请求方式 | 接口Api | 参数  | 类型   | 必填 | 描述             | 示例                                                  |
| -------- | ------- | ----- | ------ | ---- | ---------------- | ----------------------------------------------------- |
| get      | /wode   | ncaub | string | √    | 返回我的模块数据 | https://192.168.43.209:8848/api/wode&ncaub="29884324" |



返回示例

````json
[
   data:[
          {
           _id:"uuid",
           title:"这个大海真美丽呀"，	 
           author:"FeiMao@110",
    	   originator:"31232134"
           imgUrl:"https://192.168.43.209:8848/img.jpg",
           bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
           time:"2022/10/17"
           slogan:"分享美好瞬间"
           dianzan:10,
           pinglun:[
                 {
                  id:"uuid"
                  author:"FeiMao@110",
                  bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
                  time:"2022/10/17"
                },
                {
                  id:"uuid"
                  author:"FeiMao@110",
                  bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
                  time:"2022/10/17"
                }
             ]
          }
        ],
    quantity:"1条数据"
]
````





### 02 点赞模块数据

​	https://192.168.43.209:8848/api/dianzan&ncaub="账户名称"

| 请求方式 | 接口Api  | 参数  | 类型   | 必填 | 描述             | 示例                                                     |
| -------- | -------- | ----- | ------ | ---- | ---------------- | -------------------------------------------------------- |
| get      | /dianzan | ncaub | string | √    | 返回点赞模块数据 | https://192.168.43.209:8848/api/dianzan&ncaub="29884324" |



返回示例

````json
https://192.168.43.209:8848/api/dianzan&ncaub="FeiMao@110"
[
   data:[
          {
           _id:"uuid",
           title:"这个大海真美丽呀"，	 
           author:"FeiMao@110",
    	   originator:"31232134"
           imgUrl:"https://192.168.43.209:8848/img.jpg",
           bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
           time:"2022/10/17"
           slogan:"分享美好瞬间"
           dianzan:10,
           pinglun:[
                 {
                  id:"uuid"
                  author:"FeiMao@110",
                  bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
                  time:"2022/10/17"
                },
                {
                  id:"uuid"
                  author:"FeiMao@110",
                  bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
                  time:"2022/10/17"
                }
             ]
          }
        ],
    quantity:"1条数据"
]
````





### 02 收藏模块数据

​	https://192.168.43.209:8848/api/shocang&ncaub="账户名称"

| 请求方式 | 接口Api  | 参数  | 类型   | 必填 | 描述             | 示例                                                     |
| -------- | -------- | ----- | ------ | ---- | ---------------- | -------------------------------------------------------- |
| get      | /shocang | ncaub | string | √    | 返回点赞模块数据 | https://192.168.43.209:8848/api/shocang&ncaub="29884324" |



返回示例

````json
https://192.168.43.209:8848/api/shocang&ncaub="FeiMao@110"
[
   data:[
          {
           _id:"uuid",
           title:"这个大海真美丽呀"，	 
           author:"FeiMao@110",
    	   originator:"31232134"
           imgUrl:"https://192.168.43.209:8848/img.jpg",
           bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
           time:"2022/10/17"
           slogan:"分享美好瞬间"
           dianzan:10,
           pinglun:[
                 {
                  id:"uuid"
                  author:"FeiMao@110",
                  bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
                  time:"2022/10/17"
                },
                {
                  id:"uuid"
                  author:"FeiMao@110",
                  bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
                  time:"2022/10/17"
                }
             ]
          }
        ],
    quantity:"1条数据"
]
````











## 四：个人信息编辑模块


### 01：上传个人头像模块

​	https://192.168.43.209:8848/api/fileuser、

| 请求方式 | 接口Api  | 参数 | 类型       | 必填 | 描述             | 示例                                     |
| -------- | -------- | ---- | ---------- | ---- | ---------------- | ---------------------------------------- |
| post     | /shocang | file | 二进制数据 | √    | 返回点赞模块数据 | https://192.168.43.209:8848/api/fileuser |



```json
{
  code：200,
  ok：true
}
```







### 02：上传个人信息模块

​	https://192.168.43.209:8848/api/userinfor

| 请求方式 | 接口Api  | 参数 | 类型                   | 必填 | 描述                 | 示例                                                     |
| -------- | -------- | ---- | ---------------------- | ---- | -------------------- | -------------------------------------------------------- |
| post     | /shocang | file | Object：{修改后的数据} | √    | 返回修改成功后的数据 | https://192.168.43.209:8848/api/shocang&ncaub="29884324" |



```json
{
  code：200,
  message：“修改成功”
  ok：true
}
```











## 五：卡片模块数据



### 01：评论模块

   点击评论按钮显示当前的详情模块，评论按钮因为绑定了一个文章id 所以点击的的时候获取当前文章的信息获取文章id

​	https://192.168.43.209:8848/api/pinglun

| 请求方式 | 接口Api  | 参数 | 类型   | 必填 | 描述                 | 示例                                    |
| -------- | -------- | ---- | ------ | ---- | -------------------- | --------------------------------------- |
| post     | /pinglun | id   | string | √    | 返回修改成功后的数据 | https://192.168.43.209:8848/api/pinglun |



```json
[
    [
      {
       _id:"uuid",
       title:"这个大海真美丽呀"，
       author:"FeiMao@110",
       imgUrl:"https://192.168.43.209:8848/img.jpg",
       bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
       time:"2022/10/17"
       slogan:"分享美好瞬间"
       dianzan:10,
  	   pinglun:[
             {
              id:"uuid"
              author:"FeiMao@110",
              bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
              time:"2022/10/17"
            },
            {
              id:"uuid"
              author:"FeiMao@110",
              bgcUrl:"https://192.168.43.209:8848/bgc.jpg",
              time:"2022/10/17"
            }
         ]，
        dianzan：10,
    	shocang：1
      }
    ]
    code:200,
    ok:true
]
```









### 02：收藏模块

点击收藏按钮通过id进行查找到当前的文章并给其收藏+1，

将当前的文章给添加到个人数据中心模块 中进行保存 新建一个表

​	https://192.168.43.209:8848/api/dianzang



| 请求方式 | 接口Api  | 参数 | 类型   | 必填 | 描述                 | 示例                                    |
| -------- | -------- | ---- | ------ | ---- | -------------------- | --------------------------------------- |
| post     | /dianzan | id   | string | √    | 返回修改成功后的数据 | https://192.168.43.209:8848/api/dianzan |
| post     | /dianzan | user | string | √    | 当前登录的账户id     |                                         |



```json
[
    code:200,
    message："点赞成功"
    ok:true
]
```







### 03：点赞模块

点击点赞按钮通过id进行查找到当前的文章并给其点赞+1

将当前的文章给添加到个人数据中心模块 中进行保存 新建一个表

​	https://192.168.43.209:8848/api/dianzang



| 请求方式 | 接口Api  | 参数 | 类型   | 必填 | 描述             | 示例                                    |
| -------- | -------- | ---- | ------ | ---- | ---------------- | --------------------------------------- |
| post     | /dianzan | id   | string | √    | 文章id           | https://192.168.43.209:8848/api/dianzan |
| post     | /dianzan | user | string | √    | 当前登录的账户id |                                         |



```json
[
    code:200,
    message："点赞成功"
    ok:true
]
```





## 六：登录注册







### 01 :登录

​	https://192.168.43.209:8848/api/login

| 请求方式 |  接口Api  |   参数    | 类型   | 必填 | 描述   | 示例 |
| :------: | :-------: | :-------: | ------ | ---- | ------ | ---- |
|  login   | /register |    id     | string | √    | 账户id |      |
|  login   | /register | passsword | string | √    | 密码   |      |



```json
//正确的 
[
    code:200,
    message："登录成功"
    ok:true
]

//错误的
[
    code:300,
    message："账户名或者密码错误"
    ok:false
]
```





### 01 :注册

​	https://192.168.43.209:8848/api/register



| 请求方式 |  接口Api  |   参数    | 类型   | 必填 | 描述   | 示例 |
| :------: | :-------: | :-------: | ------ | ---- | ------ | ---- |
|   post   | /register |    id     | string | √    | 账户id |      |
|   post   | /register | passsword | string | √    | 密码   |      |
|   post   | /register |   phone   | string | √    | 手机号 |      |
|   post   | /register |   emais   | strgin | √    | 邮箱   |      |



```json
//正确的 
[
    code:200,
    message："登录成功"
    ok:true
]

//错误示例-01
[
    code:300,
    message："账户名称已经被使用了"
    ok:false
]

```







### 七：上传项目模块



### 01：上传作品图片模块

​	https://192.168.43.209:8848/api/zuopingfileuser

{

data：”文件二进制数据“

}

| 请求方式 | 接口Api              | 参数 | 类型       | 必填 | 描述                 | 示例                                                |
| -------- | -------------------- | ---- | ---------- | ---- | -------------------- | --------------------------------------------------- |
| post     | /zuoping/filezuoping | file | 二进制数据 | √    | 上传的文件二进制数据 | https://192.168.43.209:8848/api/zuoping/filezuoping |



```json
{
  code：200,
  ok：true，
  message：”图片上传成功“
}
```

存储





### 02：标题和标签

​	https://192.168.43.209:8848/api/zuoping/fileuser

{

title：”这只肥猫好可爱呀“,

biaoqian:"#猫咪，#肥猫，#可爱"

}

| 请求方式 | 接口Api              | 参数     | 类型   | 必填 | 描述     | 示例                                                |
| -------- | -------------------- | -------- | ------ | ---- | -------- | --------------------------------------------------- |
| post     | /zuoping/datazuoping | title    | string | √    | 作品标题 | https://192.168.43.209:8848/api/zuoping/filezuoping |
| post     | /zuoping/datazuoping | biaoqian | string | √    | 作品标签 | 同上                                                |



```json
{
  code：200,
  ok：true
}
```











