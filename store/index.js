import { getUserFromCookie } from '@/helpers/jwt'
export const state = () => ({
  isUserLoggedIn: false,
  projectName: 'AAUAHub',
  categories: [
    {
      name: 'Shops',
      link: '',
    },
    {
      name: 'Hostels',
      link: '',
    },
    {
      name: 'Restaurants',
      link: '',
    },
  ],
})

export const mutations = {
  SET_LOGIN_VAL: (state, payload) => (state.isUserLoggedIn = payload),
}

export const getters = {
  GET_IS_USER_LOGGED_IN: (state) => state.isUserLoggedIn,
  GET_ALL_CATEGORIES: (state) => state.categories,
  GET_PROJECT_NAME: (state) => state.projectName,
}

export const actions = {
  nuxtServerInit({ commit }, context) {
    if (process.server) {
      const { req } = context
      const user = getUserFromCookie(req)
      if (user) {
        commit('SET_LOGIN_VAL', true)
      }
    } else {
      const { app } = context
      const currentUser = app.$fireAuth.currentUser
      if (currentUser) {
        commit('SET_LOGIN_VAL', true)
      }
    }
  },
}
