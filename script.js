function navAnimation(){
    let nav =document.querySelector('nav');
nav.addEventListener("mouseenter",function(){
  

    let tl=gsap.timeline()

    tl.to("#nav-bottom",{
        height:'23vh',
        duration:0.1
    })
    tl.to(".nav-part2 h5",{
        display:"block",
        duration:0.1
    })

    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.1
        }
    })
})

nav.addEventListener("mouseleave",function(){
  

    let tl=gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.1
        }
    })

    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })

    tl.to("#nav-bottom",{
        height:'0',
        duration:0.1
    })

    
})
}

navAnimation()