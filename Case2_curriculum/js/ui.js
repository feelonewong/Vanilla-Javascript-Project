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
        }
        window.UI.$message = $message;

    } else {
        throw new Error("Error");
    }
})();