function AppDetailsBridge(){
    window.addEventListener('onAppDetailsReceived', (event, data) => {
        response = event.detail;
        console.log(response);
        document.getElementById("output").innerHTML = JSON.stringify(response,null,2);
    });
    try {
        if (window.webkit) {
            window?.webkit?.messageHandlers?.getAppDetails?.postMessage?.(null)
        } else {
            window?.native?.getAppDetails()
        }
    } catch(e) {
        console.log(e);
    }
}

function AuthenticationBridge(){
    window.addEventListener('onAuthenticationDetailsReceived', (event, data) => {
        response = event.detail;
        console.log(response);
        document.getElementById("output").innerHTML = JSON.stringify(response,null,2);
    });
    try {
        if (window.webkit) {
            window?.webkit?.messageHandlers?.getUserAuthenticationDetails?.postMessage?.(null)
        } else {
            window?.native?.getUserAuthenticationDetails()
        }
    } catch(e) {
        console.log(e);
    }
}
// function AppDetailsBridge(){
//     alert("yellow!")
// }