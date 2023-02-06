const faders=document.querySelectorAll(".fade-in");
const sliders=document.querySelectorAll(".slide-in");
const header=document.querySelector("header");
const sections=document.querySelectorAll("section");
// const indicator=document.querySelector("#indicator");
const items=document.querySelectorAll("header nav .main-menu li a");
const indicators=document.querySelectorAll("header nav .main-menu li span");

/****** STICKY ON HEADER SECTION */
const options={
    threshold:0,
    rootMargin:"0px -150px -150px 0px"
}

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            header.classList.remove('sticky');
        }else{
            header.classList.add('sticky');
            // console.log(entry.target.className);
        }
        items.forEach(item=>{
            console.log(item);
        })
    })
},options);
sections.forEach(section=>{
    observer.observe(section);
});



/**********fadein and slidein */

const appearOptions={
    threshold:0,
    rootMargin:"0px -50px -50px 0px"
}

const appearOnscroll=new IntersectionObserver((entries,appearOnscroll)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnscroll.unobserve(entry.target); 
        }
    })
},appearOptions);


faders.forEach(fader=>{
    appearOnscroll.observe(fader);
})

sliders.forEach(slider=>{
    appearOnscroll.observe(slider);
})



/*********NAVMENU WITH INDICATOR */

function Indicator(e){
    // e.classList.add("active");
    indicator.style.left=e.offsetLeft+"px";
    indicator.style.width=e.offsetWidth+"px";
    console.log(e)
}

// items.forEach(item=>{
//     item.addEventListener("click",()=>{
//         Indicator(item);    
//     });
// });


items.forEach(item=>{
    item.addEventListener("click",()=>{
         console.log(item.parentNode.lastChild)
         document.querySelector("header nav .main-menu li span.active").classList.remove("active")
         item.parentNode.lastChild.classList.add("active");
         
    });
});

Indicator(items[1]);