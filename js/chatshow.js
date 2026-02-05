let tidioListenerAdded = false;

function chatShow() {
    if (window.tidioChatApi) {
        window.tidioChatApi.show();
        window.tidioChatApi.open();
    } else if (!tidioListenerAdded) {
        tidioListenerAdded = true;
        document.addEventListener("tidioChat-ready", function () {
            window.tidioChatApi.show();
            window.tidioChatApi.open();
        });
    }
}
