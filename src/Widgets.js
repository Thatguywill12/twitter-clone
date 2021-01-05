import React from 'react'
import './Widgets.css';
import{
    TwitterShareButton,
    TwitterTweetEmbed,
    TwitterTimelineEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>Whats Happening?</h2>
                <TwitterTweetEmbed tweetId={"1298494373278220290"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="elonmusk"
                options={{height:400}}
                />
                <TwitterShareButton
                url={""}
                options={{}}
                />
                   
                

            </div>
        </div>
    )
}

export default Widgets
