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



    
