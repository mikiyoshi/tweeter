/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const backupArr = [];
  const renderTweets = function (tweets) {
    console.log('TWEETS: ', tweets);
    if (backupArr.length === 1) {
      console.log('backup: ', backupArr[backupArr.length - 1]);
      for (let obj of tweets) {
        let tweet = createTweetElement(obj);
        $('.messageBox').append(tweet);
      }
    } else {
      console.log('backup else: ', backupArr[backupArr.length - 1][0]);
      const latestOne = [backupArr[backupArr.length - 1][0]];
      for (let obj of latestOne) {
        let tweet = createTweetElement(obj);
        $('.messageBox').prepend(tweet);
      }
    }
  };

  const createTweetElement = function (tweet) {
    /* Your code for creating the tweet element */
    let $tweet = $(`
          <div class="userCard">
            <div class="userCardBody">
              <div class="userCardHeader">
                <div class="userIcon">
                  <img src="${tweet.user.avatars}" />
                </div>
                <div class="userName">${tweet.user.name}</div>
                <div class="userId">${tweet.user.handle}</div>
              </div>
              <div class="userCardMain">
                <div class="userMessage">${escape(tweet.content.text)}</div>
              </div>
              <div class="userCardFooter">
                <div class="userDate">
                  <span class="userDays">${timeago.format(
                    tweet.created_at
                  )}</span>
                </div>

                <div class="userSocial">
                  <ul>
                    <li>
                      <a href="javascript:void(0);"><i class="fas fa-flag"></i></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"><i class="fas fa-retweet"></i></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"><i class="fas fa-heart"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  `);
    return $tweet;
  };

  // renderTweets(data);

  const loadTweets = function () {
    console.log('Button clicked, performing ajax call...');
    $.ajax('/tweets', { method: 'GET' }).then(function (jsonData) {
      const newOrder = jsonData.reverse();
      backupArr.push(newOrder);
      renderTweets(newOrder);
    });
  };

  $('form').submit(function (event) {
    event.preventDefault();
    const str = $('form').serialize();
    if ($('#tweet-text').val() === '') {
      $('form')
        .children('#resultPost')
        .addClass('alert fas fa-exclamation-triangle')
        .text(" You can't TWEET empty message")
        .show();
    } else if ($('#tweet-text').val().length > 140) {
      $('form')
        .children('#resultPost')
        .addClass('alert fas fa-exclamation-triangle')
        .text("You can't TWEET over 140 text message")
        .show();
    } else if ($('#tweet-text').val().length <= 140) {
      $('#tweet-text').change(function () {
        // alert("text area changed");
        $('form')
          .children('#resultPost')
          .addClass('alert fas fa-exclamation-triangle')
          .text('Please click TWEET button')
          .show();
      });
      $.post(
        '/tweets', // url
        str // data to be submit
      ).then(function () {
        console.log('all the load function', str);
        loadTweets(str);
      });
      $('#tweet-text').val('');
    }
  });
});
