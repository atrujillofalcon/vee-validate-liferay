!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):((e=e||self).__vee_validate_locale__nl=e.__vee_validate_locale__nl||{},e.__vee_validate_locale__nl.js=n())}(this,function(){"use strict";return{name:"nl",messages:{_default:function(e){return e+" waarde is ongeldig."},after:function(e,n){var t=n[0];return e+" moet later zijn dan "+(n[1]?"of gelijk aan ":"")+t+"."},alpha:function(e){return e+" mag alleen letters bevatten."},alpha_dash:function(e){return e+" mag alleen letters, nummers, en streepjes bevatten."},alpha_num:function(e){return e+" mag alleen letters en nummers bevatten."},alpha_spaces:function(e){return e+" mag alleen letters en spaties bevatten."},before:function(e,n){var t=n[0];return e+" moet eerder zijn dan "+(n[1]?"of gelijk aan ":"")+t+"."},between:function(e,n){return e+" moet tussen "+n[0]+" en "+n[1]+" liggen."},confirmed:function(e){return e+" bevestiging komt niet overeen."},credit_card:function(e){return e+" is ongeldig."},date_between:function(e,n){return e+" moet tussen "+n[0]+" en "+n[1]+" liggen."},date_format:function(e,n){return e+" moet in het volgende formaat zijn: "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=[]);var t=n[0];return void 0===t&&(t="*"),e+" moet een nummer zijn en mag"+("*"===t?"":" "+t)+" decimalen bevatten."},digits:function(e,n){return e+" moet een nummer zijn en exact "+n[0]+" tekens bevatten."},dimensions:function(e,n){return e+" moet "+n[0]+" pixels breed zijn en "+n[1]+" pixels hoog."},email:function(e){return e+" moet een geldig e-mailadres zijn."},excluded:function(e){return e+" is ongeldig."},ext:function(e){return e+" moet een geldig bestand zijn."},image:function(e){return e+" moet een afbeelding zijn."},included:function(e){return e+" moet een geldige waarde zijn."},ip:function(e){return e+" moet een geldig IP-adres zijn."},max:function(e,n){return e+" mag niet groter zijn dan "+n[0]+" karakters."},max_value:function(e,n){return e+" mag maximaal "+n[0]+" zijn."},mimes:function(e){return e+" moet een geldig bestandstype hebben."},min:function(e,n){return e+" moet minimaal "+n[0]+" karakters zijn."},min_value:function(e,n){return e+" moet minimaal "+n[0]+" zijn."},numeric:function(e){return e+" mag alleen nummers bevatten"},regex:function(e){return e+" formaat is ongeldig."},required:function(e){return e+" is verplicht."},size:function(e,n){var t,i,r,a=n[0];return e+" mag niet groter zijn dan "+(t=a,i=1024,r=0==(t=Number(t)*i)?0:Math.floor(Math.log(t)/Math.log(i)),1*(t/Math.pow(i,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r])+"."},url:function(e){return e+" is geen geldige URL."}},attributes:{}}});