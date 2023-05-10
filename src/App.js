//9. useState훅을 사용하기위해 import한다
import { useState } from "react";
//8. 작성한 Dice와 Button컴포넌트를 import한다
import Button from "./Components/Button";
import Dice from "./Components/Dice";
import Header from "./Components/Header";

//11. 주사위의 숫자인 1~6까지를 랜덤으로 반영하는 숫자 작성
const random = () => {
  return Math.ceil(Math.random() * 6);
};

//10. App 컴포넌트 작성
const App = () => {
  //12. useState 훅을 사용하여 num와 SetNum함수 생성
  // const [num, SetNum] = useState(1)
  //16. red주사위를 추가하기위해 useState 훅 다시 수정
  const [blueNum, SetBlueNum] = useState(1);
  const [RedNum, SetRedNum] = useState(1);
  //20. 총점 및 기록 useState 훅 추가
  //20-1. redDice와 blueDice이므로 분기
  const [redSum, SetredSum] = useState(0)
  const [blueSum, SetblueSum] = useState(0)
  const [redHistory, SetredHistory] = useState([])
  const [blueHistory, SetblueHistory] = useState([])
  //13. 초기화 이벤트 작성
  const resetBtn = (color) => {
    //17. red주사위 추가, color를 인자로 받아 삼항연산자 조건문 추가
    //17-1.color가 blue면 blue주사위 초기화 아니면 red주사위 초기화
    //21. 조건이 추가됐음에따라 if문으로 변경
    // color === "blue" ? SetBlueNum(1) : SetRedNum(1);
    //22. num, sum은 hisroty의 배열에서 reduce를 적용해 훅 제거
    //22-1
    if(color === 'blue'){
      SetBlueNum(1)
      SetblueSum(0)
      SetblueHistory([])
    }else{
      SetRedNum(1)
      SetredSum(0)
      SetredHistory([])
    }
    
  };
  //14. 주사위 굴리기 이벤트 작성
  const rollBtn = (color) => {
    const newNum = random();
    //18. red주사위 추가, resetBtn과 같은 로직
    //color === "blue" ? SetBlueNum(newNum) : SetRedNum(newNum);
    if(color === 'blue'){
      SetBlueNum(newNum)
      SetblueSum(blueSum+newNum)
      SetblueHistory([...blueHistory,newNum])
    }else{
      SetRedNum(newNum)
      SetredSum(redSum+newNum)
      SetredHistory([...redHistory,newNum])
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="ButtonWrap">
        {/*19. 각 버튼에 color인자를 주는함수 즉시호출*/}
        <Button
          onClick={() => {
            rollBtn("blue");
            rollBtn("red");
          }}
          bg="blue"
        >
          던지기
        </Button>
        <Button
          onClick={() => {
            resetBtn("blue");
            resetBtn("red");
          }}
          bg="red"
        >
          초기화
        </Button>
      </div>
      <div className="DiceWrap">
        <Dice color="blue" num={blueNum} user="나" sum={blueSum} history={blueHistory}/>
        <Dice color="red" num={RedNum} user="상대" sum={redSum} history={redHistory} />
      </div>
    </div>
  );
};

//15. App컴포넌트를 export
export default App;
