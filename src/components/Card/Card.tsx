//react
import TimeAgo from "javascript-time-ago";
import { FC } from "react";

//styles
import "./styles.scss";

//types
type CardProps = {
  author: string;
  created_at: string;
  story_title: string;
  story_url: string;
};

export const Card: FC<CardProps> = ({
  author,
  created_at,
  story_title,
  story_url,
}) => {
  const timeAgo = new TimeAgo("en-US");

  return (
    <article className="card">
      <div className="card__text__container">
        <div className="card__timeago__container">
          <img
            src="assets/images/clock.svg"
            className="card__clock"
            alt="clock"
          />
          <p className="card__timeago">
            {timeAgo.format(new Date(created_at))}
            by <span>{author}</span>
          </p>
        </div>
        <p className="card__text">{story_title} </p>
      </div>

      <div className="card__like__container">
        <img src="assets/images/like.svg" className="card__like" alt="like" />
      </div>
    </article>
  );
};
