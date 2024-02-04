"use strict"

const container = document.querySelectorAll('.container');
container.forEach((containerValue) => {
    containerValue.style.cssText = 'max-width: 1200px;margin: 0 auto;'
});

const header = document.querySelector('header');
header.style.cssText = 'display: flex;'

const logo = header.querySelector('.logo');
logo.style.cssText = 'width: 150px;height: 40px;flex-shrink: 0;'

const mainMenu = header.querySelector('.main-menu');
mainMenu.style.cssText = 'display: flex;justify-content: space-evenly;'

const items = document.querySelector('.items');
items.style.cssText = 'display: flex;gap: 40px;padding-left: 165px;'

const item = document.querySelectorAll('.item');
item.forEach((itemValue) => {
    itemValue.style.cssText = 'display: flex;'
})

const a = document.querySelectorAll('a');
a.forEach((aValue) => {
    aValue.style.cssText = 'width: 66px;color: #222;font-family: Work Sans;font-size: 15px;font-style: normal;font-weight: 400;line-height: 10px; /* 66.667% */text-decoration: none;'
})

const sec1 = document.querySelector('.sec-1');
sec1.style.cssText = 'display: flex;flex-direction: row;align-items: center;justify-content: space-between;'

const h1 = document.querySelectorAll('.h1');
h1.forEach((h1Value) => {
    h1Value.style.cssText = ' width: 306px;color: #333;font-family: Work Sans;font-size: 55px;font-style: normal;font-weight: 400;line-height: 60px;'
})

const p1 = document.querySelectorAll('.p1');
p1.forEach((p1Value) => {
    p1Value.style.cssText = ' width: 434px;color: #333;font-family: Work Sans;font-size: 24px;font-style: normal;font-weight: 400;line-height: 35px;'
})

const sec9 = document.querySelector('.sec-9');
sec9.style.cssText = 'display: flex;flex-direction: row;align-items: center;justify-content: space-between'

const how = document.querySelector('.how');
how.style.cssText = 'display: flex;justify-content: center;padding-top: 88px;'

const h2 = document.querySelector('.h2');
h2.style.cssText = 'width: 291px;color: #333;text-align: center;font-family: Work Sans;font-size: 45px;font-style: normal;font-weight: 400;line-height: 50px;'

const sec2 = document.querySelector('.sec-2');
sec2.style.cssText = 'display: flex;flex-direction: row;align-items:center;text-align: center;justify-content: space-evenly;'

const card1 = document.querySelectorAll('.card1');
card1.forEach((cardValue) => {
    cardValue.style.cssText = 'width: 288px; height: 327px;flex-shrink: 0;background: #FFF;box-shadow: 0px 0px 10px 0px #B7B7B7;'
})

const img1 = document.querySelectorAll('.img1');
img1.forEach((imgValue) => {
    imgValue.style.cssText = 'padding-top:42px ;'
})

const m1 = document.querySelectorAll('.m1');
m1.forEach((m1Value) => {
    m1Value.style.cssText = 'color: #333;text-align: center;font-family: Work Sans;font-size: 17px;font-style: normal;font-weight: 400;line-height: 20px; gap: 20px;padding-top: 49px;'
})


const m2 = document.querySelectorAll('.m2');
m2.forEach((m2Value) => {m2Value.style.cssText = 'color: #333;text-align: center;font-family: Work Sans;font-size: 16px;font-style: normal;font-weight: 400;line-height: 25px; padding-top: 31px;'
})

const bigCard = document.querySelector('.big-card');
bigCard.style.cssText = 'height: 371px; background-color: #31C5A1; margin-top: 40px;'
 
const text = document.querySelector('.text');
text.style.cssText = 'padding-top: 131px;display: flex;text-align: center;align-items:center;justify-content: center;flex-direction: column;'

const h3 = document.querySelector('h3');
h3.style.cssText = 'width: 555px;color: #FFF;text-align: center;font-family: Work Sans;font-size: 30px;font-style: normal;font-weight: 400;line-height: 35px;'

const footNav = document.querySelector('.footer-navigation');
footNav.style.cssText = 'display: flex;padding: 60px 120px 24px 120px;justify-content: space-between;align-items: flex-start;align-self: stretch;flex-direction: row;'

const footItems = document.querySelectorAll('.foot_items');
footItems.style.cssText = ' display: flex;width: 200px;flex-direction: column;align-items: flex-start;gap: 8px;'

const footItem = document.querySelectorAll('.foot-item');
footItem.forEach((footValue) => {
    footValue.style.cssText = 'list-style: none; text-decoration: none;'
})

const itemA = document.querySelectorAll((aValue) => {
    aValue.style.cssText = '    width: 167px;color: #333;font-family: Work Sans;font-size: 17px;font-style: normal;font-weight: 400;line-height: 30px; text-decoration: none;'
})