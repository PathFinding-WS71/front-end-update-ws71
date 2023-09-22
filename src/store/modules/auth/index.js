import mutations from './mutations'
import getters from "@/store/modules/auth/getters";
import actions from "@/store/modules/auth/actions";
export default {
    namespaced: true,
    state() {
        return {
            name: 'Yo',
        };
    },
    mutations,
    getters,
    actions
}