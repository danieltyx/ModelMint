// globalVariable.js
let _currentUserWalletAddress = null;

export function setCurrentUserWalletAddress(address) {
  _currentUserWalletAddress = address;
}

export function getCurrentUserWalletAddress() {
  return _currentUserWalletAddress;
}


let _currentUserOpenAIKey = null;

export function setCurrentUserOpenAIKey(key) {
  _currentUserOpenAIKey = key;
}

export function getCurrentUserOpenAIKey() {
  return _currentUserOpenAIKey;
}

const hostAddress = "localhost";

export {hostAddress};

