import React from 'react';

const Link = ({url, title, color}) => {
  return (
    <a href={url} target='_blank' className={`${color} amulya-light hover:italic`}>
        {title}
    </a>
  )
}

export default Link;
