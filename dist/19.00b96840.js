(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{207:function(e,n,i){"use strict";i.r(n),n.default='# Firefox Send is a brand name and should not be localized.\ntitle = Firefox Send\nsiteFeedback = Feedback\nimportingFile = Wird importiert…\nencryptingFile = Wird verschlüsselt…\ndecryptingFile = Wird entschlüsselt…\ndownloadCount =\n    { $num ->\n        [one] einem Download\n       *[other] { $num } Downloads\n    }\ntimespanHours =\n    { $num ->\n        [one] einer Stunde\n       *[other] { $num } Stunden\n    }\ncopiedUrl = Kopiert!\nunlockInputPlaceholder = Passwort\nunlockButtonLabel = Entsperren\ndownloadButtonLabel = Herunterladen\ndownloadFinish = Download abgeschlossen\nfileSizeProgress = ({ $partialSize } von { $totalSize })\nsendYourFilesLink = Firefox Send ausprobieren\nerrorPageHeader = Ein Fehler ist aufgetreten!\nfileTooBig = Die Datei ist zu groß zum Hochladen. Sie sollte maximal { $size } groß sein.\nlinkExpiredAlt = Link abgelaufen\nnotSupportedHeader = Dein Browser wird nicht unterstützt.\nnotSupportedLink = Warum wird mein Browser nicht unterstützt?\nnotSupportedOutdatedDetail = Leider unterstützt diese Firefox-Version die Web-Technologie nicht, auf der Firefox Send basiert. Du musst deinen Browser aktualisieren.\nupdateFirefox = Firefox aktualisieren\ndeletePopupCancel = Abbrechen\ndeleteButtonHover = Löschen\nfooterLinkLegal = Rechtliches\nfooterLinkPrivacy = Datenschutz\nfooterLinkCookies = Cookies\npasswordTryAgain = Falsches Passwort. Versuche es nochmal.\njavascriptRequired = Firefox Send benötigt JavaScript\nwhyJavascript = Warum benötigt Firefox Send JavaScript?\nenableJavascript = Bitte aktiviere JavaScript und versuche es erneut.\n# A short representation of a countdown timer containing the number of hours and minutes remaining as digits, example "13h 47m"\nexpiresHoursMinutes = { $hours }h { $minutes }m\n# A short representation of a countdown timer containing the number of minutes remaining as digits, example "56m"\nexpiresMinutes = { $minutes }m\n# A short status message shown when the user enters a long password\nmaxPasswordLength = Maximale Passwortlänge: { $length }\n# A short status message shown when there was an error setting the password\npasswordSetError = Dieses Passwort konnte nicht eingerichtet werden\n\n## Send version 2 strings\n\n# Firefox Send, Send, Firefox, Mozilla are proper names and should not be localized\n-send-brand = Firefox Send\n-send-short-brand = Send\n-firefox = Firefox\n-mozilla = Mozilla\nintroTitle = Einfach und privat Dateien versenden\nintroDescription = Mit { -send-brand } kannst du Dateien sicher mit anderen teilen – mit End-to-End-Verschlüsselung und einem Freigabe-Link, der automatisch abläuft. So bleiben deine geteilten Inhalte privat und du kannst sicherstellen, dass deine Daten nicht für immer im Web herumschwirren.\nnotifyUploadEncryptDone = Deine Datei ist verschlüsselt und zum Senden bereit\n# downloadCount is from the downloadCount string and timespan is a timespanMinutes string. ex. \'Expires after 2 downloads or 25 minutes\'\narchiveExpiryInfo = Läuft ab nach { $downloadCount } oder { $timespan }\ntimespanMinutes =\n    { $num ->\n        [one] 1 Minute\n       *[other] { $num } Minuten\n    }\ntimespanDays =\n    { $num ->\n        [one] 1 Tag\n       *[other] { $num } Tage\n    }\ntimespanWeeks =\n    { $num ->\n        [one] 1 Woche\n       *[other] { $num } Wochen\n    }\nfileCount =\n    { $num ->\n        [one] 1 Datei\n       *[other] { $num } Dateien\n    }\n# byte abbreviation\nbytes = B\n# kibibyte abbreviation\nkb = KB\n# mebibyte abbreviation\nmb = MB\n# gibibyte abbreviation\ngb = GB\n# localized number and byte abbreviation. example "2.5MB"\nfileSize = { $num }{ $units }\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\ntotalSize = Gesamtgröße: { $size }\n# the next line after the colon contains a file name\ncopyLinkDescription = Kopiere den Link, um deine Datei zu teilen:\ncopyLinkButton = Link kopieren\ndownloadTitle = Dateien herunterladen\ndownloadDescription = Diese Datei wurde über { -send-brand } mit End-to-End-Verschlüsselung und einem automatisch ablaufenden Link geteilt.\ntrySendDescription = Probiere { -send-brand } aus, um einfach und sicher Dateien zu versenden.\n# count will always be > 10\ntooManyFiles =\n    { $count ->\n        [one] Es kann maximal eine Datei auf einmal hochgeladen werden.\n       *[other] Es können maximal { $count } Dateien auf einmal hochgeladen werden.\n    }\n# count will always be > 10\ntooManyArchives =\n    { $count ->\n        [one] Es ist nur ein  Archiv erlaubt.\n       *[other] Es sind nur { $count } Archive erlaubt.\n    }\nexpiredTitle = Dieser Link ist abgelaufen.\nnotSupportedDescription = { -send-brand } funktioniert nicht mit diesem Browser. { -send-short-brand } funktioniert am besten mit der neuesten Version von { -firefox } und funktioniert mit der aktuellen Version der meisten Browser.\ndownloadFirefox = { -firefox } herunterladen\nlegalTitle = Datenschutzerklärung zu { -send-short-brand }\nlegalDateStamp = Version 1.0, Stand 12. März 2019\n# A short representation of a countdown timer containing the number of days, hours, and minutes remaining as digits, example "2d 11h 56m"\nexpiresDaysHoursMinutes = { $days }d { $hours }h { $minutes }m\naddFilesButton = Dateien zum Hochladen auswählen\nuploadButton = Hochladen\n# the first part of the string \'Drag and drop files or click to send up to 1GB\'\ndragAndDropFiles = Dateien per Drag & Drop einfügen\n# the second part of the string \'Drag and drop files or click to send up to 1GB\'\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\norClickWithSize = oder klicken, um bis zu { $size } zu senden\naddPassword = Mit Passwort schützen\nemailPlaceholder = E-Mail-Adresse eingeben\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\nsignInSizeBump = Melde dich an, um Dateien bis { $size } zu senden\nsignInOnlyButton = Anmelden\naccountBenefitTitle = Erstelle ein { -firefox }-Konto oder melde dich an\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\naccountBenefitLargeFiles = Dateien bis zu { $size } teilen\naccountBenefitDownloadCount = Teile Dateien mit weiteren Leuten\naccountBenefitTimeLimit =\n    { $count ->\n        [one] Link bis zu einen Tag lang aktiv halten\n       *[other] Link bis zu { $count } Tage lang aktiv halten\n    }\naccountBenefitSync = Geteilte Dateien von anderen Geräten aus verwalten\naccountBenefitMoz = Erfahre mehr über andere { -mozilla }-Dienste\nsignOut = Abmelden\nokButton = OK\ndownloadingTitle = Wird heruntergeladen…\nnoStreamsWarning = Dieser Browser kann eine so große Datei möglicherweise nicht entschlüsseln.\nnoStreamsOptionCopy = Kopiere den Link, um ihn in einem anderen Browser zu öffnen\nnoStreamsOptionFirefox = Probiere unseren Lieblingsbrowser aus\nnoStreamsOptionDownload = Mit diesem Browser weitermachen\ndownloadFirefoxPromo = { -send-short-brand } wird Ihnen präsentiert vom brandneuen { -firefox }.\n# the next line after the colon contains a file name\nshareLinkDescription = Teilen Sie den Link zu Ihrer Datei:\nshareLinkButton = Link teilen\n# $name is the name of the file\nshareMessage = Laden Sie „{ $name }“ mit { -send-brand } herunter: einfaches, sicheres Teilen von Dateien\ntrailheadPromo = Es gibt einen Weg, deine Privatsphäre zu schützen. Komm zu Firefox.\nlearnMore = Mehr erfahren.\n'}}]);
//# sourceMappingURL=19.00b96840.js.map