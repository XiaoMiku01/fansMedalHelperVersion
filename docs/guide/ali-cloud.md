---
sidebar:
    - /guide/
    - /guide/location/
    - /guide/ali-cloud/
    - /guide/tx-cloud/
---

# 阿里云计算(函数)部署（0 基础）

::: warning 注意
此方法不免费，经过测试，执行一次大概 0.02 元，一个月 30 次就是 0.6 元，但是适合 0 基础小白、没有服务器的小伙伴。
建议提前充好几块钱，不然欠费的会被直接删除函数
:::

## 登录阿里云计算

官网：[函数计算 FC (aliyun.com)](https://fcnext.console.aliyun.com/overview)

-   登录后点击左侧 **服务及函数**

    ![](https://s1.ax1x.com/2022/05/27/XnSfZq.md.png)

-   点击 **创建服务**

    ![](https://s1.ax1x.com/2022/05/27/XnCiVI.md.png)

-   名称描述随便填，**确定**

    ![](https://s1.ax1x.com/2022/05/27/XnC2sH.md.png)

-   进入后点击**创建函数**

    ![](https://s1.ax1x.com/2022/05/27/XnPlOH.md.png)

## 配置函数

-   选择 **从零开始创建**，函数名随便，运行环境选择 **Python3.9**, 使用示例代码，**处理事件请求**，请求处理程序填 **main.run**，如图：
    
    ![](https://s1.ax1x.com/2022/05/27/XnPXcD.md.png)

-   配置触发器，类型选择 **定时触发器**，名称随便填，触发方式选择 **指定时间**，指定时间填你想脚本每天开始执行的时间，下面的不用填，点击 **创建**，如图：

    ![](https://s1.ax1x.com/2022/05/27/XnivGV.md.png)

-   进入后先点击 **函数配置**，在 **环境信息** 右边的 **编辑**

    ![](https://s1.ax1x.com/2022/05/27/Xnkght.md.png)

-   **执行超时时间** 就填 86400 秒（24 小时） ，**确定**

    ![](https://s1.ax1x.com/2022/05/27/XnAF9x.md.png)

## 下载脚本源码，并配置用户信息

-   回到 **函数代码** 页面，在下方 **终端**中输入或粘贴以下代码：

    ```shell
    git clone https://github.com/XiaoMiku01/fansMedalHelper.git && cp -r fansMedalHelper/* . && pip3 install -t . -r requirements.txt
    ```

    ![](https://s1.ax1x.com/2022/05/27/XnEBod.md.png)

-   `回车` 运行完毕后，左边文件往下翻，中找到 `users.yaml` 文件，打开后在里面填写你的配置信息，填写完毕后按 `ctrl`+`s` 保存文件，之后点击右上角 **保存并部署**

    ![](https://s1.ax1x.com/2022/05/27/XnV7AH.md.png)

    ::: tip 提示
    配置文件说明 ：[配置文件](./#配置文件说明)  
    B 站 `access_key` 获取工具：[Release B 站 access_key 获取工具 · XiaoMiku01/fansMedalHelper (github.com)](https://github.com/XiaoMiku01/fansMedalHelper/releases/tag/logintool)
    :::

## 测试运行，查看日志

-   部署完毕后点击左上角 **测试函数** ，之后点击 **实时日志**

    ![](https://s1.ax1x.com/2022/05/27/XnZ2Vg.png)

-   之后查看右边日志是否运行正常或者报错，耐心等待运行结束

    ![](https://s1.ax1x.com/2022/05/27/Xne9sK.md.png)

## 完毕

设置，测试，运行没有问题后，就可以关闭页面了，之后每天都会在你设置的触发器时间到后自动执行，如果你还设置了微信推送，运行完毕后会收到通知

## 云函数更新方法

-   回到 **函数代码** 页面，在下方 **终端**中输入或粘贴以下代码, 注意！更新前保存一下之前的`users.yaml`的文件内容，因为更新会重置：
    ```shell
    cd fansMedalHelper/ && git pull && cp -r * .. & cd ..
    ```
    回车确定后, 重新配置`users.yaml`文件 保存部署即可
