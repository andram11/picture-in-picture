const videoElement= document.getElementById('video')
const button= document.getElementById('button')

// Asyncronous function propmt to select media stream, pass to video element, then play

async function selectMediaStream(){
    try{
        //Screencapture API https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
        const mediaStream= await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata= ()=>{
            videoElement.play()
        }
    }
    catch (error){
        //Catch error
        console.log('Whoops, error here: ', error)
    }
}


button.addEventListener('click', async ()=>{
    //Disable the button when we click on it
    button.disabled= true
    //Start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled= false
})

//On Load
selectMediaStream()