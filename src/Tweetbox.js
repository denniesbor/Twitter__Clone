import React from 'react'
import './Tweetbox.css'
import {Button, Avatar} from '@mui/material';

function Tweetbox() {
    return (
        <div className = 'tweetbox'>
            <form>
                <div className="tweetbox__input">
                   <Avatar src = 'http://www.shrinkpictures.com/processed/phpV7i9Pe_c1AM.jpg'></Avatar>
                   <input type="text" name="" id="" placeholder="What's Happening?"/>
                </div>
                <input type="text" className="tweetbox__inputImage" id="" placeholder = 'Enter Image Url'/>
                <Button className = 'tweetbox__tweetIcon'>Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
