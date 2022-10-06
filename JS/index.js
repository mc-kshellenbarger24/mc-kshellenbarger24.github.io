let CurrentTab = document.getElementById("CurrentTab");
let HoverTab = document.getElementById("HoverTab")

let Buttons = [
    document.getElementById("HomeLink"),
    document.getElementById("InformationLink"),
    document.getElementById("CreditsLink"),
    document.getElementById("QALink")
]

let OldUrl = document.referrer;
let CurrentUrl = document.URL;

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return {X: _x,Y: _y};

    
}

CurrentTab.style.top = (Buttons[0].getBoundingClientRect().height-4)+4+"px"; 
CurrentTab.style.background = "#fe6152"
CurrentTab.style.opacity = 0;

HoverTab.style.top = (Buttons[0].getBoundingClientRect().height-4)+4+"px"; 
HoverTab.style.background = "gray"

Buttons.forEach(Button =>{
    if(CurrentUrl.search(Button.getAttribute("Path")) != -1){
        CurrentTab.style.opacity = 0;
        CurrentTab.style.width = Button.offsetWidth + "px";
        CurrentTab.style.left = getOffset(Button).X+(Button.offsetWidth/2-Button.offsetWidth/2)+"px";
    }
})


Buttons.forEach(Button => {
    Button.addEventListener("mouseout",(Data)=>{
        HoverTab.style.opacity = 0

    })

    Button.addEventListener("mouseover",(Data)=>{
        if(CurrentUrl.search(Data.target.getAttribute("Path")) != -1){
            HoverTab.style.opacity = 0
        }else{
            HoverTab.style.opacity = 1
            HoverTab.style.width = Data.target.offsetWidth + "px";
            HoverTab.style.left = getOffset(Data.target).X+(Data.target.offsetWidth/2-Data.target.offsetWidth/2)+"px";
        }
    })
});

setTimeout(function(){
    CurrentTab.style.opacity = 1
},2)



/* 


function animate({timing, draw, duration}) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
      // calculate the current animation state
        let progress = timing(timeFraction)

        draw(progress); // draw it

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}


    
        TabDetail.style.left = getOffset(Buttons[0]).X+(Buttons[0].offsetWidth/2-TabDetail.offsetWidth/2)+Offset2.X+"px";
        TabDetail.style.top = (Buttons[0].getBoundingClientRect().height-4)+Offset2.Y+"px";
        TabDetail.style.background = document.defaultView.getComputedStyle(document.body,null).getPropertyValue("background-color");
    
        TabDetail2.style.left = getOffset(Buttons[0]).X+(Buttons[0].offsetWidth/2-TabDetail2.offsetWidth/2)+Offset3.X+"px";
        TabDetail2.style.top = (Buttons[0].getBoundingClientRect().height-4)+Offset3.Y+"px";
        TabDetail2.style.background = document.defaultView.getComputedStyle(Buttons[0],null).getPropertyValue("background-color");
        
    

*/