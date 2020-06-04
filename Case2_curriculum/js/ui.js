(function () {
    if (!window.UI) {
        window.UI = {};

        function $message(params) {
            const body = document.getElementsByTagName('body')[0];
            const messageDOM = window.Utils.createEl('div', {
                id: "messageBox",
                class:"message-box" 
            })
            messageDOM.innerHTML = params.messageText;
            body.appendChild(messageDOM);
            show(messageDOM);
        }
        window.UI.$message = $message;

        function show(node){
            let timer = null;
            timer = setTimeout(function(){
                node.classList.add('show')
                clearTimeout(timer);
            },500)
            hide(node);
        }
        window.UI.show = show;

        function hide(node){
            let timer = null;
            timer = setTimeout(function(){
                node.classList.remove('show')
                clearTimeout(timer);
                remove(node);
            },1000)
        }
        window.UI.hide = hide;
        
        function remove(node){
            let timer = null;
            let body = document.getElementsByTagName('body')[0]
            timer = setTimeout(function(){
                body.removeChild(node);
                clearTimeout(timer);
            },1000)
        }
        window.UI.hide = hide;
        
    } else {
        throw new Error("Error");
    }
})();