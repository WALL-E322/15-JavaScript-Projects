// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    //console.log(links.classList); all the classes inside the const links e un bala
    //console.log(links.classList.contains("random")); return false cause there is no class with "random" name in const links
    //console.log(links.classList.contains("links")); returns True

  /*  if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }else {
        links.classList.add('show-links');
    }*/
    links.classList.toggle('show-links');
});