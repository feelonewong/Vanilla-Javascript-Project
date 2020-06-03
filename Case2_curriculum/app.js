"use strict";

/**
 * 简单变量使用let
 * 复杂变量使用const
 * 具名函数和函数表达式区别：第一个有一个变量提升的过程，无论你在哪里定义 都是默认最先执行
 * 函数表达式遵循先定义后使用，并不会进行变量提升
 */
function handlerFaceList(value) {
    $.post(
        "http://www.web-jshtml.cn/api/javascriptApi/faceList/",
        JSON.stringify({}),
        function (data) {
            handlerFaceListCallback(data);
        }, "json");
}

let styles = {
    "border": "10",
    "cellpadding": "0",
    "cellspacing": "0",
    "id": "table-data-wrap",
    "width": "100%",
};
window.Utils.setAttr(tableDOM, styles);

let innerHTMLData = `<thead><tr>`;
tableHeaderData.forEach((item, index, data) => {
    item.width ? innerHTMLData += `<th width=${item.width}>${item.label}</th>` : innerHTMLData += `<th >${item.label}</th>`;
});
innerHTMLData += `</tr></thead>`;

let tableBodyHTML = `<tbody>`;
tableBodyHTML += `${createTbodyData()}</tbody>`;
tableDOM.innerHTML = tableBodyHTML + innerHTMLData;

divDOM.appendChild(tableDOM);

/**
 * 打开、关闭表单的事件处理
 * */
window.Utils.addEvent(addInfoButton, "click", function () {
    infoDialog.classList.add("dialog-show");
});
window.Utils.addEvent(closeDialog, 'click', function () {
    infoDialog.classList.remove('dialog-show');
    faceViewList.innerHTML = "";
});

/**
 * 头像事件处理
 * */
window.Utils.addEvent(faceView, 'click', function () {
    handlerFaceList();
});



/**
 * 点击头像list更换
 * */
window.Utils.addEvent(faceViewList, 'click', function (element) {
    let nodeName = element.target.nodeName.toLowerCase();
    let imgHTML = window.Utils.createEl('img');
    const getImg = faceView.getElementsByTagName('img')[0];
    if(faceSave){
        faceSave.classList.remove("active")
    }
    if (nodeName == 'li') {
        let imgHTMLSrc = element.target.getElementsByTagName('img')[0].src;
        imgHTML.src = imgHTMLSrc;
        faceSave = element.target
    }

    if (nodeName == 'img') {
        imgHTML.src = element.target.getAttribute('src');
        faceSave = element.target.parentNode;
    }
    faceSave.classList.add("active")
    /**
     * 更新头像
    */
    let params = {
        getImg,
        imgHTML,
        'type': 'add'
    }
    faceUpdate(params)

});

/*删除头像按钮点击事件*/
window.Utils.addEvent(faceDelButton, 'click', function (e) {
    if (e && e.stopPropagation) {
        e.stopPropagation()
    } else {
        window.event.cancelBubble = true
    }
    const getImg = faceView.getElementsByTagName('img')[0];
    let params = {
        getImg,
        type: 'del'
    }
    faceUpdate(params)
})
usernameInput.onblur = function(){
    window.UI.$message({
        messageText:"姓名不能为空"
    });
}