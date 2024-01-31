import React from "react";

function End() {
  return (
    <div className="end">
      <h3>
        Attention! Make sure to click on the link at the bottom of this page to
        receive SONA credit.
      </h3>
      <div className="conclusion">
        <p className="instructions">
          Thank you for completing our Smart Traveler testing survey! Your
          responses have been recorded.
        </p>
        <p className="instructions">
          We would like to provide you with more information about the research
          and explain exactly what we are trying to study.
        </p>
        <p className="instructions">
          We are interested in understanding whether people who use AI-based
          tools that are described as being tailored specifically to them are
          more likely to accept the recommendations made by the software. We
          also want to examine whether environmental values can change as a
          result of the AI recommendations.
        </p>
        <p className="instructions">
          To try to obtain unbiased or natural reactions, we informed you that
          one version of the Smart Traveler tool was programmed based on your
          personality assessment, and that one version was programmed based on
          previous participants' personality assessments. In reality, the
          recommendations were made randomly, and were not based on any
          personality data. We also withheld our goal of studying the number of
          eco-friendly decisions made during the study. Withholding this{" "}
          information was necessary for us to understand how just being{" "}
          <i>told</i> that software is based on your personality influences your
          preferences (both general and eco-friendly), regardless of how
          accurate that software may be.
        </p>
        <p className="instructions">
          Because this study is ongoing, we request that you do not share the
          true nature and purpose of this experiment with others who might
          potentially participate in our study.
        </p>
        <p className="instructions">
          If you have any questions about this research or wish to withdraw your
          data, please feel free to contact Lindsay Miller (805)-694-8879,
          lindsaymiller@ucsb.edu. If you have any questions regarding your
          rights as a participant in this research project, please contact the
          Human Subjects Committee at (805) 893-3807 or hsc@research.ucsb.edu.
          Or write to the University of California, Human Subjects Committee,
          Office of Research, Santa Barbara, CA 93106-2050.
        </p>
      </div>
      <div className="instructions bold">
        <p>You must click on the following link to receive SONA credit:</p>
        <a
          href="https://ucsb.co1.qualtrics.com/jfe/form/SV_e3yUXbVKQyt8xHo"
          target="_blank">
          SONA credit
        </a>
      </div>
    </div>
  );
}

export default End;
