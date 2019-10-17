console.log('worked');

const hotdog = {
    id: '2379',
    name: 'Хот-дог куриный',
    photo1Url: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=230',
};

const firstProduct = {
    id: 2379,
    title: hotdog,
    cost: '79 Р',
    weight: '124 Г',
    content: 'Хот-дог с куриной колбаской с травами, сладким горчичным соусом, кетчупом, маринованными огурчиками, луком и халапеньо.',
    kilocalories: '226 Ккал',
    energyValue: 'Б: 9.6 г     Ж: 10.1 г     У: 24.3 г',
    footnote: '* Данные по пищевой и энергетической ценности блюд, представленные в таблице, основаны на данных лабораторных исследований, технико-технологических карт и данных по пищевой ценности, полученных от поставщиков. Различия в размерах порций, так же как региональные и сезонные различия могут влиять на пищевую ценность каждого продукта меню.<br/>Рецептура блюд периодически может меняться. Информация предоставлена на основе текущего меню и может изменяться без предварительного уведомления. ** В некоторых ресторанах KFC продукты и цены могут отличаться',
        };

const cheeseBurger = {
    id: '2382',
    name2: 'Чизбургер Де Люкс',
    photo2Url: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=230',
};

const secondProduct = {
    id: 2382,
    title: cheeseBurger,
    cost: '124 Р',
    weight: '226 Г',
    content: 'Пряный горчичный соус, кетчуп, сочное филе в оригинальной панировке, лук, сыр Чеддер, огурцы на пшеничной булочке с кукурузной посыпкой, свежий салат и ломтики помидора.',
    kilocalories: '193 Ккал',
    energyValue: 'Б: 12.6 г     Ж: 6.6 г     У: 20.7 г',
    footnote: '* Данные по пищевой и энергетической ценности блюд, представленные в таблице, основаны на данных лабораторных исследований, технико-технологических карт и данных по пищевой ценности, полученных от поставщиков. Различия в размерах порций, так же как региональные и сезонные различия могут влиять на пищевую ценность каждого продукта меню. Рецептура блюд периодически может меняться. Информация предоставлена на основе текущего меню и может изменяться без предварительного уведомления. ** В некоторых ресторанах KFC продукты и цены могут отличаться',
        };

// document -> готовый объект, предоставляемый браузером
const photo1El = document.getElementById('photo1'); // null - если ничего не нашёл, объект, если нашёл
photo1El.src = firstProduct.title.photo1Url;

const productName1El = document.getElementById('title-name');
productName1El.textContent = firstProduct.title.name;

const productCost1El = document.getElementById('cost');
productCost1El.textContent = firstProduct.cost;

const productWeight1El = document.getElementById('weight');
productWeight1El.textContent = firstProduct.weight;

const content1El = document.getElementById('content');
content1El.textContent = firstProduct.content;

const productKilocalories1El = document.getElementById('kilocalories');
productKilocalories1El.textContent = firstProduct.kilocalories;

const productEnergy1El = document.getElementById('energyValue');
productEnergy1El.textContent = firstProduct.energyValue;

const footnote1El = document.getElementById('footnote');
footnote1El.textContent = firstProduct.footnote;

// SECOND PRODUCT
const photo2El = document.getElementById('photo2'); 
photo2El.scr = secondProduct.title;

const productName2El = document.getElementById('title2-name2');
productName2El.textContent = secondProduct.name;

const productCost2El = document.getElementById('cost2');
productCost2El.textContent = secondProduct.cost;

const productWeight2El = document.getElementById('weight2');
productWeight2El.textContent = secondProduct.weight;

const content2El = document.getElementById('content2');
content2El.textContent = secondProduct.content;

const productKilocalories2El = document.getElementById('kilocalories2');
productKilocalories2El.textContent = secondProduct.kilocalories;

const productEnergy2El = document.getElementById('energyValue2');
productEnergy2El.textContent = secondProduct.energyValue;

const footnote2El = document.getElementById('footnote2');
footnote2El.textContent = secondProduct.footnote;
