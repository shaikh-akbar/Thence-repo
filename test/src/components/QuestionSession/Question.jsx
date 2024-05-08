import React, { useState } from 'react';
import './Question.css';
import Union from '../../assets/Union.png';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h3 className='accordion-title'>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function Question() {
  return (
    <div>
      <div className="question-main-div">
        <div className="first">
          <h6>What's On Your Mind</h6>
          <h2>Ask Question</h2>
          <div className="union-img">
            <img src={Union} alt="not found" loading="lazy" />
          </div>
        </div>
        <div className="second">
          {/* Accordion */}
          <AccordionItem
            title="Do You Offer Freelancer?"
            content="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
          />
          <AccordionItem
            title="What’s the guarantee that I will be satisfied
            with the hired talent?"
            content="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
          />
          <AccordionItem
          title='Can I hire multiple talents at once?'
          content='If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
          />
           <AccordionItem
          title='Why should I not go to an agency directly?'
          content='If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
          />
           <AccordionItem
          title='Who can help me pick a right skillset
          and duration for me?'
          content='If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
          />
          {/* Add more AccordionItem components as needed */}
        </div>
      </div>
    </div>
  );
}

export default Question;
