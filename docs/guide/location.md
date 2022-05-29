---
sidebar:
    - /guide/
    - /guide/location/
    - /guide/ali-cloud/
    - /guide/tx-cloud/
    - /guide/other/
---

# 本地/服务器部署

::: warning 注意
环境需求：Python 版本大于 3.8
:::

## 克隆本项目 安装依赖

```shell
git clone https://github.com/XiaoMiku01/fansMedalHelper.git
cd fansMedalHelper
pip3 install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

## 获取 B 站账号的 access_key

下载获取工具 [Release B 站 access_key 获取工具 · XiaoMiku01/fansMedalHelper (github.com)](https://github.com/XiaoMiku01/fansMedalHelper/releases/tag/logintool)

双击打开，扫码登录，会得到 `access_key` 即可

## 填写配置文件 users.yaml

windows 以记事本方式打开  
linux 用 vim

```shell
vim users.yaml
```

配置文件说明 ：[配置文件](./#配置文件说明)

## 运行主程序

```shell
python main.py
```

## 效果图

![](../images/location/img1.png)
