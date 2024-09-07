<template >
  <MyForm v-bind="formConfig" v-model="formData" ref="myFormRef">
    <template #header>
      <h1>登录</h1>
    </template>

    <template #footer>
      <el-form-item>
        <el-button type="primary" @click="login" >登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </template>
  </MyForm>
</template>

<script setup>
import MyForm from '../../components/myForm.vue'
import formConfig from '../../config/formConfig'
import { reactive, ref } from 'vue'

const formItem = formConfig.formItem ?? []

// data对象中添加name为key
const data = {};
formItem.map(v => {
  data[v.name] = ''
})

const formData = ref(data)

const myFormRef = ref()  //获取dom元素

const login = ()=> {
  myFormRef.value?.submitForm('提交成功了')
}

const reset = () => {
  myFormRef.value?.resetForm()
}



</script>