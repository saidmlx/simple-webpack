import React from 'react';
import '../../css/teacher.styl'
function Teacher(props) {
  return (
    <li className="teacher">
      <p>
        {props.name} <a href={`https://twitter/${props.twitter}`}>@{props.twitter}</a>
      </p>
    </li>
  )
}

export default Teacher;
