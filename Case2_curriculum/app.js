
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
        "border":"10",
        "cellpadding":"0",
        "cellspacing":"0",
        "id":"table-data-wrap",
        "width":"100%",
}
window.Utils.setAttr(tableDOM,styles);

let tableHeaderData = [
    {label: "头像"},
    {label: "姓名"},
    {label: "性别"},
    {label: "年龄"},
    {label: "手机号"},
    {label: "国籍"},
    {label: "爱好",width:"200"},
    {label: "头衔"},
    {label: "操作"},
]
let innerHTMLData = `<thead><tr>`
tableHeaderData.forEach( (item,index,data)=>{
    item.width?innerHTMLData += `<th width=${item.width}>${item.label}</th>`:innerHTMLData += `<th >${item.label}</th>`
})
innerHTMLData+=`</tr></thead>`
tableDOM.innerHTML = innerHTMLData;

divDOM.appendChild(tableDOM);
