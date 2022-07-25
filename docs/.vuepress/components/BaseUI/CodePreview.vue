<template>
    <div class="code-preview">
        <el-card>
            <template #header>
                <div class="header">
                    <span>{{ CodePreviewConfig.title }}</span>
                    <div class="options">
                        <el-button
                            v-if="CodePreviewConfig.headers.copy.enable"
                            @click="handleCopyBtnClick"
                            circle
                        >
                            <el-icon><DocumentCopy /></el-icon>
                        </el-button>
                        <el-select
                            v-if="CodePreviewConfig.headers.select.enable"
                            v-model="initLanguage"
                            @change="handleSelectChange"
                            :placeholder="CodePreviewConfig.headers.select.config.placeholder"
                        >
                            <el-option
                                v-for="item in CodePreviewConfig.headers.select.config.items"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </div>
                </div>
            </template>
            <div class="content">
                <pre>
                  <code :class="props.language" v-html="highlightedCode"></code>
                </pre>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ElCard, ElButton, ElIcon, ElSelect, ElOption } from "element-plus";
import { DocumentCopy } from "@element-plus/icons-vue";
import { ref, watchEffect, onMounted, PropType } from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import CopyText from "../Funcs/CopyText";
import json2yaml from "../Funcs/Json2Yaml";
import { cache } from "../Funcs/Utils";
import type { ICodePreviewConfig } from "../types";

const props = defineProps({
    code: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    CodePreviewConfig: {
        required: true,
        type: Object as PropType<ICodePreviewConfig>,
    },
});

const initLanguage = props.language; // 仅用作初始化el-select的绑定值 不在此处修改

const handleCopyBtnClick = () => {
    if (props.language === "json") {
        // json重新做最小化
        const data = JSON.stringify(JSON.parse(props.code));
        CopyText(data);
        cache.set("json", data);
    } else {
        const data = props.code;
        CopyText(data);
        cache.set("json", data);
    }
};

const emit = defineEmits(["select-change"]);
const handleSelectChange = (val) => emit("select-change", val);

const highlightedCode = ref<string>("");
watchEffect(() => {
    highlightedCode.value = hljs.highlight(props.code, {
        language: props.language,
    }).value;
});
</script>

<style scoped>
.code-preview {
    width: 100%;
}
.el-card {
    width: 100%;
    margin: 25px 0px 25px 0px;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
}
.options > * {
    padding: 5px;
}

code {
    display: block;
    text-align: left;
    color: var(--c-text-lighter) !important;
    user-select: none;
}
</style>
