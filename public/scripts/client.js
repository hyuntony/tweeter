/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
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
          <div class="text">${escape(tweet.content.text)}</div>
          <div class="underline"></div>
        </div>
      <footer>
        <div class="time-passed">${timeago.format(tweet["created_at"])}</div>
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
    const textArea = $(this).find('#tweet-text').val();

    if (textArea === "") {
      alert('Message is not present');
    } else if (textArea.length > 140) {
      alert('Message is too long');
    } else {
      $.ajax(request);
      $(this).find('#tweet-text').val('');
    }

    event.preventDefault();

    $.ajax('/tweets', { method: 'GET' })
      .then(function(tweets) {
        const $tweet = $(`<div></div>`);
        $tweet.append(createTweetElement(tweets[tweets.length - 1]));
        $('#tweets-container').prepend($tweet);
      });
  });
});