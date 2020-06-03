"use strict"

/*获取表格DOM*/
const tableDOM = window.Utils.createEl("table");
const divDOM = window.Utils.$("table-data-wrap");
const usernameInput = window.Utils.$("usernameInput");
/*打开form表单的操作信息按钮*/
const addInfoButton = window.Utils.getClassName('add-info-button')[0];
const closeDialog = window.Utils.getClassName('close-dialog')[0];
/*form表单的class*/
const infoDialog = window.Utils.$("info-dialog");
const faceView = document.querySelector(".face-view");
const faceViewList = document.querySelector(".face-view-list");
//获取头像删除按钮
const faceDelButton = window.Utils.getClassName("face-del")[0];
const getImg = faceView.getElementsByTagName('img')[0];
/***/
let faceSave = null;