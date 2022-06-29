import { Link } from "react-router-dom";
import lightBulb from '../assets/img/light-bulb.svg'
import '../scss/Home.scss'

export function Home() {

  return (
    <>
      <div className="trivia-container">
        <img src={lightBulb} alt="" />
        <h1 className="trivia-title"><span>This is<br></br></span> Trivia Challenge</h1>
        <p className="trivia-description">You will receive 10 questions can you answer all right?</p>
        <Link to="/questions"><button>Start</button></Link>
      </div>
    </>
  )
}