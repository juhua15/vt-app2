import $http from "@/http";
interface loginData{
    username:string,
    password:string
}
export const login = (data :loginData) => $http({
    url:'/login',
    method:'POST',
    data
})