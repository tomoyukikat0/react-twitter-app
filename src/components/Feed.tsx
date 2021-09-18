import React from 'react'
import styles from "./Feed.module.css";
import { auth } from "../firebase"
import TweetInput from "./TweetInput";

const Feed: React.FC = () => {
  return (
    <div>
      Feed
      <TweetInput />
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  )
}

export default Feed
