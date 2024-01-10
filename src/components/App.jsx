import React from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeClick = event => {
    console.log(event);
    const { name } = event.target;
    if (name === 'good') {
      this.setState(
        prev => ({
          good: prev.good + 1,
        }),
        () => console.log(this.state.good)
      );
    }
    if (name === 'neutral') {
      this.setState(
        prev => ({ neutral: prev.neutral + 1 }),
        () => console.log(this.state.neutral)
      );
    }
    if (name === 'bad') {
      this.setState(
        prev => ({ bad: prev.bad + 1 }),
        () => console.log(this.state.bad)
      );
    }
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback
            options={options}
            onLeaveFeedback={this.handleChangeClick}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
