!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((n=n||self).__vee_validate_locale__ne=n.__vee_validate_locale__ne||{},n.__vee_validate_locale__ne.js=e())}(this,function(){"use strict";return{name:"ne",messages:{_default:function(n){return"यो "+n+" फिल्ड मान्य छैन।"},after:function(n,e){return n+" "+e[0]+" भन्दा पछि  "+(e[1]?"वा बराबर":"")+" हुनु पर्छ।"},alpha:function(n){return n+" फिल्डले वर्णमाला अक्षरहरू मात्र समावेश गर्न सक्छ।"},alpha_dash:function(n){return n+" फील्डलमा वर्ण-संख्या अक्षरहरू साथै ड्याश र अन्डरसेर्सहरू समावेश गर्न सक्छ।"},alpha_num:function(n){return n+" फील्डमा वर्ण-संख्या अक्षरहरू मात्र समावेश गर्न सक्छ।"},alpha_spaces:function(n){return n+" फिल्डमा वर्णमाला अक्षरहरू र स्पेसहरूमा मात्र समावेश गर्न सक्छ।"},before:function(n,e){return n+" "+e[0]+" भन्दा अघि  "+(e[1]?"वा बराबर":"")+" हुनु पर्छ।"},between:function(n,e){return n+" फिल्ड "+e[0]+" र "+e[1]+" को बीच हुनुपर्दछ।"},confirmed:function(n){return n+" पुष्टिकरण मेल खाँदैन।"},credit_card:function(n){return n+" फिल्ड मान्य छैन।"},date_between:function(n,e){return n+" "+e[0]+" र "+e[1]+" को बीच हुनुपर्दछ।"},date_format:function(n,e){return n+" ढाँचा "+e[0]+" मा हुनुपर्दछ।"},decimal:function(n,e){void 0===e&&(e=[]);var t=e[0];return void 0===t&&(t="*"),n+" फिल्ड संख्यात्मक हुनुपर्छ र "+(t&&"*"!==t?t:"")+" दशमलव अंक हुन सक्छ।"},digits:function(n,e){return n+" फिल्ड संख्यात्मक हुनुपर्छ र "+e[0]+" अङ्क समावेश गर्दछ।"},dimensions:function(n,e){return n+" फिल्ड "+e[0]+" पिक्सेलमा "+e[1]+" पिक्सेल हुनु पर्दछ।"},email:function(n){return n+" फिल्ड मान्य ईमेल हुनु पर्छ।"},excluded:function(n){return n+" फिल्ड मान्य मान हुनुपर्छ।"},ext:function(n){return n+" फिल्ड मान्य फाइल हुनु पर्छ।"},image:function(n){return n+" फिल्ड मान्य फोटो हुनु पर्छ।"},included:function(n){return n+" फिल्ड मान्य परिमाण हुनु पर्छ।"},integer:function(n){return n+" फिल्ड मान्य पूर्णांक हुनु पर्छ।"},ip:function(n){return n+" फिल्ड मान्य आईपी ठेगाना हुनु पर्छ।"},length:function(n,e){var t=e[0],r=e[1];return r?n+" लम्बाई "+t+" र "+r+" बीचमा हुनुपर्दछ।":n+" लम्बाई "+t+" हुनुपर्दछ।"},max:function(n,e){return n+" फिल्ड "+e[0]+" अक्षरहरू भन्दा ठूलो हुन सक्छ।"},max_value:function(n,e){return n+" फिल्ड "+e[0]+" वा कम हुनुपर्दछ।"},mimes:function(n){return n+" फिल्ड मान्य फाइल प्रकार हुनु पर्दछ।"},min:function(n,e){return n+" फिल्ड कम्तिमा "+e[0]+" अक्षरहरू हुनुपर्दछ।"},min_value:function(n,e){return n+" इमेल फिल्ड "+e[0]+" वा बढी हुनुपर्दछ।"},numeric:function(n){return n+" फिल्डले संख्यात्मक अक्षरहरूमा मात्र समावेश गर्न सक्छ।"},regex:function(n){return n+" फिल्ड ढाँचा अमान्य छ।"},required:function(n){return n+" फिल्ड आवश्यक छ।"},size:function(n,e){var t,r,u,i=e[0];return n+" परिणाम "+(t=i,r=1024,u=0==(t=Number(t)*r)?0:Math.floor(Math.log(t)/Math.log(r)),1*(t/Math.pow(r,u)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][u])+" भन्दा कम हुनुपर्दछ।"},url:function(n){return n+" फिल्ड मान्य यूआरएल होइन।"}},attributes:{}}});