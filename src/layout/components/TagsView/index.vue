<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item >{{list.meta.title}}</el-breadcrumb-item>
        <el-breadcrumb-item >{{list2.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
// useRouter
// useRoute
console.log(useRoute(),useRoute().path);
const list = useRoute().matched[0]
const list2 = useRoute()
</script>