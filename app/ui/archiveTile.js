const html = require('choo/html');
const raw = require('choo/html/raw');
const assets = require('../../common/assets');
const { bytes, copyToClipboard, list, percent, timeLeft } = require('../utils');
const expiryOptions = require('./expiryOptions');

function expiryInfo(translate, archive) {
  const l10n = timeLeft(archive.expiresAt - Date.now());
  return raw(
    translate('frontPageExpireInfo', {
      downloadCount: translate('downloadCount', {
        num: archive.dlimit - archive.dtotal
      }),
      timespan: translate(l10n.id, l10n)
    })
  );
}

function password(state) {
  const MAX_LENGTH = 32;

  return html`
  <div class="my-2">
    <div class="checkbox inline-block mr-3">
      <input
        id="add-password"
        type="checkbox"
        ${state.password ? 'checked' : ''}
        autocomplete="off"
        onchange=${togglePasswordInput}/>
      <label for="add-password">
        ${state.translate('addPasswordMessage')}
      </label>
    </div>
    <input
      id="password-input"
      class="${
        state.password ? '' : 'invisible'
      } border rounded-sm focus:border-blue leading-normal mt-2 py-1 px-2 h-8"
      autocomplete="off"
      maxlength="${MAX_LENGTH}"
      type="password"
      oninput=${inputChanged}
      onfocus=${focused}
      placeholder="${state.translate('unlockInputPlaceholder')}"
      value="${state.password || ''}"
    >
    <label
      id="password-msg"
      for="password-input"
      class="block text-xs text-grey-darker mt-1"></label>
  </div>`;

  function togglePasswordInput(event) {
    event.stopPropagation();
    const checked = event.target.checked;
    const input = document.getElementById('password-input');
    if (checked) {
      input.classList.remove('invisible');
      input.focus();
    } else {
      input.classList.add('invisible');
      input.value = '';
      document.getElementById('password-msg').textContent = '';
      state.password = null;
    }
  }

  function inputChanged() {
    const passwordInput = document.getElementById('password-input');
    const pwdmsg = document.getElementById('password-msg');
    const password = passwordInput.value;
    const length = password.length;

    if (length === MAX_LENGTH) {
      pwdmsg.textContent = state.translate('maxPasswordLength', {
        length: MAX_LENGTH
      });
    } else {
      pwdmsg.textContent = '';
    }
    state.password = password;
  }

  function focused(event) {
    event.preventDefault();
    const el = document.getElementById('password-input');
    if (el.placeholder !== state.translate('unlockInputPlaceholder')) {
      el.placeholder = '';
    }
  }
}

function fileInfo(file, action) {
  return html`
    <article class="flex flex-row items-center p-3">
      <img class="" src="${assets.get('blue_file.svg')}"/>
      <p class="ml-4 w-full">
        <h1 class="text-sm font-medium">${file.name}</h1>
        <div class="text-xs font-normal opacity-75 pt-1">${bytes(
          file.size
        )}</div>
        <div class="hidden">${file.type}</div>
      </p>
      ${action}
    </article>`;
}

function archiveDetails(translate, archive) {
  if (archive.manifest.files.length > 1) {
    return html`
    <details class="w-full">
      <summary>${translate('fileCount', {
        num: archive.manifest.files.length
      })}</summary>
      ${list(archive.manifest.files.map(f => fileInfo(f)), 'list-reset')}
    </details>`;
  }
}

module.exports = function(state, emit, archive) {
  return html`
  <article
    id="${archive.id}"
    class="flex flex-col items-start border border-grey-light bg-white p-4 mb-3">
    <p class="w-full">
      <img class="float-left mr-3" src="${assets.get('blue_file.svg')}"/>
      <input
        type="image"
        class="float-right self-center text-white"
        alt="Delete"
        src="${assets.get('close-16.svg')}"
        onclick=${del}/>
      <h1 class="text-sm font-medium">${archive.name}</h1>
      <div class="text-xs font-normal opacity-75 pt-1">${bytes(
        archive.size
      )}</div>
    </p>
    <div class="text-xs text-grey-dark w-full mt-2 mb-2">
      ${expiryInfo(state.translate, archive)}
    </div>
    ${archiveDetails(state.translate, archive)}
    <hr class="w-full border-t my-4">
    <button
      class="text-blue self-end font-medium flex items-center"
      onclick=${copy}>
      <img src="${assets.get('copy-16.svg')}" class="mr-2"/>
      ${state.translate('copyUrlHover')}
    </button>
  </article>`;

  function copy(event) {
    event.stopPropagation();
    copyToClipboard(archive.url);
    const text = event.target.lastChild;
    text.textContent = state.translate('copiedUrl');
    setTimeout(
      () => (text.textContent = state.translate('copyUrlHover')),
      1000
    );
  }

  function del(event) {
    event.stopPropagation();
    emit('delete', { file: archive, location: 'success-screen' });
  }
};

module.exports.wip = function(state, emit) {
  return html`
  <article class="h-full flex flex-col bg-white z-20">
    ${list(
      state.archive.files.map(f => fileInfo(f, remove(f))),
      'list-reset h-full overflow-y-scroll p-4 bg-blue-lightest max-h-half',
      'bg-white px-2 mb-3 border border-grey-light rounded'
    )}
    <div class="flex-grow p-4 bg-blue-lightest mb-6 font-medium">
      <input
        id="file-upload"
        class="hidden"
        type="file"
        multiple
        onchange=${add} />
      <label
        for="file-upload"
        class="flex flex-row items-center w-full h-full p-2 cursor-pointer"
        title="${state.translate('addFilesButton')}">
          <img src="${assets.get('addfiles.svg')}" class="w-6 h-6 mr-2"/>
          ${state.translate('addFilesButton')}
      </label>
    </div>
    ${expiryOptions(state, emit)}
    ${password(state, emit)}
    <button
      class="rounded bg-blue hover\:bg-blue-dark focus\:bg-blue-darker cursor-pointer text-center text-white py-2 px-6 h-12 mt-4 flex flex-no-shrink items-center justify-center font-semibold"
      title="${state.translate('uploadSuccessConfirmHeader')}"
      onclick=${upload}>
      ${state.translate('uploadSuccessConfirmHeader')}
    </button>
  </article>`;

  function upload(event) {
    event.preventDefault();
    event.target.disabled = true;
    if (!state.uploading) {
      emit('upload', {
        type: 'click',
        dlimit: state.downloadCount || 1,
        password: state.password
      });
    }
  }

  function add(event) {
    event.preventDefault();
    const newFiles = Array.from(event.target.files);

    emit('addFiles', { files: newFiles });
  }

  function remove(file) {
    return html`
    <input
      type="image"
      class="self-center text-white ml-4"
      alt="Delete"
      src="${assets.get('close-16.svg')}"
      onclick=${del}/>`;
    function del(event) {
      event.stopPropagation();
      emit('removeUpload', file);
    }
  }
};

module.exports.uploading = function(state, emit) {
  const progress = state.transfer.progressRatio;
  const progressPercent = percent(progress);
  const archive = state.archive;
  return html`
  <article
    id="${archive.id}"
    class="z-20 flex flex-col items-start border border-grey-light bg-white p-4">
    <p class="w-full">
      <img class="float-left mr-3" src="${assets.get('blue_file.svg')}"/>
      <h1 class="text-sm font-medium">${archive.name}</h1>
      <div class="text-xs font-normal opacity-75 pt-1">${bytes(
        archive.size
      )}</div>
    </p>
    <div class="text-xs text-grey-dark w-full mt-2 mb-2">
      ${expiryInfo(state.translate, {
        dlimit: state.downloadCount || 1,
        dtotal: 0,
        expiresAt: Date.now() + 500 + state.timeLimit * 1000
      })}
    </div>
    <div class="text-blue text-sm font-medium mt-2">${progressPercent}</div>
    <progress class="my-3" value="${progress}">${progressPercent}</progress>
    <button
      class="text-blue self-end font-medium"
      onclick=${cancel}>
      ${state.translate('uploadingPageCancel')}
    </button>
  </article>`;

  function cancel(event) {
    event.stopPropagation();
    event.target.disabled = true;
    emit('cancel');
  }
};

module.exports.empty = function(state, emit) {
  return html`
  <article class="flex flex-col items-center justify-center border border-dashed border-blue-light px-6 py-16 h-full">
    <img src="${assets.get('addfiles.svg')}" width="48" height="48"/>
    <div class="pt-6 pb-2 text-center text-lg font-bold uppercase tracking-wide">${state.translate(
      'uploadDropDragMessage'
    )}</div>
    <div class="pb-6 text-center text-base italic">${state.translate(
      'uploadDropClickMessage'
    )}</div>
    <input
      id="file-upload"
      class="hidden"
      type="file"
      multiple
      onchange=${add} />
    <label
      for="file-upload"
      class="rounded bg-blue hover\:bg-blue-dark focus\:bg-blue-darker cursor-pointer text-center text-white py-2 px-6 h-12 mt-4 flex flex-no-shrink items-center justify-center font-semibold"
      title="${state.translate('uploadPageBrowseButton2')}">
        ${state.translate('uploadPageBrowseButton2')}
    </label>
  </article>`;

  function add(event) {
    event.preventDefault();
    const newFiles = Array.from(event.target.files);

    emit('addFiles', { files: newFiles });
  }
};

module.exports.preview = function(state, emit) {
  const archive = state.fileInfo;
  return html`
  <article class="flex flex-col bg-white border border-grey-light p-4 z-20">
    <p class="w-full mb-4">
      <img class="float-left mr-3" src="${assets.get('blue_file.svg')}"/>
      <h1 class="text-sm font-medium">${archive.name}</h1>
      <div class="text-xs font-normal opacity-75 pt-1">${bytes(
        archive.size
      )}</div>
    </p>
    ${archiveDetails(state.translate, archive)}
    <button
      class="rounded bg-blue hover\:bg-blue-dark focus\:bg-blue-darker cursor-pointer text-center text-white mt-4 py-2 px-6 h-12 w-full flex flex-no-shrink items-center justify-center font-semibold"
      title="${state.translate('downloadButtonLabel')}"
      onclick=${download}>
      ${state.translate('downloadButtonLabel')}
    </button>
    <p class="mt-4 text-center">
      <a href="/" class="text-blue font-medium">${state.translate(
        'sendYourFilesLink'
      )}</a>
    </p>
  </article>`;

  function download(event) {
    event.preventDefault();
    event.target.disabled = true;
    emit('download', archive);
  }
};

module.exports.downloading = function(state, emit) {
  const archive = state.fileInfo;
  const progress = state.transfer.progressRatio;
  const progressPercent = percent(progress);
  return html`
  <article class="flex flex-col bg-white border border-grey-light p-4 z-20">
    <p class="w-full mb-4">
      <img class="float-left mr-3" src="${assets.get('blue_file.svg')}"/>
      <h1 class="text-sm font-medium">${archive.name}</h1>
      <div class="text-xs font-normal opacity-75 pt-1">${bytes(
        archive.size
      )}</div>
    </p>
    <div class="text-blue text-sm font-medium mt-2">${progressPercent}</div>
    <progress class="my-3" value="${progress}">${progressPercent}</progress>
    <button
      class="border rounded bg-grey-dark text-white mt-2 text-center py-2 px-6 h-12 w-full flex flex-no-shrink items-center justify-center font-semibold"
      title="${state.translate('downloadCancel')}"
      onclick=${cancel}>
      ${state.translate('downloadCancel')}
    </button>
  </article>`;

  function cancel(event) {
    event.preventDefault();
    event.target.disabled = true;
    emit('download', archive);
  }
};
