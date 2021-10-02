window.addEventListener('scroll', () => {
	let getScroll = window.scrollY;

let section = document.querySelectorAll('section');
let btn = document.querySelectorAll('.btn');
section.forEach((el, index) => {
	if(el.offsetTop - document.querySelector('.content').clientHeight <= getScroll){
		btn.forEach((el, index) => {
			if(el.classList.contains('active')){
				el.classList.remove('active');
			}
		})
		console.log(btn[index].classList.add('active'));
	}
	
})

})