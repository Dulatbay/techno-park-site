import React, { useState, useEffect } from 'react';
import style from './HeaderTop.module.css';

const HeaderTop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  useEffect(() => {
    const handleResize = () => {
      closeMenu();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.header__body}>
            <a href="" className={style.header__logo}>
              SDU Технопарк
            </a>
            <div
              className={`${style.header__burger} ${isMenuOpen ? style.active : ''}`}
              onClick={handleToggleMenu}
            >
              <span></span>
            </div>
            <div
              className={`${style.header__menu} ${isMenuOpen ? style.active : ''}`}
            >
              <ul className={style.header__list}>
              <li>
                  <a href="" className={style.header__link}>
                    SDU
                  </a>
                </li>
                <li>
                  <a href="" className={style.header__link}>
                    Технопарк
                  </a>
                </li>
                <li>
                  <a href="" className={style.header__link}>
                    Офис предпринимательства
                  </a>
                </li>
                <li>
                  <a href="" className={style.header__link}>
                    Новости
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderTop;