
"use strict";

/**
 * 简单变量使用let 
 * 复杂变量使用const
 * 具名函数和函数表达式区别：第一个有一个变量提升的过程，无论你在哪里定义 都是默认最先执行
 * 函数表达式遵循先定义后使用，并不会进行变量提升
*/

const tableDOM = window.Utils.createEl("table");
const divDOM = window.Utils.$("table-data-wrap")

let styles = {
    "border": "10",
    "cellpadding": "0",
    "cellspacing": "0",
    "id": "table-data-wrap",
    "width": "100%",
}
window.Utils.setAttr(tableDOM, styles);


let innerHTMLData = `<thead><tr>`
tableHeaderData.forEach((item, index, data) => {
    item.width ? innerHTMLData += `<th width=${item.width}>${item.label}</th>` : innerHTMLData += `<th >${item.label}</th>`
})
innerHTMLData += `</tr></thead>`


let tableBodyHTML = `<tbody>`
let trHTML = ``
for (let i = 0; i < tableTbodyData.length; i++) {
    const rowData = tableTbodyData[i];
    trHTML += "<tr>"
    /*头像*/
    trHTML += `<td>
        <div class="face">
            <span class="icon-${rowData.face.gender} gender"></span>
            <img src=${rowData.face.img}>
            </div>
        </td>
    `
    /*姓名*/
    trHTML += `
    <td>
        <div class="people-name">
            <h4 class="name">${rowData.name.trueName}</h4>
        <span class="nickname option-05 fs-12">昵称：${rowData.name.nickname}</span>
        </div>
    </td>`

    /*性别*/
    trHTML += `
        <td>
        <div class="gender-wrap">
            <span class="gender icon-girl ${rowData.face.gender === 'girl' ? '' : 'option-05'}" ></span>
            <span class="gender icon-boy  ${rowData.face.gender === 'boy' ? '' : 'option-05'}"></span>
        </div>
    </td>
    `
    /*年龄*/
    trHTML += `
        <td>
            <div class="age text-center">
                <p>${rowData.age.number}</p>
                <span class="option-05 fs-12">（单身狗）</span>
            </div>
        </td>`
    /*电话号码*/
    trHTML += `
        <td>
            <div class="phone">
                ${rowData.phone.code}<span class="option-05">（${rowData.country.name}）</span><br />
                ${rowData.phone.number}
            </div>
        </td>`

    /*国籍*/
    trHTML += `
    <td>
        <div>
            <img src="${rowData.country.National_flag}" alt="中国">
            <p class="country-name" style="color: ${rowData.country.color};">${rowData.country.name}</p>
        </div>
    </td>
    `
    let likeHTML = ``
    rowData.like.forEach((item,index,data)=>{
        likeHTML+=`<span style="background-color: ${item.color};">${item.tag}</span>`

    })
    /*爱好*/
    trHTML += `
    <td>
        <div class="likes">
         ${likeHTML}
        </div>
    </td>`
    /*头衔*/
    trHTML += ` 
        <td>
        <div class="grade">
            <span class="role-name">${rowData.rank.name}</span>
            <div class="grade-wrap icon-grade">
                <div class="grade-high icon-grade" style="width: ${rowData.rank.level*16.6}%;"></div>
            </div>
        </div>
        </td>`
    /*操作*/
    trHTML+=`
        <td>
            <div class="operation">
                <a href="javascript: void(0);" class="operation-btn">设置</a>
                <ul class="links">
                    <a href="javascript: void(0);">编辑</a>
                    <a href="javascript: void(0);">删除</a>
                    <a href="javascript: void(0);">锁定</a>
                    <a href="javascript: void(0);">收起</a>
                </ul>
            </div>
        </td>
    `
    trHTML += "</tr>"

}
tableBodyHTML += `${trHTML}</tbody>`

tableDOM.innerHTML = tableBodyHTML + innerHTMLData;


divDOM.appendChild(tableDOM);
