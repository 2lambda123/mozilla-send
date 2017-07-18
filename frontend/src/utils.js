function arrayToHex(iv) {
  let hexStr = '';
  for (const i in iv) {
    if (iv[i] < 16) {
      hexStr += '0' + iv[i].toString(16);
    } else {
      hexStr += iv[i].toString(16);
    }
  }
  return hexStr;
}

function hexToArray(str) {
  const iv = new Uint8Array(str.length / 2);
  for (let i = 0; i < str.length; i += 2) {
    iv[i / 2] = parseInt(str.charAt(i) + str.charAt(i + 1), 16);
  }

  return iv;
}

function notify(str) {
  if (!('Notification' in window)) {
    return;
  } else if (Notification.permission === 'granted') {
    new Notification(str);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function(permission) {
      if (permission === 'granted') new Notification(str);
    });
  }
}

function gcmCompliant() {
  try {
    return window.crypto.subtle
      .generateKey(
        {
          name: 'AES-GCM',
          length: 128
        },
        true,
        ['encrypt', 'decrypt']
      )
      .then(key => {
        return window.crypto.subtle
          .encrypt(
            {
              name: 'AES-GCM',
              iv: window.crypto.getRandomValues(new Uint8Array(12)),
              additionalData: window.crypto.getRandomValues(new Uint8Array(6)),
              tagLength: 128
            },
            key,
            new ArrayBuffer(8)
          )
          .then(() => {
            return Promise.resolve();
          })
          .catch(err => {
            return Promise.reject();
          });
      })
      .catch(err => {
        return Promise.reject();
      });
  } catch (err) {
    return Promise.reject();
  }
}

function escapeHtml(string) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  return String(string).replace(/[&<>"'`=/]/g, s => map[s]);
}

module.exports = {
  arrayToHex,
  hexToArray,
  notify,
  gcmCompliant,
  escapeHtml
};
