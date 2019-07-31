import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     infoList:{}
  },
  mutations: {
      addInfo(state,data){
  		state.infoList=data;
  	}
  },
  actions: {

  }
})
