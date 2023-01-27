export function login(username, password) {
    return {
      type: "LOGIN",
      payload: {
        username,
        password
      }
    }
  }
  