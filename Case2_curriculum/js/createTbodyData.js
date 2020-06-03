
function createAvatartHTML(data) {
    let html = `
            <td>
                <div class="face">
                    <span class="icon-${data.face.gender} gender"></span>
                    <img src=${data.face.img}>
                </div>
            </td>
        `;
    return html;
}

function createNameHTML(data) {
    let html = `
            <td>
                <div class="people-name">
                    <h4 class="name">${data.name.trueName}</h4>
                <span class="nickname option-05 fs-12">昵称：${data.name.nickname}</span>
                </div>
            </td>`;
    return html;
}
function createGenerHTML(data) {
    let html = `
            <td>
                <div class="gender-wrap">
                    <span class="gender icon-girl ${data.face.gender === 'girl' ? '' : 'option-05'}" ></span>
                    <span class="gender icon-boy  ${data.face.gender === 'boy' ? '' : 'option-05'}"></span>
                </div>
            </td>`;
    return html;
}
function createAgeHTML(data) {
    let html = `
            <td>
                <div class="age text-center">
                    <p>${data.age.number}</p>
                    <span class="option-05 fs-12">（单身狗）</span>
                </div>
            </td>`;
    return html;
}
function createPhoneHTML(data) {
    let html = `
        <td>
            <div class="phone">
                ${data.phone.code}<span class="option-05">（${data.country.name}）</span><br />
                ${data.phone.number}
            </div>
        </td>`;
    return html;
}
function createCountryHTML(data) {
    let html = `
            <td>
                <div>
                    <img src="${data.country.National_flag}" alt="中国">
                    <p class="country-name" style="color: ${data.country.color};">${data.country.name}</p>
                </div>
            </td>`;
    return html;
}

function createLikeHTML(data) {
    let likeHTML = ``
    data.forEach((item, index, data) => {
        likeHTML += `<span style="background-color: ${item.color};">${item.tag}</span>`

    })
    let html = `
            <td>
                <div class="likes">
                ${likeHTML}
                </div>
            </td>`
    return html;
}
function createRankHTML(data, number = "") {
    let Number = number == "" ? number = 16.6 : number;
    let html = ` 
            <td>
                <div class="grade">
                    <span class="role-name">${data.rank.name}</span>
                    <div class="grade-wrap icon-grade">
                        <div class="grade-high icon-grade" style="width: ${data.rank.level * Number}%;"></div>
                    </div>
                </div>
            </td>`
    return html;
}
function createSettingHTML() {
    let html = `
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
            </td>`
    return html;
}
function createTbodyData() {
    let trHTML = ``;
    for (let i = 0; i < tableTbodyData.length; i++) {
        const rowData = tableTbodyData[i];
        trHTML += "<tr>"
        /*头像*/
        trHTML += createAvatartHTML(rowData);
        /*姓名*/
        trHTML += createNameHTML(rowData);
        /*性别*/
        trHTML += createGenerHTML(rowData);
        /*年龄*/
        trHTML += createAgeHTML(rowData);
        /*电话号码*/
        trHTML += createPhoneHTML(rowData);
        /*国籍*/
        trHTML += createCountryHTML(rowData);
        /*爱好*/
        trHTML += createLikeHTML(rowData.like);
        /*头衔*/
        trHTML += createRankHTML(rowData, 30);
        /*操作*/
        trHTML += createSettingHTML();
        trHTML += "</tr>"
    }
    return trHTML;
}

