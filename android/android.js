/* global window, document, fetch */

window.MAXFILESIZE = 1024 * 1024 * 1024 * 2;

const EventEmitter = require('events');
const emitter = new EventEmitter();

function dom(tagName, attributes, children = []) {
  const node = document.createElement(tagName);
  for (const name in attributes) {
    if (name.indexOf('on') === 0) {
      node[name] = attributes[name];
    } else if (name === 'htmlFor') {
      node.htmlFor = attributes.htmlFor;
    } else if (name === 'className') {
      node.className = attributes.className;
    } else {
      node.setAttribute(name, attributes[name]);
    }
  }
  if (!(children instanceof Array)) {
    children = [children];
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }
    node.appendChild(child);
  }
  return node;
}

function uploadComplete(file) {
  document.body.innerHTML = '';
  const input = dom('input', { id: 'url', value: file.url });
  const copy = dom(
    'button',
    {
      id: 'copy-button',
      className: 'button',
      onclick: () => {
        input.select();
        document.execCommand('copy');
        input.blur();
        copy.textContent = 'Copied!';
        setTimeout(function() {
          copy.textContent = 'Copy to clipboard';
        }, 2000);
      }
    },
    'Copy to clipboard'
  );
  const node = dom('div', { id: 'white' }, [
    input,
    copy,
    dom(
      'button',
      { id: 'send-another', className: 'button', onclick: render },
      'Send another file'
    )
  ]);
  document.body.appendChild(node);
}

const state = {
  translate: (...toTranslate) => {
    return toTranslate.map(o => JSON.stringify(o)).toString();
  },
  raven: {
    captureException: e => {
      console.error('ERROR ' + e + ' ' + e.stack);
    }
  },
  storage: {
    files: [],
    remove: function(fileId) {
      console.log('REMOVE FILEID', fileId);
    },
    writeFile: function(file) {
      console.log('WRITEFILE', file);
    },
    addFile: uploadComplete,
    totalUploads: 0
  },
  transfer: null,
  uploading: false,
  settingPassword: false,
  passwordSetError: null,
  route: '/'
};

function upload(event) {
  event.preventDefault();
  const target = event.target;
  const file = target.files[0];
  if (file.size === 0) {
    return;
  }

  emitter.emit('addFiles', { files: [file] });
  emitter.emit('upload', {});
}

function render() {
  document.body.innerHTML = '';
  const node = dom('div', { id: 'white' }, [
    dom('img', { src: 'encrypted-envelope.png' }),
    dom('h4', {}, 'Private, Encrypted File Sharing'),
    dom(
      'div',
      {},
      'Send files through a safe, private, and encrypted link that automatically expires to ensure your stuff does not remain online forever.'
    ),
    dom('div', { className: 'spacer' }, ' '),
    dom(
      'label',
      { id: 'label', htmlFor: 'input' },
      dom('img', { src: 'cloud-upload.png' }, [])
    ),
    dom('input', {
      id: 'input',
      type: 'file',
      name: 'input',
      onchange: upload
    })
  ]);
  document.body.appendChild(node);
}

emitter.on('render', function() {
  document.body.innerHTML = '';
  const percent =
    (state.transfer.progress[0] / state.transfer.progress[1]) * 100;
  const node = dom(
    'div',
    { id: 'white', style: 'width: 90%' },
    dom('span', {
      style: `display: inline-block; width: ${percent}%; background-color: blue`
    })
  );
  document.body.appendChild(node);
});

emitter.on('pushState', function(path) {
  console.log('pushState ' + path + ' ' + JSON.stringify(state));
});

const fileManager = require('../app/fileManager').default;
try {
  fileManager(state, emitter);
} catch (e) {
  console.error('error' + e);
  console.error(e);
}

window.addEventListener(
  'message',
  event => {
    fetch(event.data)
      .then(res => res.blob())
      .then(blob => {
        emitter.emit('addFiles', { files: [blob] });
        emitter.emit('upload', {});
      })
      .catch(e => console.error('ERROR ' + e + ' ' + e.stack));
  },
  false
);

render();
