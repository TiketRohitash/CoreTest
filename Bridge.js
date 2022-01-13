function AppDetailsBridge(){
    var AppDetailBridgeTimeStart = new Date().getTime();
    window.addEventListener('onAppDetailsReceived', (event, data) => {
        AppDetailresponse = event.detail;
        var AppDetailBridgeTimeElapsed = new Date().getTime() - AppDetailBridgeTimeStart;
        console.log(AppDetailresponse);
        document.getElementById("output").innerHTML = JSON.stringify(AppDetailresponse,null,2);
        document.getElementById("ttl").innerHTML = AppDetailBridgeTimeElapsed;
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
    var AuthenticationBridgeTimeStart = new Date().getTime();
    window.addEventListener('onUserAuthenticationDetailsReceived', (event, data) => {
        Authresponse = event.detail;
        var AuthenticationBridgeTimeElapsed = new Date().getTime() - AuthenticationBridgeTimeStart;
        console.log(Authresponse);
        document.getElementById("output").innerHTML = JSON.stringify(Authresponse,null,2);
        document.getElementById("ttl").innerHTML = AuthenticationBridgeTimeElapsed;
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