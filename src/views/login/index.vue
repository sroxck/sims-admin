<template>
  <div class="user-layout">
    <div class="flex flex-col items-center justify-center">
      <div class="login">
        <el-form :model="state">
          <el-form-item>
            <el-input v-model="state.username" placeholder="请输入用户名"></el-input>
            <el-input v-model="state.password" placeholder="请输入密码"></el-input>
            <el-button @click="login1">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElNotification } from 'element-plus'
import store from '@/store';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { login } from '@/interface/user'
const state = reactive<login>({
  username: 'jdd',
  password: '123456',
});
const router = useRouter();
const login1 = () => {
  store.dispatch('user/login', {
    username: state.username,
    password: state.password,
  }).then(res => {
    console.log(res);
    if (res.msg == '登录成功') {
      router.push('/home')
      ElNotification({
        title:'通知',
        message: '登录成功',
        type: 'success'
      })
    }
  })
}
</script>



<style lang="css" scoped>
.container {
  margin: 0 auto;
  width: 1440px;
}
.login {
}
.user-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>