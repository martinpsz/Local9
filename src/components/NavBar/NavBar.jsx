import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import * as NavbarCSS from "./Navbar.module.css"
import Logo from '../../images/Local9Icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site{
                        siteMetadata{
                            menuLinks {
                                name
                                link
                            }
                        }
                    }
                }
            `}
            render={data => (
                <nav>
                    <img className={NavbarCSS.logo} src={Logo} alt="UPTE Union Logo" height="100" width="85"/>
                    {data.site.siteMetadata.menuLinks.map((item) => (
                        <a className={NavbarCSS.link} key={item.name} href={item.link}>{item.name}</a>
                    ))}
                    <div className={NavbarCSS.notificationBarIcons}>
                        <a href="http://www.facebook.com" target="_blank" rel="noreferrer">Like on:<FontAwesomeIcon className={NavbarCSS.icon} icon={faFacebookF} size="lg" aria-label="Facebook Icon Link"/></a>
                        <a href="http://www.instagram.com" target="_blank" rel="noreferrer">Follow on:<FontAwesomeIcon className={NavbarCSS.icon} icon={faInstagram} size="lg" aria-label="Instagram Icon Link" /></a>
                        <a href="/" target="_blank" rel="noreferrer">Close menu:<FontAwesomeIcon className={NavbarCSS.icon} icon={faTimes} size="lg" aria-label="Instagram Icon Link"/></a>
                    </div>
                </nav>
            )}
        />
    )
}

