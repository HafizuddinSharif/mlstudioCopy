import React from 'react'
import './BarisAtas.css'
import Logo from '../Logo/Logo'
import { Icon, InlineIcon } from '@iconify/react';
import facebookIcon from '@iconify/icons-brandico/facebook';
import twitterOutlined from '@iconify/icons-ant-design/twitter-outlined';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import youtubeIcon from '@iconify/icons-vaadin/youtube';

function BarisAtas() {
    return (
        <div className="BarisAtas">
            <div>
                <p>Sunday, January 31, 2021</p>
            </div>
            <div>
                <Icon icon={twitterOutlined} style={{color: '#FFFFFF'}} className="Logo" />
                <Icon icon={facebookIcon} style={{color: '#FFFFFF'}} className="Logo"/>
                <Icon icon={youtubeIcon} style={{color: '#FFFFFF'}} className="Logo"/>
                <Icon icon={instagramOutlined} style={{color: '#FFFFFF'}} className="Logo"/>
            </div>
        </div>
    )
}

export default BarisAtas

