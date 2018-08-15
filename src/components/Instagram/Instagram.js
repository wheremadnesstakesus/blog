import Image from 'gatsby-image'
import React from 'react'

import useInstagram from '../../hooks/useInstagram'

import styl from './Instagram.module.css'

const Instagram = () => {
  const instaPhotos = useInstagram()

  return (
    <ul className={styl.instagram}>
      {instaPhotos.map((photo) => (
        <li key={photo.id}>
          <a href={`https://instagram.com/p/${photo.id}/`} alt={photo.caption}>
            <Image key={photo.id} fluid={photo.fluid} alt={photo.caption} className={styl.photo} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Instagram
