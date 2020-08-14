document.addEventListener("DOMContentLoaded", function(){
		Typed.new(".entry_typewritter", {
			strings: ["Hello, I design for meaningful experiences."],
			typeSpeed: 40,
      loop: false,
		});
	});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget)
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('active')
	})
		tabs.forEach(tab => {
			tab.classList.remove('active')
	})
		tab.classList.add('active')
		target.classList.add('active')
	})
})


//----------tab change------------//

// $(function() {
//     $('.tabs_container').tabs_container();
//
//     $("#go-to-design-sprint").click(function() {
//         $('.tabs_container').tabs_container('option', 'active', 3); //index 2 mean tab 3
//     });
// });
