/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

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
      </article>
    `;
  return $tweet;
};
const $tweet = createTweetElement(tweetData);
console.log($tweet);