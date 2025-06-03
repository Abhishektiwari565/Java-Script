

  let Quizlist= [
    {
      "question": "What is the capital of France?",
      "options": {
        "A": "Paris",
        "B": "London",
        "C": "Rome",
        "D": "Berlin"
      }
    },
    {
      "question": "Which element has the chemical symbol 'O'?",
      "options": {
        "A": "Gold",
        "B": "Osmium",
        "C": "Oxygen",
        "D": "Hydrogen"
      }
    },
    {
      "question": "Who wrote 'Romeo and Juliet'?",
      "options": {
        "A": "Leo Tolstoy",
        "B": "Mark Twain",
        "C": "William Shakespeare",
        "D": "Charles Dickens"
      }
    },
    {
      "question": "What is the largest planet in our solar system?",
      "options": {
        "A": "Earth",
        "B": "Saturn",
        "C": "Mars",
        "D": "Jupiter"
      }
    },
    {
      "question": "Which country is known as the Land of the Rising Sun?",
      "options": {
        "A": "Japan",
        "B": "China",
        "C": "Thailand",
        "D": "South Korea"
      }
    },
    {
      "question": "What is the boiling point of water at sea level?",
      "options": {
        "A": "0°C",
        "B": "50°C",
        "C": "212°C",
        "D": "100°C"
      }
    },
    {
      "question": "Which language is used to style web pages?",
      "options": {
        "A": "Java",
        "B": "CSS",
        "C": "Python",
        "D": "HTML"
      }
    },
    {
      "question": "How many continents are there on Earth?",
      "options": {
        "A": "8",
        "B": "7",
        "C": "6",
        "D": "5"
      }
    },
    {
      "question": "What is the hardest natural substance on Earth?",
      "options": {
        "A": "Quartz",
        "B": "Iron",
        "C": "Gold",
        "D": "Diamond"
      }
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": {
        "A": "Vincent van Gogh",
        "B": "Michelangelo",
        "C": "Pablo Picasso",
        "D": "Leonardo da Vinci"
      }
    }
  ];
  const ansOptions= ["A", "C", "C", "D", "A", "D", "B", "B", "D", "D"];

  const Question=document.querySelector("#Question");
  const option=document.querySelectorAll(".option");
  const optionsInput=document.querySelectorAll(".form-check-input");
  const btn=document.querySelector("#btn");
  let count=0;

  function Quiz(index){
    Question.textContent="Q"+(index+1)+"."+Quizlist[index].question
   option.forEach((options,i)=>{
    options.textContent=Object.values(Quizlist[index].options)[i]
   })
  }
   btn.addEventListener("click",()=>{
 Quiz(count+1);
   count++;
   });
   Quiz(count);
   
   
  
  
 

