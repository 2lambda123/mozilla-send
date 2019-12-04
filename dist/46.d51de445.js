(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{234:function(n,e,o){"use strict";o.r(e),e.default='# Firefox Send is a brand name and should not be localized.\ntitle = Firefox Send\nsiteFeedback = გამოხმაურება\nimportingFile = გადმოტანა...\nencryptingFile = დაშიფვრა...\ndecryptingFile = გაშიფვრა...\ndownloadCount =\n    { $num ->\n        [one] 1 ჩამოტვირთვა\n       *[other] { $num } ჩამოტვირთვა\n    }\ntimespanHours =\n    { $num ->\n        [one] 1 საათი\n       *[other] { $num } საათი\n    }\ncopiedUrl = ასლი აღებულია!\nunlockInputPlaceholder = პაროლი\nunlockButtonLabel = გახსნა\ndownloadButtonLabel = ჩამოტვირთვა\ndownloadFinish = ჩამოტვირთვა დასრულდა\nfileSizeProgress = ({ $partialSize } { $totalSize }-იდან)\nsendYourFilesLink = გამოცადეთ Firefox Send\nerrorPageHeader = რაღაც ხარვეზია!\nfileTooBig = ფაილი ზედმეტად დიდია. უნდა იყოს { $size } ზომაზე ნაკლები.\nlinkExpiredAlt = ბმული ვადაგასულია\nnotSupportedHeader = თქვენი ბრაუზერი არაა მხარდაჭერილი.\nnotSupportedLink = რატომ არაა ჩემი ბრაუზერი მხარდაჭერილი?\nnotSupportedOutdatedDetail = სამწუხაროდ, Firefox-ის ამ ვერსიას არ გააჩნია ის ტექნოლოგია, რომელიც აუცილებელია Firefox Send-ის მუშაობისთვის. გესაჭიროებათ, ბრაუზერის განახლება.\nupdateFirefox = Firefox-ის განახლება\ndeletePopupCancel = გაუქმება\ndeleteButtonHover = წაშლა\nfooterLinkLegal = სამართლებრივი საკითხები\nfooterLinkPrivacy = პირადულობა\nfooterLinkCookies = ფუნთუშები\npasswordTryAgain = პაროლი არასწორია. სცადეთ ხელახლა.\njavascriptRequired = Firefox Send საჭიროებს JavaScript-ს\nwhyJavascript = რატომ საჭიროებს Firefox Send JavaScript-ს?\nenableJavascript = გთხოვთ ჩართოთ JavaScript და სცადოთ ხელახლა.\n# A short representation of a countdown timer containing the number of hours and minutes remaining as digits, example "13h 47m"\nexpiresHoursMinutes = { $hours }სთ { $minutes }წთ\n# A short representation of a countdown timer containing the number of minutes remaining as digits, example "56m"\nexpiresMinutes = { $minutes }წთ\n# A short status message shown when the user enters a long password\nmaxPasswordLength = პაროლის დაშვებული ზომა: { $length }\n# A short status message shown when there was an error setting the password\npasswordSetError = ამ პაროლის დაყენება ვერ ხერხდება\n\n## Send version 2 strings\n\n# Firefox Send, Send, Firefox, Mozilla are proper names and should not be localized\n-send-brand = Firefox Send\n-send-short-brand = Send\n-firefox = Firefox\n-mozilla = Mozilla\nintroTitle = ფაილის გაზიარება მარტივად, დაცულად\nintroDescription = { -send-brand } საშუალებას გაძლევთ გააზიაროთ ფაილები გამჭოლი დაშიფვრითა და ბმულით, რომელიც გარკვეული დროის შემდეგ თავისთავად გაუქმდება. ასე რომ, რასაც გააზიარებთ იქნება საიდუმლო და არც ინტერნეტში არ დარჩება სამუდამოდ.\nnotifyUploadEncryptDone = თქვენი ფაილი დაშიფრულია და მზადაა გასაგზავნად\n# downloadCount is from the downloadCount string and timespan is a timespanMinutes string. ex. \'Expires after 2 downloads or 25 minutes\'\narchiveExpiryInfo = ვადის გასვლამდე დარჩენილია { $downloadCount } ან { $timespan }\ntimespanMinutes =\n    { $num ->\n        [one] 1 წუთი\n       *[other] { $num } წუთი\n    }\ntimespanDays =\n    { $num ->\n        [one] 1 დღე\n       *[other] { $num } დღე\n    }\ntimespanWeeks =\n    { $num ->\n        [one] 1 კვირა\n       *[other] { $num } კვირა\n    }\nfileCount =\n    { $num ->\n        [one] 1 ფაილი\n       *[other] { $num } ფაილი\n    }\n# byte abbreviation\nbytes = ბ\n# kibibyte abbreviation\nkb = კბ\n# mebibyte abbreviation\nmb = მბ\n# gibibyte abbreviation\ngb = გბ\n# localized number and byte abbreviation. example "2.5MB"\nfileSize = { $num } { $units }\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\ntotalSize = სულ ზომა: { $size }\n# the next line after the colon contains a file name\ncopyLinkDescription = ბმულის ასლი ფაილის გასაზიარებლად:\ncopyLinkButton = ბმულის ასლი\ndownloadTitle = ფაილების ჩამოტვირთვა\ndownloadDescription = ფაილი გაზიარებულია { -send-brand }-ის საშუალებით, გამჭოლი დაშიფვრითა და ვადიანი ბმულით.\ntrySendDescription = გამოსცადეთ { -send-brand }, ფაილების გაზიარება მარტივად, დაცულად.\n# count will always be > 10\ntooManyFiles =\n    { $count ->\n        [one] მხოლოდ 1 ფაილი შეიძლება აიტვირთოს ერთ ჯერზე.\n       *[other] მხოლოდ { $count } ფაილი შეიძლება აიტვირთოს ერთ ჯერზე.\n    }\n# count will always be > 10\ntooManyArchives =\n    { $count ->\n        [one] მხოლოდ 1 არქივია დაშვებული.\n       *[other] მხოლოდ { $count } არქივია დაშვებული.\n    }\nexpiredTitle = ბმული ვადაგასულია.\nnotSupportedDescription = { -send-brand } არ იმუშავებს ამ ბრაუზერთან. { -send-short-brand } საუკეთესოდ მუშაობს ახალ { -firefox }-ზე და აგრეთვე უმეტესი ბრაუზერების უახლეს ვერსიებზე.\ndownloadFirefox = ჩამოტვირთეთ { -firefox }\nlegalTitle = { -send-short-brand } პირადულობის განაცხადი\nlegalDateStamp = ვერსია 1.0, დათარიღებული 12 მარტით, 2019\n# A short representation of a countdown timer containing the number of days, hours, and minutes remaining as digits, example "2d 11h 56m"\nexpiresDaysHoursMinutes = { $days } დღე { $hours } სთ { $minutes } წთ\naddFilesButton = ფაილების შერჩევა ასატვირთად\nuploadButton = ატვირთვა\n# the first part of the string \'Drag and drop files or click to send up to 1GB\'\ndragAndDropFiles = გადმოიტანეთ და მოათავსეთ ფაილები\n# the second part of the string \'Drag and drop files or click to send up to 1GB\'\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\norClickWithSize = ან დაწკაპეთ გასაგზავნად { $size }-მდე\naddPassword = პაროლით დაცვა\nemailPlaceholder = შეიყვანეთ ელფოსტა\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\nsignInSizeBump = შედით ანგარიშზე, რომ გაგზავნოთ { $size }-მდე\nsignInOnlyButton = შესვლა\naccountBenefitTitle = შექმენით { -firefox }-ანგარიში ან შედით\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\naccountBenefitLargeFiles = გააზიარეთ ფაილები { $size }-მდე\naccountBenefitDownloadCount = გაუზიარეთ ფაილები მეტ ხალხს\naccountBenefitTimeLimit =\n    { $count ->\n        [one] დატოვეთ ფაილები 1 დღემდე\n       *[other] დატოვეთ ფაილები { $count } დღემდე\n    }\naccountBenefitSync = მართეთ გაზიარებული ფაილები ნებისმიერი მოწყობილობიდან\naccountBenefitMoz = გაეცანით { -mozilla }-ს სხვა მომსახურებებს\nsignOut = გამოსვლა\nokButton = კარგი\ndownloadingTitle = მიმდინარეობს ჩამოტვირთვა\nnoStreamsWarning = ამ ბრაუზერმა, შესაძლოა ვერ მოახერხოს ასეთი დიდი ფაილის გაშიფვრა.\nnoStreamsOptionCopy = ბმულის ასლის აღება სხვა ბრაუზერში გასახსნელად\nnoStreamsOptionFirefox = სცადეთ ჩვენი რჩეული ბრაუზერი\nnoStreamsOptionDownload = განაგრძეთ ამ ბრაუზერით\ndownloadFirefoxPromo = { -send-short-brand }-ს წარმოგიდგინეთ უახლესი { -firefox }.\n# the next line after the colon contains a file name\nshareLinkDescription = ფაილის ბმულის გაზიარება:\nshareLinkButton = ბმულის გაზიარება\n# $name is the name of the file\nshareMessage = ჩამოტვირთეთ „{ $name }“ { -send-brand }-ით: ფაილების გაზიარება მარტივად, უსაფრთხოდ\ntrailheadPromo = გზა, თქვენი პირადულობის დასაცავად. შემოუერთდით Firefox-ს.\nlearnMore = იხილეთ ვრცლად.\n'}}]);
//# sourceMappingURL=46.d51de445.js.map