(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{214:function(e,n,a){"use strict";a.r(n),n.default='# Firefox Send is a brand name and should not be localized.\ntitle = Firefox Send\nsiteFeedback = Comentario\nimportingFile = Importando...\nencryptingFile = Encriptando...\ndecryptingFile = Desencriptando...\ndownloadCount =\n    { $num ->\n        [one] 1 descarga\n       *[other] { $num } descargas\n    }\ntimespanHours =\n    { $num ->\n        [one] 1 hora\n       *[other] { $num } horas\n    }\ncopiedUrl = ¡Copiado!\nunlockInputPlaceholder = Contraseña\nunlockButtonLabel = Desbloquear\ndownloadButtonLabel = Descargar\ndownloadFinish = Descarga completa\nfileSizeProgress = ({ $partialSize } de { $totalSize })\nsendYourFilesLink = Prueba Firefox Send\nerrorPageHeader = ¡Se produjo un error!\nfileTooBig = Ese archivo es muy grande. Debería ocupar menos de { $size }.\nlinkExpiredAlt = Enlace caducado\nnotSupportedHeader = Tu navegador no está admitido.\nnotSupportedLink = ¿Por qué no se admite mi navegador?\nnotSupportedOutdatedDetail = Lamentablemente, esta versión de Firefox no admite la tecnología web que impulsa Firefox Send. Tendrás que actualizar tu navegador.\nupdateFirefox = Actualizar Firefox\ndeletePopupCancel = Cancelar\ndeleteButtonHover = Eliminar\nfooterLinkLegal = Legal\nfooterLinkPrivacy = Privacidad\nfooterLinkCookies = Cookies\npasswordTryAgain = Contraseña incorrecta. Inténtelo de nuevo.\njavascriptRequired = Firefox Send requiere JavaScript\nwhyJavascript = ¿Por qué Firefox Send requiere JavaScript?\nenableJavascript = Por favor, activa JavaScript y vuelve a intentarlo.\n# A short representation of a countdown timer containing the number of hours and minutes remaining as digits, example "13h 47m"\nexpiresHoursMinutes = { $hours }h { $minutes }m\n# A short representation of a countdown timer containing the number of minutes remaining as digits, example "56m"\nexpiresMinutes = { $minutes }m\n# A short status message shown when the user enters a long password\nmaxPasswordLength = Longitud máxima de la contraseña: { $length }\n# A short status message shown when there was an error setting the password\npasswordSetError = No se ha podido establecer la contraseña\n\n## Send version 2 strings\n\n# Firefox Send, Send, Firefox, Mozilla are proper names and should not be localized\n-send-brand = Firefox Send\n-send-short-brand = Enviar\n-firefox = Firefox\n-mozilla = Mozilla\nintroTitle = Compartir archivos de forma sencilla y privada\nintroDescription = { -send-brand } te permite compartir archivos con cifrado de extremo a extremo y un enlace que caduca automáticamente. Así que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezcan en línea para siempre.\nnotifyUploadEncryptDone = El archivo está cifrado y listo para enviar\n# downloadCount is from the downloadCount string and timespan is a timespanMinutes string. ex. \'Expires after 2 downloads or 25 minutes\'\narchiveExpiryInfo = Caduca tras { $downloadCount } o { $timespan }\ntimespanMinutes =\n    { $num ->\n        [one] 1 minuto\n       *[other] { $num } minutos\n    }\ntimespanDays =\n    { $num ->\n        [one] 1 día\n       *[other] { $num } días\n    }\ntimespanWeeks =\n    { $num ->\n        [one] 1 semana\n       *[other] { $num } semanas\n    }\nfileCount =\n    { $num ->\n        [one] 1 archivo\n       *[other] { $num } archivos\n    }\n# byte abbreviation\nbytes = B\n# kibibyte abbreviation\nkb = KB\n# mebibyte abbreviation\nmb = MB\n# gibibyte abbreviation\ngb = GB\n# localized number and byte abbreviation. example "2.5MB"\nfileSize = { $num }{ $units }\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\ntotalSize = Tamaño total: { $size }\n# the next line after the colon contains a file name\ncopyLinkDescription = Copiar el enlace para compartir el archivo:\ncopyLinkButton = Copiar enlace\ndownloadTitle = Descargar archivos\ndownloadDescription = Este archivo se compartió a través de { -send-brand } con cifrado de extremo a extremo y un enlace que caduca automáticamente.\ntrySendDescription = Prueba { -send-brand } para compartir archivos de forma sencilla y segura.\n# count will always be > 10\ntooManyFiles =\n    { $count ->\n        [one] Solo se puede subir 1 archivo a la vez.\n       *[other] Solo se pueden subir { $count } archivos a la vez.\n    }\n# count will always be > 10\ntooManyArchives =\n    { $count ->\n        [one] Solo se permite 1 archivo.\n       *[other] Solo se permiten { $count } archivos.\n    }\nexpiredTitle = Este enlace ha expirado.\nnotSupportedDescription = { -send-brand } no funciona con este navegador. { -send-short-brand } funciona mejor con la última versión de { -firefox }, y funciona con la última versión de la mayoría de los navegadores.\ndownloadFirefox = Descargar { -firefox }\nlegalTitle = Aviso de privacidad de { -send-short-brand }\nlegalDateStamp = Versión 1.0 del 12 de marzo de 2019\n# A short representation of a countdown timer containing the number of days, hours, and minutes remaining as digits, example "2d 11h 56m"\nexpiresDaysHoursMinutes = { $days }d { $hours }h { $minutes }m\naddFilesButton = Seleccionar archivos para subir\nuploadButton = Subir\n# the first part of the string \'Drag and drop files or click to send up to 1GB\'\ndragAndDropFiles = Arrastrar y soltar archivos\n# the second part of the string \'Drag and drop files or click to send up to 1GB\'\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\norClickWithSize = o hacer clic para enviar hasta { $size }\naddPassword = Proteger con contraseña\nemailPlaceholder = Introducir dirección de correo\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\nsignInSizeBump = Iniciar sesión para enviar hasta { $size }\nsignInOnlyButton = Iniciar sesión\naccountBenefitTitle = Crear una cuenta { -firefox } o iniciar sesión\n# $size is the size of the file, displayed using the fileSize message as format (e.g. "2.5MB")\naccountBenefitLargeFiles = Compartir archivos de hasta { $size }\naccountBenefitDownloadCount = Compartir archivos con más gente\naccountBenefitTimeLimit =\n    { $count ->\n        [one] Mantener enlaces activos durante 1 día\n       *[other] Mantener enlaces activos durante { $count } días\n    }\naccountBenefitSync = Administrar los archivos compartidos desde cualquier dispositivo\naccountBenefitMoz = Saber más sobre otros servicios de { -mozilla }\nsignOut = Cerrar sesión\nokButton = Vale\ndownloadingTitle = Descargando\nnoStreamsWarning = Puede que este navegador no pueda descifrar un archivo tan grande.\nnoStreamsOptionCopy = Copiar el enlace para abrirlo en otro navegador\nnoStreamsOptionFirefox = Probar nuestro navegador favorito\nnoStreamsOptionDownload = Continuar en este navegador\ndownloadFirefoxPromo = El nuevo { -firefox } te ofrece { -send-short-brand }.\n# the next line after the colon contains a file name\nshareLinkDescription = Compartir el enlace a tu archivo:\nshareLinkButton = Compartir enlace\n# $name is the name of the file\nshareMessage = Descargar “{ $name }” con { -send-brand }: comparte archivos de forma segura y sencilla\ntrailheadPromo = Existe la forma de proteger tu privacidad. Únete a Firefox.\nlearnMore = Saber más.\n'}}]);
//# sourceMappingURL=26.979b7198.js.map