import { getUserFromCookie } from '~/helpers/jwt'

export default function (context) {
  if (process.server) {
    const { req, redirect } = context
    const user = getUserFromCookie(req)
    if (user) {
      return redirect('/')
    }
  } else {
    const { app, redirect } = context
    const currentUser = app.$fireAuth.currentUser
    if (currentUser) {
      return redirect('/')
    }
  }
}
