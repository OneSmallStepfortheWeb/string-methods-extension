//Test this module with Chai
//npm install chai --save-dev
//npm test
//npm test -s
//This is Javascript modulw is made for both Browser and  Node.js
let platform ="";
(function (root, factory) {
    //    
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        platform = "nodejs";
        console.log(`${platform} ${process.versions.v8}`);
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        platform = "browser";
        factory();
    }
} (this, function () {
    /**
     * Hello World
     * @param  none
     * @return {String}
     */
    function sayHelloWorld() {
        return 'Hello world';
    }
    /**
     * Escape regular expression special characters
     * @param  {String}
     * @return {String}
     */
    String.prototype.escapeRegexChars = function() {
        return this
                .replace(/[.*+?^${}()|[\]\\<>]/g, '\\$&')
                .replace(/\x08/g, '\\x08');
    };
    //console.log(sayHelloWorld());
    /**
     * Trim character on left side
     * @param  {String} chars
     * @return {String}
     */
    String.prototype.trimStart = function(chars) {
        let pattern = (typeof chars !== 'string') ?
                        /^[\s\uFEFF\xA0]+/g :
                        new RegExp('^'+ chars.escapeRegexChars() +'+', 'g');
        return this.replace(pattern, '');
    };
    /**
     * Trim character on right side
     * @param  {String} chars
     * @return {String}
     */
    String.prototype.trimEnd = function(chars) {
        var pattern = (typeof chars !== 'string') ?
                        /[\s\uFEFF\xA0]+$/g :
                        new RegExp(chars.escapeRegexChars() +'+$', 'g');

        return this.replace(pattern, '');
    }
    /**
     * Trim character on left and right
     * @param  {String} chars
     * @return {String}
     */
    String.prototype.trim = function(chars) {
        var pattern;

        if (typeof chars !== 'string') {
            pattern = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        } else {
            pattern = new RegExp('^('+ chars.escapeRegexChars() +'+)|('+ chars.escapeRegexChars() +'+)$', 'g');
         }
        return this.replace(pattern, '');
    };
    /**
     * Reverse characters
     * @param  {String}
     * @return {String}
     */ 
    String.prototype.reverse = function() {
        let reversed = '';
        for(let i = this.length - 1; i >= 0; i--){
           reversed += this[i];
        }
        return reversed;
    };
    /**
     * Stripe HTML or XML tags
     * @param  {String}
     * @return {String}
     */ 
    String.prototype.stripTags = function() {
        return this.replace(/<[^>]+>/g, '');
    };
    /**
     * Stripe white spaces
     * @param  {String} chars
     * @return {String}
     */
    String.prototype.stripWhiteSpace = function(chars = ' ') {
        return this.replace(/  +/g, chars);
    };
    /**
     * Replace all
     * @param  {Object} replaceList
     * @return {String}
     */
    String.prototype.replaceAll = function(replaceList) {
        var str = this;
        Object.keys(replaceList).forEach(function (item) {
            let search = item; //key
            let replace = replaceList[item]; // value 
            var stringLength = str.length;
            var n = 0;
            var stringPart2 = str.substring(n, stringLength);
            var stringPart1 = "";
            var searchLength = search.length;
            while (stringPart2.indexOf(search) > -1) {
                n = stringPart2.indexOf(search);
                stringLength = stringPart2.length;
                stringPart1 +=  stringPart2.substring(0, n) + replace;
                stringPart2 = stringPart2.substring(n + searchLength, stringLength);
                str = stringPart1 + stringPart2;
                }   
        });
        return str;
    };
    /**
     * Encode XML chars
     * @param  {String}
     * @return {String}
     */
    String.prototype.encodeXML = function() {
        return  this.replace(/&/g, '&amp;')
                    .replace(/&amp;amp;/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&apos;');
    };
    /**
     * Decode XML chars
     * @param  {String}
     * @return {String}
     */
    String.prototype.decodeXML = function() {
        return  this.replace(/&amp;amp;/g, '&')
                    .replace(/&amp;/g, '&')
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .replace(/&quot;/g, '"')
                    .replace(/&apos;/g, '\'');
    };

}));