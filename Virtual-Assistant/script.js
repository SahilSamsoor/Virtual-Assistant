let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
let fqa = document.querySelector(".fqa")
let questions = document.querySelector(".questions")
let ques = document.querySelectorAll(".ques");



function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}


function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener("load",()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Mr Samsoor Sahil")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("https://whatsapp.com/dl/")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      } else if(message.includes("who is samsoor sahil?")){
        speak("Samsoor Sahil is a software engineer who has worked on various projects and is currently working on a project for Google Assistant.");
    }
    
    else{
        let finalText="this is what i found on internet regarding" + message.replace("siri","") || message.replace("siri","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("siri","")}`,"_blank")
    } 

    
}


for (let q of ques){
    q.addEventListener("click", ()=>{
        fqa.style.display="block"
        questions.style.display="none"
        content.innerText=q.innerText;
        content.innerText=q.innerText;
        content.innerText=q.innerText;
        content.innerText=q.innerText;
        content.innerText=q.innerText;
        content.innerText=q.innerText;
        
        if(q.innerText.includes("Hello")){
            speak("hello sir,what can i help you?")
        }
        else if(q.innerText.includes("who are you")){
            speak("i am virtual assistant ,created by Mr Samsoor Sahil")
        }else if(q.innerText.includes("who is Samsoor Sahil?")){
            speak("Samsoor Sahil is a software engineer who has worked on various projects and is currently working on a project for Google Assistant.")
        }
        else if(q.innerText.includes("who is your developer")){
            speak("samsoor sahil is my developer")
        }
        else if(q.innerText.includes("what time is it?")){
            let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
            speak(time)
        }
        else if(q.innerText.includes("what is the date?")){
            let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
        }
    })
}

let click = true
fqa.addEventListener("click" , () => {
    if(click){
        questions.style.display = "flex";
        click = false
    } else{
        questions.style.display = "none";
        click = true;
    }
})


let typeQs = document.getElementById("typicaly-q");


typeQs.addEventListener("change", () => {
        content.innerText = typeQs.value;
       typeQs.addEventListener("keydown", () => {
        if(event.key === "Enter"){
            content.innerText = "Click here for talk to me";
            }

        })

        if(content.innerText.includes("hello")){
            speak("hello sir,what can i help you?")
        }
        else if(content.innerText.includes("who are you")){
            speak("i am virtual assistant ,created by Mr Samsoor Sahil")
        }else if(content.innerText.includes("who is Samsoor Sahil?")){
            speak("Samsoor Sahil is a software engineer who has worked on various projects and is currently working on a project for Google Assistant.")
        }
        else if(content.innerText.includes("who is your developer")){
            speak("samsoor sahil is my developer")
        }
        else if(content.innerText.includes("what time is it?")){
            let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
            speak(time)
        }
        else if(content.innerText.includes("what is the date?")){
            let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
        }  else{
            let finalTextQ="this is what i found on internet regarding" + content.innerText.replace("what is","") || content.innerText.replace("who is","");
            speak(finalTextQ)
            window.open(`https://www.google.com/search?q=${content.innerText}`);
        } 
    
       })


