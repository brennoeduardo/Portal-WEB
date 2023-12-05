import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
  state: () => ({
    userId: null,
  }), 
  actions: {
    saveUserId(userId) {
      this.userId = userId;
    },
  },
});