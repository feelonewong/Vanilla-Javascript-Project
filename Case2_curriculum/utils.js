(function () {
    if (!window.Utils) {
        window.Utils = {};

        /**
         * getID
         * *{string} id
         */
        function $(id) {
            //谁调用这个方法值就返回给谁
            if (typeof id != "string") {
                throw new Error("id is must be string");
            }
            let dom = document.getElementById(id);
            if (!dom) {
                throw new Error("DOM is not found");
            }
            return document.getElementById(id);
        }

        window.Utils.$ = $;

        /*
         * getElement
         *  node{params}String
         */
        function createEl(node) {
            if (typeof node != "string") {
                throw new Error("node is must be string");
            }
            return document.createElement(node);
        }

        window.Utils.createEl = createEl;

        /**
         * params: node , {object}styles
         */
        function setAttr(node, styles) {
            for (let key in styles) {
                node.setAttribute(key, styles[key]);
            }
        }

        window.Utils.setAttr = setAttr;

        /**
         * 获取className
         * node is string
         * */
        function getClassName(node) {
            return document.getElementsByClassName(node);
        }

        window.Utils.getClassName = getClassName;

        /**
         * 封装 addListerner事件
         * */
        function addEvent(nodeDom, eventType, handleFunction) {
            if(window.addEventListener){
                nodeDom.addEventListener(eventType,handleFunction)
            }else{
                nodeDom.attachEvent(`on${eventType}`,handleFunction);
            }
        }
        window.Utils.addEvent = addEvent;

        function removeEvent(nodeDom, eventType, handleFunction) {
            if(window.removeEventListener){
                nodeDom.removeEventListener(eventType,handleFunction)
            }else{
                nodeDom.detachEvent(`on${eventType}`,handleFunction);
            }
        }
        window.Utils.removeEvent = removeEvent;

    } else {
        throw new Error("Error");
    }
})();