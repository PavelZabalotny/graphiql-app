// pattern: minimum 8 symbols, at least one letter, one digit, one special character
export const passwordPattern =
  /^(?=.*[a-zA-Z\d])(?=.*["#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}/

export const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
