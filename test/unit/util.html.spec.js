import {expect} from "chai";
import "../../src/m7corefiles.js";

import "../../js/utils/util.html.js";

describe('html工具类操作dom', function() {
    var testPanel,
        richText;

    before(function() {
        // 在本区块的所有测试用例之前执行
        testPanel = document.createElement("div");
        document.body.appendChild(testPanel);
        
        richText = '测试内容测试内容2测试内容3';
    });

    
    afterEach(function() {
        testPanel.innerHTML = '';
    });

    it('appendRichText（添加富文本）', function() {
        Util.html.appendRichText(testPanel, richText);
        expect(testPanel.innerHTML).to.be.equal(richText);
    });
});