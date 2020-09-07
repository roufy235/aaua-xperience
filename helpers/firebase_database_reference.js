export function createNewUserFuncHelper(fireDb, userId) {
  return fireDb.ref('user').child(userId)
}

export function getUserDataFuncHelper(fireDb, userId) {
  return fireDb.ref('user').child(userId)
}
