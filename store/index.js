import { getUserFromCookie } from '@/helpers/jwt'
import { getUserDataFuncHelper } from '~/helpers/firebase_database_reference'

export const state = () => ({
  isUserLoggedIn: false,
  userData: '',
  projectName: 'AAUAHub',
  categories: [
    {
      name: 'Shops',
      link: 'shops',
    },
    {
      name: 'Hostels',
      link: 'hostels',
    },
    {
      name: 'Restaurants',
      link: 'restaurants',
    },
  ],
})

export const mutations = {
  SET_LOGIN_VAL: (state, payload) => (state.isUserLoggedIn = payload),
  SET_USER_DATA: (state, payload) => (state.userData = payload),
}

export const getters = {
  GET_IS_USER_LOGGED_IN: (state) => state.isUserLoggedIn,
  GET_USER_DATA: (state) => state.userData,
  GET_ALL_CATEGORIES: (state) => state.categories,
  GET_PROJECT_NAME: (state) => state.projectName,
}

export const actions = {
  nuxtServerInit({ commit }, context) {
    let uid = ''
    let fireDb = ''
    // noinspection JSUnresolvedVariable
    return new Promise((resolve, reject) => {
      // noinspection JSUnresolvedVariable
      if (process.server) {
        const { req, app } = context
        const user = getUserFromCookie(req)
        if (user) {
          uid = user.user_id
          fireDb = app.$fireDb
        } else {
          resolve(false)
        }
      } else {
        const { app } = context
        const currentUser = app.$fireAuth.currentUser
        if (currentUser) {
          uid = currentUser.uid
          fireDb = app.$fireDb
        } else {
          resolve(false)
        }
      }
      getUserDataFuncHelper(fireDb, uid)
        .once('value')
        .then((snapshot) => {
          const user = snapshot.val()
          commit('SET_LOGIN_VAL', true)
          commit('SET_USER_DATA', user)
          resolve(true)
        })
        .catch((error) => {
          commit('SET_LOGIN_VAL', false)
          reject(error)
        })
    })
  },
}
