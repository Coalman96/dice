//1. 사용할 이미지들을 import 한다.
import blueDice01 from "../images/dice-blue-1.svg";
import blueDice02 from "../images/dice-blue-2.svg";
import blueDice03 from "../images/dice-blue-3.svg";
import blueDice04 from "../images/dice-blue-4.svg";
import blueDice05 from "../images/dice-blue-5.svg";
import blueDice06 from "../images/dice-blue-6.svg";
import redDice01 from "../images/dice-red-1.svg";
import redDice02 from "../images/dice-red-2.svg";
import redDice03 from "../images/dice-red-3.svg";
import redDice04 from "../images/dice-red-4.svg";
import redDice05 from "../images/dice-red-5.svg";
import redDice06 from "../images/dice-red-6.svg";

//2. 이미지 객체 생성
//2-1. 객체안에 프로퍼티의 속성은 배열로 나타낸다.
const diceImages = {
  blue: [
    blueDice01,
    blueDice02,
    blueDice03,
    blueDice04,
    blueDice05,
    blueDice06,
  ],
  red: [redDice01, redDice02, redDice03, redDice04, redDice05, redDice06],
};

//3. 주사위 컴포넌트 생성
//3-1. color와 num을 props으로 받는다.
//3-2. color의 기본값은 'blue' num의 기본값은 1
const Dice = ({ color = "blue", num = 1, user, history, sum}) => {
  const src = diceImages[color][num - 1];
  const alt = `${color}${num}`;
  return (
    <div style={{
        width:'500px',
        height:'100%',
        backgroundColor:'rgba(255,255,255,0.4)',
        borderRadius:'30px',
    }}>
      <h2>{user}</h2>
      <img src={src} alt={alt}></img>
      <h3>총점</h3>
      <p>{sum}</p>
      <h3>기록</h3>
      <p>{history.join(',')}</p>
    </div>
  );
};

//4. Dice컴포넌트를 export
export default Dice;

//5. Button 컴포넌트로 넘어간다.
