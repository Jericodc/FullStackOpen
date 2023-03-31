import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticsLine text='Good' value={good} />
      <StatisticsLine text='Neutral' value={neutral} />
      <StatisticsLine text='Bad' value={bad} />
      <StatisticsLine text='All' value={all} />
      <StatisticsLine text='Average' value={average} />
      <StatisticsLine text='Positive' value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => setGood(good + 1)
  const handleNeutralFeedback = () => setNeutral(neutral + 1)
  const handleBadFeedback = () => setBad(bad + 1)
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodFeedback} text='Good' />
      <Button handleClick={handleNeutralFeedback} text='Neutral' />
      <Button handleClick={handleBadFeedback} text='Bad' />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;