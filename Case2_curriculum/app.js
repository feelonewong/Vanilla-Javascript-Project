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


/*获取表格DOM*/
const tableDOM = window.Utils.createEl("table");
const divDOM = window.Utils.$("table-data-wrap");
/*打开form表单的操作信息按钮*/
const addInfoButton = window.Utils.getClassName('add-info-button')[0];
const closeDialog = window.Utils.getClassName('close-dialog')[0];
/*form表单的class*/
const infoDialog = window.Utils.$("info-dialog");
const faceView = document.querySelector(".face-view");
const faceViewList = document.querySelector(".face-view-list");

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

function handlerFaceListCallback(requestData) {
    let {data} = requestData;
    let liHtml = ``;
    for (let key of data) {
        liHtml += `<li><img  src="${key}" /></li>`;
    }
    ;
    faceViewList.innerHTML = liHtml;
}

/**
 * 点击头像list更换
 * */
window.Utils.addEvent(faceViewList, 'click', function (element) {
    let nodeName = element.target.nodeName.toLowerCase();
    let imgHTML = window.Utils.createEl('img');
    const getImg = faceView.getElementsByTagName('img')[0];
    if (nodeName == 'img') {
        imgHTML.src = element.target.getAttribute('src');
    }
    if (nodeName == 'li') {
        let imgHTMLSrc = element.target.getElementsByTagName('img')[0].src;
        imgHTML.src = imgHTMLSrc;
    }

    if(getImg){
        getImg.src=imgHTML.src
    }else {
        faceView.appendChild(imgHTML);
    }
});