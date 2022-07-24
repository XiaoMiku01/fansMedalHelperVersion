import type { IConfig } from "../types";

const userOptionConfigs: IConfig = {
    col: {
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6,
    },
    items: [
        {
            prop: "access_key",
            name: "Access_key",
            type: "input",
        },
        {
            prop: "white_uid",
            name: "白名单",
            type: "input",
            info: "白名单用户ID, 可以是多个用户ID, 以逗号分隔,填写后只会打卡这些用户,黑名单失效,不用就填0",
        },
        {
            prop: "banned_uid",
            name: "黑名单",
            type: "input",
            info: "黑名单UID 同上,填了后将不会打卡，点赞，分享 用英文逗号分隔 不填则不限制,两个都填0则不限制,打卡所有直播间",
        },
    ],
};

const commonOptionConfigs: IConfig = {
    col: {
        xs: 12,
        sm: 8,
        md: 8,
        lg: 6,
        xl: 6,
    },
    items: [
        { prop: "CRON", name: "Corn表达式", type: "input" },
        { prop: "SENDKEY", name: "Server酱SENDKEY", type: "input" },
        { prop: "MOREPUSH", name: "配置更多推送", type: "input" },
        { prop: "PORXY", name: "推送代理地址", type: "input" },
        { prop: "LIKE_CD", name: "点赞间隔时间", type: "input" },
        { prop: "SHARE_CD", name: "分享间隔时间", type: "input" },
        { prop: "DANMAKU_CD", name: "弹幕间隔时间", type: "input" },
        { prop: "WATCHINGLIVE", name: "每日观看直播时长", type: "input" },
        { prop: "SIGNINGROUP", name: "应援团签到CD时间", type: "input" },
        { prop: "ASYNC", name: "异步执行", type: "check" },
        { prop: "WEARMEDAL", name: "自动更换粉丝牌", type: "check" },
    ],
};

export { userOptionConfigs, commonOptionConfigs };
