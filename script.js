

//variables
let index=0;
let audioelement =new Audio('song/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let mastersongname=document.getElementById('mastersongname');

let songs =[
    {songname:"song-name-1",filepath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname:"song-name-2",filepath:"song/2.mp3",coverpath:"cover/2.jpg"},
    {songname:"song-name-3",filepath:"song/3.mp3",coverpath:"cover/3.jpg"},
    {songname:"song-name-4",filepath:"song/4.mp3",coverpath:"cover/4.jpg"},
    {songname:"song-name-5",filepath:"song/5.mp3",coverpath:"cover/5.jpg"},
    {songname:"song-name-6",filepath:"song/6.mp3",coverpath:"cover/6.jpg"},
    {songname:"song-name-7",filepath:"song/7.mp3",coverpath:"cover/7.jpg"},
    {songname:"song-name-8",filepath:"song/8.mp3",coverpath:"cover/8.jpg"},
    {songname:"song-name-9",filepath:"song/9.mp3",coverpath:"cover/9.jpg"},
    {songname:"song-name-9",filepath:"song/9.mp3",coverpath:"cover/9.jpg"},

]

songitems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
    
});

//audio play

//handle play pause
masterplay.addEventListener('click',()=>{
    if(audioelement.paused ||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.setAttribute('name','pause-circle-outline');
        gif.style.opacity=1;
        document.getElementById(`${index}`).setAttribute('name','pause-circle-outline');    
        // console.log(masterplay)
    }
    else{
        audioelement.pause();
        gif.style.opacity=0;
        masterplay.setAttribute('name','play-outline');
        document.getElementById(`${index}`).setAttribute('name','play-outline');   
        
    }
    ;

})

//listen to events
audioelement.addEventListener('timeupdate',()=>{
    

    //seekbar
    progress=parseInt((audioelement.currentTime)/(audioelement.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})


const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        // element.target.setAttribute('name','play-outline');
        // console.log(element);
        element.setAttribute('name','play-outline');
    })
}


// ----------------------------------------------------------------------------------------------------------

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // makeallplay();
        // index=parseInt(e.target.id);
        // audioelement.src =`song/${index+1}.mp3`;
        // // console.log(e.target);
        // e.target.setAttribute('name','pause-circle-outline');
        // audioelement.currentTime=0;
        // audioelement.play();
        // masterplay.setAttribute('name','pause-circle-outline');


        if((parseInt(e.target.id)===index)){
            if(audioelement.paused || audioelement.currentTime<=0){
                audioelement.play();
                masterplay.setAttribute('name','pause-circle-outline');
                e.target.setAttribute('name','pause-circle-outline');
                gif.style.opacity=1;
            }
            else{
                audioelement.pause();
                masterplay.setAttribute('name','play-outline');
                e.target.setAttribute('name','play-outline');
                gif.style.opacity=0;
            }
        }
        else{
            makeallplay();
        index=parseInt(e.target.id);
        audioelement.src =`song/${index+1}.mp3`;
        // console.log(e.target);
        e.target.setAttribute('name','pause-circle-outline');
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.setAttribute('name','pause-circle-outline');
        gif.style.opacity=1;
        }
        mastersongname.innerText=songs[index].songname;
        

    })
})









document.getElementById('prev').addEventListener('click',()=>{
    document.getElementById(`${index}`).setAttribute('name','play-outline');
    if(index>0){
        index=index-1;
    }
    else {
        index=8;
    }
    audioelement.src =`song/${index+1}.mp3`;
    // console.log(e.target);
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.setAttribute('name','pause-circle-outline');
    document.getElementById(`${index}`).setAttribute('name','pause-circle-outline');
    mastersongname.innerText=songs[index].songname;

})

document.getElementById('next').addEventListener('click',()=>{
    document.getElementById(`${index}`).setAttribute('name','play-outline');

    if(index<8){
        index=index+1;
    }
    else {
        index=0;
    }
    audioelement.src =`song/${index+1}.mp3`;
    // console.log(e.target);
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.setAttribute('name','pause-circle-outline');
    document.getElementById(`${index}`).setAttribute('name','pause-circle-outline');
    mastersongname.innerText=songs[index].songname;
    


})

if(audioelement.currentTime==audioelement.duration ){
    console.log("hit!")
    // if(index<8){
    //     index=index+1;
    // }
    // else {
    //     index=0;
    // }
    // audioelement.src =`song/${index+1}.mp3`;
    // // console.log(e.target);
    // audioelement.currentTime=0;
    // audioelement.play();
    // // masterplay.setAttribute('name','pause-circle-outline');
    // // document.getElementById(`${index}`).setAttribute('name','pause-circle-outline');
    // mastersongname.innerText=songs[index].songname;

}


// --------------------------------------------------------------------------------------------------------------



// Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         makeallplay();
//         index=parseInt(e.target.id);
//         // console.log(e.target);
//         e.target.setAttribute('name','pause-circle-outline');
//         audioelement.src =`song/${index+1}.mp3`;
//         audioelement.currentTime=0;
//         audioelement.play();
//         masterplay.setAttribute('name','pause-circle-outline');

//     })
// })






// element.addEventListener('click',(e)=>{
   