import React from 'react';
import './Cards.css';
import { Link } from "react-router-dom";
import apex from "../../images/apex.png";
import eft from "../../images/eft.png";
import val from '../../images/val.png';
import fort from '../../images/fort.png';
import rust from '../../images/rust.png';
import spoof from '../../images/spoof.png';
import pubg from '../../images/pubg1.png';
import scum from '../../images/scum3.png';
import soon from '../../images/soon.png';
import dayz from '../../images/dayz1.png';


function Cards() {
  return (
    <div className="cards" id="game">
      <div className="cards__container">
        <p className="cards__title"><span className="cards__title_color">Популярные</span> игры</p>
        <div className="card__container">

            <div className="card">
                <Link className="card__link" to="/apex">
                <img className="card__image" src={apex} alt="APEX" />
                <div className="card__wrapper">
                    <p className="card__title">APEX LEGENDS</p>
                    <div className="card__wrap">
                        <p className="card__price">от 99₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/tarkov">
                <img className="card__image" src={eft} alt="EFT" />
                <div className="card__wrapper">
                    <p className="card__title">ESCAPE FROM TARKOV</p>
                    <div className="card__wrap">
                        <p className="card__price">от 190₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/valorant">
                <img className="card__image" src={val} alt="VALORANT" />
                <div className="card__wrapper">
                    <p className="card__title">VALORANT</p>
                    <div className="card__wrap">
                        <p className="card__price">от 390₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/fortnite">
                <img className="card__image" src={fort} alt="FORTNITE" />
                <div className="card__wrapper">
                    <p className="card__title">FORTNITE</p>
                    <div className="card__wrap">
                        <p className="card__price">от 290₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/rust">
                <img className="card__image" src={rust} alt="RUST" />
                <div className="card__wrapper">
                    <p className="card__title">RUST</p>
                    <div className="card__wrap">
                        <p className="card__price">от 349₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            {/* <div className="card">
                <Link className="card__link" to="/pubg">
                <img className="card__image" src={pubg} alt="pubg" />
                <div className="card__wrapper">
                    <p className="card__title">PUBG</p>
                    <div className="card__wrap">
                        <p className="card__price">от 490₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div> */}

            <div className="card">
                <Link className="card__link" to="/spoofer">
                <img className="card__image" src={spoof} alt="SPOOFER" />
                <div className="card__wrapper">
                    <p className="card__title">SPOOFER</p>
                    <div className="card__wrap">
                        <p className="card__price">от 990₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/scum">
                <img className="card__image" src={scum} alt="pubg" />
                <div className="card__wrapper">
                    <p className="card__title">SCUM</p>
                    <div className="card__wrap">
                        <p className="card__price">от 290₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>

            <div className="card">
                <Link className="card__link" to="/dayz">
                <img className="card__image" src={dayz} alt="dayz" />
                <div className="card__wrapper">
                    <p className="card__title">DAYZ</p>
                    <div className="card__wrap">
                        <p className="card__price">от 290₽</p>
                        <button className="card__button">Перейти</button>
                    </div>
                </div>
                </Link>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Cards;