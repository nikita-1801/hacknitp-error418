import React from "react";
import './tweet.css';
import { Tweet} from 'react-twitter-widgets';
import { TwitterHashtagButton} from 'react-twitter-embed';
export default function tweet(){
  return(

<div className="tweets">
  <br />
  <br />
  <br />
  <br />
  <br />
  <div className="row">
  <div className="col">
  <Tweet tweetId="1348201762906230784" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
    <div className="col">
    <Tweet tweetId="1347934656797306881" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
    <div className="col">
    <Tweet tweetId="1347018338933772290" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
  </div>
  
  <TwitterHashtagButton
    tag={'sustainableliving'}
  />
  <div className="row">
    <div className="col">
    <Tweet tweetId="1349174586286501888" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
    <div className="col">
    <Tweet tweetId="1350069525711093762" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
    <div className="col">
    <Tweet tweetId="1349803326972563456" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
  </div>
  
  <TwitterHashtagButton
    tag={'sustainabledevelopment'}
  />
  <div className="row">
    <div className="col">
    <Tweet tweetId="1349768255842492417" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
    <div className="col">
    <Tweet tweetId="1349403865259524096" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
      </div>
    <div className="col">
    <Tweet tweetId="1295199205783252992" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
  </div>
  <TwitterHashtagButton
    tag={'sustainablepractices'}
  />
  <div className="row">
    <div className="col">
    <Tweet tweetId="1350139419601346561" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
    <div className="col">
    <Tweet tweetId="1348988809023774726" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
    <div className="col">
    <Tweet tweetId="1349382026013638658" 
  options={{
    height: '500',
    width:'400'
  }}
  /> 
    </div>
  </div>
  <TwitterHashtagButton
    tag={'Sustainable'}
  />
</div>

  );
}