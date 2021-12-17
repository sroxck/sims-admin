<template>
 <el-container class=" bg-gray-50 ">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
           <span>Tom
          <el-icon el-icon style="margin-right: 15px"><setting /></el-icon>
           </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <slot></slot>
    </el-container>
</template>
<script lang="ts" setup>
import { Message, Menu  , Setting } from '@element-plus/icons'

</script>
<style>
  
</style>