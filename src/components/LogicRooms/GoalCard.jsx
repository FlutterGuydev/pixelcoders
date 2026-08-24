export default function GoalCard({ heading, body }) {
  return (
    <div className="lr2-card lr2-goal-card">
      <h3>{heading}</h3>
      <p>{body}</p>
    </div>
  );
}
