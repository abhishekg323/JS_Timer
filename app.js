let hr=document.querySelector("#hr")
let min=document.querySelector("#min")
let sec=document.querySelector("#sec")
let sbtn=document.querySelector("#stop");
let btn=document.querySelector("#start");
let h,m,s,interval_ID;
let stop = ()=>{
    clearInterval(interval_ID);
    btn.disabled=false;
    sbtn.disabled=true;
};
btn.addEventListener('click',()=>{
    h=parseInt(hr.value);
    m=parseInt(min.value);
    s=parseInt(sec.value);
    interval_ID= setInterval(()=>{
        if(sec.value!= 0)
            sec.value=parseInt(sec.value)-1;
        else{
            if(min.value!=0){
                sec.value=59;
                min.value=parseInt(min.value)-1;
            }
            else{
                if(hr.value!=0){
                    min.value=59;
                    sec.value=59;
                    hr.value=parseInt(hr.value)-1;
                }
                else
                    stop();
            }
        }
    },1000);
    btn.disabled=true;
    sbtn.disabled=false;
});
sbtn.addEventListener('click',stop);

let h1=document.createElement("h1");
h1.innerText=window.innerWidth;
window.addEventListener("resize",()=>{
    h1.innerText=window.innerWidth;
});
document.body.appendChild(h1);