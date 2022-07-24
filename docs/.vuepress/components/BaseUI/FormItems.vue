<template>
    <el-col v-bind="optionConfig.col" v-for="option of optionConfig.items" :key="option.name">
        <el-form-item>
            <template #label>
                <div class="label">
                    {{ option.name }}
                    <ElTooltip
                        v-if="option.info"
                        effect="dark"
                        :content="option.info"
                        placement="top-start"
                    >
                        <el-icon :size="20">
                            <Warning />
                        </el-icon>
                    </ElTooltip>
                </div>
            </template>
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
import { ElCol, ElFormItem, ElTooltip, ElIcon, ElInput, ElCheckbox } from "element-plus";
import { Warning } from "@element-plus/icons-vue";

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
.label {
    display: flex;
    justify-content: space-between;
}
</style>
