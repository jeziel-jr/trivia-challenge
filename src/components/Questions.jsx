import { useSelector } from "react-redux"
import '../scss/Questions.scss'
import { Button } from "./Button";
import { Score } from "./Score";
import { Timer } from "./Timer";

export const Questions = () => {
  const question = useSelector(state => (state.question));
  const category = useSelector(state => (state.category));
  return (
    <>
      <div className="questions">
        <h2>Question Category</h2>
        <h3>{category}</h3>
        <Timer />
        <h1 dangerouslySetInnerHTML={{ __html: question }}></h1>
      </div>
      <Score />
      <div className="buttons">
        <Button Answer="True" />
        <Button Answer="False" />
      </div>
    </>
  )
}