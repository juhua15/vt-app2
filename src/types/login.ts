import type { FormInstance } from "element-plus"
import { ref } from "vue"
export interface LogoinFrom {
    username: string,
    password: string
}
export class initData {
    loginForm: LogoinFrom = {
        username: '',
        password: ''
    }
    loginFormRef= ref<FormInstance>()
}