// import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Section from './components/Section/Section'
import Statistics from './components/Statistics/Statistics'
import Notification from './components/Notification/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0 
  }

  totalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => (acc += value), 0);
  };

  countGoodFeedback = (total) => {
    const positivePercentage = Math.round((this.state.good * 100) / total);
    return positivePercentage;
  }

  onLeaveFeedback = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }))
  };

  render() {
    const { good, neutral, bad } = this.state
    const total = this.totalFeedback();
    const positivePercentage = this.countGoodFeedback(total);
    return (

      <div className="App">
       <Section>
        <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        {total === 0 ? (<Notification message="No feedback given" />
        ) : (
          <Statistics
          good={ good }
          neutral={ neutral }
          bad={ bad }
          total={ total }
          positivePercentage={positivePercentage}
          />
         )  
        }
        </div>
    )
  }
}


export default App;
