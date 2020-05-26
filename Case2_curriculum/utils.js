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
        window.Utils.$ = $
        /*
         * getElement
         *  node{params}String
         */
        function createEl(node) {
            if (typeof node != "string") {
                throw new Error("node is must be string");
            }
            return document.createElement(node)
        }
        window.Utils.createEl = createEl
        /**
         * params: node , {object}styles
        */
        function setAttr(node, styles) {
            for (let key in styles) {
                node.setAttribute(key, styles[key])
            }
        }

        window.Utils.setAttr = setAttr


    } else {
        throw new Error("Error")
    }
})()