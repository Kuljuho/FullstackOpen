import { useState } from 'react'

const FeedbackButton = ({ handleClick, text }) => {
  return (
  <button onClick={handleClick}>
    {text}
  </button>
  );
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({good, neutral, bad}) => {
  const feedbacks = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1)/ feedbacks;
  const positives = (good / feedbacks * 100)
  if (feedbacks > 0) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
        <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={feedbacks}/>
        <StatisticLine text="average" value={average.toFixed(2)}/>
        <StatisticLine text="positive" value={positives.toFixed(2) + ' %'}/>
        </tbody>
        </table>
      </div>
    );
  } else {
    return <div><h2>statistics</h2>No feedback given</div>;
  }
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const selectRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length());
    setSelected(randomIndex);
  }

  return (
    <div>
      <h2>give feedback</h2>
      <FeedbackButton handleClick={() => setGood(good + 1)} text="good"/> 
      <FeedbackButton handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <FeedbackButton handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} /><br/>
      <FeedbackButton handleClick={() => selectRandomAnecdote} text="anecdote"/>
    </div>
  )
}

export default App