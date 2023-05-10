//6. button클릭 시 함수가 작동되는 컴포넌트 작성
//6-1. 버튼이 여러개일수도있기때문에 children으로 내용을 받아주고
//6-2. 함수를 호출할거기때문에 onclick을 받아준다
const Button = ({children, onClick, bg}) => {
  return(
    <button onClick={onClick} style={{
      backgroundColor:`${bg}`,
      border:'0px',
      borderRadius:'9999px',
      padding:'20px',
      width:'150px',
      fontSize:'1.3rem',
      color:'#fff',
      fontWeight:'600',
      cursor:'pointer',
    }}>{children}</button>
  )
}

//7. Button을 export한다
export default Button