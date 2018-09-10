const fetch = require('node-fetch');
const config = require('./config');

const KEY_SCOPE = 'https://identity.mozilla.com/apps/send';
let fxaConfig = null;
let lastConfigRefresh = 0;

async function getFxaConfig() {
  if (fxaConfig && Date.now() - lastConfigRefresh < 1000 * 60 * 5) {
    return fxaConfig;
  }
  const res = await fetch(`${config.fxa_url}/.well-known/openid-configuration`);
  fxaConfig = await res.json();
  lastConfigRefresh = Date.now();
  return fxaConfig;
}

module.exports = {
  getFxaConfig,
  verify: async function(token) {
    if (!token) {
      return null;
    }

    const c = await getFxaConfig();
    try {
      const verifyUrl = c.jwks_uri.replace('jwks', 'verify'); //HACK
      const result = await fetch(verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });
      const info = await result.json();
      if (
        info.scope &&
        Array.isArray(info.scope) &&
        info.scope.includes(KEY_SCOPE)
      ) {
        return info.user;
      }
    } catch (e) {
      // gulp
    }
    return null;
  }
};
