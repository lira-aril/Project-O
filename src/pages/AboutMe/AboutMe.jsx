import React from 'react';
import "./AboutMe.css";
import Img1 from "../../assets/slider1.png";
import Img2 from "../../assets/slider2.png";
import Img3 from "../../assets/slider3.png";

export default function AboutMe() {
    return (
        <div className="about">
            <div className="about__row">
                <div className="row__img">
                    <img src={Img1} alt="about-me" style={{width: "400px", height: "300px"}}/>
                </div>
                <div className="row__text">
                    Привет, я Лира! Мне 27 лет и я живу в городе Бишкек. Работаю фрилансером по контекстной рекламе с 2021года.
                    Имею степень бакалавра по направлению менеджмента. Года 3 работала в сфере продаж и услуг.
                    Год назад начала интересоваться программированием и прошла курс по Frontend разработке. Дальше планирую развиваться в этой сфере.
                </div>
            </div>
            <div className="about__row">
                <div className="row__img">
                    <img src={Img2} alt="about-me" style={{width: "400px", height: "300px"}}/>
                </div>
                <div className="row__text">
                    Люблю учиться, много читаю.
                    Мне интересно обсуждать героев книг, анализировать их характеры, рассуждать о причинах их поступков.
                    А еще мне нравится все, что связано с активным отдыхом - активные виды спорта, активные игры, активный досуг в свободное время.
                    Я катаюсь хорошо на «велике».  Очень люблю, когда мы с друзьями выезжаем на вело-прогулку.

                </div>
            </div>
            <div className="about__row">
                <div className="row__img">
                    <img src={Img3} alt="about-me" style={{width: "400px", height: "300px"}}/>
                </div>
                <div className="row__text">
                    Тел: +996 500 99 40 50 <br />
                    e-mail: kakeeva.lira@gmail.com
                </div>
            </div>
        </div>
    );
}
