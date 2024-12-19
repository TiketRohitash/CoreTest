import {imgArr, pdfArr} from './Base64data.js'
window.onload = function(){
    timer();
}
export function timer(){
    var Start = new Date().getTime();
    // WebAPIJSIImageType()
    var Elapsed = new Date().getTime() - Start;
    console.log(Elapsed);
    console.log(imgArr)
    console.log(pdfArr)
}
export function AppDetailsBridge(){
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

export function AuthenticationBridge(){
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

export function logWebApiIOS(){
    // alert("yellow!")
    var ResponseJSON = {"uri":"https://reqres.in/api/users","query":"","method":"GET","reqPayloadSize":23,"respPayloadSize":2223,"respCode":200,"respTime":54,"exception":"-","businessCode":"SUCCESS","businessMsg":"SUCCESS"}
    window?.webkit?.messageHandlers?.logWebApi?.postMessage?.(JSON.stringify(ResponseJSON))
}

export function logWebApiIOSNew(){
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

function base64ToBlob(base64, mimeType) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
}

export function CallHandleActionSendContent(){
    const urlParams = new URLSearchParams(window.location.search);
    var filetype = urlParams.get('filetype');
    var amount = 1;
    if(amount != null){
        amount = urlParams.get('amount');
    }
    var CallHandleActionSendContentTimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        CallHandleActionSendContentresponse = event.detail;
        var CallHandleActionSendContentTimeElapsed = new Date().getTime() - CallHandleActionSendContentTimeStart;
        console.log(CallHandleActionSendContentresponse);
        document.getElementById("output").innerHTML = JSON.stringify(CallHandleActionSendContentresponse,null,2);
        document.getElementById("ttl").innerHTML = CallHandleActionSendContentTimeElapsed;
    });
    try {
        if(filetype == "pdf"){
            var tempData = new Array();
            for(let i=0;i<amount;i++){
                tempData.push(pdfArr[i])
                var ReqJSON = {"command":"handleActionSendContent","request":{
                    "requestId": "abcdef123",
                    "mime-type": "application/pdf",
                    "data": tempData
                }}
            }
        }else if(filetype == "img"){
            var tempData = new Array();
            for(let i=0;i<amount;i++){
                tempData.push(imgArr[i])
                var ReqJSON = {"command":"handleActionSendContent","request":{
                    "requestId": "abcdef123",
                    "mime-type": "image/*",
                    "data": tempData
                }}
            }
        }
        if (window.webkit) {
            // window?.webkit?.messageHandlers?.callGenericNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
            for(let i=0;i<amount;i++){
                var mimeType = ""
                if(filetype == "pdf"){
                    mimeType = "application/pdf"
                }else{
                    mimeType = "image/*"
                }
                tempData[i] = base64ToBlob(tempData[i].content, mimeType)
            }
            console.log("tempData ", tempData)
            
            const shareData = {
                title: "MDN",
                text: "Learn web development on MDN!",
                url: "https://developer.mozilla.org",
                files: tempData
              };
              console.log("before ", shareData)
            navigator.share(shareData);
        } else {
            window.generic.callGenericNativeJSI(JSON.stringify(ReqJSON))
        }
    } catch(e) {
        console.log(e);
    }
}

export function CallNativeJSICamera(){
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

export function CallNativeJSILocation(){
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

export function CallNativeJSILocationFalse(){
    
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

export function NavigateToMoreJSIs(){
    window.location.href="https://poc-web-common-actions.vercel.app"
}


// https://poc-web-common-actions.vercel.app/

// window.native.callNativeJSI("{\"command\":\"requestCamera\"}")
// export function AppDetailsBridge(){
//     alert("yellow!")
// }logWebApiIOS

// window?.webkit?.messageHandlers?.logWebApi?.postMessage?.("{\"uri\":\"https://mockable.tiket.com/rest\",\"query\":\"some_query=some_value\",\"method\":\"GET\",\"reqPayloadSize\":23,\"respPayloadSize\":2223,\"respCode\":200,\"respTime\":54,\"exception\":\"-\",\"businessCode\":\"SUCCESS\",\"businessMsg\":\"SUCCESS\"}")
export function WebAPIJSIDog(){
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

export function WebAPIJSITiketHomeiOS(){
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

export function WebAPIJSITiketHomeAndroid(){
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


export function WebAPIJSIAmplitude(){
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

export function WebAPIJSIImageType(){
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


export function WebAPIJSIPaylater(){
    var WebAPIJSITimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        // WebAPIJSIresponse = event.detail;
        var WebAPIJSITimeElapsed = new Date().getTime() - WebAPIJSITimeStart;
        WebAPIJSIresponse = event.detail;
        console.log(WebAPIJSIresponse);
        document.getElementById("output").innerHTML = JSON.stringify(WebAPIJSIresponse,null,2);
        document.getElementById("ttl").innerHTML = WebAPIJSITimeElapsed;
    });
    try {
        var ReqJSON = {"command":"fetchApi","request":{"url":"https://m.tiket.com/promo/campaign/blibli-tiket-paylater?device_type=android&lang=en","protocolConfig":{"config":"","method":"GET"},"data":null,"headers":{"User-Agent":"tiketcom/android-version/en (twh:20296642) - v4.62.0-debug-NCT-3696-fetchApi-call-Mozilla/5.0 (Linux; Android 13; SM-E625F Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.226 Mobile Safari/537.36","Upgrade-Insecure-Requests":"1"},"isCritical":true,"page":"Review","responseHandler":"review_main_call"}}
        if (window.webkit) {
            window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
        } else {
            window?.generic?.callGenericNativeJSI(JSON.stringify(ReqJSON))
        }
    } catch(e) {
        console.log(e);
    }
}

export function WebAPIJSIPaymentOrder(){
    var WebAPIJSITimeStart = new Date().getTime();
    window.addEventListener('nativeJSICallback', (event, data) => {
        WebAPIJSIresponse = event.detail;
        var WebAPIJSITimeElapsed = new Date().getTime() - WebAPIJSITimeStart;
        // WebAPIJSIresponse = event.detail;
        console.log(WebAPIJSIresponse);
        document.getElementById("output").innerHTML = JSON.stringify(WebAPIJSIresponse,null,2);
        document.getElementById("ttl").innerHTML = WebAPIJSITimeElapsed;
    });
    try {
        var ReqJSON = {"command":"fetchApi","request":{"url":"https://mpayment.tiket.com/ms-gateway/tix-my-order-core/payment/order?orderHash=49F0737B4057612C64C365DF&orderId=1240494971","protocolConfig":{"config":"","method":"GET"},"data":"","headers":{"authority":"mpayment.tiket.com","accept":"*/*","accept-language":"en,en-GB;q=0.9,en-US;q=0.8","accesstoken":"5f4991659010673c499c8740ea443b523a408e52","cookie":"userlang=en; _tix_logger_correlation_id=9e93f7cf-dbd3-477c-8f68-7bed8934d936; session_access_token=eyJraWQiOiJDalFpd2tlRjFLUHdhb3VNa0VWSWQ0QUMxX0ZueWVBSCJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2NGJmNjUyZGM1NmIyNzExNjAwZjg1ODgiLCJuYmYiOjE2OTAyNjQ4NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTcwNjA0NDg3N30.z6ACKscv0EBsnD6n6n1Z5SVQJMVmlHlyqDJXxoRsvwb4AuGi0vhEgkjf1ZFssO1L; session_refresh_token=eyJraWQiOiJPazYtWnZNeUdNYTlWYmpDeEdXZkx5Ul96N09fWUY5ZyJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2NGJmNjUyZGM1NmIyNzExNjAwZjg1ODgiLCJuYmYiOjE2OTAyNjQ4NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTcyMTgyNDg3N30.ykuUb1ErA7D65T_pw4hNPSrG_bfxLs5ohIxtCEi8dbZyIxop_kPfAcV7jSTOF4hu; tiket_currency=IDR; tiket-token-app=5f4991659010673c499c8740ea443b523a408e52; usercurrency=IDR; __cf_bm=lskrc6tt9hxCYnMK4_tPS4QHez7_yLuwpffEQAmqjwA-1690527200-0-AUikCmxH0STHjk1JtS7swwA7roUshKkKxe4DBcH8PcPJ6gnKTF5ZqphmnHda08PDJWn/g5t9PpumeGT55YtflJTIg5hWWtCRW/HiFDhkajFh; _cfuvid=bVs8zIZ5ZLaL0sqj_ClOF5.agXBRmNv70S1TG8k_bYM-1690527200790-0-604800000; 29=undefined; _ga=GA1.1.2067133095.1690527204; app_logger_correlation_id=c36689dc-b012-426d-ab98-29f241bcf32f; _ga_7H6ZDP2ZXG=GS1.1.1690527203.1.0.1690527229.34.0.0; amp_b34eb5=VzZosi9WV-PzEMUuH6gQAm...1h6dkbv2h.1h6dkcq20.2.5.7","lang":"en","referer":"https://mpayment.tiket.com/next/v4?order_id=1240494971&order_hash=49F0737B4057612C64C365DF&device_type=android&lang=en","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","user-agent":"tiketcom/android-version/en (twh:20296642) - v4.62.0-debug-NCT-3696-fetchApi-call-Mozilla/5.0 (Linux; Android 13; SM-E625F Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.226 Mobile Safari/537.36","x-audience":"tiket.com","x-currency":"IDR","x-requested-with":"com.tiket.gits.debug"},"isCritical":true,"page":"Review","responseHandler":"review_main_call"}}
        if (window.webkit) {
            window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
        } else {
            window?.generic?.callGenericNativeJSI(JSON.stringify(ReqJSON))
        }
    } catch(e) {
        console.log(e);
    }
}

export const callApiWithJSFetch = async () => {
        const startTime = new Date().getTime();
        const res = await fetch(
          "https://api.tiket.com/ms-gateway/tix-home/v2/home-pages?availablePlatforms=IOS&headerVariant=newhome&isNotificationActive=false&pageModuleCode=HOME_V2&platform=MOBILE&variant=HOME_V2&vertical=HOME&verticalIconVariant=control",
          {
            headers: {
                authority: "mpayment.tiket.com",
                accept: "*/*",
                "accept-language": "en,en-GB;q=0.9,en-US;q=0.8",
                accesstoken: "5f4991659010673c499c8740ea443b523a408e52",
                cookie: "userlang=en; _tix_logger_correlation_id=9e93f7cf-dbd3-477c-8f68-7bed8934d936; session_access_token=eyJraWQiOiJDalFpd2tlRjFLUHdhb3VNa0VWSWQ0QUMxX0ZueWVBSCJ9.eyJhdWQiOiJ0aWtldC5jb20iLCJzdWIiOiI2NGJmNjUyZGM1NmIyNzExNjAwZjg1ODgiLCJuYmYiOjE2OTAyNjQ4NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTcwNjA0NDg3N30.z6ACKscv0EBsnD6n6n1Z5SVQJMVmlHlyqDJXxoRsvwb4AuGi0vhEgkjf1ZFssO1L; session_refresh_token=eyJraWQiOiJPazYtWnZNeUdNYTlWYmpDeEdXZkx5Ul96N09fWUY5ZyJ9.eyJhdWQiOiJ0aWtldC5jb20vcnQiLCJzdWIiOiI2NGJmNjUyZGM1NmIyNzExNjAwZjg1ODgiLCJuYmYiOjE2OTAyNjQ4NzcsImlzcyI6Imh0dHBzOi8vd3d3LnRpa2V0LmNvbSIsImV4cCI6MTcyMTgyNDg3N30.ykuUb1ErA7D65T_pw4hNPSrG_bfxLs5ohIxtCEi8dbZyIxop_kPfAcV7jSTOF4hu; tiket_currency=IDR; tiket-token-app=5f4991659010673c499c8740ea443b523a408e52; usercurrency=IDR; __cf_bm=lskrc6tt9hxCYnMK4_tPS4QHez7_yLuwpffEQAmqjwA-1690527200-0-AUikCmxH0STHjk1JtS7swwA7roUshKkKxe4DBcH8PcPJ6gnKTF5ZqphmnHda08PDJWn/g5t9PpumeGT55YtflJTIg5hWWtCRW/HiFDhkajFh; _cfuvid=bVs8zIZ5ZLaL0sqj_ClOF5.agXBRmNv70S1TG8k_bYM-1690527200790-0-604800000; 29=undefined; _ga=GA1.1.2067133095.1690527204; app_logger_correlation_id=c36689dc-b012-426d-ab98-29f241bcf32f; _ga_7H6ZDP2ZXG=GS1.1.1690527203.1.0.1690527229.34.0.0; amp_b34eb5=VzZosi9WV-PzEMUuH6gQAm...1h6dkbv2h.1h6dkcq20.2.5.7",
                lang: "en",
                referer: "https://mpayment.tiket.com/next/v4?order_id=1240494971&order_hash=49F0737B4057612C64C365DF&device_type=android&lang=en",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "user-agent": "tiketcom/android-version/en (twh:20296642) - v4.62.0-debug-NCT-3696-fetchApi-call-Mozilla/5.0 (Linux; Android 13; SM-E625F Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.226 Mobile Safari/537.36",
                "x-audience": "tiket.com",
                "x-currency": "IDR",
                "x-requested-with": "com.tiket.gits.debug",
            },
          }
        );
        const resJson = await res.json();
        const endTime = new Date().getTime();
        const Final=endTime - startTime;
        document.getElementById("ttl").innerHTML = Final;
        console.log("time duration for api", Final);
      };



    export const callApiWithJSFetchCAT = async () => {
    const startTime = new Date().getTime();
    const res = await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=beng",
          {
            headers: {
                accept: "*/*",
            },
          }
        );
    const resJson = await res.json();
    const endTime = new Date().getTime();
    const Final=endTime - startTime;
    document.getElementById("ttl").innerHTML = Final;
    console.log("time duration for api", Final);
    };

export function WebAPIJSICat(){
        var WebAPIJSITimeStart = new Date().getTime();
        window.addEventListener('nativeJSICallback', (event, data) => {
            WebAPIJSIresponse = event.detail;
            var WebAPIJSITimeElapsed = new Date().getTime() - WebAPIJSITimeStart;
            console.log(WebAPIJSIresponse);
            document.getElementById("output").innerHTML = JSON.stringify(WebAPIJSIresponse,null,2);
            document.getElementById("ttl").innerHTML = WebAPIJSITimeElapsed;
        });
        try {
            var ReqJSON = {"command":"fetchApi","request":{"url":"https://api.thecatapi.com/v1/images/search?breed_ids=beng","protocolConfig":{"config":"","method":"GET"},"data":null,"headers":{"accept":"*/*"},"isCritical":true,"page":"Review","responseHandler":"review_main_call"}}
            if (window.webkit) {
                window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
            } else {
                window?.generic?.callGenericNativeJSI(JSON.stringify(ReqJSON))
            }
        } catch(e) {
            console.log(e);
        }
    }
    

    export const SupportFlaskAPIFetch = async () => {
        const startTime = new Date().getTime();
        const res = await fetch("http://172.20.10.2:8001/support",
              {
                headers: {
                    accept: "*/*",
                    "Access-Control-Allow-Origin": "*",
                },
              }
            );
        const resJson = await res.json();
        const endTime = new Date().getTime();
        const Final=endTime - startTime;
        document.getElementById("ttl").innerHTML = Final;
        console.log("time duration for api", Final);
        };
    
    export function SupportFlaskAPIJSI(){
            var WebAPIJSITimeStart = new Date().getTime();
            window.addEventListener('nativeJSICallback', (event, data) => {
                WebAPIJSIresponse = event.detail;
                var WebAPIJSITimeElapsed = new Date().getTime() - WebAPIJSITimeStart;
                console.log(WebAPIJSIresponse);
                document.getElementById("output").innerHTML = JSON.stringify(WebAPIJSIresponse,null,2);
                document.getElementById("ttl").innerHTML = WebAPIJSITimeElapsed;
            });
            try {
                var ReqJSON = {"command":"fetchApi","request":{"url":"http://172.20.10.2:8001/support","protocolConfig":{"config":"","method":"GET"},"data":null,"headers":{"accept":"*/*"},"isCritical":true,"page":"Review","responseHandler":"review_main_call"}}
                if (window.webkit) {
                    window?.webkit?.messageHandlers?.callNativeJSI?.postMessage?.(JSON.stringify(ReqJSON))
                } else {
                    window?.generic?.callGenericNativeJSI(JSON.stringify(ReqJSON))
                }
            } catch(e) {
                console.log(e);
            }
        }