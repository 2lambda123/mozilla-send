(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{210:function(e,n,o){"use strict";o.r(n),n.default='# Firefox Send is a brand name and should not be localized.\ntitle = Firefox Send\nsiteFeedback = Feedback\nimportingFile = Importing…\nencryptingFile = Encrypting…\ndecryptingFile = Decrypting…\ndownloadCount =\n    { $num ->\n        [one] 1 download\n       *[other] { $num } downloads\n    }\ntimespanHours =\n    { $num ->\n        [one] 1 hour\n       *[other] { $num } hours\n    }\ncopiedUrl = Copied!\nunlockInputPlaceholder = Password\nunlockButtonLabel = Unlock\ndownloadButtonLabel = Download\ndownloadFinish = Download Complete\nfileSizeProgress = ({ $partialSize } of { $totalSize })\nsendYourFilesLink = Try Firefox Send\nerrorPageHeader = Something went wrong!\nfileTooBig = That file is too big to upload. It should be less than { $size }.\nlinkExpiredAlt = Link expired\nnotSupportedHeader = Your browser is not supported.\nnotSupportedLink = Why is my browser not supported?\nnotSupportedOutdatedDetail = Unfortunately this version of Firefox does not support the web technology that powers Firefox Send. You’ll need to update your browser.\nupdateFirefox = Update Firefox\ndeletePopupCancel = Cancel\ndeleteButtonHover = Delete\nfooterLinkLegal = Legal\nfooterLinkPrivacy = Privacy\nfooterLinkCookies = Cookies\npasswordTryAgain = Incorrect password. Try again.\njavascriptRequired = Firefox Send requires JavaScript\nwhyJavascript = Why does Firefox Send require JavaScript?\nenableJavascript = Please enable JavaScript and try again.\n# A short representation of a countdown timer containing the number of hours and minutes remaining as digits, example "13h 47m"\nexpiresHoursMinutes = { $hours }h { $minutes }m\n# A short representation of a countdown timer containing the number of minutes remaining as digits, example "56m"\nexpiresMinutes = { $minutes }m\n# A short status message shown when the user enters a long password\nmaxPasswordLength = Maximum password length: { $length }\n# A short status message shown when there was an error setting the password\npasswordSetError = This password could not be set\n\n## Send version 2 strings\n\n# Firefox Send, Send, Firefox, Mozilla are proper names and should not be localized\n-send-brand = Firefox Send\n-send-short-brand = Send\n-firefox = Firefox\n-mozilla = Mozilla\nintroTitle = Simple, private file sharing\nintroDescription = { -send-brand } lets you share files with end-to-end encryption and a link that automatically expires. So you can keep what you share private and make sure your stuff doesn’t stay online forever.\nnotifyUploadEncryptDone = Your file is encrypted and ready to send\n# downloadCount is from the downloadCount string and timespan is a timespanMinutes string. ex. \'Expires after 2 downloads or 25 minutes\'\narchiveExpiryInfo = Expires after { $downloadCount } or { $timespan }\ntimespanMinutes =\n    { $num ->\n        [one] 1 minute\n       *[other] { $num } minutes\n    }\ntimespanDays =\n    { $num ->\n        [one] 1 day\n       *[other] { $num } days\n    }\ntimespanWeeks =\n    { $num ->\n        [one] 1 week\n       *[other] { $num } weeks\n    }\nfileCount =\n    { $num ->\n        [one] 1 file\n       *[other] { $num } files\n    }\n# byte abbreviation\nbytes = B\n# kibibyte abbreviation\nkb = KB\n# mebibyte abbreviation\nmb = MB\n# gibibyte abbreviation\ngb = GB\n# localized number and byte abbreviation. example "2.5MB"\nfileSize = { $num }{ $units }\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\ntotalSize = Total size: { $size }\n# the next line after the colon contains a file name\ncopyLinkDescription = Copy the link to share your file:\ncopyLinkButton = Copy link\ndownloadTitle = Download files\ndownloadDescription = This file was shared via { -send-brand } with end-to-end encryption and a link that automatically expires.\ntrySendDescription = Try { -send-brand } for simple, safe file sharing.\n# count will always be > 10\ntooManyFiles =\n    { $count ->\n        [one] Only 1 file can be uploaded at a time.\n       *[other] Only { $count } files can be uploaded at a time.\n    }\n# count will always be > 10\ntooManyArchives =\n    { $count ->\n        [one] Only 1 archive is allowed.\n       *[other] Only { $count } archives are allowed.\n    }\nexpiredTitle = This link has expired.\nnotSupportedDescription = { -send-brand } will not work with this browser. { -send-short-brand } works best with the latest version of { -firefox }, and will work with the current version of most browsers.\ndownloadFirefox = Download { -firefox }\nlegalTitle = { -send-short-brand } Privacy Notice\nlegalDateStamp = Version 1.0, dated March 12, 2019\n# A short representation of a countdown timer containing the number of days, hours, and minutes remaining as digits, example "2d 11h 56m"\nexpiresDaysHoursMinutes = { $days }d { $hours }h { $minutes }m\naddFilesButton = Select files to upload\nuploadButton = Upload\n# the first part of the string \'Drag and drop files or click to send up to 1GB\'\ndragAndDropFiles = Drag and drop files\n# the second part of the string \'Drag and drop files or click to send up to 1GB\'\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\norClickWithSize = or click to send up to { $size }\naddPassword = Protect with password\nemailPlaceholder = Enter your email\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\nsignInSizeBump = Sign in to send up to { $size }\nsignInOnlyButton = Sign in\naccountBenefitTitle = Create a { -firefox } Account or sign in\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\naccountBenefitLargeFiles = Share files up to { $size }\naccountBenefitDownloadCount = Share files with more people\naccountBenefitTimeLimit =\n    { $count ->\n        [one] Keep links active for up to 1 day\n       *[other] Keep links active for up to { $count } days\n    }\naccountBenefitSync = Manage shared files from any device\naccountBenefitMoz = Learn about other { -mozilla } services\nsignOut = Sign out\nokButton = OK\ndownloadingTitle = Downloading\nnoStreamsWarning = This browser might not be able to decrypt a file this big.\nnoStreamsOptionCopy = Copy the link to open in another browser\nnoStreamsOptionFirefox = Try our favourite browser\nnoStreamsOptionDownload = Continue with this browser\ndownloadFirefoxPromo = { -send-short-brand } is brought to you by the all-new { -firefox }.\n# the next line after the colon contains a file name\nshareLinkDescription = Share the link to your file:\nshareLinkButton = Share link\n# $name is the name of the file\nshareMessage = Download “{ $name }” with { -send-brand }: simple, safe file sharing\ntrailheadPromo = There is a way to protect your privacy. Join Firefox.\nlearnMore = Learn more.\n'}}]);
//# sourceMappingURL=22.f259b554.js.map