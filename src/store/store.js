import Vue from 'vue';
import Vuex from 'vuex';
// import axios from "axios";
Vue.use(Vuex);

// axios.get('http://localhost:3000/cart/getCartsCount')
//     .then(data=>{
//         this.number = data
//     })
//     .catch()

export const store = new Vuex.Store({
        state :{
            cartNumber : 0
        }
})
