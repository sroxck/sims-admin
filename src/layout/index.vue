<script lang="ts" setup>
import Navbar from '@/layout/components/Navbar/index.vue'
import Sidebar from '@/layout/components/Sidebar/index.vue'
</script>

<template>
  <el-container style="height: 100vh; " class="bg-gray-50 text-lg">
    <Sidebar></Sidebar>
    <Navbar>
      <el-main class="container">
        <router-view v-slot="{ Component }">
          <transition name="sale-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </Navbar>
  </el-container>
</template>

<style>

</style>