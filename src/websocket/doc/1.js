let SecWebSocketKey = 'CW1QVsg1uIzs6OD010S8Ag==';
let SecWebSocketKeyAccetp = '1rS01Nmtlj9raYP6lxsMgsf7BSA=';

const crypto = require('crypto');
const CODE = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
function toAcceptKey(wsKey) {
    return crypto.createHash('sha1').update(wsKey + CODE).digest('base64');;
}
console.log(toAcceptKey(SecWebSocketKey));