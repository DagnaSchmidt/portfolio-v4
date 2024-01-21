import React from 'react';

const Link = ({url, title, color}) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className={`${color} amulya-light hover:italic`}>
        {title}
    </a>
  )
}

export default Link;
