import React from "react";
import './tweet.css';
import { Tweet,Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
export default function tweet(){
  return(

<div className="tweets">
  <br />
  <br />
  <br />
  <br />
  <br />
  <Tweet tweetId="1348201762906230784" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
  <Tweet tweetId="1347934656797306881" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
  <Tweet tweetId="1347018338933772290" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
  <TwitterHashtagButton
    tag={'sustainableliving'}
  />
    <Tweet tweetId="1350050308328714242" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
  <Tweet tweetId="1350069525711093762" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
  <Tweet tweetId="1349803326972563456" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
  <TwitterHashtagButton
    tag={'sustainabledevelopment'}
  />
</div>

  );
}