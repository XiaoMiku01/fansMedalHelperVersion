---
sidebar:
    - /guide/
    - /guide/location/
    - /guide/ali-cloud/
    - /guide/tx-cloud/
    - /guide/other/
---

# 开始

当前版本：0.3.2  
反馈交流群：979245756

## 目前已实现功能

| 功能                | 奖励                     |
| ------------------- | ------------------------ |
| 每日直播区签到      | 直播区经验，银瓜子，辣条 |
| 每日点赞 3 次直播间 | 200\*3 亲密度            |
| 每日分享 5 次直播间 | 100\*5 亲密度            |
| 每日观看 30 分钟    | 100\*1 亲密度            |
| 每日弹幕打卡        | 100\*1 亲密度            |
| 多账号支持          |                          |
| 微信推送通知        |                          |

<small>ps: 新版 B 站粉丝牌的亲密度每一个牌子都将单独计算  </small>

## 配置文件说明 users.yaml

```yaml
USERS:
    - access_key: XXXXX # 注意冒号后的空格 否则会读取失败 英文冒号
      white_uid: 0 # 白名单用户ID, 可以是多个用户ID, 以逗号分隔,填写后只会打卡这些用户,黑名单失效，不用就填0
      banned_uid: 0 # 黑名单UID 同上,填了后将不会打卡，点赞，分享 用英文逗号分隔 不填则不限制,两个都填0则不限制,打卡所有直播间
    - access_key:
      white_uid: 0
      banned_uid: 0
    # 注意对齐
    # 多用户以上格式添加
    # 井号后为注释 井号前后必须有空格！井号前后必须有空格！井号前后必须有空格！
    # 冒号后面也要有空格！冒号前面也要有空格！冒号前面也要有空格！
    # 英文冒号,英文逗号！英文逗号！英文逗号！
CRON: # 0 0 * * *
# 这里是 cron 表达式, 第一个参数是分钟, 第二个参数是小时
# 例如每天凌晨0点0分执行一次为 0 0 * * *
# 如果不填,则不使用内置定时器,填写正确后要保持该进程一直运行（linux保持运行方法自行百度）

SENDKEY: # Server酱微信推送 可选 获取地址：https://sct.ftqq.com/
MOREPUSH: # 更多种类的推送 详细配置见下文

#########以下为自定义配置#########

ASYNC: 1 # 异步执行,默认异步执行,设置为0则同步执行,开启异步后,将不支持设置点赞和分享CD时间

LIKE_CD: 2 # 点赞间隔时间,单位秒,默认2秒,仅为同步时生效,设置为0则不点赞

SHARE_CD: 5 # 分享间隔时间,单位秒,默认5秒,仅为同步时生效,设置为0则不分享

DANMAKU_CD: 6 # 弹幕间隔时间,单位秒,默认6秒,设置为0则不发弹幕打卡,只能同步打卡

WATCHINGLIVE: 1 # 是否完成每日三十分钟看直播任务，默认开启，设置为0则关闭

# 说明：
# 本项目中的异步执行指的是：同时点赞或者分享所有直播间，速度非常快，但缺点就是可能会被B站吞掉亲密度，所以建议粉丝牌较少的用户开启异步执行
# 粉丝牌数大于30的用户建议使用同步，会更加稳定。缺点就是速度比较慢，但是可以设置点赞和分享的CD时间，避免被B站吞掉亲密度
# 多用户之间依然是异步，不受配置影响
```

::: warning 警告
请务必严格填写，否则程序将读取失败，可以在这里 [YAML、YML 在线编辑器(格式化校验)-BeJSON.com](https://www.bejson.com/validators/yaml_editor/) 验证你填的 yaml 是否正确
:::

## 多种推送方式配置 MOREPUSH 参数

| 推送方式               | 参数                                                                                                               | 官网                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| bark                   | {"notifier":"bark","params":{"markdown":False,"key":"xxxxxx"}}                                                     | [Bark - Customed Notifications on the App Store (apple.com)](https://apps.apple.com/us/app/bark-customed-notifications/id1403753865) |
| dingtalk 钉钉机器人    | {"notifier":"dingtalk","params":{"markdown":True,"token":"xxxxxx"}}                                                | [钉钉开放文档 (dingtalk.com)](https://open.dingtalk.com/document/group/custom-robot-access)                                          |
| discord                | {"notifier":"discord","params":{"markdown":True,"webhook":"https://discord.com/api/webhooks/xxxxxx"}}              | [Intro to Webhooks – Discord](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)                             |
| pushplus               | {"notifier":"pushplus","params":{"markdown":True,"token":"xxxxxx"}}                                                | [pushplus(推送加)-微信消息推送平台](https://www.pushplus.plus/)                                                                      |
| qmsg                   | {"notifier":"qmsg","params":{"markdown":False,"key":"xxxxxx"}}                                                     | [Qmsg 酱-您的专属 QQ 消息推送服务小姐姐-qmsg.zendee.cn](https://qmsg.zendee.cn/)                                                     |
| telegram               | {"notifier":"telegram","params":{"markdown":False,"token":"xxxxxx","userid":"xxxxxx"}}                             | [Bots: An introduction for developers (telegram.org)](https://core.telegram.org/bots)                                                |
| wechatworkapp 企业微信 | {"notifier":"wechatworkapp","params":{"markdown":True,"corpid":"xxxxxx","corpsecret":"xxxxxx","agentid":"xxxxxx"}} | [发送应用消息 - 接口文档 - 企业微信开发者中心 (qq.com)](https://developer.work.weixin.qq.com/document/path/90236)                    |
| wechatworkbot 企业微信 | {"notifier":"wechatworkbot","params":{"markdown":True,"key":"xxxxxx"}}                                             | [群机器人配置说明 - 接口文档 - 企业微信开发者中心 (qq.com)](https://developer.work.weixin.qq.com/document/path/91770)                |

::: tip 例如

我想用 `pushplus` 推送消息，在官方申请到的 `token` 为： `abcabcacb` ，配置文件中的 `MOREPUSH` 就如下填写

```yaml
MOREPUSH: { "notifier": "pushplus", "params": { "markdown": True, "token": "abcabcacb" } }
```

:::

## 已知问题

> 异步执行时可能会出现个别直播间的亲密度丢失，出现 1200 或 1100 的情况

解决方法：换成同步执行，但是速度会变慢

> 出现 API 请求错误的情况

因为有异常重试机制，报错会自动重试 3 次，重试成功就能正常运行，不用理会，如果三次重试失败才会退出程序

## 赞助

![赞助](../images/sponsor.png)
