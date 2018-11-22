
let light=0
$('.spectrum-info-content').css('width','0')
const typing_events=()=>{
    $(function () {
        $("#typed-events-span").typed({
            startDelay:1000,
            strings: ['an annual technical symposium of “First Year Engineering Department”, PCCOE is started in 2008.'],
            typeSpeed: 10,
        });
});
}

const start=()=>{
    
    if(localStorage.getItem('isVisited')){
        $("#display-div").fadeIn(1000);
                    $('.type-wrapper').css('display', 'none')
                    $('#typed').css('display','none') 
                    $('spectrum-text-main').addClass('bounceInUp')
                    $('#particles-js').css('opacity','0.5')
                    typing_events(); 
    }
    else{    
            var type = new Typed('#typed', {
                stringsElement: '#typed-strings',
                typeSpeed:50,
                backSpeed: 5,
                onComplete: function (self) {
                    setTimeout(() => {        
                        $("#display-div").fadeIn(1000);
                        $('.type-wrapper').css('display', 'none')
                        $('#typed').css('display','none') 
                        $('spectrum-text-main').addClass('bounceInUp')
                        $('#particles-js').css('opacity','0.5')
                        typing_events();          
                            
                    }, 1000);
                    
                },
            }) 
            localStorage.setItem('isVisited','1')   

    }
}



let r=$('#svg-circle').attr('r')

const menushow=()=>{
    // $('#svg-circle').css('cx', window.innerWidth - window.innerWidth * 0.09)
    $('#SVG').css('display', 'block')
    // $("#svg-circle").animate({ 'r': '150em' }, 600);
    anime({
        targets: '#svg-circle',        
        r:['0m','160em'],    
        duration:800,
        easing: "linear",
      });
    $('#menu-icon').attr('src', '/images/cross.png')
    $('#SVG').css('transform', 'translate(0)')
    $('#sec-container').css('display', 'none')
    $('#menu-icon').toggleClass('rotate')
    $('#menu-icon').css('box-shadow', 'none')
    $("#spectrum-text-main").css('display', 'none')
    $('#menu-icon').css('transform', 'scale(0.8)')
    $('.menu-items').delay(300).fadeIn(100);
}

const menuhide=()=>{
    anime({
        targets: '#svg-circle',        
        r:'0em',  
        duration:800,
        easing: "easeOutCirc",
      });
    $('#menu-icon').css('box-shadow', '10px 9px 15px 0px #0000004d')
    $('#menu-icon').css('transform', 'scale(1)')
    $('#menu-icon').attr('src', '/images/ham-black.png')
    $('#menu-icon').addClass('rotate')
    $('#sec-container').fadeIn(900)
    $("#spectrum-text-main").fadeIn(800)
    $('.menu-items').fadeOut(200)
    setTimeout(() => {
        $('#SVG').css('transform', 'translate(0, -10em)')
        $('#SVG').css('display', 'none')
    }, 500);
}

let i=0;
$('#menu-icon').click(()=>{

    if(i==0)
    {
        menushow()
        i=1
    }
    else
        if(i==1)
        {      
            menuhide()        
            i=0;
        }

})
const notification_show = () =>{
    window.innerWidth > 600 ? $('#notification-div').animate({ height: '80vh' }, 400) : $('#notification-div').animate({ height: '60vh' }, 400)
    $('#nav').css('filter','blur(5px)');
    $('#particles-js').css('display', 'none');
    $('#notification-img').animate({transform:'scale(0)'}, 500)
    $('.clock-builder-output').fadeIn(500)
    window.innerWidth > 600 ? $('#notification-img').css('right', '46%') : $('#notification-img').css('right', '40%')
    $('#notification-img').animate({ transform: 'scale(1)' }, 500)
    $('#notification-img').attr('src', '/images/x.png')
    $('.mouse-scroll').css('display','none');
    $('.flip-clock-small-wrapper ').fadeIn(200)
    $('#notification-div').css('box-shadow', 'rgba(0, 0, 0, 0.32) 13px 11px 20px 7px')
    $('.content-container').css('filter','blur(5px)');
    $('body').css('overflow','hidden')

}
const notification_hide = () => {
    $('#notification-div').animate({ height: '0vh' }, 200);
    $('#nav').css('filter', 'blur(0px)')
    $('#particles-js').fadeIn(1000);
    $('.clock-builder-output').fadeOut(500)
    $('#notification-img').animate({ transform: 'scale(0)' }, 500)
    $('#notification-img').css( 'right', '2em')
    $('#notification-img').animate({ transform: 'scale(1)' }, 500)
    $('#notification-img').attr('src', '/images/notification.png')
    $('.mouse-scroll').css('display', 'block')
    $('#notification-div').css('box-shadow', 'none')
    $('.content-container').css('filter', 'blur(0px)')
    $('body').css('overflow', 'auto')
}


let n=0
$('#notification-img').click(()=>{
    if(n==0)
    {
        notification_show();
        n=1
    }
    else
        if(n==1){
            notification_hide()
            n=0
        }
})
$(window).scroll(function (event) {
    var sc = $(window).scrollTop();
    if(sc>150){
        light ? $('#nav').css('background','#aeaeae') : $('#nav').css('background','#2C3532')        
        window.innerWidth > 800 ? $('.logo').css('transform', 'scale(0.7) translateY(-1.5em)') : $('.logo').css('transform', 'scale(0.7) translateX(-1em)') 
        $('#menu-icon ').css('transform','scale(0.7)')
        window.innerWidth > 800 ? $('#menu-icon ').css('top', '0.5em') : $('#menu-icon ').css('top', '1.2em') 
        $('#particles-js').css('opacity','0.2')
        $('#spectrum-nav-bar').fadeIn(800)
        $('.mouse-scroll').fadeOut(500);
        $('#notification-img').fadeOut(200)
        
    }
    else{
        $('#nav').css('background', 'none')
        $('.logo').css('transform', 'scale(1) translateY(0)')
        $('#menu-icon').css('transform', 'scale(1)')
        $('#menu-icon ').css('top', '1.5em')
        $('#particles-js').css('opacity', '0.5');
        $('#spectrum-nav-bar').fadeOut(200)
        $('.mouse-scroll').fadeIn(500);
        $('#notification-img').fadeIn(200)
    }
// Contents display animation
    if(sc>200){
        $('.spectrum-info-content').animate({width:'100%'},1500)
        $('.head-spectrum').animate({width:'100%'},1500)
    }
    if(sc>700 && sc<800){
        $('.events-info').animate({width:'100%'},1500)
        $('.events-name').animate({width:'100%'},1000)
        
    }


});
// Slide show


















$('#p-register').click(()=>{
    menuhide();
    
    setTimeout(() => {
        $('#display-div').addClass('slideOutRight')
        window.location = "https://docs.google.com/forms/d/e/1FAIpQLSc1cfC4LoB1d7CIhJwmYCbZZDK4vxg7so1tk9lay5y5gTPTag/viewform";

    }, 300);
})
$('#p-home').click(()=>{
    menuhide()
})

FlipClock.Lang.Custom = { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' };
var opts = {
    clockFace: 'DailyCounter',
    countdown: true,
    language: 'Custom'
};
opts.classes = {
    active: 'flip-clock-active',
    before: 'flip-clock-before',
    divider: 'flip-clock-divider',
    dot: 'flip-clock-dot',
    label: 'flip-clock-label',
    flip: 'flip',
    play: 'play',
    wrapper: 'flip-clock-small-wrapper'
};
var countdown = 1553479740 - ((new Date().getTime()) / 1000); // from: 03/25/2019 07:39 am +0530
countdown = Math.max(1, countdown);
$('.clock-builder-output').FlipClock(countdown, opts);

$('#about-pccoe').click(()=>{  
    window.open('http://www.pccoepune.com/', '_blank');
})
$(".mouse-scroll").click(function () {
    $('html,body').animate({
        scrollTop: $("#spectrum-info").offset().top - 0.1*window.innerHeight
    },
        'slow');
});

// $('#p-gallery').click(()=>{
//     light=1
//     $('body').addClass('body-light')
//     $('#svg-circle').css('fill','#3F3F3F');
//     $('#spectrum-text-main').css('color','#E56A6C')
//     $('#notification-div').css('background','#aeaeae')
//     $('#spectrum-text-main').css('-webkit-text-stroke-color','#ffffff')
//     $('.locate-us').css('color','#000000')
//     $('.locate-us').css('-webkit-text-stroke-color','#ffffff')
//     $('.nav-links > p').css('color','#E56A6C')
//     $('#spectrum-nav-bar').css('color','#000000')
// })