"use strict"
/***
 * 头像相关逻辑
*/
/***
 * API获取有关头像列表的数据 
**/
function handlerFaceListCallback(requestData) {
    let {data} = requestData;
    let liHtml = ``;
    for (let key of data) {
        liHtml += `<li><img  src="${key}" /></li>`;
    }
    ;
    faceViewList.innerHTML = liHtml;
}

/*头像更新*/
function faceUpdate(params){
    let {type,getImg,imgHTML} = params;
    if(type === 'add'){
        getImg?(getImg.src=imgHTML.src):faceView.appendChild(imgHTML);
    }
    if(type==='del'&& getImg){
        faceView.removeChild(getImg);
    }
}