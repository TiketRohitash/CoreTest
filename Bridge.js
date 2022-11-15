function timer(){
    var Start = new Date().getTime();
    AppDetailsBridge()
    var Elapsed = new Date().getTime() - Start;
    console.log(Elapsed);
}
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

function logWebApiIOS(){
    // alert("yellow!")
    var ResponseJSON = {"uri":"https://reqres.in/api/users","query":"","method":"GET","reqPayloadSize":23,"respPayloadSize":2223,"respCode":200,"respTime":54,"exception":"-","businessCode":"SUCCESS","businessMsg":"SUCCESS"}
    window?.webkit?.messageHandlers?.logWebApi?.postMessage?.(JSON.stringify(ResponseJSON))
}

function logWebApiIOSNew(){
    var logWebTimeStart = new Date().getTime();
    window.addEventListener('onUserAuthenticationDetailsReceived', (event, data) => {
        Authresponse = event.detail;
        var LogWebTimeElapsed = new Date().getTime() - logWebTimeStart;
        console.log(Authresponse);
        // document.getElementById("output").innerHTML = JSON.stringify("Authresponse",null,2);
        document.getElementById("ttl").innerHTML = LogWebTimeElapsed;
        var ResponseJSON = {"uri":"https://reqres.in/api/users","query":"","method":"GET","reqPayloadSize":23,"respPayloadSize":2223,"respCode":200,"respTime":54,"exception":"-","businessCode":"SUCCESS","businessMsg":"SUCCESS"}

    });
    try {
        if (window.webkit) {
            window?.webkit?.messageHandlers?.logWebApi?.postMessage?.(ResponseJSON)
        } else {
            window?.native?.logWebApi()
        }
    } catch(e) {
        console.log(e);
    }
}

// function AppDetailsBridge(){
//     alert("yellow!")
// }logWebApiIOS

// window?.webkit?.messageHandlers?.logWebApi?.postMessage?.("{\"uri\":\"https://mockable.tiket.com/rest\",\"query\":\"some_query=some_value\",\"method\":\"GET\",\"reqPayloadSize\":23,\"respPayloadSize\":2223,\"respCode\":200,\"respTime\":54,\"exception\":\"-\",\"businessCode\":\"SUCCESS\",\"businessMsg\":\"SUCCESS\"}")