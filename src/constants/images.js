import num from "/assets/22.jpg";
import num2 from "/assets/49.jpg";
import num3 from "/assets/62.jpg";
import num4 from "/assets/91.jpg";
import arr from "/assets/arr.png";
import arr2 from "/assets/arr2.png";
import ban3 from "/assets/ban3.png";
import card from "/assets/card.jfif";
import card1 from "/assets/card1.jfif";
import card2 from "/assets/card2.jfif";
import card3 from "/assets/card3.jfif";
import card4 from "/assets/card4.jfif";
import card5 from "/assets/card5.jfif";
import card6 from "/assets/card6.jfif";
import dibest from "/assets/dibest.png";
import ewallet from "/assets/ewallet.jpg";
import fadi2 from "/assets/fadi.png";
import frame1 from "/assets/frame1.jfif";
import frame2 from "/assets/frame2.jfif";
import frame3 from "/assets/frame3.jfif";
import frame4 from "/assets/frame4.jpg";
import group1 from "/assets/group1.jfif";
import group2 from "/assets/group2.jfif";
import group3 from "/assets/group3.jfif";
import group4 from "/assets/group4.jfif";
import img from "/assets/img.png";
import logo from "/assets/logo.png";
import logo2 from "/assets/logo2.png";
import medicalIndustry from "/assets/medical-industry.jpg";
import pexels from "/assets/pexels.jpg";
import medic from "/assets/medic.jpg";
import pexels2 from "/assets/pexels2.jpg";
import property from "/assets/property.jpg";
import vector from "/assets/vector.png";
import vector2 from "/assets/vector2.png";
import black from "/assets/black.png";
import christmas from "/assets/christmas.png";
import open from "/assets/open.png";
import playstore1 from "/assets/playstore1.svg";
import playstore2 from "/assets/playstore2.svg";
import shoplogo from "/assets/shoplogo.png";
import shootingLight from "/assets/shootinglight.jpg";

export default {
  num,
  num2,
  num3,
  medic,
  num4,
  arr,
  arr2,
  ban3,
  card,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  dibest,
  black,
  christmas,
  open,
  playstore1,
  playstore2,
  shoplogo,
  ewallet,
  fadi2,
  frame1,
  frame2,
  frame3,
  frame4,
  group1,
  group2,
  group3,
  group4,
  img,
  logo,
  logo2,
  medicalIndustry,
  pexels,
  pexels2,
  property,
  vector,
  vector2,
  shootingLight,
};

const leftBtn = document.querySelectorAll(".slick-prev");
const rightBtn = document.querySelectorAll(".slick-nect");


console.log(leftBtn);
for (let i = 0; i < leftBtn.length; i++) {
  const element = leftBtn[1];
  element.style.color = "black";
}
