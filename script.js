
document.addEventListener("DOMContentLoaded",function(){
    //很方便，建立新物件，然後html那邊幫按鈕加屬性data-clipboard-target="你想複製內容的對象"就可以了
    let clipboard1=new ClipboardJS(".clipboard-html-button");
    let clipboard2=new ClipboardJS(".clipboard-css-button");
    let totalScale=document.querySelector("#total-scale");
    let pc=document.querySelector(".computer");
    let showTotalScale=document.querySelector(".show-total-scale");
    let keyboardPerspective=document.querySelector("#keyboard-perspective");
    let showKeyboardPerspective=document.querySelector(".show-keyboard-perspective");
    let totalBorderColor=document.querySelector("#total-border-color");
    let neck=document.querySelector(".neck");
    let screenLeft=document.querySelector("#screen-left");
    let showScreenLeft=document.querySelector(".show-screen-left");
    let screenWidth=document.querySelector("#screen-width");
    let screen=document.querySelector(".screen");
    let showScreenWidth=document.querySelector(".show-screen-width");
    let screenUp=document.querySelector(".screen-up");
    let screenBackgroundColor=document.querySelector("#screen-background-color");
    let speaker=document.querySelectorAll(".speaker");
    let circle=document.querySelectorAll(".circle");
    let inCircle=document.querySelectorAll(".incircle");
    let speakerScale=document.querySelector("#speaker-scale");
    let showSpeakerScale=document.querySelector(".show-speaker-scale");
    let speaker1Position=document.querySelector("#speaker1-position");
    let showSpeaker1Position=document.querySelector(".show-speaker1-position");
    let speaker2Position=document.querySelector("#speaker2-position");
    let showSpeaker2Position=document.querySelector(".show-speaker2-position");
    let keyboards=document.querySelector(".keyboards");
    let keyboard=document.querySelectorAll(".keyboard");
    let keyboardNumber=document.querySelector("#keyboard-number");
    let showKeyboardNumber=document.querySelector(".show-keyboard-number");
    let okBtn=document.querySelector("#ok-button");
    let htmlCode=document.querySelector(".clipboard-html-code");
    let cssCode=document.querySelector(".clipboard-css-code");


    pc.style.scale=totalScale.value;
    totalScale.addEventListener("input",adjustTotalScale);
    function adjustTotalScale(){
        pc.style.scale=this.value;
        showTotalScale.innerText=this.value;
    }
    screen.style.width=screenWidth.value;
    screenWidth.addEventListener("input",function(){
        screen.style.width=`${this.value}%`;
        showScreenWidth.innerText=`${this.value}%`;
    })
    screen.style.left=screenLeft.value;
    screenLeft.addEventListener("input",function(){
        screen.style.left=`${this.value}%`;
        showScreenLeft.innerText=`${this.value}%`;
    })
    for(let i=0;i<2;i++){
        speaker[i].style.scale=speakerScale.value;
    }
    speakerScale.addEventListener("input",function(){
        for(let i=0;i<2;i++){
            speaker[i].style.scale=this.value;
        }
        showSpeakerScale.innerText=this.value;
    })
   speaker[0].style.left=speaker1Position.value;
   speaker[1].style.left=speaker2Position.value;
   speaker1Position.addEventListener("input",function(){
    speaker[0].style.left=`${this.value}%`;
    showSpeaker1Position.innerText=`${this.value}%`;
   })
   speaker2Position.addEventListener("input",function(){
    speaker[1].style.left=`${this.value}%`;
    showSpeaker2Position.innerText=`${this.value}%`;
   })
   pc.style.perspective=keyboardPerspective.value;
   keyboardPerspective.addEventListener("input",function(){
    pc.style.perspective=`${this.value}px`;
    showKeyboardPerspective.innerText=`${this.value}px`;
   })
   screenUp.style.backgroundColor=screenBackgroundColor.value;
   screenBackgroundColor.addEventListener("input",function(){
    screenUp.style.backgroundColor=this.value;//直接把value設定給元素就可以了!!!
   })
   for(let i=0;i<2;i++){
    speaker[i].style.borderColor=totalBorderColor.value;
   }
   for(let i=0;i<circle.length;i++){
    circle[i].style.borderColor=totalBorderColor.value;
   }
   for(let i=0;i<inCircle.length;i++){
    inCircle[i].style.borderColor=totalBorderColor.value;
   }
   for(let i=0;i<keyboard.length;i++){
    keyboard[i].style.borderColor=totalBorderColor.value;
   }
   screen.style.borderColor=totalBorderColor.value;
   screenUp.style.borderColor=totalBorderColor.value;
   neck.style.backgroundColor=totalBorderColor.value;
   keyboards.style.borderColor=totalBorderColor.value;
   totalBorderColor.addEventListener("input",function(){
    for(let i=0;i<2;i++){
        speaker[i].style.borderColor=this.value;
       }
    for(let i=0;i<circle.length;i++){
        circle[i].style.borderColor=this.value;
       }
    for(let i=0;i<inCircle.length;i++){
        inCircle[i].style.borderColor=this.value;
       }
    for(let i=0;i<keyboard.length;i++){
        keyboard[i].style.borderColor=this.value;
       }
    screen.style.borderColor=this.value;
    screenUp.style.borderColor=this.value;
    neck.style.backgroundColor=this.value;
    keyboards.style.borderColor=this.value;
   })
   keyboardNumber.addEventListener("input",function(){
    if(keyboardNumber.value==6){
        //如果鍵盤組還有子元素在，就把它移掉
        while(keyboards.hasChildNodes()){
            keyboards.removeChild(keyboards.firstChild)
        }; 
        //創立新元素、加上class名稱，然後掛上鍵盤組，setAttributes也可以用
        for(let i=0;i<60;i++){
        let kbd=document.createElement("div");
        kbd.style.borderColor=totalBorderColor.value;
        kbd.classList.add("keyboard");
        keyboards.appendChild(kbd);
        }
        //並把數值顯示在range條右邊
        showKeyboardNumber.innerText="60";
       }
     if(keyboardNumber.value==3){
        while(keyboards.hasChildNodes()){
            keyboards.removeChild(keyboards.firstChild);
        }; 
        for(let i=0;i<30;i++){
        let kbd=document.createElement("div");
        kbd.style.borderColor=totalBorderColor.value;
        kbd.classList.add("keyboard");
        keyboards.appendChild(kbd);
        }
        keyboards.childNodes[20].style.borderRadius="0 0 0 1vmax";
        showKeyboardNumber.innerText="30";
       }



   })
   
   okBtn.addEventListener("click",function(){
    if(keyboardNumber.value==6){
        let kbd60=` <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>

    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>

    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>

    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    `;
        htmlCode.innerText=` <div class="web-container">
        <section class="computer" style="scale:${totalScale.value};perspective:${keyboardPerspective.value}px">
          <div class="speaker" style="scale:${speakerScale.value};border-color:${totalBorderColor.value};left:${speaker1Position.value}%">
            <div class="circle" style="border-color:${totalBorderColor.value}"><div class="incircle" style="border-color:${totalBorderColor.value}"></div></div>
          </div>
          <div class="screen" style="border-color:${totalBorderColor.value};left:${screenLeft.value}%;width:${screenWidth.value}%">
            <div class="screen-up" style="background-color:${screenBackgroundColor.value} ;border-color: ${totalBorderColor.value};"></div>></div>
          </div>
          <div class="neck" style="background-color:${totalBorderColor.value}"></div>
          <div class="keyboards" style="border-color: ${totalBorderColor.value}">   
           ${kbd60}
          </div>
          <div class="speaker" style="scale:${speakerScale.value};border-color:${totalBorderColor.value};left:${speaker2Position.value}%">
            <div class="circle" style="border-color:${totalBorderColor.value}"><div class="incircle" style="border-color:${totalBorderColor.value}"></div></div>
          </div>
        </section>
      </div>`;
      cssCode.innerText=`* {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      body .web-container .computer {
        position: relative;
        perspective: 100px;
        width: 25vw;
        height: 45vh;
        scale: 1;
      }
      body .web-container .computer .speaker {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 60%;
        left: -3%;
        width: 4vw;
        height: 10vh;
        border-radius: 5px;
        border: 2px solid #ffee05;
        scale: 1;
      }
      body .web-container .computer .speaker .circle, body .web-container .computer .speaker .circle .incircle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5vmax;
        height: 2.5vmax;
        border-radius: 50%;
        border: 2px solid rgb(255, 238, 5);
      }
      body .web-container .computer .speaker .circle .incircle {
        width: 50%;
        height: 50%;
      }
      body .web-container .computer .speaker:last-child {
        left: 86%;
      }
      body .web-container .computer .screen, body .web-container .computer .screen .screen-up {
        left: 5%;
        width: 90%;
        height: 55%;
        border-radius: 1vmax;
        position: absolute;
        border: 2px solid rgb(255, 238, 5);
        
      }
      body .web-container .computer .screen .screen-up, body .web-container .computer .screen .screen-up .screen-up {
        left: 0;
        width: 100%;
        height: 80%;
        -webkit-border-before: none;
                border-block-start: none;
        -webkit-border-start: none;
                border-inline-start: none;
        -webkit-border-end: none;
                border-inline-end: none;
                background-color: rgb(255,255,255);
      }
      body .web-container .computer .neck {
        width: 30%;
        height: 13%;
        left: 35%;
        top: 55%;
        position: absolute;
        background-color: rgb(255, 238, 5);
        -webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
                clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
        border-radius: 0 0 1.5vmax 1.5vmax;
      }
      body .web-container .computer .keyboards {
        display: grid;
        grid-template-columns: repeat(10, 10%);
        width: 65%;
        height: 18%;
        left: 17.5%;
        top: 75%;
        position: absolute;
        perspective: 250px;
        border-radius: 1vmax;
        border: 1px solid rgb(255, 238, 5);
        transform: rotateX(50deg);
      }
      body .web-container .computer .keyboards .keyboard {
        border: 1px solid rgb(255, 238, 5);
      }
      body .web-container .computer .keyboards .keyboard:first-child {
        border-radius: 1vmax 0 0 0;
      }
      body .web-container .computer .keyboards .keyboard:nth-child(10) {
        border-radius: 0 1vmax 0 0;
      }
      body .web-container .computer .keyboards .keyboard:nth-child(51) {
        border-radius: 0 0 0 1vmax;
      }
      body .web-container .computer .keyboards .keyboard:last-child {
        border-radius: 0 0 1vmax;
      }`;
    }
   if(keyboardNumber.value==3){
    let kbd30=`<div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>

    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div> <div class="keyboard" style="border-color: ${totalBorderColor.value}"></div>
    `;
    htmlCode.innerText=` <div class="web-container">
    <section class="computer" style="scale:${totalScale.value};perspective:${keyboardPerspective.value}px">
      <div class="speaker" style="scale:${speakerScale.value};border-color:${totalBorderColor.value};left:${speaker1Position.value}%">
        <div class="circle" style="border-color:${totalBorderColor.value}"><div class="incircle" style="border-color:${totalBorderColor.value}"></div></div>
      </div>
      <div class="screen" style="border-color:${totalBorderColor.value};left:${screenLeft.value}%;width:${screenWidth.value}%">
        <div class="screen-up" style="background-color:${screenBackgroundColor.value} ;border-color: ${totalBorderColor.value};"></div>></div>
      </div>
      <div class="neck" style="background-color:${totalBorderColor.value}"></div>
      <div class="keyboards" style="border-color: ${totalBorderColor.value}">   
       ${kbd30}
      </div>
      <div class="speaker" style="scale:${speakerScale.value};border-color:${totalBorderColor.value};left:${speaker2Position.value}%">
        <div class="circle" style="border-color:${totalBorderColor.value}"><div class="incircle" style="border-color:${totalBorderColor.value}"></div></div>
      </div>
    </section>
  </div>`;
  cssCode.innerText=`* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body .web-container .computer {
    position: relative;
    perspective: 100px;
    width: 25vw;
    height: 45vh;
    scale: 1;
  }
  body .web-container .computer .speaker {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 60%;
    left: -3%;
    width: 4vw;
    height: 10vh;
    border-radius: 5px;
    border: 2px solid #ffee05;
    scale: 1;
  }
  body .web-container .computer .speaker .circle, body .web-container .computer .speaker .circle .incircle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5vmax;
    height: 2.5vmax;
    border-radius: 50%;
    border: 2px solid rgb(255, 238, 5);
  }
  body .web-container .computer .speaker .circle .incircle {
    width: 50%;
    height: 50%;
  }
  body .web-container .computer .speaker:last-child {
    left: 86%;
  }
  body .web-container .computer .screen, body .web-container .computer .screen .screen-up {
    left: 5%;
    width: 90%;
    height: 55%;
    border-radius: 1vmax;
    position: absolute;
    border: 2px solid rgb(255, 238, 5);
    
  }
  body .web-container .computer .screen .screen-up, body .web-container .computer .screen .screen-up .screen-up {
    left: 0;
    width: 100%;
    height: 80%;
    -webkit-border-before: none;
            border-block-start: none;
    -webkit-border-start: none;
            border-inline-start: none;
    -webkit-border-end: none;
            border-inline-end: none;
            background-color: rgb(255,255,255);
  }
  body .web-container .computer .neck {
    width: 30%;
    height: 13%;
    left: 35%;
    top: 55%;
    position: absolute;
    background-color: rgb(255, 238, 5);
    -webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
            clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    border-radius: 0 0 1.5vmax 1.5vmax;
  }
  body .web-container .computer .keyboards {
    display: grid;
    grid-template-columns: repeat(10, 10%);
    width: 65%;
    height: 18%;
    left: 17.5%;
    top: 75%;
    position: absolute;
    perspective: 250px;
    border-radius: 1vmax;
    border: 1px solid rgb(255, 238, 5);
    transform: rotateX(50deg);
  }
  body .web-container .computer .keyboards .keyboard {
    border: 1px solid rgb(255, 238, 5);
  }
  body .web-container .computer .keyboards .keyboard:first-child {
    border-radius: 1vmax 0 0 0;
  }
  body .web-container .computer .keyboards .keyboard:nth-child(10) {
    border-radius: 0 1vmax 0 0;
  }
  body .web-container .computer .keyboards .keyboard:nth-child(51) {
    border-radius: 0 0 0 1vmax;
  }
  body .web-container .computer .keyboards .keyboard:last-child {
    border-radius: 0 0 1vmax;
  }`;
   }
   })
   
})
