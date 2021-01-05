import React, { useState } from 'react';
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Will Jackson III',
            username: 'ThatGuyWill',
            verified:true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://mail.google.com/mail/u/0?ui=2&ik=c6d5757666&attid=0.1.1&permmsgid=msg-f:1676127370584050908&th=1742ccf689f8ccdc&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-abvJyhraxaPHi0feqYdY8t0LK2e62WIyKdXDDydhCpmtioUDbnNUdy9FXNsl7Lxp1ApxbotJK29UeAqezsJDozvB0gQlkgTyXutZrZPP9oa-UviVWIVxbmq4&disp=emb"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://mail.google.com/mail/u/0?ui=2&ik=c6d5757666&attid=0.1.1&permmsgid=msg-f:1676127370584050908&th=1742ccf689f8ccdc&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-abvJyhraxaPHi0feqYdY8t0LK2e62WIyKdXDDydhCpmtioUDbnNUdy9FXNsl7Lxp1ApxbotJK29UeAqezsJDozvB0gQlkgTyXutZrZPP9oa-UviVWIVxbmq4&disp=emb" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}  
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text"
                    />
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__input" 
                    placeholder="Optional: Enter image URL" 
                    type="text"
                />

                <Button 
                    onClick={sendTweet} 
                    type="submit" 
                    className="tweetBox__tweetButton">
                    Tweet
                </Button> 
            </form>
        </div>
    );
}

export default TweetBox;
