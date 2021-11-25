import { Module } from 'vuex'
interface login {
  username: string;
  password: string;
}
const userModule: Module<any, any> = {
  namespaced: true,
  state: {
      userInfo: {},
        token: '',
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
        state.userInfo = userInfo
    },
    SET_TOKEN(state, token) {
        state.token = token
    }
  },
  actions: {
    login({ commit }, userInfo: login) {
      commit('SET_TOKEN', userInfo)
      commit('SET_USER_INFO', userInfo)
      const {password,username} = userInfo
      if(password == '123456' && username == 'jdd'){
        return {msg:'登录成功'}
      }else{
        return {msg:'登录失败'}
      }
    }
  }
}

export default userModule
