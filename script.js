// arrow to top
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(this.window.scrollY > 500){
        this.document.getElementById('back-to-top').style.display = 'block';
    }else{
        this.document.getElementById('back-to-top').style.display = 'none';
    }
    
});

// softskills
    //bloc-js-1
document.getElementById('bloc-js-1').addEventListener('mouseenter', function(e){
    e.preventDefault(); 
    let imageEnCours = document.getElementById('bloc-js-1').getAttribute('data-image');
    console.log(imageEnCours);
    
    document.getElementById('img-1-1').style.opacity=0;
    document.getElementById('img-1-2').style.opacity=1;
    document.getElementById('bloc-js-1').setAttribute('data-image', 'img-1-2');
})

document.getElementById('bloc-js-1').addEventListener('mouseleave', function(e){
    e.preventDefault(); 
    let imageEnCours = document.getElementById('bloc-js-1').getAttribute('data-image');
    console.log(imageEnCours);
        
    document.getElementById('img-1-2').style.opacity=0;
    document.getElementById('img-1-1').style.opacity=1;
    document.getElementById('bloc-js-1').setAttribute('data-image', 'img-1-1');
    
})

    //bloc-js-2
document.getElementById('bloc-js-2').addEventListener('mouseenter', function(e){
    e.preventDefault(); 
    let imageEnCours = document.getElementById('bloc-js-2').getAttribute('data-image');
    console.log(imageEnCours);
    
    document.getElementById('img-2-1').style.opacity=0;
    document.getElementById('img-2-2').style.opacity=1;
    document.getElementById('bloc-js-2').setAttribute('data-image', 'img-2-1');
})
    
document.getElementById('bloc-js-2').addEventListener('mouseleave', function(e){
    e.preventDefault(); 
    let imageEnCours = document.getElementById('bloc-js-2').getAttribute('data-image');
    console.log(imageEnCours);
        
    document.getElementById('img-2-2').style.opacity=0;
    document.getElementById('img-2-1').style.opacity=1;
    document.getElementById('bloc-js-2').setAttribute('data-image', 'img-2-1');
})

    
    //bloc-js-3

document.getElementById('bloc-js-3').addEventListener('mouseenter', function(e){
    e.preventDefault(); 
    let imageEnCours = document.getElementById('bloc-js-3').getAttribute('data-image');
    console.log(imageEnCours);

    document.getElementById('img-3-1').style.opacity=0;
    document.getElementById('img-3-2').style.opacity=1;
    document.getElementById('bloc-js-3').setAttribute('data-image', 'img-3-2');
})
    
document.getElementById('bloc-js-3').addEventListener('mouseleave', function(e){
    e.preventDefault(); 
    let imageEnCours = document.getElementById('bloc-js-3').getAttribute('data-image');
    console.log(imageEnCours);
        
    document.getElementById('img-3-2').style.opacity=0;
    document.getElementById('img-3-1').style.opacity=1;
    document.getElementById('bloc-js-3').setAttribute('data-image', 'img-3-1');
})

    
    //bloc-js-4

document.getElementById('bloc-js-4').addEventListener('mouseenter', function(e){
    e.preventDefault(); 
    let imageEnCours = document.getElementById('bloc-js-4').getAttribute('data-image');
    console.log(imageEnCours);
    
    document.getElementById('img-4-1').style.opacity=0;
    document.getElementById('img-4-2').style.opacity=1;
    document.getElementById('bloc-js-4').setAttribute('data-image', 'img-4-2');
})

document.getElementById('bloc-js-4').addEventListener('mouseleave', function(e){
    e.preventDefault(); 
    let imageEnCours = document.getElementById('bloc-js-4').getAttribute('data-image');
    console.log(imageEnCours);
        
    document.getElementById('img-4-2').style.opacity=0;
    document.getElementById('img-4-1').style.opacity=1;
    document.getElementById('bloc-js-4').setAttribute('data-image', 'img-4-1');
})




// CAROUSEL 

let mesThumbnails = document.querySelectorAll('.thumbnail img');
console.log('mesThumbnails');

for(let i = 0; i < mesThumbnails.length ; i++){
    mesThumbnails[i].addEventListener('mouseenter', function(){
        let valeurAlt = this.getAttribute('alt'); 
        let valeurDataFull= this.getAttribute('data-full'); 
        document.getElementById('full').setAttribute('src', valeurDataFull);
    })

    
}


    
