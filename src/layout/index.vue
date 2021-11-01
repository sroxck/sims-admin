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

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Message, Menu, Setting } from '@element-plus/icons'
import Navbar from '@/layout/components/Navbar/index.vue'
import Sidebar from '@/layout/components/Sidebar/index.vue'
export default defineComponent({
    components: {
        Message,
        Setting,
        'icon-menu': Menu,
        Navbar,
        Sidebar
    },
    setup() {
        const item = {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        }

        const tableData = ref(Array(20).fill(item))

        return {
            tableData,
        }
    },
})
</script>

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