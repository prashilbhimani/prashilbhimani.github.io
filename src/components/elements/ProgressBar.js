import React from "react";

var progress = {
  Novice:20,
  Beginner: 40,
  Competent: 60,
  Proficient:80,
  Expert: 100
};

function ProgressBar(props) {
  return (
    <div>
      <span className="title has-text-white is-5 is-spaced">{props.text}</span>
      <span className="subtitle has-text-white   is-6 skill-percentage">{props.level}</span>
      <progress
        className="progress is-info"
        value={progress[props.level]}
        max="100"
      >
        {progress[props.level]}%
      </progress>
    </div>
  );
}

export default ProgressBar;
