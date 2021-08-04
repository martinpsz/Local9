import React from 'react'
import * as NotificationBarCSS from './NotificiationBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function NotificationBar(props) {
    return (
        <div className={NotificationBarCSS.notificationBar}>
            <div className={NotificationBarCSS.notificationBarMessage}>{props.children}</div>
            <div className={NotificationBarCSS.notificationBarIcons}>
                <a href="http://www.facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className={NotificationBarCSS.icon} icon={faFacebookF} size="lg" aria-label="Facebook Icon Link"/></a>
                <a href="http://www.instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className={NotificationBarCSS.icon} icon={faInstagram} size="lg" aria-label="Instagram Icon Link"/></a>
            </div>
        </div>
    )
}

