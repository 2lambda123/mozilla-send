const FileReceiver = require('./fileReceiver');
const { notify } = require('./utils');
const $ = require('jquery');

$(document).ready(function() {
  $('#send-file').click(() => {
    window.location.replace(`${window.location.origin}`);
  });
  const download = () => {
    const fileReceiver = new FileReceiver();
    const name = document.createElement('p');
    const progress = document.createElement('p');
    const btn = $('#download-btn');

    fileReceiver.on('progress', percentComplete => {
      progress.innerText = `Progress: ${percentComplete}%`;

      if (percentComplete === 100) {
        fileReceiver.removeAllListeners('progress');
        notify('Your download has finished.');
        btn.text('Download complete!');
        btn.attr('disabled', 'true');
      }
    });

    fileReceiver
      .download()
      .catch(() => {
        $('.title').text(
          'This link has expired or never existed in the first place.'
        );
        $('#download-btn').hide();
        $('#expired-img').show();
        console.log('The file has expired, or has already been deleted.');
        return;
      })
      .then(([decrypted, fname]) => {
        name.innerText = fname;
        const dataView = new DataView(decrypted);
        const blob = new Blob([dataView]);
        const downloadUrl = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = downloadUrl;
        if (window.navigator.msSaveBlob) {
          // if we are in microsoft edge or IE
          window.navigator.msSaveBlob(blob, fname);
          return;
        }
        a.download = fname;
        document.body.appendChild(a);
        a.click();
      });
  };

  window.download = download;
});
