<template>
    <el-form label-position="top" :model="FormData" style="max-width: 500px">
        <el-row>
            <el-col :span="12">
                <el-form-item label="当前等级" prop="Level" required>
                    <el-input v-model.number="FormData.Level" type="text" clearable />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="当前亲密度" prop="Exp">
                    <el-input v-model.number="FormData.Exp" type="text" clearable />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="目标等级" prop="tLevel" required>
                    <el-input v-model.number="FormData.tLevel" type="text" clearable />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="目标亲密度" prop="tExp">
                    <el-input v-model.number="FormData.tExp" type="text" clearable />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="每日获取" prop="DAILY" required>
                    <el-input v-model.number="FormData.DAILY" type="text" clearable />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="恢复初始值">
                    <el-button @click="restoreInitValue">重置</el-button>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row class="description">
            <el-row>
                <span>如每日获取</span>
                <el-tag type="success">{{ Result.DAILY }}</el-tag>
                <span>还需要亲密度: </span>
                <el-tag type="success">{{ Result.total }}</el-tag>
                <span>剩余天数: </span>
                <el-tag type="success">{{ Result.days }}</el-tag>
            </el-row>
            <el-row>
                <span>目标日期: </span>
                <el-tag type="success">{{ Result.target }}</el-tag>
            </el-row>
        </el-row>
    </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from "vue";
import {
    ElRow,
    ElCol,
    ElForm,
    ElFormItem,
    ElInput,
    ElTag,
    ElMessage,
    ElButton,
} from "element-plus";
import { leveMap, CalcIntimacy } from "./Funcs/CalcIntimacy";
import "element-plus/theme-chalk/base.css";
import "element-plus/theme-chalk/el-row.css";
import "element-plus/theme-chalk/el-col.css";
import "element-plus/theme-chalk/el-form.css";
import "element-plus/theme-chalk/el-form-item.css";
import "element-plus/theme-chalk/el-input.css";
import "element-plus/theme-chalk/el-tag.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-button.css";

export default defineComponent({
    components: {
        ElRow,
        ElCol,
        ElForm,
        ElFormItem,
        ElInput,
        ElTag,
        ElMessage,
        ElButton,
    },
    setup() {
        const DefaultFormData = {
            Level: 1,
            Exp: 0,
            tLevel: 20,
            tExp: 0,
            DAILY: 1300,
        };
        const FormData = reactive({ ...DefaultFormData });
        const Result = reactive({ DAILY: 0, total: 0, days: 0, target: "" });
        const valueValidCheck = (obj) => {
            return (
                obj.Level >= 1 &&
                obj.Level <= 20 &&
                obj.tLevel >= 1 &&
                obj.tLevel <= 20 &&
                obj.Exp <= leveMap[obj.Level] &&
                obj.tExp <= leveMap[obj.tLevel] &&
                obj.DAILY >= 1 &&
                obj.DAILY <= 1500 &&
                obj.Level <= obj.tLevel
            );
        };
        const updateObject = (target, source) => {
            for (let key of Object.keys(source)) {
                target[key] = source[key];
            }
        };
        const updateResult = () => {
            if (!valueValidCheck(FormData)) {
                ElMessage({
                    message: "值非法，请检查输入值",
                    type: "warning",
                });
            } else {
                const r = CalcIntimacy({ ...FormData });
                updateObject(Result, r);
            }
        };
        watchEffect(updateResult);
        const restoreInitValue = () => {
            ElMessage({
                message: "已恢复初始值",
                type: "success",
            });
            updateObject(FormData, DefaultFormData);
        };
        return {
            FormData,
            Result,
            restoreInitValue,
        };
    },
});
</script>

<style scoped>
.el-form-item {
    margin: 5px 5px 5px 5px;
}
.description {
    margin: 10px 0px 10px 0px;
}
.description span {
    margin: 5px 5px 5px 5px;
}
</style>
