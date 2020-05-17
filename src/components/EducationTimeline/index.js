import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class EducationTimeline extends Component {
    render() {
        return (
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer I @Twitter</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Masters of Compuer Science @CU Boulder</h3>
                    <h4 className="vertical-timeline-element-subtitle">Boulder, CO</h4>
                    <p>Worked as Lead TA, Data structues TA for 3 semesters</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Bachelors in Information Technology @VJTI</h3>
                    <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} />
            </VerticalTimeline>
        );
    }
}
export default EducationTimeline;