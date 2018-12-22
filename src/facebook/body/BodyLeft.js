import React from 'react';
import Signup from '../signup/Signup';

const BodyLeft = () => {
    return(
        <div className="facebook-body">
            <div className="sub-body">
                <div className="descrition">
                    <h2>Connect with friends and the<br/>
                    world around you on Facebook.</h2>
                    <div>
                        <img class="img" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.2365-6/32964924_188362901982436_5189181917978689536_n.png?_nc_cat=111&amp;_nc_ht=scontent.fktm8-1.fna&amp;oh=6e079a370cf34aef7c26fd1c61440ef9&amp;oe=5CD177A3" width="56" height="56" alt="friends"/>
                        <span id="left">See photos and updates </span>
                        <span id="right">from friends in News Feed.</span> 
                    </div>
                    <div>
                        <img class="img" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.2365-6/32967637_1400301410075884_2994305350271762432_n.png?_nc_cat=108&amp;_nc_ht=scontent.fktm8-1.fna&amp;oh=166e4e266c5ac432460c30e04aa82ec4&amp;oe=5CD464B0" width="56" height="56" alt="life"/>
                        <span id="left">Share what's new </span>
                        <span id="right">in your life on your Timeline.</span> 
                    </div>
                    <div>
                        <img class="img" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.2365-6/33137320_1687624661315903_5362007326045765632_n.png?_nc_cat=1&amp;_nc_ht=scontent.fktm8-1.fna&amp;oh=fc6b2354d947872eddd6390e2e54ae6f&amp;oe=5C9DE205" width="56" height="56" alt="facebook"/>
                        <span id="left">Find more </span>
                        <span id="right">of what you're looking for with Facebook Search.</span> 
                    </div>
                </div>
                <div className="signup">
                    <Signup/>
                </div>
            </div>
        </div>
    );
}

export default BodyLeft;