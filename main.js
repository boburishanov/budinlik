
// boshqarish tugmalari
let start=document.querySelector("#start")
let stop=document.querySelector("#stop")
let restart=document.querySelector("#restart")
// button+
let btn_minuts_plus = document.querySelector(".btn_minuts_plus")
let btn_secunts_plus = document.querySelector(".btn_secunts_plus")
let btn_milesecunds_plus = document.querySelector(".btn_milesecunds_plus")
// h1
let minuts=document.querySelector(".minuts")
let secunds=document.querySelector(".secunds")
let mile_secunds=document.querySelector(".mile_secunds")
// button-
let btn_minuts_minus = document.querySelector(".btn_minuts_minus")
let btn_secunts_minus = document.querySelector(".btn_secunts_minus")
let btn_milesecunts_minus = document.querySelector(".btn_milesecunts_minus")
// uzgaruvchilar
let count_minuts=0
let count_secunds=0
let count_mile_secunds=0
// 
let interval;

// millisekund buttnlari
btn_milesecunds_plus.onclick=()=>{
    count_mile_secunds++
    if(count_mile_secunds<=9){
        mile_secunds.innerHTML="0"+ count_mile_secunds
    }else{
        mile_secunds.innerHTML = count_mile_secunds
    }
}
btn_milesecunts_minus.onclick=()=>{
    count_mile_secunds--
    if(count_mile_secunds<=9){
        mile_secunds.innerHTML="0"+ count_mile_secunds
    }else{
        mile_secunds.innerHTML = count_mile_secunds
    }
    if(count_mile_secunds <= 0 ){
        mile_secunds.innerHTML="00"
        count_mile_secunds=0
    }
}
// sekund buttonlari
btn_secunts_plus.onclick=()=>{
    count_secunds++
    if(count_secunds<=9){
        secunds.innerHTML="0"+ count_secunds
    }else{
        secunds.innerHTML = count_secunds
    }
}
btn_secunts_minus.onclick=()=>{
    count_secunds--
    if(count_secunds<=9){
        secunds.innerHTML="0"+ count_secunds
    }else{
        secunds.innerHTML = count_secunds
    }
    if(count_secunds <= 0 ){
        secunds.innerHTML="00"
        count_secunds=0
    }
}
// soat bottonlari
btn_minuts_plus.onclick=()=>{
    count_minuts++
    if(count_minuts<=9){
        minuts.innerHTML="0"+ count_minuts
    }else{
        minuts.innerHTML = count_minuts
    }
}
btn_minuts_minus.onclick=()=>{
    count_minuts--
    if(count_minuts<=9){
        minuts.innerHTML="0"+ count_minuts
    }else{
        minuts.innerHTML = count_minuts
    }
    if(count_minuts <= 0 ){
        minuts.innerHTML="00"
        count_minuts=0
    }
}

// funksya

start.onclick=()=>{
    interval=setInterval(()=>{
        if(count_mile_secunds === 0){
            count_mile_secunds = 59
            if(count_secunds === 0){
                count_secunds = 59
                if(count_minuts === 0){
                    count_minuts = 59
                    if(count_minuts === 0 && count_secunds === 0 && count_mile_secunds === 0){
                        count_minuts = 0
                        count_secunds = 0
                        count_mile_secunds = 0
                        clearInterval(interval)
                    }else{
                        count_minuts = 0
                        count_secunds = 0
                        count_mile_secunds = 0
                        clearInterval(interval)
                    }
                }else{
                    count_minuts --
                    minuts.innerHTML = count_minuts
                    count_minuts === 0
                }
            }else{
                count_secunds--
                secunds.innerHTML = count_secunds
                count_secunds === 0
            }
        }else{
            count_mile_secunds--
            mile_secunds.innerHTML = count_mile_secunds
            count_mile_secunds === 0
        }
    },1000)
}

stop.onclick= ()=>{
    clearInterval(interval)
}

restart.onclick= ()=>{
    count_minuts=0
    count_secunds=0
    count_mile_secunds=0

    minuts.innerHTML = "0"
    secunds.innerHTML = "0"
    mile_secunds.innerHTML = "0"
}