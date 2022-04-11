import React from 'react';
import './Header.css';
import { Link, NavLink } from "react-router-dom";
import { Link as Link2 } from "react-scroll";

function Header() {

  return (
    <header className="header">
      <nav className="header__container">
        <div className="header__wrapper">
          <Link className="header__link" to="/"><div className="header__logo" /></Link>
          {/* <Link2 className="header__link" to="game" smooth={true} offset={70} duration={500}><p className="header__text">Каталог игр</p></Link2> */}
          <Link2 className="header__link" to="game" smooth={true} offset={70} duration={500}>
            <NavLink className="header__link" to="/"><p className="header__text">Каталог игр</p></NavLink>
          </Link2>
          <a className="header__link" href="https://discord.gg/millexcheats" target="_blank"><p className="header__text">Поддержка</p></a>
          <Link className="header__link" to="/guaranty"><p className="header__text">Наши гарантии</p></Link>
        </div>
        <div className="header__wrapper">
          <a className="header__link_image" href="https://vk.com/millexshop" target="_blank">
                <svg width="27" height="27" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="footer__image" fill-rule="evenodd" clip-rule="evenodd" d="M1.54379 1.54379C0 3.08758 0 5.57228 0 10.5417V11.4583C0 16.4277 0 18.9124 1.54379 20.4562C3.08758 22 5.57228 22 10.5417 22H11.4583C16.4277 22 18.9124 22 20.4562 20.4562C22 18.9124 22 16.4277 22 11.4583V10.5417C22 5.57228 22 3.08758 20.4562 1.54379C18.9124 0 16.4277 0 11.4583 0H10.5417C5.57228 0 3.08758 0 1.54379 1.54379ZM4.35421 6.875H5.95875C6.36882 6.875 6.52309 7.05444 6.67686 7.49865C7.46162 9.78409 8.78478 11.7814 9.32873 11.7814C9.53269 11.7814 9.62628 11.6875 9.62628 11.1696V8.80724C9.58943 8.13482 9.35449 7.84401 9.18046 7.62864C9.07298 7.49558 8.98874 7.39136 8.98874 7.24373C8.98874 7.06429 9.1421 6.875 9.39703 6.875H11.9185C12.2585 6.875 12.3769 7.05678 12.3769 7.46469V10.6427C12.3769 10.9826 12.5245 11.1016 12.6265 11.1016C12.8305 11.1016 13.0005 10.9826 13.3745 10.6087C14.5304 9.31709 15.3463 7.32866 15.3463 7.32866C15.4484 7.09078 15.6365 6.875 16.0444 6.875H17.649C18.1342 6.875 18.2362 7.12475 18.1342 7.46469C17.9302 8.39937 15.9753 11.1526 15.9753 11.1526C15.8053 11.4245 15.7373 11.5605 15.9753 11.8663C16.0591 11.9837 16.2379 12.1588 16.4426 12.3592C16.6529 12.5652 16.8906 12.798 17.0802 13.022C17.7695 13.7972 18.2889 14.4512 18.4336 14.9019C18.5658 15.3542 18.3366 15.5833 17.8782 15.5833H16.2736C15.8439 15.5833 15.6275 15.3427 15.1598 14.8226C14.9616 14.6021 14.7183 14.3315 14.3944 14.0077C13.4425 13.09 13.0345 12.971 12.7965 12.971C12.4735 12.971 12.3769 13.0625 12.3769 13.5208V14.9595C12.3769 15.3542 12.2507 15.5833 11.2308 15.5833C9.5309 15.5833 7.66283 14.5515 6.33692 12.6481C4.34805 9.86095 3.80408 7.75358 3.80408 7.32866C3.80408 7.09078 3.89577 6.875 4.35421 6.875Z" fill="#DFDADA"/>
                </svg>
              </a>

              <a className="header__link_image" href="https://t.me/mirlovcourse" target="_blank">
                <svg width="27" height="27" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="footer__image" fill-rule="evenodd" clip-rule="evenodd" d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.3942 8.12059C10.3243 8.56561 8.18595 9.48667 4.97923 10.8838C4.4585 11.0909 4.18573 11.2934 4.16089 11.4915C4.11893 11.8263 4.53814 11.9581 5.109 12.1376C5.18666 12.162 5.26711 12.1873 5.3496 12.2141C5.91124 12.3967 6.66675 12.6103 7.0595 12.6188C7.41577 12.6265 7.81341 12.4796 8.25241 12.1781C11.2486 10.1557 12.7952 9.1334 12.8923 9.11136C12.9608 9.09581 13.0557 9.07627 13.12 9.13343C13.1843 9.1906 13.178 9.29887 13.1712 9.32791C13.1297 9.50495 11.4841 11.0348 10.6325 11.8265C10.367 12.0734 10.1787 12.2484 10.1402 12.2884C10.054 12.378 9.96611 12.4627 9.88164 12.5441C9.35986 13.0471 8.96858 13.4243 9.9033 14.0403C10.3525 14.3363 10.7119 14.5811 11.0705 14.8253C11.4621 15.092 11.8528 15.358 12.3581 15.6893C12.4869 15.7737 12.6099 15.8613 12.7296 15.9467C13.1854 16.2716 13.5948 16.5635 14.1007 16.517C14.3946 16.4899 14.6982 16.2136 14.8524 15.3892C15.2169 13.4411 15.9331 9.22016 16.0987 7.4808C16.1132 7.32841 16.0949 7.13338 16.0803 7.04777C16.0656 6.96215 16.035 6.84017 15.9237 6.74988C15.7919 6.64293 15.5885 6.62038 15.4975 6.62199C15.0838 6.62927 14.449 6.84999 11.3942 8.12059Z" fill="#DFDADA"/>
                </svg>
              </a>

              <a className="header__link_image" href="https://discord.gg/millexcheats" target="_blank">
                <svg width="27" height="27" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="footer__image" d="M19 1.83333C19 1.83333 16.707 0.18791 14 0L13.756 0.44779C16.203 0.99733 17.326 1.78291 18.5 2.75C16.4765 1.80308 14.48 0.91666 11 0.91666C7.52 0.91666 5.5235 1.80308 3.5 2.75C4.674 1.78291 6.01 0.90933 8.244 0.44779L8 0C5.16 0.24521 3 1.83333 3 1.83333C3 1.83333 0.4395 5.23691 0 11.9166C2.58 14.6451 6.5 14.6667 6.5 14.6667L7.32 13.6656C5.928 13.2219 4.358 12.4305 3 11C4.619 12.123 7.0625 13.2917 11 13.2917C14.9375 13.2917 17.381 12.123 19 11C17.6425 12.4305 16.0725 13.2219 14.68 13.6656L15.5 14.6667C15.5 14.6667 19.42 14.6451 22 11.9166C21.5605 5.23691 19 1.83333 19 1.83333ZM7.75 10.0834C6.783 10.0834 6 9.26295 6 8.24995C6 7.23705 6.783 6.41665 7.75 6.41665C8.717 6.41665 9.5 7.23705 9.5 8.24995C9.5 9.26295 8.717 10.0834 7.75 10.0834ZM14.25 10.0834C13.283 10.0834 12.5 9.26295 12.5 8.24995C12.5 7.23705 13.283 6.41665 14.25 6.41665C15.217 6.41665 16 7.23705 16 8.24995C16 9.26295 15.217 10.0834 14.25 10.0834Z" fill="#DFDADA"/>
                </svg>
              </a>

              <a className="header__link_image" href="https://www.youtube.com/channel/UCLbWc5ilJtYz6qp5yAehRpQ/featured" target="_blank">
              <svg width="27" height="27" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="footer__image" d="M21.7809 3.33868C21.7809 3.33868 21.566 1.82188 20.9043 1.15586C20.0664 0.2793 19.1297 0.275 18.7 0.22344C15.6234 -7.45058e-08 11.0043 0 11.0043 0H10.9957C10.9957 0 6.37656 -7.45058e-08 3.3 0.22344C2.87031 0.275 1.93359 0.2793 1.0957 1.15586C0.433984 1.82188 0.223437 3.33868 0.223437 3.33868C0.223437 3.33868 0 5.12188 0 6.90083V8.56793C0 10.3468 0.219141 12.1301 0.219141 12.1301C0.219141 12.1301 0.433984 13.6468 1.09141 14.3129C1.9293 15.1894 3.0293 15.1593 3.51914 15.2539C5.28086 15.4215 11 15.473 11 15.473C11 15.473 15.6234 15.4644 18.7 15.2453C19.1297 15.1937 20.0664 15.1894 20.9043 14.3129C21.566 13.6468 21.7809 12.1301 21.7809 12.1301C21.7809 12.1301 22 10.3511 22 8.56793V6.90083C22 5.12188 21.7809 3.33868 21.7809 3.33868ZM8.72695 10.5918V4.4086L14.6695 7.51093L8.72695 10.5918Z" fill="#DFDADA"/>
              </svg>
              </a>
          </div>
      </nav>
    </header>
  );
}

export default Header;