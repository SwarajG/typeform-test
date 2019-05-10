import React from 'react';
import s from './styles';

export default function Button(props) {
  return (
    <button
      {...props}
      className={`${props.className} ${s.buttonWrapper}`}
    >
      {props.children}
    </button>
  );
}