<script lang="ts" setup>
import Navbar from '@/layout/components/Navbar/index.vue'
import Sidebar from '@/layout/components/Sidebar/index.vue'
</script>

<template>
    <el-container style="height: 100vh; ">
        <Sidebar></Sidebar>
        <Navbar>
            <el-main>
                <router-view></router-view>
            </el-main>
        </Navbar>
    </el-container>
</template>

<style>
.el-header {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    line-height: 60px;
}

.el-aside {
    color: var(--el-text-color-primary);
}
</style>