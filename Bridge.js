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

function WebAPIJSITiketHome(){
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
        var ReqJSON = {"command":"fetchApi","request":{"url":"https://api2.amplitude.com/","protocolConfig":{"config":"","method":"GET"},"data":"v=3&client=7db88c71bdf21903d1b954eba6be657e&e=%5B%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22platform%22%3A%22iOS%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A780%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%223CBDB34F-EED4-4FC5-B8BF-F38264A662E6%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A653%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703684741%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22appVersion%22%3A%224.58.0%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A781%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%2230D9C337-758F-4CC4-BA49-4317655154B3%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A654%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703684741%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22deviceModel%22%3A%22iPhone%20X%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A782%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%222DDFA8B8-75BF-41E8-9AC9-2441F5F4B617%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A655%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703684741%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22osVersion%22%3A%2216.1.2%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A783%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%228F6EE0D2-E902-4860-AB4B-1A4A4427346A%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A656%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703684741%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22language%22%3A%22ID%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A784%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%22DD17F65B-D6FE-4718-8378-08953F6B4339%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A657%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703684741%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22currency%22%3A%22IDR%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A785%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%2211853EE3-1D2A-48DA-8D8A-259D6BBC2249%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A658%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703684741%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22launchTiket%22%2C%22sequence_number%22%3A786%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%22eventAction%22%3A%22pageView%22%7D%2C%22uuid%22%3A%22256BE0A6-CA2E-4104-B42B-7FC7620EFC43%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A128%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703684741%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24exposure%22%2C%22sequence_number%22%3A787%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%22flag_key%22%3A%22discovery-onboarding-status%22%7D%2C%22uuid%22%3A%22FC5E385A-095F-44A4-9DA5-0A77A0E9D6C2%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A129%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703684757%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24exposure%22%2C%22sequence_number%22%3A788%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%22variant%22%3A%22control%22%2C%22flag_key%22%3A%22disc-vertical-icon-a-b-testing%22%7D%2C%22uuid%22%3A%227300A530-786D-4FD1-A937-77E9377A4B9E%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A130%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703684795%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24exposure%22%2C%22sequence_number%22%3A789%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%22flag_key%22%3A%22homepage_content%22%7D%2C%22uuid%22%3A%229581E61A-8CA5-4A78-9569-0E331BED1AB9%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A131%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703684796%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22deviceId%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A790%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%221049D4BB-B368-4C6A-B0EF-AFCF6A7ECFFB%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A659%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685052%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22tiketSessionId%22%3A%22B525B14F-6275-4D31-AF37-A5DE8F468E66%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A791%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%2286C286B1-D388-4A6C-AAAE-DDB9E9E3E6C4%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A660%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685054%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22platform%22%3A%22iOS%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A792%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%22CAD898D1-D0AF-41E7-8CED-4AA426CC9F9C%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A661%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685054%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22appVersion%22%3A%224.58.0%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A793%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%2237F5AD13-2AC8-4BF7-BEC1-BD6CDB36C151%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A662%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685054%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22deviceModel%22%3A%22iPhone%20X%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A794%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%221344BC07-93B0-4F48-B629-F08270EF020B%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A663%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685054%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22osVersion%22%3A%2216.1.2%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A795%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%2217D18291-B4E6-4EC5-B787-B3E6889CCB36%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A664%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685054%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22language%22%3A%22ID%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A796%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%2233325145-F4A2-43CB-B49E-ABF9B5FC5F02%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A665%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685054%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22currency%22%3A%22IDR%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A797%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%2254B94055-C2B4-44E1-96FD-FE1B70A208B3%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A666%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685054%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22launchTiket%22%2C%22sequence_number%22%3A798%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%22eventAction%22%3A%22pageView%22%7D%2C%22uuid%22%3A%22E0540540-1D3E-4066-9816-21750E055899%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A132%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685055%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22deviceId%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A799%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%22BB3DBE2B-DFA1-45AE-87C1-3A442E96F53E%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A667%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685210%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22tiketSessionId%22%3A%22B525B14F-6275-4D31-AF37-A5DE8F468E66%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A800%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%22F0AD61C1-E74B-43B1-AD4B-3EDC997A784F%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A668%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685210%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22platform%22%3A%22iOS%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A801%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%226C0B0D88-C141-485B-933E-2FF681283F24%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A669%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685210%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22appVersion%22%3A%224.58.0%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A802%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%228574E406-4845-4294-9BAB-4D14A7D7BCBA%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A670%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685210%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22deviceModel%22%3A%22iPhone%20X%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A803%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%221C0DE55C-F5D4-483E-AD60-C8B155694D56%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A671%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685210%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22osVersion%22%3A%2216.1.2%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A804%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%228FF20211-43FB-4059-835D-3006EB10C9D0%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A672%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685210%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22language%22%3A%22ID%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A805%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%224C7A7522-A9E4-4A35-B50B-5134C199AD4E%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A673%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685210%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%22%24set%22%3A%7B%22currency%22%3A%22IDR%22%7D%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24identify%22%2C%22sequence_number%22%3A806%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%7D%2C%22uuid%22%3A%229F4FB974-7896-4635-8A00-178949699023%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A674%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703685211%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22%24exposure%22%2C%22sequence_number%22%3A807%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%22variant%22%3A%22on%22%2C%22flag_key%22%3A%22page-module-full-status-enablement%22%7D%2C%22uuid%22%3A%223C1959FD-0D10-443D-AE0C-8C9E76EF83D4%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A133%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703692094%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22pageVisit%22%2C%22sequence_number%22%3A808%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%22screenName%22%3A%22home%22%2C%22utmSection%22%3A%22none%22%2C%22eventDescription%22%3A%22none%22%2C%22utmLogic%22%3A%22none%22%2C%22isFirstPage%22%3A1%2C%22eventAction%22%3A%22pageView%22%2C%22eventValue%22%3A%220%22%2C%22utmPage%22%3A%22none%22%7D%2C%22uuid%22%3A%22A223AE4C-DE17-4F38-9AA5-BEFED186C5F9%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A134%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703692898%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%2C%7B%22session_id%22%3A1683702986700%2C%22user_properties%22%3A%7B%7D%2C%22language%22%3A%22English%22%2C%22event_type%22%3A%22bannerPageModule%22%2C%22sequence_number%22%3A809%2C%22country%22%3A%22Indonesia%22%2C%22api_properties%22%3A%7B%22ios_idfv%22%3A%22443545C8-53EA-42C7-A6FA-B8CD3F93C331%22%7D%2C%22device_id%22%3A%2264AFFB2E-0593-4BB7-B114-4D4F51BA44E5%22%2C%22event_properties%22%3A%7B%22status%22%3A%222%3A1%3BwithChips%3BseeAllCTA%22%2C%22screenName%22%3A%22home%22%2C%22sectionName%22%3A%22All%20Promo%20Carousel%22%2C%22eventLabel%22%3A%22pageModule%22%2C%22sectionId%22%3A%2263a190a15e8bdd000123732e%22%2C%22sectionTitle%22%3A%22Cek%20promo%20sebelum%20bepergian%2C%20kuy%21%22%2C%22screenOwner%22%3A%22discovery%22%2C%22templateCode%22%3A%22BANNER_CAROUSEL_V2%22%2C%22eventValue%22%3A%220%22%2C%22sectionPosition%22%3A%221%22%2C%22eventAction%22%3A%22impression%22%7D%2C%22uuid%22%3A%220CFB0958-22D0-4A87-BF12-8BBABF43214B%22%2C%22device_manufacturer%22%3A%22Apple%22%2C%22version_name%22%3A%224.58.0%22%2C%22library%22%3A%7B%22name%22%3A%22amplitude-ios%22%2C%22version%22%3A%228.8.0%22%7D%2C%22os_name%22%3A%22ios%22%2C%22platform%22%3A%22iOS%22%2C%22event_id%22%3A135%2C%22carrier%22%3A%22Telkomsel%22%2C%22timestamp%22%3A1683703695692%2C%22groups%22%3A%7B%7D%2C%22os_version%22%3A%2216.1.2%22%2C%22device_model%22%3A%22iPhone%20X%22%2C%22group_properties%22%3A%7B%7D%7D%5D&upload_time=1683703695738&checksum=9922a6fbad97a41e82ce95abbee61a3b","headers":{"Host":"api2.amplitude.com","accept":"*/*","user-agent":"TiketStaging/18 CFNetwork/1399 Darwin/22.1.0","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","content-type":"application/x-www-form-urlencoded"},"isCritical":true,"page":"Review","responseHandler":"review_main_call"}}
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