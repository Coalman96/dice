import Logo from "../images/logo.png";
const Header = () => {
  return (
    <header>
      <h1 className="border"style={{
        height:'90px',
        textAlign:'center',
      }}>
        <img src={Logo} alt="logo" style={{
          height:'100%',
        }}></img>
        <p style={{
          margin:'0',
          fontSize:'1.5rem'
        }}>주사위게임</p>
      </h1>
    </header>
  );
};

export default Header