<template>
    <el-col v-bind="optionConfig.col" v-for="option of optionConfig.items" :key="option.name">
        <el-form-item :label="option.name">
            <el-checkbox
                v-if="option.type === 'check'"
                v-model="formData[option.prop]"
                :placeholder="'请输入' + option.prop"
                :label="option.prop"
                size="large"
                border
            ></el-checkbox>
            <el-input
                v-if="option.type === 'input'"
                v-model="formData[option.prop]"
                :placeholder="'请输入' + option.prop"
            >
                option.name
            </el-input>
        </el-form-item>
    </el-col>
</template>

<script setup>
import { ElCol, ElFormItem, ElInput, ElCheckbox } from "element-plus";
const props = defineProps({
    formData: {
        required: true,
    },
    optionConfig: {
        required: true,
    },
});
</script>

<style scoped>
.el-form-item {
    margin: 5px 5px 5px 5px;
}
</style>
