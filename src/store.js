import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 23,
            likes: 0,
            likeState: false,
            more: {}
        }
    },
    mutations: {
        nameChange(state) {
            state.name = 'park'
        },
        ageChange(state, data) {
            state.age += data
        },
        clickLike(state) {
            if (state.likeState === false) {
                state.likes++
                state.likeState = true
            } else {
                state.likes--
                state.likeState = false
            }
        },
        setMore(state, data){
            state.more = data
        }

    },
    actions: {
        async getData(context) {//context === store
            await axios.get('https://codingapple1.github.io/vue/more0.json').then(a => {
                console.log(a.data)
                context.commit('setMore', a.data)//mutations 함수를 통해 저장을 시키고 있다.
            })
        }
    }
})

export default store