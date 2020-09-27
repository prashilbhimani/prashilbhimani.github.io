import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function Timeline() {
  let years= new Set();  
  Resume.work.forEach( item => {
    years.add(new Date(item.startDate).getFullYear())
  });
  let year = [...years]
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-primary">
          Present
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-primary"></div>
        <div className="timeline-content"></div>
      </div>
      {
        year.map((year, i) => {
          let content = [];
          content.push(
            <header key={i} className="timeline-header">
              <span className="tag is-primary">{year}</span>
            </header>
          );
          content.push(
            Resume.work
              .filter(work => new Date(work.startDate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={new Date(item.startDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    company={item.company}
                    summary={item.summary}
                  />
                );
              })
          );
          return content;
        })
      }
    </div>
  );
}

export default Timeline;
