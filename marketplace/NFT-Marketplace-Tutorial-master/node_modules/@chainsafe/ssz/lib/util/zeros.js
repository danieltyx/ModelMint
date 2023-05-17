"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroHash = void 0;
const index_1 = require("@chainsafe/persistent-merkle-tree/lib/hasher/index");
// create array of "zero hashes", successively hashed zero chunks
const zeroHashes = [new Uint8Array(32)];
function zeroHash(depth) {
    if (depth >= zeroHashes.length) {
        for (let i = zeroHashes.length; i <= depth; i++) {
            zeroHashes[i] = index_1.hasher.digest64(zeroHashes[i - 1], zeroHashes[i - 1]);
        }
    }
    return zeroHashes[depth];
}
exports.zeroHash = zeroHash;
//# sourceMappingURL=zeros.js.map