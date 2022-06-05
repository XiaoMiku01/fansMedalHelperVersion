<template>
  <el-form label-position="top" :model="FormData" style="max-width: 500px">
    <el-row>
      <el-col :span="12">
        <el-form-item label="当前等级" prop="Level" required>
          <el-input v-model="FormData.Level" type="number" :step="1" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="当前亲密度" prop="Exp">
          <el-input v-model="FormData.Exp" type="number" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="目标等级" prop="tLevel" required>
          <el-input v-model="FormData.tLevel" type="number" :step="1" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="目标亲密度" prop="tExp">
          <el-input v-model="FormData.tExp" type="number" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row class="description">
      <span>如每日获取</span>
      <el-tag type="success">{{ result.DAILY }}</el-tag>
      <span>还需要亲密度: </span>
      <el-tag type="success">{{ result.total }}</el-tag>
      <span>剩余天数: </span>
      <el-tag type="success">{{ result.days }}</el-tag>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, watch } from "vue"
import { ElRow, ElCol, ElForm, ElFormItem, ElInput, ElTag, ElMessage } from "element-plus"
import CalcIntimacy from "./Funcs/CalcIntimacy"
import "element-plus/theme-chalk/base.css"
import "element-plus/theme-chalk/el-row.css"
import "element-plus/theme-chalk/el-col.css"
import "element-plus/theme-chalk/el-form.css"
import "element-plus/theme-chalk/el-form-item.css"
import "element-plus/theme-chalk/el-input.css"
import "element-plus/theme-chalk/el-tag.css"
import "element-plus/theme-chalk/el-message.css"

export default defineComponent({
  components: {
    ElRow,
    ElCol,
    ElForm,
    ElFormItem,
    ElInput,
    ElTag,
    ElMessage
  },
  setup() {
    const FormData = reactive({
      Level: 1,
      Exp: 0,
      tLevel: 20,
      tExp: 0
    })
    let result = reactive({ total: 0, days: 0, DAILY: 1300 })
    onBeforeMount(() => {
      onDataChange(FormData) // 初始化
    })
    watch(FormData, (data) => {
      onDataChange(data)
    })
    function onDataChange(obj) {
      if (!valueValidCheck(obj)) {
        ElMessage({
          message: "值非法，请检查输入值",
          type: "warning"
        })
      } else {
        result.total = CalcIntimacy(obj.Level, obj.Exp, obj.tLevel, obj.tExp).total
        result.days = CalcIntimacy(obj.Level, obj.Exp, obj.tLevel, obj.tExp).days
        result.DAILY = CalcIntimacy(obj.Level, obj.Exp, obj.tLevel, obj.tExp).DAILY
      }
    }
    function valueValidCheck(obj) {
      const flag = obj.Level >= 1 && obj.Level <= 20 && obj.tLevel >= 1 && obj.tLevel <= 20
      if (flag) {
        // nothing to do.
        return true
      } else {
        return false
      }
    }
    return {
      FormData,
      result
    }
  }
})
</script>

<style scoped>
.description span {
  margin: 5px 5px 5px 5px;
}
.el-input {
  padding: 5px 10px 5px 10px;
}
</style>
