/* global browser */
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const DownloadPage = require('./pages/desktop/download_page');
const HomePage = require('./pages/desktop/home_page');

describe('Firefox Send', function() {
  const homePage = new HomePage();
  const downloadDir =
    browser.desiredCapabilities['moz:firefoxOptions']['prefs'][
      'browser.download.dir'
    ];
  const testFilesPath = path.join(__dirname, 'fixtures');
  const testFiles = fs.readdirSync(testFilesPath);

  beforeEach(function() {
    homePage.open();
  });

  testFiles.forEach(file => {
    it(`should upload and download files, file: ${file}`, function() {
      browser.chooseFile(homePage.uploadInput, `${testFilesPath}/${file}`);
      browser.waitForExist(homePage.uploadButton);
      browser.click(homePage.uploadButton);
      browser.waitForExist(homePage.shareUrl);
      const downloadPage = new DownloadPage(
        browser.getValue(homePage.shareUrl)
      );
      downloadPage.open();
      downloadPage.download();
      browser.waitForExist(downloadPage.downloadComplete);
      assert.ok(fs.existsSync(path.join(downloadDir, file)));
    });
  });
});
