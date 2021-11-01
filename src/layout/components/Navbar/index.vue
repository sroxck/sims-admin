<template>
 <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <el-icon style="margin-right: 15px"><setting /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </el-header>
      <slot></slot>
    </el-container>
</template>
<script lang="ts" setup>
import { Message, Menu  , Setting } from '@element-plus/icons'

</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}
  
</style>