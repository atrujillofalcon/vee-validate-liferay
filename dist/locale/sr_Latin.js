!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):((e=e||self).__vee_validate_locale__sr_Latin=e.__vee_validate_locale__sr_Latin||{},e.__vee_validate_locale__sr_Latin.js=n())}(this,function(){"use strict";return{name:"sr_Latin",messages:{_default:function(e){return"Polje "+e+" nije validno."},after:function(e,n){return"Polje "+e+" mora biti posle "+n[0]+"."},alpha:function(e){return"Polje "+e+" može sadržati samo slova."},alpha_dash:function(e){return"Polje "+e+" može sadržati alfanumeričke karaktere i povlake."},alpha_num:function(e){return"Polje "+e+" može sadržati samo alfanumeričke karaktere."},alpha_spaces:function(e){return"Polje "+e+" može sadržati samo alfanumeričke karaktere i razmake."},before:function(e,n){return"Polje "+e+" mora biti pre "+n[0]+"."},between:function(e,n){return"Polje "+e+" mora biti između "+n[0]+" i "+n[1]+"."},confirmed:function(e){return"Potvrda polja "+e+" se ne poklapa."},credit_card:function(e){return"Polje "+e+" nije validno."},date_between:function(e,n){return"Polje "+e+" mora biti između "+n[0]+" i "+n[1]+"."},date_format:function(e,n){return"Polje "+e+" mora biti u formatu "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=[]);var a=n[0];return void 0===a&&(a="*"),"Polje "+e+" mora biti broj i može sadržati"+("*"===a?"":" "+a)+" decimalnih mesta."},digits:function(e,n){return"Polje "+e+" mora biti broj i sadržati tačno "+n[0]+" cifara."},dimensions:function(e,n){return"Polje "+e+" mora biti "+n[0]+" x "+n[1]+" piksela."},email:function(e){return"Polje "+e+" mora biti validan imejl."},excluded:function(e){return"Polje "+e+" mora imati validnu vrednost."},ext:function(e){return"Polje "+e+" mora biti validan fajl."},image:function(e){return"Polje "+e+" mora biti slika."},included:function(e){return"Polje "+e+" mora biti validna vrednost."},ip:function(e){return"Polje "+e+' mora biti validna "IP" adresa.'},max:function(e,n){return"Polje "+e+" ne sme biti duže od "+n[0]+" karaktera."},max_value:function(e,n){return"Polje "+e+" ne sme biti veće od "+n[0]+"."},mimes:function(e){return"Polje "+e+" mora biti validan tip fajla."},min:function(e,n){return"Polje "+e+" mora sadržati najmanje "+n[0]+" karaktera."},min_value:function(e,n){return"Polje "+e+" ne sme biti manje od "+n[0]+"."},numeric:function(e){return"Polje "+e+" mora biti broj."},regex:function(e){return"Format polja "+e+" nije validan."},required:function(e){return"Polje "+e+" je obavezno."},size:function(e,n){var a,i,t,r=n[0];return"Polje "+e+" mora biti manje od "+(a=r,i=1024,t=0==(a=Number(a)*i)?0:Math.floor(Math.log(a)/Math.log(i)),1*(a/Math.pow(i,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t])+"."},url:function(e){return"Polje "+e+" nije validna veb adresa."}},attributes:{}}});