import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container--narrow container">
        <div className="flex-container">
          <p>
            Made by <b>Daev</b>, design impressed by{" "}
            <b>Abuzar Mamedov</b>
          </p>
          <a href="https://github.com/daevv" target="_blank" rel="noreferrer">
            <div className="git-link"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
