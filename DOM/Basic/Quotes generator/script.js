let quotes=[
  {
    "ID": 1,
    "Quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    "Author": "Rumi"
  },
  {
    "ID": 2,
    "Quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
    "Author": "Abdul Kalam"
  },
  {
    "ID": 3,
    "Quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
    "Author": "Abdul Kalam"
  },
  {
    "ID": 4,
    "Quote": "If You Can'T Make It Good, At Least Make It Look Good.",
    "Author": "Bill Gates"
  },
  {
    "ID": 5,
    "Quote": "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
    "Author": "Rumi"
  },
  {
    "ID": 6,
    "Quote": "It is bad for a young man to sin; but it is worse for an old man to sin.",
    "Author": "Abu Bakr (R.A)"
  },
  {
    "ID": 7,
    "Quote": "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
    "Author": "Albert Einstein"
  },
  {
    "ID": 8,
    "Quote": "O man you are busy working for the world, and the world is busy trying to turn you out.",
    "Author": "Abu Bakr (R.A)"
  },
  {
    "ID": 9,
    "Quote": "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
    "Author": "Abdul Kalam"
  },
  {
    "ID": 10,
    "Quote": "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
    "Author": "Abraham Lincoln"
  },
  {
    "ID": 11,
    "Quote": "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
    "Author": "Oprah Winfrey"
  },
  {
    "ID": 12,
    "Quote": "Do not get elated at any victory, for all such victory is subject to the will of God.",
    "Author": "Abu Bakr (R.A)"
  },
  {
    "ID": 13,
    "Quote": "Wear gratitude like a cloak and it will feed every corner of your life.",
    "Author": "Rumi"
  },
  {
    "ID": 14,
    "Quote": "If you even dream of beating me you'd better wake up and apologize.",
    "Author": "Muhammad Ali"
  },
  {
    "ID": 15,
    "Quote": "I Will Praise Any Man That Will Praise Me.",
    "Author": "William Shakespeare"
  },
  {
    "ID": 16,
    "Quote": "One Of The Greatest Diseases Is To Be Nobody To Anybody.",
    "Author": "Mother Teresa"
  },
  {
    "ID": 17,
    "Quote": "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.",
    "Author": "Muhammad Ali"
  },
  {
    "ID": 18,
    "Quote": "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.",
    "Author": "Nelson Mandela"
  },
  {
    "ID": 19,
    "Quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    "Author": "Rumi"
  },
  {
    "ID": 20,
    "Quote": "The less of the World, the freer you live.",
    "Author": "Umar ibn Al-Khattāb (R.A)"
  },
  {
    "ID": 21,
    "Quote": "Respond to every call that excites your spirit.",
    "Author": "Rumi"
  },
  {
    "ID": 22,
    "Quote": "The Way To Get Started Is To Quit Talking And Begin Doing.",
    "Author": "Walt Disney"
  },
  {
    "ID": 23,
    "Quote": "God Doesn'T Require Us To Succeed, He Only Requires That You Try.",
    "Author": "Mother Teresa"
  },
  {
    "ID": 24,
    "Quote": "Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love.",
    "Author": "Rumi"
  },
  {
    "ID": 25,
    "Quote": "Happiness comes towards those which believe in him.",
    "Author": "Ali ibn Abi Talib (R.A)"
  },
  {
    "ID": 26,
    "Quote": "Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed.",
    "Author": "Ali ibn Abi Talib (R.A)"
  },
  {
    "ID": 27,
    "Quote": "When I am silent, I have thunder hidden inside.",
    "Author": "Rumi"
  },
  {
    "ID": 28,
    "Quote": "Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal.",
    "Author": "Albert Einstein"
  },
  {
    "ID": 29,
    "Quote": "No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World.",
    "Author": "Aristotle"
  },
  {
    "ID": 30,
    "Quote": "Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don't let yourself believe it will happen to you.",
    "Author": "Muhammad Ali"
  }
];

const Quotes=document.getElementById("Quotes");
const Next=document.getElementById("Next");

Next.addEventListener("click",()=>{
   let number=Math.floor(Math.random()*30);
   Quotes.textContent=quotes[number].Quote


})


