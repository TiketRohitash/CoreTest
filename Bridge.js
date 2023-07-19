function timer(){
    var Start = new Date().getTime();
    WebAPIJSIImageType()
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
function WebAPIJSIDog(){
    var WebAPIJSITimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        WebAPIJSIresponse = event.detail;
        var WebAPIJSITimeElapsed = new Date().getTime() - WebAPIJSITimeStart;
        console.log(WebAPIJSIresponse);
        document.getElementById("output").innerHTML = JSON.stringify(WebAPIJSIresponse,null,2);
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

function WebAPIJSITiketHomeiOS(){
    var WebAPIJSITimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        WebAPIJSIresponse = event.detail;
        var WebAPIJSITimeElapsed = new Date().getTime() - WebAPIJSITimeStart;
        console.log(WebAPIJSIresponse);
        document.getElementById("output").innerHTML = JSON.stringify(WebAPIJSIresponse,null,2);
        document.getElementById("ttl").innerHTML = WebAPIJSITimeElapsed;
    });
    try {
        var ReqJSON = {"command":"fetchApi","request":{"url":"https://api.tiket.com/ms-gateway/tix-home/v2/home-pages?availablePlatforms=IOS&headerVariant=newhome&isNotificationActive=false&pageModuleCode=HOME_V2&platform=MOBILE&variant=HOME_V2&vertical=HOME&verticalIconVariant=control","protocolConfig":{"config":"","method":"GET"},"data":"","headers":{"Host":"api.tiket.com","accept":"*/*","user-agent":"tiketcom/ios-version (twh:20420882) - v4.61.0","accept-language":"id","Cookie":"__cf_bm=kEsxh0a8SOxFrGPrKOTeJmaDK1FfHpagCsWHt18IB2I-1688570102-0-AYZkP9/vHTqNqbyp8QySTifeqw/q7q7EFnRVO8Fw9+yB/GxeMiDlnTCvAsxx2JQXneg0zRw/41R3ch8WOy8uhmPuBa4fszdUzUab2Tueuy2E; _cfuvid=OHbOMpMAtJbpgUKQmUeP_rGd0JXKuIJ0_o4GgGnVaYg-1688570102448-0-604800000","lang":"id","currency":"IDR","appversion":"4.61.0","accesstoken":"4e5f8903ad0b47c5334004712a8411ab3d913aeb","deviceid":"B68A77AB-CB30-4DF7-ACD2-026134DD8BBC","platform":"iOS","x-currency":"IDR","devicemodel":"iPhone15,3","tiketsessionid":"A8407D03-B89E-45A9-8A39-709981AB82A5","authorization":"Bearer 4e5f8903ad0b47c5334004712a8411ab3d913aeb","osversion":"16.1","screenname":"DiscoveryModule.TDMHomeViewControllerV2","x-country-code":"IDN"},"isCritical":true,"page":"Review","responseHandler":"review_main_call"}}
        if (window.webkit) {
            window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
        } else {
            window?.generic?.callGenericNativeJSI(JSON.stringify(ReqJSON))
        }
    } catch(e) {
        console.log(e);
    }
}

function WebAPIJSITiketHomeAndroid(){
    var WebAPIJSITimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        WebAPIJSIresponse = event.detail;
        var WebAPIJSITimeElapsed = new Date().getTime() - WebAPIJSITimeStart;
        console.log(WebAPIJSIresponse);
        document.getElementById("output").innerHTML = JSON.stringify(WebAPIJSIresponse,null,2);
        document.getElementById("ttl").innerHTML = WebAPIJSITimeElapsed;
    });
    try {
        var ReqJSON = {"command":"fetchApi","request":{"url":"https://api.tiket.com/ms-gateway/tix-home/v2/home-pages?availablePlatforms=IOS&headerVariant=newhome&isNotificationActive=false&pageModuleCode=HOME_V2&platform=MOBILE&variant=HOME_V2&vertical=HOME&verticalIconVariant=control","protocolConfig":{"config":"","method":"GET"},"data":"","headers":{"Host":"api.tiket.com","accept":"*/*","user-agent":"tiketcom/ios-version (twh:20420882) - v4.61.0","accept-language":"id","Cookie":"__cf_bm=kEsxh0a8SOxFrGPrKOTeJmaDK1FfHpagCsWHt18IB2I-1688570102-0-AYZkP9/vHTqNqbyp8QySTifeqw/q7q7EFnRVO8Fw9+yB/GxeMiDlnTCvAsxx2JQXneg0zRw/41R3ch8WOy8uhmPuBa4fszdUzUab2Tueuy2E; _cfuvid=OHbOMpMAtJbpgUKQmUeP_rGd0JXKuIJ0_o4GgGnVaYg-1688570102448-0-604800000","lang":"id","currency":"IDR","appversion":"4.61.0","accesstoken":"4e5f8903ad0b47c5334004712a8411ab3d913aeb","deviceid":"B68A77AB-CB30-4DF7-ACD2-026134DD8BBC","platform":"iOS","x-currency":"IDR","devicemodel":"iPhone15,3","tiketsessionid":"A8407D03-B89E-45A9-8A39-709981AB82A5","authorization":"Bearer 4e5f8903ad0b47c5334004712a8411ab3d913aeb","osversion":"16.1","screenname":"DiscoveryModule.TDMHomeViewControllerV2","x-country-code":"IDN"},"isCritical":true,"page":"Review","responseHandler":"review_main_call"}}
        if (window.webkit) {
            window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
        } else {
            window?.generic?.callGenericNativeJSI(JSON.stringify(ReqJSON))
        }
    } catch(e) {
        console.log(e);
    }
}


function WebAPIJSIAmplitude(){
    var WebAPIJSITimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        WebAPIJSIresponse = event.detail;
        var WebAPIJSITimeElapsed = new Date().getTime() - WebAPIJSITimeStart;
        console.log(WebAPIJSIresponse);
        document.getElementById("output").innerHTML = JSON.stringify(WebAPIJSIresponse,null,2);
        document.getElementById("ttl").innerHTML = WebAPIJSITimeElapsed;
    });
    try {
        var ReqJSON = {"command":"fetchApi","request":{"url":"https://api.tiket.com/ms-gateway/tix-home/v2/home-pages?availablePlatforms=ANDROID&platform=MOBILE&vertical=HOME&headerVariant=newhome&isNotificationActive=true&pageModuleCode=HOME_V2&variant=HOME_V2&verticalIconVariant=control","protocolConfig":{"config":"","method":"GET"},"data":"","headers":{"Host":"api.tiket.com","accept":"*/*","user-agent":"tiketcom/android-version (twh:20296642) - v4.62.0-debug-NCT-3696-fetchApi-call","accept-language":"id","lang":"id","currency":"IDR","appversion":"4.62.0-debug-NCT-3696-fetchApi-call","accesstoken":"8187938ac783f9ccd3e4f7f527aea3757484a7b2","deviceid":"72e23aadabc3a1b5","x-currency":"IDR","devicemodel":"Samsung+SM-A515F","tiketsessionid":"7f341bce-5f72-4516-a4ed-9794694da57c","authorization":"Bearer 4e5f8903ad0b47c5334004712a8411ab3d913aeb","screenname":"com.tiket.gits.HomeSplashActivity","x-country-code":"IDN","language":"id","content-type":"application/json","containername":"com.tiket.gits.HomeSplashActivity","x-correlation-id":"7f341bce-5f72-4516-a4ed-9794694da57c|1689683923510","osversion":"12","platform":"ANDROID","channelid":"ANDROID","if-none-match":"093c96922871e5bcc3031f0b78452b8b1"},"isCritical":true,"page":"Review","responseHandler":"review_main_call"}}
        if (window.webkit) {
            window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
        } else {
            window?.generic?.callGenericNativeJSI(JSON.stringify(ReqJSON))
        }
    } catch(e) {
        console.log(e);
    }
}

function WebAPIJSIImageType(){
    var WebAPIJSITimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        WebAPIJSIresponse = event.detail;
        var WebAPIJSITimeElapsed = new Date().getTime() - WebAPIJSITimeStart;
        console.log(WebAPIJSIresponse);
        document.getElementById("output").innerHTML = JSON.stringify(WebAPIJSIresponse,null,2);
        document.getElementById("ttl").innerHTML = WebAPIJSITimeElapsed;
    });
    try {
        var ReqJSON = {"command":"fetchApi","request":{"url":"https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-ios-high/mobile-modules/2023/05/18/d2169506-0cae-4da9-97a5-cc9e7c0bd877-1684408252540-002c99d9889a6c6d8dc298606619d2a5.png","protocolConfig":{"config":"","method":"GET"},"data":null,"headers":{"Host":"s-light.tiket.photos","accept":"image/webp","user-agent":"TiketStaging/18 CFNetwork/1399 Darwin/22.1.0","accept-language":"en-US,en;q=0.9","referer":"apps.ios.tiket.com"},"isCritical":true,"page":"Review","responseHandler":"review_main_call"}}
        if (window.webkit) {
            window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
        } else {
            window?.generic?.callGenericNativeJSI(JSON.stringify(ReqJSON))
        }
    } catch(e) {
        console.log(e);
    }
}