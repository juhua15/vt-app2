<template>
  <div class="common-layout">
    <el-container>
      <el-header height="80px">
        <el-row>
          <el-col :span="4">
            <img class="logo" src="@/assets/logo.png" alt="" srcset="">
          </el-col>
          <el-col :span="16">
            <h1>后台管理系统</h1>
          </el-col>
          <el-col :span="4" class="btn-text">
            <el-button type="text">admin</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
            default-active="1" text-color="#fff">
            <el-menu-item index="1">
              <el-icon>
                <icon-menu />
              </el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon>
                <document />
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon>
                <setting />
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
});
</script>
<style lang="scss" scoped>
.logo {
  height: 80px;
}

h1 {
  text-align: center;
  line-height: 80px;
  color: rgb(29, 29, 29);
}

.el-header {
  background-color: #545c64c9;
}

.btn-text {
  text-align: right;
  line-height: 80px;
}

.el-aside {
  .el-menu {
    height: calc(100vh - 80px);
  }
}
</style>