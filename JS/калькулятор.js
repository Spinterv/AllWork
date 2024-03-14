// ---------------------Задание1---------------------
// "use strict";
var btn11 = document.querySelector('.button1_1');
var btn12 = document.querySelector('.button1_2');


btn11.onclick = () =>{
	var chislo1 = document.querySelector('#text11').value;
	var chislo2 = document.querySelector('#text12').value;
	var sum  = Number(chislo1) + Number(chislo2);
	document.querySelector('#text13').value = sum;

};
btn12.onclick = () =>{
	var chislo1 = document.querySelector('#text11').value;
	var chislo2 = document.querySelector('#text12').value;
	var sum  = Number(chislo1) * Number(chislo2);
	document.querySelector('#text13').value = sum;
};


// ---------------------Задание2---------------------
var btn21 = document.querySelector('.button2_1');

btn21.onclick = () =>{
	var chislo1 = document.querySelector('#text21').value;
	var chislo2 = document.querySelector('#text22').value;
	if ((chislo1 % 2 == 0) && (chislo2 % 2 == 0)) {
		document.querySelector('#text23').value = 2;
	} else if ((chislo1 % 3 == 0) && (chislo2 % 3 == 0)) {
		document.querySelector('#text23').value = 3;
	} else if ((chislo1 % 4 == 0) && (chislo2 % 4 == 0)) {
		document.querySelector('#text23').value = 4;
	} else if ((chislo1 % 5 == 0) && (chislo2 % 5 == 0)) {
		document.querySelector('#text23').value = 5;
	} else if ((chislo1 % 6 == 0) && (chislo2 % 6 == 0)) {
		document.querySelector('#text23').value = 6;
	} else if ((chislo1 % 7 == 0) && (chislo2 % 7 == 0)) {
		document.querySelector('#text23').value = 7;
	} else if ((chislo1 % 8 == 0) && (chislo2 % 8 == 0)) {
		document.querySelector('#text23').value = 8;
	} else if ((chislo1 % 9 == 0) && (chislo2 % 9 == 0)) {
		document.querySelector('#text23').value = 9;
	} else {
		document.querySelector('#text23').value = "Нет такого числа";
	}
};

// ---------------------Задание3---------------------
var btn31 = document.querySelector('.button3_1');

btn31.onclick = function(){
	let num1 = 0;
	let num2 = 0;
	let num3 = 0;
	let num4 = 0;
	let num5 = 0;
var marray = [];
	let str = document.querySelector('#text31').value;
	let arr1 = str.split(' '); 
	let arr2 = str.split(''); 
	let arr3 = str.split(''); 
	let arr3_1 = str.split('').reduce((acc, item)=> ({
		...acc, [item]:((acc[item]||0)+ 1)  }), {})
		
	for (var i = 0; i < arr1.length; i++) {
		num1 += 1;
	}
	
	for (var i = 0; i < arr2.length; i++) {
		num2 += 1;
	}

	document.querySelector('#text32').value = num1;// слов
	document.querySelector('#text33').value = num2;// символов
	document.querySelector('#text34').value = num2 - (num1 - 1);// символов без пробелов
	document.querySelector('#text35').innerHTML = JSON.stringify(arr3_1);

};

// ---------------------Задание4---------------------
var btn41 = document.querySelector('.button4_1');
var randomm = Math.floor(Math.random() * 101);

btn41.onclick = () =>{
	var chislo1 = document.querySelector('#text41').value;
	if (chislo1 < randomm) {
		document.querySelector('#text43').value = "Введите число побольше";
	} else {
		document.querySelector('#text43').value = "Введите число поменьше";
	}
	if (chislo1 == randomm) {
	document.querySelector('#text43').value = "ВЫ ПОБЕДИТЕЛЬ"
	}
};

// ---------------------Задание5---------------------
var cells = Array.from(document.getElementsByClassName('yacheyka'));

const secret1 = Math.ceil(Math.random() * 101);
const secret2 = Math.ceil(Math.random() * 101);
const secret3 = Math.ceil(Math.random() * 101); 
const secret4 = Math.ceil(Math.random() * 101);
const secret5 = Math.ceil(Math.random() * 101);
const secret6 = Math.ceil(Math.random() * 101);
const secret7 = Math.ceil(Math.random() * 101);
const secret8 = Math.ceil(Math.random() * 101);
const secret9 = Math.ceil(Math.random() * 101);
const secret10 = Math.ceil(Math.random() * 101);

for (let i = 0; i < cells.length; i++) {
	
	cells[i].addEventListener('click', () =>{
		cells[i].style.color = 'greenyellow';
		
	const num = i + 1;

	const diff1 = (secret1 < num) - (secret1 > num);
	const diff2 = (secret2 < num) - (secret2 > num);
	const diff3 = (secret3 < num) - (secret3 > num);
	const diff4 = (secret4 < num) - (secret4 > num);
	const diff5 = (secret5 < num) - (secret5 > num);
	const diff6 = (secret6 < num) - (secret6 > num);
	const diff7 = (secret7 < num) - (secret7 > num);
	const diff8 = (secret8 < num) - (secret8 > num);
	const diff9 = (secret9 < num) - (secret9 > num);
	const diff10 = (secret10 < num) - (secret10 > num);
		
		switch (diff1) {
		    case 0:
		    	cells[i].style.color = 'red';
		    break;
 		}
	
		switch (diff2) {
		    case 0:
			
		    	cells[i].style.color = 'red';
		    break;
		}
		switch (diff3) {
		    case 0:
			
		    	cells[i].style.color = 'red';
		    break;
		}
		
		switch (diff4) {
		    case 0:
			
		    	cells[i].style.color = 'red';
		   	break;
		}
		
		switch (diff5) {
		    case 0:
			
		    	cells[i].style.color = 'red';
		    break;
		}
		
		switch (diff6) {
		    case 0:
			
		    	cells[i].style.color = 'red';
		    break;
		}
		
		switch (diff7) {
		    case 0:
			
		    	cells[i].style.color = 'red';
		    break;	
		}
		
		switch (diff8) {
		    case 0:
			
		    	cells[i].style.color = 'red';
		    break;	
		}
		
		switch (diff9) {
		    case 0:
			
		    	cells[i].style.color = 'red';
		    break;	
		}
		
		switch (diff10) {
		    case 0:
			
		    	cells[i].style.color = 'red';
		    break;
		}
		
	const title = document.getElementById('title');
    title.innerHTML = `Вы выбрали: ${secret1}, ${secret2}, ${secret3}, ${secret4}, ${secret5}, ${secret6}, ${secret7}, ${secret8}, ${secret9}, ${secret10}.`;
    title.style.color = 'white';
	})
}
// ---------------------Задание6---------------------
Date.prototype.daysInMonth = function() {
	return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

var denki = new Date().daysInMonth();
let Data = new Date();
var Day = Data.getDate();

for (let i = 1; i < denki + 1; i++){
	const lis = document.createElement("li");// создаем заголовок <li>
	if (i == Day){
		lis.className = 'segodnya';
		
	};
		
	lis.textContent = i; // добавляем в элемент li текстовый узел
	document.getElementById('mesyac').appendChild(lis);
};

// ---------------------Задание7---------------------

var menu = document.querySelectorAll('a');
var vkladki = document.querySelectorAll('.tabs div');

for (let i = 0; i < menu.length; i++) {
	menu[i].addEventListener('click', function(){
		for (let j = 0; j < menu.length; j++) {
			if (menu[j].classList == 'active'){
				menu[j].classList.remove('active');
				vkladki[j].classList.remove('active');
			}
		}
		menu[i].classList.add('active');
		vkladki[i].classList.add('active');
	});
};

// ---------------------Задание8---------------------
let texts = [];
let arraay = document.querySelectorAll('#el8');

var btn81 = document.querySelector('.button8_1');
var btn82 = document.querySelector('.button8_2');
let i = arraay.length + 1;
let k = 0;
btn81.onclick = () =>{ //создание записи (li)
	if (i <= 10 ){
	const lis8 = document.createElement("li");// создаем заголовок <li>
	lis8.setAttribute("id", "el8");	
	lis8.setAttribute("data-key", i);
	lis8.setAttribute("onclick", "locationka(this)");		
	lis8.textContent = 'запись ' + i; // добавляем в элемент li текстовый узел
	document.getElementById('notes').appendChild(lis8);
	arraay.length += 1;
	i += 1;
	} else { alert("Максимальное число записей - 10!")
	};
	
};

btn82.onclick = () =>{ //ввод в texts
	let arraay = document.querySelectorAll('#el8');
	const zanyato = document.querySelectorAll("#el8");
	if (texts.length != arraay.length) {
		var text81 = document.querySelector('.text881').value;
		texts.push(text81);
		document.querySelector('.text881').value = '';
		zanyato[k].setAttribute("class", "zanyato");
		alert("Значение введено!")
		k+=1;	
	} else {
		alert("Места закончились!\nОбновите страницу чтобы очистить память!")
	};
};

function locationka(a){
	let data = a.getAttribute("data-key");
	document.querySelector('.text881').value = texts[data-1];
};
// ---------------------Задание9---------------------
let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');

let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();

draw(body, year, month);

function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	let monthh = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сан','Окт','Ноя','Дек'];
	let info = calendar.querySelector('.info');

	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);
	
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums);
	info.innerHTML = monthh[month] + ' ' + year;


	var Day9 = date.getDate();
	var todayM = date.getMonth()+1;

	todays = document.querySelectorAll('td');
	todays.forEach(function(td) {
		if (td.textContent == Day9 && month+1 == todayM) {
			td.className = 'segodnya9';
		}
	})
}

function createTable(parent, arr) {
	parent.textContent = '';
	let cells = [];
	
	for (let sub of arr) {
		let tr = document.createElement('tr');
		
		for (let num of sub) {
			let td = document.createElement('td');
			td.textContent = num;
			tr.appendChild(td);
			
			cells.push(td);
		}
		
		parent.appendChild(tr);
	}
	
	return cells;
}

function normalize(arr, left, right) {
	for (let i = 0; i < left; i++) {
		arr.unshift('');
	}
	for (var i = 0; i < right; i++) {
		arr.push('');
	}
	
	return arr;
}

function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 1);
	let num  = date.getDay();
	
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}

function getLastWeekDay(year, month) {
	let date = new Date(year, month + 1, 0);
	let num  = date.getDay();
	
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}

function getLastDay(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}

function range(count) {
	let arr = [];
	
	for (let i = 1; i <= count; i++) {
		arr.push(i);
	}
	
	return arr;
}

function chunk(arr, n) {
	let result = [];
	let count = Math.ceil(arr.length / n);
	
	for (let i = 0; i < count; i++) {
		let elems = arr.splice(0, n);
		result.push(elems);
	}
	
	return result;
}

function getNextYear(year, month){
	if(month == 11){
		return year+1;
	} else {
		return year;
	}

}

function getNextMonth(month){
	if(month == 11){
		return 0;
	} else {
		return month+1;
	}

}

function getPrevYear(year, month){
	if(month == 0){
		return year-1;
	} else {
		return year;
	}

}

function getPrevMonth(month){
	if(month == 0){
		return 0;
	} else {
		return month-1;
	}

}

next.addEventListener('click', function() {
	body.innerHTML =  '';
	draw(body, getNextYear(year, month), getNextMonth(month));
	year = getNextYear(year, month);
	month = getNextMonth(month);
});

prev.addEventListener('click', function() {
	body.innerHTML =  '';
	draw(body, getPrevYear(year, month), getPrevMonth(month));
	year = getPrevYear(year, month);
	month = getPrevMonth(month);
});

// ---------------------Индивидуальное задание---------------------

var btn101 = document.querySelector('.button10_1');
let text10 = document.querySelector('#individ');

btn101.onclick = () =>{
	console.log(text10.length)
	if (text10.value !== ''){
		alert("Вы ввели " + text10.value);
	} else {
		alert("Вы ничего не ввели");
	}
}

const massiv = [1,2,3,4,5,6,7,8];
const result = [];
const count = 2;

for (let s = 0, e = count; s < massiv.length; s += count, e += count)
    result.push(massiv.slice(s, e));
console.log(result)