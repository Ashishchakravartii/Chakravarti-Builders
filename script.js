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
        duration:1
    })

    .to(".top-screen",{
        top:"-100%",
        delay:1,
        duration:1.2,
        ease:"Power4.easeOut"
    })

    
