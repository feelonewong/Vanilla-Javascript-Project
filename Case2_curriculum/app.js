
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
   
tableDOM.innerHTML = `<thead>
                        <tr>
                            <th>头像</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>手机号</th>
                            <th>国籍</th>
                            <th width="200">爱好</th>
                            <th>头衔</th>
                            <th>操作</th>
                        </tr>
                     </thead>`

divDOM.appendChild(tableDOM);