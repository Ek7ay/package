<template >
  <div>
    <slot name="header"></slot>
  </div>
  <el-form ref="ruleFormRef" :rules="rules" :label-width="labelWidth" :model="modelValue">
    <template v-for="item in formItem" :key="item.name">
      <el-form-item :label="item.label" :prop="item.name">
        <template v-if="item.type == 'input' || item.type == 'password'">
          <el-input 
            :placeholder="item.placeholder" 
            v-model="modelValue[item.name]"
            :show-password="item.type == 'password'"
            />
        </template>

        <template v-if="item.type == 'select'">
          <el-select :placeholder="item.placeholder" v-model="modelValue[item.name]">
            <el-option v-for="option in item.option" :label="option.label" :value="option.value" :key="option.label" />
          </el-select>
        </template>

        <template v-if="item.type == 'date'">
          <el-date-picker
            v-model="modelValue[item.name]"
            :type="item.type"
            :placeholder="item.placeholder"
            clearable
          />
        </template>

        <template v-if="item.type == 'datepicker'">
          <el-date-picker
            v-model="modelValue[item.name]"
            :type="item.option.type"
            :start-placeholder="item.option.startPlaceholder"
            :end-placeholder="item.option.endPlaceholder"
            clearable
          />
        </template>

        <template v-if="item.type == 'switch'">
          <el-switch v-model="modelValue[item.name]"/>
        </template>
      </el-form-item>
    </template>
    <slot name="footer"></slot>
  </el-form>
</template>

<script setup>
import  { ref, defineProps } from 'vue'
const prop = defineProps({
  formItem: {
    type: Array
  },
  labelWidth: {
    type: String,
    default: '120px'
  },
   rules:{
    type: Object
  },
  modelValue: {
    type: Object
  },
})

const ruleFormRef = ref()

const submitForm = async (data) => {
  await ruleFormRef.value?.validate((valid, fields) => {
    if (valid) {
      console.log(data)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = () => {
  ruleFormRef.value?.resetFields()
}

defineExpose({
  submitForm,
  resetForm
})

</script>