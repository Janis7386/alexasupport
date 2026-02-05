function chatShow() {
    if (window.tidioChatApi) {
        window.tidioChatApi.show();
        window.tidioChatApi.open();
    } else {
        document.addEventListener("tidioChat-ready", function () {
            window.tidioChatApi.show();
            window.tidioChatApi.open();
        });
    }
}
