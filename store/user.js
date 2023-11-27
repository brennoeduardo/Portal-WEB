import { defineStore } from 'pinia'

export const saveUsers = defineStore('users', {
    state: () => ({
        userId: null
    }), 
    actions: {
        saveUserId(state) {
            this.userId = state
        } 
    } 

})



