import './main.css'


let colors = ['red','blue','green','black','gray','yellow','orange','perpule','aqua','greenyellow']

let interval = setInterval(() => {
	let color = colors[Math.floor(Math.random() * colors.length)]
	document.querySelector('.jumbotron').style.background = color
},1500)
