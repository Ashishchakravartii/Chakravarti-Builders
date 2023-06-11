let tl = gsap.timeline();

tl
    .from(".bottom", {
      
        onStart: function () {
            $('.bottom').textillate({
                in: {
                    effect: 'fadeInLeft',
                    callback: function () {
                        $('.bottom').textillate('out')
                    }
                },
                out: { effect: 'fadeOutRight' }
            });
        }
    })
    .from(".secondBottom", {
        opacity: 0,
        delay: 1,
        onStart: function () {
            $('.secondBottom').textillate({
                in: {
                    effect: 'fadeInLeft',
                    callback: function () {
                        $('.secondBottom').textillate('out')
                    }
                },
                out: { effect: 'fadeOutRight' }
            });
        }
    })
   
    .from(".secondTop", {
        opacity: 0,
        delay: 1,


        onStart: function () {
            $('.secondTop').textillate({
                in: {
                    effect: 'fadeInLeft',
                    callback: function () {
                        $('.secondTop').textillate('out')
                    }
                },
                out: { effect: 'fadeOutRight' }
            });
        }
    })
    .from(".top", {
        opacity: 0,
        delay: 1,
       


        onStart: function () {
            $('.top').textillate({
                in: {
                    effect: 'fadeInLeft',
                    callback: function () {
                        $('.top').textillate('out')
                    }
                },
                out: { effect: 'fadeOutRight' }
            });
        }
    })
    .from([".brand-name",".logo"], {
        opacity: 0,
        delay: 1.3,
        y:10,
        duration:1,
    })

    .to(".top-screen",{
        top:"-100%",
        delay:1,
        duration:1.2,
        ease:"Power4.easeOut"
    })



    // -------------------------------------Page 1----------------------------------------
    
    gsap.from([".p1-Head h1",".p1-Head h6"],{
        y:40,
        opacity:0,
        delay:8.6,
        ease:"Power4.easeOut"


    })
    //  let page1= document.querySelector(".page1")
    // let crsr= document.querySelector(".crsr");
    // page1.addEventListener("mousemove",(event)=>{
    //        crsr.style.left= event.x +30 + "px";
    //        crsr.style.top= event.y +30 + "px";
    //     })
        
        // -------------------------------------Page 2----------------------------------------








        // -------------------------------------Page 6----------------------------------------

        let projectDiv2 = document.querySelector(".projectDiv2")
        let projectDiv3 = document.querySelector(".projectDiv3")
        let projectDiv4 = document.querySelector(".projectDiv4")
        let projectDiv5 = document.querySelector(".projectDiv5")
        let projectDiv6 = document.querySelector(".projectDiv6")


        let p6Text = document.querySelector(".p6Text")
        let p6Text2 = document.querySelector(".p6Text2")
        let p6Text3 = document.querySelector(".p6Text3")
        let p6Text4 = document.querySelector(".p6Text4")
        let p6Text5 = document.querySelector(".p6Text5")
        let p6Text6 = document.querySelector(".p6Text6")
        let p6Text7 = document.querySelector(".p6Text7")
        let p6Text8 = document.querySelector(".p6Text8")
        let p6Text9 = document.querySelector(".p6Text9")
        let p6Text10 = document.querySelector(".p6Text10")

        projectDiv2.addEventListener("mouseover",()=>{
            p6Text.style.color="white"
            p6Text2.style.color="white"
            projectDiv2.style.border="none"
        })
        projectDiv2.addEventListener("mouseleave",()=>{
            p6Text.style.color="black"
            p6Text2.style.color="black"
         projectDiv2.style.border="1.5px solid #E4E4E4"

        })


        projectDiv3.addEventListener("mouseover",()=>{
            p6Text3.style.color="white"
            p6Text4.style.color="white"
            projectDiv3.style.border="none"

        })
        projectDiv3.addEventListener("mouseleave",()=>{
            p6Text3.style.color="black"
            p6Text4.style.color="black"
         projectDiv3.style.border="1.5px solid #E4E4E4"

        })

        projectDiv4.addEventListener("mouseover",()=>{
            p6Text5.style.color="white"
            p6Text6.style.color="white"
        })
        projectDiv4.addEventListener("mouseleave",()=>{
            p6Text5.style.color="black"
            p6Text6.style.color="black"
        })

        projectDiv5.addEventListener("mouseover",()=>{
            p6Text7.style.color="white"
            p6Text8.style.color="white"
        })
        projectDiv5.addEventListener("mouseleave",()=>{
            p6Text7.style.color="black"
            p6Text8.style.color="black"
        })

        projectDiv6.addEventListener("mouseover",()=>{
            p6Text9.style.color="white"
            p6Text10.style.color="white"
        })
        projectDiv6.addEventListener("mouseleave",()=>{
            p6Text9.style.color="black"
            p6Text10.style.color="black"
        })
      



    
