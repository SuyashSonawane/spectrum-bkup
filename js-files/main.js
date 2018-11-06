var type = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed:100,
    backSpeed: 5,
    onComplete: function (self) {
        setTimeout(() => {
            $('#main-container').css('display', 'block ')
            
            $("#display-div").show(900);
            $('.type-wrapper').css('display', 'none')
            $('#typed').css('display','none')           
                  
        }, 1000);
        
    },
})


$('#nusta-logo').mouseover(()=>{
    if(window.innerWidth>800){
        $('#logo-shadow').css('transform', 'scale(0.9) translate(-1em)')
    }    
   
})
$('#nusta-logo').mouseout(() => {
    $('#logo-shadow').css('transform', 'scale(1) translate(0em)')
})