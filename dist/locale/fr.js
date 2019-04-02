!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e=e||self).__vee_validate_locale__fr=e.__vee_validate_locale__fr||{},e.__vee_validate_locale__fr.js=t())}(this,function(){"use strict";return{name:"fr",messages:{_default:function(e){return"Le champ "+e+" n'est pas valide."},after:function(e,t){return"Le champ "+e+" doit être postérieur à "+t[0]+"."},alpha:function(e){return"Le champ "+e+" ne peut contenir que des lettres."},alpha_dash:function(e){return"Le champ "+e+" ne peut contenir que des caractères alpha-numériques, tirets ou soulignés."},alpha_num:function(e){return"Le champ "+e+" ne peut contenir que des caractères alpha-numériques."},alpha_spaces:function(e){return"Le champ "+e+" ne peut contenir que des lettres ou des espaces."},before:function(e,t){return"Le champ "+e+" doit être antérieur à "+t[0]+"."},between:function(e,t){return"Le champ "+e+" doit être compris entre "+t[0]+" et "+t[1]+"."},confirmed:function(e,t){return"Le champ "+e+" ne correspond pas à "+t[0]+"."},credit_card:function(e){return"Le champ "+e+" est invalide."},date_between:function(e,t){return"Le champ "+e+" doit être situé entre "+t[0]+" et "+t[1]+"."},date_format:function(e,t){return"Le champ "+e+" doit être au format "+t[0]+"."},decimal:function(e,t){void 0===t&&(t=[]);var n=t[0];return void 0===n&&(n="*"),"Le champ "+e+" doit être un nombre et peut contenir "+("*"===n?"des":n)+" décimales."},digits:function(e,t){return"Le champ "+e+" doit être un nombre entier de "+t[0]+" chiffres."},dimensions:function(e,t){return"Le champ "+e+" doit avoir une taille de "+t[0]+" pixels par "+t[1]+" pixels."},email:function(e){return"Le champ "+e+" doit être une adresse e-mail valide."},excluded:function(e){return"Le champ "+e+" doit être une valeur valide."},ext:function(e){return"Le champ "+e+" doit être un fichier valide."},image:function(e){return"Le champ "+e+" doit être une image."},included:function(e){return"Le champ "+e+" doit être une valeur valide."},integer:function(e){return"Le champ "+e+" doit être un entier."},ip:function(e){return"Le champ "+e+" doit être une adresse IP."},length:function(e,t){var n=t[0],r=t[1];return r?"Le champ "+e+" doit contenir entre "+n+" et "+r+" caractères.":"Le champ "+e+" doit contenir "+n+" caractères."},max:function(e,t){return"Le champ "+e+" ne peut pas contenir plus de "+t[0]+" caractères."},max_value:function(e,t){return"Le champ "+e+" doit avoir une valeur de "+t[0]+" ou moins."},mimes:function(e){return"Le champ "+e+" doit avoir un type MIME valide."},min:function(e,t){return"Le champ "+e+" doit contenir au minimum "+t[0]+" caractères."},min_value:function(e,t){return"Le champ "+e+" doit avoir une valeur de "+t[0]+" ou plus."},numeric:function(e){return"Le champ "+e+" ne peut contenir que des chiffres."},regex:function(e){return"Le champ "+e+" est invalide."},required:function(e){return"Le champ "+e+" est obligatoire."},required_if:function(e,t){return"Le champ "+e+" est obligatoire lorsque "+t[0]+" possède cette valeur."},size:function(e,t){var n,r,i,u=t[0];return"Le champ "+e+" doit avoir un poids inférieur à "+(n=u,r=1024,i=0==(n=Number(n)*r)?0:Math.floor(Math.log(n)/Math.log(r)),1*(n/Math.pow(r,i)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][i])+"."},url:function(e){return"Le champ "+e+" n'est pas une URL valide."}},attributes:{}}});