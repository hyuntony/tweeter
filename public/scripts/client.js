/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
  $.ajax('/tweets', { method: 'GET' })
    .then(function(tweets) {
      const $tweets = renderTweets(tweets);
      $('#tweets-container').append($tweets);
    });

  $('.tweet-form').submit(function(event) {
    const request = {
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize()
    };
    $.ajax(request);
    event.preventDefault();
  });
});