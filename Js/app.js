var tweets = document.querySelectorAll('.tweet');
    
for(var i=0; i < tweets.length; i++) {
    tweets[i].style.backgroundColor = 'navy';
    tweets[i].style.color = 'white';
}



var firstTweet = document.getElementById('first-tweet');
firstTweet.style.backgroundColor = 'royalblue';



var firstTime = document.querySelector('.tweet .time')
firstTime.innerText = 'A few seconds ago'



var heading = document.createElement('h1');
heading.innerText = "Donald's Tweets";
    
var page = document.querySelector('.page');
page.prepend(heading); 


var lastTweet = document.querySelector('.tweet:last-of-type');
var cloneTweet = lastTweet.cloneNode(true);
document.querySelector('.tweets').append(cloneTweet)



var lastTweet = document.querySelector('.tweet:last-of-type');
lastTweet.classList.add('.faded')
lastTweet.setAttribute('id', 'oldest-tweet')
  



var heading = document.querySelector('h1');
heading.classList.add('page-title');
heading.setAttribute('align', 'center');
             



var tweets = document.getElementsByClassName('tweet')
for(var i=0;  i < tweets.length; i++) {
    tweets[i].classList.add('hoverable');
    tweets[i].addEventListener('click', function() {
        this.classList.toggle('faded')
    })
}
