var time = new Date();
console.log(
    time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
);  

var overlay = document.getElementById("overlay");

window.addEventListener('load', function () {   
    overlay.style.display = 'none';
    setTimeout(() => {
        start()
    }, 500);
    
})


