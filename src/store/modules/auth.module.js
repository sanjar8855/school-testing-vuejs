import axios from '../../axios/request'
import {errors} from "@/utils/errors";

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem('jwt-token'),
            role: localStorage.getItem('role'),
            maktabId: localStorage.getItem('maktabId')
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('jwt-token', token)
        },
        setRole(state, role) {
            state.role = role
            localStorage.setItem('role', role)
        },
        setMaktab(state, maktabId) {
            state.maktabId = maktabId
            localStorage.setItem('maktabId', maktabId)
        },
        logout(state) {
            state.token = null
            state.role = null
            state.maktabId = null
            localStorage.removeItem('jwt-token')
            localStorage.removeItem('role')
            localStorage.removeItem('maktabId')
        }
    },
    actions: {
        async login({ commit,dispatch }, values) {
            try {
                const { data } = await axios.post('/login', values, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                if (data.error == false){
                    commit('setToken', data.token)
                    commit('setRole', data.userRole)
                    commit('setMaktab', data.maktabId)
                    return true
                }else{
                    dispatch('setMessage', {
                        type: 'danger',
                        value: data
                    }, { root: true })
                    return false
                }
            }
            catch (e) {
                console.log(e.response.data.error)
                dispatch('setMessage', {
                    type: 'danger',
                    value: errors(e.response.data.error)
                }, { root: true })
            }
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token
        },
        role(state) {
            return state.role
        }
    }
}