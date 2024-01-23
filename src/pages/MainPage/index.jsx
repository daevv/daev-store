import Button from "react-bootstrap/Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate(null);
    const handleClick = () => {
        navigate('/products');
        window.scrollTo(0,0);
    }
  return (
    <div className="main-page-bg">
      <div className="container">
        <div className="main-page-content">
          <div className="text-container">
            <h1 className="text-container__pretitle">Have u ever seen something better?</h1>
            <h2 className="text-container__title">We don't do fashion, we are fashion </h2>
            <Button className="button" onClick={handleClick}>Shop now</Button>
          </div>
          <div className="pic-container">
            <div className="main-section-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
