const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const Names = "pic1.jpg  pic2.jpg  pic3.jpg  pic4.jpg  pic5.jpg";
const imgNames = Names.split('  ');

const imgAlts =['close up of an eye', 'something wavy', 'flowers', 'ancient egyptian wall art', 'butterfly'];

/* Declaring the alternative text for each image file */

/* Looping through images */
for(let i = 0; i < imgNames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imgNames[i]}`);
    newImage.setAttribute('alt', imgAlts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',() => {displayedImage.setAttribute('src', `images/${imgNames[i]}`); displayedImage.setAttribute('alt', imgAlts[i]); });

    
}
 
btn.addEventListener('click', () => {
    let attr = btn.getAttribute('class');
if(attr === 'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = "lighten";
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}else{
    btn.setAttribute('class', 'dark');
    btn.textContent = "darken";
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
})
/* Wiring up the Darken/Lighten button */
