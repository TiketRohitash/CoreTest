function AppDetailsBridge(){
    window.addEventListener('onAppDetailsReceived', (event, data) => {
        console.log(event.detail);
    });
    try {
        if (window.webkit) {
            window?.webkit?.messageHandlers?.getAppDetails?.postMessage?.(null)
        } else {
            window?.native?.getAppDetails()
        }
    } catch(e) {
        document.getElementById("output").innerHTML = e
        console.log(e);
    }
}

function AuthenticationBridge(){
    window.addEventListener('onAuthenticationDetailsReceived', (event, data) => {
        console.log(event.detail);
    });
    try {
        if (window.webkit) {
            window?.webkit?.messageHandlers?.getUserAuthenticationDetails?.postMessage?.(null)
        } else {
            window?.native?.getUserAuthenticationDetails()
        }
    } catch(e) {
        document.getElementById("output").innerHTML = e
        console.log(e);
    }
}
// function AppDetailsBridge(){
//     alert("yellow!")
// }