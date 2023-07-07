function timer(){
    var Start = new Date().getTime();
    WebAPIJSI()
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


function CallNativeJSICamera(){
    var CallNativeJSIBridgeTimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        CallNativeJSIBridgeresponse = event.detail;
        var CallNativeJSIBridgeTimeElapsed = new Date().getTime() - CallNativeJSIBridgeTimeStart;
        console.log(CallNativeJSIBridgeresponse);
        document.getElementById("output").innerHTML = JSON.stringify(CallNativeJSIBridgeresponse,null,2);
        document.getElementById("ttl").innerHTML = CallNativeJSIBridgeTimeElapsed;
    });
    try {
        var ReqJSON = "{\"command\":\"requestCamera\"}"
        if (window.webkit) {
            window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
        } else {
            window?.native?.callNativeJSI(ReqJSON)
        }
    } catch(e) {
        console.log(e);
    }
}

function CallNativeJSILocation(){
    var CallNativeJSILocationTimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        CallNativeJSILocationresponse = event.detail;
        var CallNativeJSILocationTimeElapsed = new Date().getTime() - CallNativeJSILocationTimeStart;
        console.log(CallNativeJSILocationresponse);
        document.getElementById("output").innerHTML = JSON.stringify(CallNativeJSILocationresponse,null,2);
        document.getElementById("ttl").innerHTML = CallNativeJSILocationTimeElapsed;
    });
    try {
        var ReqJSON = {"command":"getLocation","request":{"isFineLocationRequired":true}}
        if (window.webkit) {
            window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
        } else {
            window?.native?.callNativeJSI(JSON.stringify(ReqJSON))
        }
    } catch(e) {
        console.log(e);
    }
}

function CallNativeJSILocationFalse(){
    var CallNativeJSILocationFalseTimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        CallNativeJSILocationFalseresponse = event.detail;
        var CallNativeJSILocationFalseTimeElapsed = new Date().getTime() - CallNativeJSILocationFalseTimeStart;
        console.log(CallNativeJSILocationFalseresponse);
        document.getElementById("output").innerHTML = JSON.stringify(CallNativeJSILocationFalseresponse,null,2);
        document.getElementById("ttl").innerHTML = CallNativeJSILocationFalseTimeElapsed;
    });
    try {
        var ReqJSON = {"command":"getLocation","request":{"isFineLocationRequired":false}}
        if (window.webkit) {
            window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
        } else {
            window?.native?.callNativeJSI(JSON.stringify(ReqJSON))
        }
    } catch(e) {
        console.log(e);
    }
}

function NavigateToMoreJSIs(){
    window.location.href="https://poc-web-common-actions.vercel.app"
}


// https://poc-web-common-actions.vercel.app/

// window.native.callNativeJSI("{\"command\":\"requestCamera\"}")
// function AppDetailsBridge(){
//     alert("yellow!")
// }logWebApiIOS

// window?.webkit?.messageHandlers?.logWebApi?.postMessage?.("{\"uri\":\"https://mockable.tiket.com/rest\",\"query\":\"some_query=some_value\",\"method\":\"GET\",\"reqPayloadSize\":23,\"respPayloadSize\":2223,\"respCode\":200,\"respTime\":54,\"exception\":\"-\",\"businessCode\":\"SUCCESS\",\"businessMsg\":\"SUCCESS\"}")
function WebAPIJSI(){
    var WebAPIJSITimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        WebAPIJSIresponse = event.detail;
        var WebAPIJSITimeElapsed = new Date().getTime() - WebAPIJSIFalseTimeStart;
        console.log(WebAPIJSIFalseresponse);
        document.getElementById("output").innerHTML = JSON.stringify(WebAPIJSIFalseresponse,null,2);
        document.getElementById("ttl").innerHTML = WebAPIJSITimeElapsed;
    });
    try {
        var ReqJSON = {"command":"fetchApi","request":{"url":"https://http.dog/100.json","protocolConfig":{"config":"","method":"GET"},"data":null,"headers":null,"isCritical":true,"page":"Review","responseHandler":"review_main_call"}}
        if (window.webkit) {
            window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
        } else {
            window?.generic?.callGenericNativeJSI(JSON.stringify(ReqJSON))
        }
    } catch(e) {
        console.log(e);
    }
}

function NavigateToMoreJSIs(){
    window.location.href="https://poc-web-common-actions.vercel.app"
}

window.generic.callGenericNativeJSI()