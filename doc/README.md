# 阿里云计算(函数)部署教程（0基础教程）

> 注意：此方法不知道免不免费，听人说是流量少的话每个月抹零，约等于免费，但是适合0基础小白、没有服务器的小伙伴

#### 登录阿里云计算

官网：[函数计算 FC (aliyun.com)](https://fcnext.console.aliyun.com/overview)

- 登录后点击右侧 **服务及函数**

​	[<img src="https://s1.ax1x.com/2022/05/27/XnSfZq.md.png" alt="XnSfZq.md.png" style="zoom:80%;" />]()

- 点击 **创建服务**

  [<img src="https://s1.ax1x.com/2022/05/27/XnCiVI.md.png" alt="XnCiVI.md.png" style="zoom: 80%;" />]()

- 名称描述随便填，**确定**

  [<img src="https://s1.ax1x.com/2022/05/27/XnC2sH.md.png" alt="XnC2sH.md.png" style="zoom:50%;" />]()

- 进入后点击**创建函数**

​	[<img src="https://s1.ax1x.com/2022/05/27/XnPlOH.md.png" alt="XnPlOH.md.png" style="zoom:80%;" />]()

#### 配置函数

- 选择 **从零开始创建**，函数名随便，运行环境选择 **Python3.9**, 使用示例代码，**处理事件请求**，请求处理程序填 **main.run**，如图：[<img src="https://s1.ax1x.com/2022/05/27/XnPXcD.md.png" alt="XnPXcD.md.png" style="zoom:80%;" />](https://imgtu.com/i/XnPXcD)

- 配置触发器，类型选择 **定时触发器**，名称随便填，触发方式选择 **指定时间**，指定时间填你想脚本每天开始执行的时间，下面的不用填，点击 **创建**，如图：

  [<img src="https://s1.ax1x.com/2022/05/27/XnivGV.md.png" alt="XnivGV.md.png" style="zoom:80%;" />]()

- 进入后先点击 **函数配置**，在 **环境信息** 右边的 **编辑**

​	[<img src="https://s1.ax1x.com/2022/05/27/Xnkght.md.png" alt="Xnkght.md.png" style="zoom:80%;" />]()

- **执行超时时间** 就填 86400秒（24小时） ，**确定**

[<img src="https://s1.ax1x.com/2022/05/27/XnAF9x.md.png" alt="XnAF9x.md.png" style="zoom:80%;" />]()



#### 下载脚本源码，并配置用户信息

- 回到 **函数代码** 页面，在下方 **终端 **中输入或粘贴以下代码：

  ```shell
  git clone https://github.com/XiaoMiku01/fansMedalHelper.git && cp -r fansMedalHelper/* . && pip install -t . -r requirements.txt
  ```

[![XnEBod.md.png](https://s1.ax1x.com/2022/05/27/XnEBod.md.png)]()

- `回车` 运行完毕后，右边文件往下翻，中找到 `users.yaml` 文件，打开后在里面填写你的配置信息，填写完毕后按 `ctrl`+`s` 保存文件，之后点击右上角 **保存并部署**

  [![XnV7AH.md.png](https://s1.ax1x.com/2022/05/27/XnV7AH.md.png)]()

  > B站 `access_key` 获取工具：[Release B站access_key获取工具 · XiaoMiku01/fansMedalHelper (github.com)](https://github.com/XiaoMiku01/fansMedalHelper/releases/tag/logintool)

#### 测试运行，查看日志

- 部署完毕后点击左上角 **测试函数** ，之后点击 **实时日志** 

  [<img src="https://s1.ax1x.com/2022/05/27/XnZ2Vg.png" alt="XnZ2Vg.png" style="zoom:67%;" />]()

  

- 之后查看右边日志是否运行正常或者报错，耐心等待运行结束

  [<img src="https://s1.ax1x.com/2022/05/27/Xne9sK.md.png" alt="Xne9sK.md.png" style="zoom:80%;" />]()

  

#### 完毕

设置，测试，运行没有问题后，就可以关闭页面了，之后每天都会在你设置的触发器时间到后自动执行，如果你还设置了微信推送，运行完毕后会收到通知
