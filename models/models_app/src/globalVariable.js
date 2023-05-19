// globalVariable.js
let _currentUserWalletAddress = null;

export function setCurrentUserWalletAddress(address) {
  _currentUserWalletAddress = address;
}

export function getCurrentUserWalletAddress() {
  return _currentUserWalletAddress;
}