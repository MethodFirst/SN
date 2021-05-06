import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../types/types";

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={s.item}>
      <img src='https://www.pinclipart.com/picdir/big/581-5811619_transparent-agent-clipart-programmer-cartoon-png.png' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;