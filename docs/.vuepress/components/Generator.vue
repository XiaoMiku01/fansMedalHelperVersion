<template>
    <el-form label-position="top" :model="FormData" style="max-width: 800px" validate>
        <el-row class="config-users" v-for="(USER, index) of FormData.USERS" :key="USER.access_key">
            <el-col :xs="24" :sm="3" :md="3" :lg="3" :xl="3">
                <div class="option">
                    <el-tag
                        :closable="index !== 0"
                        @close="onTagClose(index)"
                        class="info"
                        type="success"
                    >
                        用户 {{ index + 1 }}
                    </el-tag>
                    <el-check-tag
                        v-show="index + 1 == USERS.length"
                        checked
                        class="add"
                        @click="addUser"
                    >
                        +
                    </el-check-tag>
                </div>
            </el-col>
            <el-col :xs="24" :sm="21" :md="21" :lg="21" :xl="21">
                <el-form-item label="Access_key" prop="access_key" required>
                    <el-input
                        v-model="USER.access_key"
                        placeholder="请输入access_key"
                        type="text"
                    />
                </el-form-item>
                <el-form-item label="白名单" prop="white_uid">
                    <el-input v-model="USER.white_uid" placeholder="请输入white_uid" type="text" />
                </el-form-item>
                <el-form-item label="黑名单" prop="banned_uid">
                    <el-input
                        v-model="USER.banned_uid"
                        placeholder="请输入banned_uid"
                        type="text"
                    />
                </el-form-item>
            </el-col>
        </el-row>
        <el-divider />
        <el-row class="config-details">
            <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
                <el-form-item label="Corn表达式" prop="CRON">
                    <el-input v-model="FormData.CRON" placeholder="请输入Corn表达式" type="text" />
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
                <el-form-item label="Server酱SENDKEY" prop="SENDKEY">
                    <el-input
                        v-model="FormData.SENDKEY"
                        placeholder="请输入Server酱SENDKEY"
                        type="text"
                    />
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
                <el-form-item label="配置更多推送" prop="MOREPUSH">
                    <el-input
                        v-model="FormData.MOREPUSH"
                        placeholder="请输入MOREPUSH"
                        type="text"
                    />
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
                <el-form-item label="点赞间隔时间(s)" prop="LIKE_CD">
                    <el-input v-model="FormData.LIKE_CD" placeholder="请输入LIKE_CD" type="text" />
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
                <el-form-item label="分享间隔时间(s)" prop="SHARE_CD">
                    <el-input
                        v-model="FormData.SHARE_CD"
                        placeholder="请输入SHARE_CD"
                        type="text"
                    />
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
                <el-form-item label="弹幕间隔时间(s)" prop="DANMAKU_CD">
                    <el-input
                        v-model="FormData.DANMAKU_CD"
                        placeholder="请输入DANMAKU_CD"
                        type="text"
                    />
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
                <el-form-item label="每日观看直播时长(min)" prop="WATCHINGLIVE">
                    <el-input
                        v-model="FormData.WATCHINGLIVE"
                        placeholder="请输入WATCHINGLIVE"
                        type="text"
                    />
                </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">
                <el-form-item label="应援团签到CD时间(s)" prop="SIGNINGROUP">
                    <el-input
                        v-model="FormData.SIGNINGROUP"
                        placeholder="请输入SIGNINGROUP"
                        type="text"
                    />
                </el-form-item>
            </el-col>
            <el-col>
                <el-form-item label="" prop="ASYNC">
                    <el-checkbox v-model="FormData.ASYNC" border>异步执行</el-checkbox>
                </el-form-item>
                <el-form-item label="" prop="WEARMEDAL">
                    <el-checkbox v-model="FormData.WEARMEDAL" border>自动更换粉丝牌</el-checkbox>
                </el-form-item>
            </el-col>
            <el-col>
                <el-button class="generateBtn" type="primary" @click="generateYAML"
                    >生成YAML配置文件并复制到剪切板</el-button
                >
                <el-button class="generateBtn" type="primary" @click="generateJSON"
                    >生成JSON配置文件并复制到剪切板</el-button
                >
            </el-col>
        </el-row>
    </el-form>
</template>

<script setup>
import ImportElementStyle from "./Funcs/ImportElementStyle";
import CopyText from "./Funcs/CopyText";
import json2yaml from "./Funcs/Json2Yaml";
import { reactive, ref, toRaw } from "vue";
import {
    ElRow,
    ElCol,
    ElForm,
    ElFormItem,
    ElTag,
    ElCheckTag,
    ElInput,
    ElSelect,
    ElButton,
    ElDivider,
    ElCheckbox,
    ElMessage,
} from "element-plus";
const user = {
    access_key: "",
    white_uid: 0,
    banned_uid: 0,
};
const USERS = reactive([{ ...user }]);
const MOREPUSH = ref("");
const FormData = reactive({
    USERS,
    CRON: "",
    SENDKEY: "",
    MOREPUSH: MOREPUSH.value,
    PORXY: "",
    ASYNC: true,
    LIKE_CD: 2,
    SHARE_CD: 5,
    DANMAKU_CD: 6,
    WATCHINGLIVE: 65,
    WEARMEDAL: true,
    SIGNINGROUP: 2,
});
const processFormData = (formData, isModify) => {
    const result = toRaw(formData);
    result.ASYNC = result.ASYNC == true ? 1 : 0;
    result.WEARMEDAL = result.WEARMEDAL == true ? 1 : 0;
    result.USERS.forEach((user) => {
        user.white_uid = user.white_uid === "" ? 0 : user.white_uid;
        user.banned_uid = user.banned_uid === "" ? 0 : user.banned_uid;
    });
    result.MOREPUSH = result.MOREPUSH === "" ? "null" : result.MOREPUSH;
    // 处理 MOREPUSH
    // formData变化后重新调用函数，result不会重新生成，而是会继承上一次的result值 用typeof判定
    if (isModify && typeof result.MOREPUSH !== "object") {
        // YAML
        result.MOREPUSH = result.MOREPUSH.replace(`False`, `"False"`);
        result.MOREPUSH = result.MOREPUSH.replace(`True`, `"True"`);
        result.MOREPUSH = JSON.parse(result.MOREPUSH);
    } else {
        // JSON
        result.MOREPUSH = result.MOREPUSH.replace(`False`, false);
        result.MOREPUSH = result.MOREPUSH.replace(`True`, true);
        result.MOREPUSH = JSON.parse(result.MOREPUSH);
    }
    return result;
};
const onTagClose = (index) => {
    USERS.splice(index, 1);
};
const addUser = () => {
    USERS.push({ ...user });
};
const generateYAML = () => {
    const data = json2yaml(processFormData(FormData, true));
    const result = CopyText(data);
    result &&
        ElMessage({
            type: "success",
            message: "配置文件已复制到剪切板",
        });
    console.log(data);
};
const generateJSON = () => {
    const data = processFormData(FormData, false);
    const result = CopyText(JSON.stringify(data));
    result &&
        ElMessage({
            type: "success",
            message: "配置文件已复制到剪切板",
        });
    console.log(data);
};
ImportElementStyle();
</script>

<style scoped>
.el-form-item {
    margin: 5px 5px 5px 5px;
}
.el-col {
    display: flex;
    justify-content: center;
}
.el-col .option {
    justify-content: center;
}
.config-users .option {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.config-users .option * {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    height: 10px;
}
.config-users .option .info {
    height: 50px;
}
.config-details {
    display: flex;
    justify-content: center;
}
.config-details .el-col {
    align-items: center;
}
.config-details .generateBtn {
    margin-top: 10px;
}
</style>
