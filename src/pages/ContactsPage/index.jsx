import './styles.css';

const ContactsPage = () => {
  return (
    <div className="main-page-bg">
      <div className="container">
        <div className="content-block">
          <div className="links-block">
            <a className="links-block__link" href="https://github.com/daevv" target="_blank" rel="noreferrer">
              <div className="git-logo"></div>
            </a>
            <a className="links-block__link" href="http://t.me/daevvv" target="_blank" rel="noreferrer">
              <div className="tg-logo"></div>
            </a>
          </div>
          <p className='main-text'>DaevStore was made with love</p>
          <p className='sub-text'>Contact me if you want to work together</p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
