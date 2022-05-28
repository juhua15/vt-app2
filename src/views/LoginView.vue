<template>
    <div class="login-box">

        <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="70px" class="loginForm">
            <h1>后台管理系统</h1>
            <el-form-item label="账号" prop="username">
                <el-input v-model="loginForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button class="btn-login" type="primary" @click="submitForm(loginFormRef)">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router'
import { initData } from '@/types/login';
import { login } from '@/api/login';

export default defineComponent({
    setup() {
        const data = reactive(new initData())
        const router = useRouter()
        const rules = {
            username: [
                { required: true, message: '请输入账号', trigger: 'blur' },
                { min: 6, max: 16, message: "账号长度在6-16位之间", trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 16, message: "密码长度在6-16位之间", trigger: 'blur' }
            ],
        }
        const submitForm = () => {
            data.loginFormRef?.validate((valid: boolean) => {
                if (valid) {
                    login(data.loginForm).then(res => {
                        console.log(res.data.token);
                        localStorage.setItem("token", res.data.token)
                        router.push('/')
                    })
                }
            })

        }

        return {
            ...toRefs(data),
            rules,
            submitForm
        }
    }
})
</script>

<style lang="scss" scoped>
.login-box {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;


    .loginForm {
        border-radius: 30px;
        background-color: rgb(220, 235, 241);
        align-self: center;
        width: 400px;
        padding: 50px;

        .btn-login {
            width: 100%;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
        }
    }
}
</style>