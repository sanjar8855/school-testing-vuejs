import axios from '../../axios/request'

export default {
    namespaced: true,
    state() {
        return {
            students:''
        }
    },
    mutations: {
        setStudents(state,students){
            state.students = students
        }
    },
    actions: {
        async create({ dispatch }, payload) {
            try {
                const { data } = await axios.post(`/register`, payload, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                dispatch('setMessage', {
                    type: 'success',
                    value: 'Muvaffaqiyatli qo`shildi!'
                }, { root: true })
                return data.error
            }
            catch (e) {
                dispatch('setMessage', {
                    type: 'danger',
                    value: e.message
                }, { root: true })
            }
        },
        async loadByMaktabId({commit, dispatch}) {
            try {
                const token = localStorage.getItem('jwt-token')
                const maktabId = localStorage.getItem('maktabId')
                const {data} = await axios.get(`/users?maktab_id=${maktabId}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                commit('setStudents',data.data)
            }
            catch (e) {
                dispatch('setMessage', {
                    type: 'danger',
                    value: e.message
                }, { root: true })
            }
        },
        async loadById({dispatch},id){
            try{
                const { data } = await axios.post(`/users/read`, id, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                console.log(data)
                return data
            }
            catch (e) {
                dispatch('setMessage',{
                    type:'danger',
                    value:e.message
                }, {root: true})
            }
        },
        async removeById({dispatch},id){
            try{
                await axios.delete(`/requests/${id}.json`)
                dispatch('setMessage',{
                    type:'primary',
                    value:'Muvaffaqiyatli o`chirildi!'
                }, {root: true})
            }
            catch (e) {
                dispatch('setMessage',{
                    type:'danger',
                    value:e.message
                }, {root: true})
            }
        },
        async update({ dispatch }, payload) {
            try {
                const { data } = await axios.post(`/users/update`, payload, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                dispatch('setMessage', {
                    type: 'success',
                    value: 'Muvaffaqiyatli o`zgartirildi!'
                }, { root: true })
                return data.error
            }
            catch (e) {
                dispatch('setMessage', {
                    type: 'danger',
                    value: e.message
                }, { root: true })
            }
        },
    },
    getters: {
        students(state){
            return state.students
        }
    }
}