//Test this module with Chai
//npm install chai --save-dev
//npm test
//npm test -s
const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
//const app = require('../app');

describe('stringMethods', function(){
    it(`"test\ntest\ntest.".stripLineBreak() #=> 'test test test.'`, function(){
        let input = `test
test
test.`;
        let method = input.stripLineBreak();
        let output = `test test test.`; 
        assert.equal(method, output);
    });
    it(`"     ahsdfjhfhf    ".trimStart() #=> 'ahsdfjhfhf    '`, function(){
        let input = "     ahsdfjhfhf    ";
        let method = input.trimStart();
        let output = "ahsdfjhfhf    "; 
        assert.equal(method, output);
    });
    it(`"......ahsdfjhfhf.....".trimStart(".") #=> 'ahsdfjhfhf.....'`, function(){
        let input = "......ahsdfjhfhf.....";
        let method = input.trimStart(".");
        let output = 'ahsdfjhfhf.....';
        assert.equal(method, output);
    });
    it(`"     ahsdfjhfhf    ".trim() #=> 'ahsdfjhfhf'`, function(){
        let input = "     ahsdfjhfhf    ";
        let method = input.trim();
        let output = 'ahsdfjhfhf';
        assert.equal(method, output);
    });
    it(`"......ahsdfjhfhf.....".trim(".") #=> 'ahsdfjhfhf'`, function(){
        let input = "......ahsdfjhfhf.....";
        let method = input.trim(".");
        let output = 'ahsdfjhfhf';
        assert.equal(method, output);
    });
    it(`"     ahsdfjhfhf    ".trimEnd() #=> '     ahsdfjhfhf'`, function(){
        let input = "     ahsdfjhfhf    ";
        let method = input.trimEnd();
        let output = '     ahsdfjhfhf';
        assert.equal(method, output);
    });
    it(`"......ahsdfjhfhf.....".trimEnd(".") #=> '......ahsdfjhfhf'`, function(){
        let input = "......ahsdfjhfhf.....";
        let method = input.trimEnd(".");
        let output = '......ahsdfjhfhf';
        assert.equal(method, output);
    });
    it(`"abcdef".reverse() #=> 'fedcba'`, function(){
        let input = "abcdef";
        let method = input.reverse();
        let output = 'fedcba';
        assert.equal(method, output);
    });
    it(`"<p>water</p><a href="test.html">test</a>".stripTags() #=> 'watertest'`, function(){
        let input = `<p>water</p><a href="test.html">test</a>`;
        let method = input.stripTags();
        let output = 'watertest';
        assert.equal(method, output);
    });
    it(`"test     test    test".stripWhiteSpace() #=> 'test test test'`, function(){
        let input = `test     test    test`;
        let method = input.stripWhiteSpace();
        let output = 'test test test';
        assert.equal(method, output);
    });
    it(`"test     test    test".stripWhiteSpace(".") #=> 'test.test.test'`, function(){
        let input = `test     test    test`;
        let method = input.stripWhiteSpace(".");
        let output = 'test.test.test';
        assert.equal(method, output);
    });
    it(`"test     test    test".stripWhiteSpace(" ") #=> 'test test test'`, function(){
        let input = `test     test    test`;
        let method = input.stripWhiteSpace(" ");
        let output = 'test test test';
        assert.equal(method, output);
    });
    it(`"123 test nl.".replaceAll({"123": "abc","nl": "Netherlands",}) #=> 'abc test Netherlands.'`, function(){
        let input = `123 test nl.`;
        let method = input.replaceAll({"123": "abc","nl": "Netherlands",});
        let output = 'abc test Netherlands.';
        assert.equal(method, output);
    });
    it(`"test&"test" 1<2".encodeXML() #=> 'test&amp;&quot;testquot; 1&lt;2'`, function(){
        let input = `test&"test" 1<2`;
        let method = input.encodeXML();
        let output = `test&amp;&quot;test&quot; 1&lt;2`;
        assert.equal(method, output);
    });
    it(`"test&amp;&quot;testquot; 1&lt;2".decodeXML() #=> 'test&"test" 1<2'`, function(){
        let input = `test&amp;&quot;test&quot; 1&lt;2`;
        let method = input.decodeXML();
        let output = `test&"test" 1<2`;
        assert.equal(method, output);
    });


    
});