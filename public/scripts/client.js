/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const createTweetElement = function(tweet) {
  const $tweet = `
    <article class="tweet">
      <header class="header">
        <div class="image-name-container">
          <img src="${tweet.user.avatars}" class="face-image">
          </img>
          <p class="name">${tweet.user.name}</p>
        </div>
          <p class="user-id">${tweet.user.handle}</p>
      </header>
        <div>
          <div class="text">${tweet.content.text}</div>
          <div class="underline"></div>
        </div>
      <footer>
        <div class="time-passed">${tweet["created_at"]}</div>
        <div class="icon-container">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>`;
  return $tweet;
};

const renderTweets = function(tweets) {
  let $tweets = $(`<div></div>`);
  for (const tweet of tweets) {
    $tweets.append(createTweetElement(tweet));
  }
  return $tweets;
};

$(document).ready(function() {
  console.log($('.tweet-form'));
  $('.tweet-form').submit(function(event) {
    const request = {
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize()
    };
    $.ajax(request);
    event.preventDefault();
  });
//   const $tweets = renderTweets(data);
//   $('#tweets-container').append($tweets);
});