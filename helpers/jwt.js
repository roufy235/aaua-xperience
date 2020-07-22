import jwtDecode from 'jwt-decode'
const cookieParser = require('cookieparser')

export function getUserFromCookie(req) {
  if (process.server && process.static) return
  if (!req.headers.cookie) return

  if (req.headers.cookie) {
    const parsed = cookieParser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.access_token
    if (!accessTokenCookie) return

    const decodeToken = jwtDecode(accessTokenCookie)
    if (!decodeToken) return
    return decodeToken
  }
}
