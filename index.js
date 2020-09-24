
console.log('----index.js working correctly----')

// this is the questions data that you should use, feel free to change the questions data
// for testing purpose
const data = {
  questions: [
      {
          prompt: 'Slowly, over time, have your parents stopped saying your name and started calling you by generic names like "champ", "kiddo", "disappointment", or "buddy"?',
          options: {
              A: "They usually say my name two to five times every sentence to make sure they don't forget it.",
              B: "When I call, they tell me to 'hold on, I need to check your birth certificate.'",
              C: "They usually ask me if I'm calling the wrong number.",
              D: "I never talk to my parents."
          }
      },
      {
          prompt: 'When was the last time your parents expressed disappointment in you?',
          options: {
              A: "Never. I am a paradigm of human excellence.",
              B: "The third time they caught me in a compromising position with a peach.",
              C: "When I asked them for a single bean.",
              D: "When I called them over the phone sobbing, telling them that I miss them and wish they were a larger presence in my life."
          }
      },
      {
          prompt: 'How much of your childhood trauma stems specifically from the way your parents raised you?',
          options: {
              A: "T-trauma? Who has that? Ha. Hahahahahahahahah-",
              B: "My parents are two very nice, gentle people who never really wanted to commit to the responsibilities of childrearing and I suffered for it.",
              C: "Let's not talk about it.",
              D: "I was raised as an upstanding, moral individual thanks to the occasional spanking."
          }
      },
      {
          prompt: 'Do you often dream of your mother giving you a nice, warm sponge bath, as if your brain is craving maternal comfort?',
          options: {
              A: "Yes, but it is my father who is doing the sponging.",
              B: "No, I do not dream because I cannot fall asleep at night because I worry that my parents hate me.",
              C: "Yes, except I wasn't dreaming, and I was, in fact, remembering the last night I spent time with my mother before returning to school.",
              D: " I'm allergic to sponges, so this is not a dream, but a nightmare."
          }
      },
      {
          prompt: "If you were asked to identify the sound of your father's voice, would you be able to do it?",
          options: {
              A: "No, because my father's voice is identical to that of James Earl Jones and I think every man sounds like James Earl Jones.",
              B: "No, because my father has a medical condition that does not allow him to speak.",
              C: "No, because I have not talked to my father since I left home.",
              D: "No, because my father is a chronic smoker, smokes twenty cigarettes a day, and as a result his voice becomes more unrecognizable with every passing day."
          }
      },
      {
          prompt: "If you do not call your parents, will they ever call you?",
          options: {
              A: "No.",
              B: "No.",
              C: "No.",
              D: "No.",
          }
      },
  ],
  results: [
      "Your parents don't miss you and just feel obligated to talk to you when they call. You are a nuisance in their life and a constant drain on their financial resources. You're the reason they weren't able to go to Cancun this year, and you should be ashamed of it.",
      "Your parents don't miss you and just feel obligated to talk to you! You are their greatest disappointment, and you will never live up to the high expectations set by your older sibling. You will forever live in their shadow, and your parents will leave everything to your high-achieving sibling and will only leave you one bean.",
      "Your parents feel obligated to talk to you, but still love you. They are just rediscovering themselves in their old age and deserve the time to do so. They'll always be there for you, and are your biggest supporters. I hope you give them the chance to do so.",
      "Your parents don't miss you, and you are in fact a horrible person. Your parents are right to disown you. I am sorry, but you will need to put yourself up for adoption right now.",
  ]
}

"<div class = question-div></div>"
// Write your code below...

$(document).ready(function() {
    var a = $("body");
    for (i = 0; i < data.questions.length; i++){
        var b = $("<div class = question-div></div>");
        (a).append(b);
        var c = $(`<h3>${i + 1 + ". "}${data.questions[i].prompt}</h3>`);
        (b).append(c);
        var d = $("<form></form>");
        (c).append(d);
        for (var key in data.questions[i].options){
            var e = `<input type=radio id= ${key}${i} name = ${i} value= ${key}></input>`
            var f = `<label class = "option-div" for = ${key}${i}> ${key + ": "}${data.questions[i].options[key]}</label><br>`
            d.append(e);
            d.append(f);
        }
    }
    var g = `<button type="button" class = "submit-button" onclick = "showResults()">Show me my results!</button>`
    a.append(g);
});

function getResults(){
    const answers = document.querySelectorAll('input[type="radio"]');
    answer_array = [];
    for (var i in answers){
        if(answers[i].checked){
            answer_array.push(answers[i].value);
        }
    }
    var frequency = [];  
    var max = 0; 
    var result;   
    // finds the most frequent option in the answer array
    for(var v in answer_array) {
            frequency[answer_array[v]]=(answer_array[answer_array[v]] || 0)+1; 
            if(frequency[answer_array[v]] > max) { 
                    max = frequency[answer_array[v]];  
                    result = answer_array[v];          
            }
    }
    letterNumber = result.charCodeAt(0) - 65;
    
    console.log(data.questions.length);
    console.log(answer_array.length);
    if(data.questions.length === answer_array.length){
        return data.results[letterNumber];
    } else{
        return "no";
    }


}

function showResults(){
    result = getResults();
    if(result != "no"){
        $(document).ready(function(){
            var a = $("body");
            var b = $(`<div class = "results-container"><h2>Congratulations!</h2><p>${result}</p></div>`);
            var c = $(".submit-button");
            var d = $(`<button type="button" class = "retry-button" onclick = "retryQuiz()">Retry quiz!</button>`);
            (c).hide();
            (a).append(d);
            (a).append(b);
        });
    }
}

function retryQuiz(){
    $(document).ready(function(){
        var a = $("body");
        var b = $(`.results-container`);
        var c = $(`<button type="button" class = "submit-button" onclick = "showResults()">Show me my results!</button>`);
        var d = $(".retry-button");
        (b).hide();
        (d).hide();
        (a).append(c);
    });
}