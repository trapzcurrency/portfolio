$(document).ready(function() {
   

        new Typewriter('#pText', {
  		strings: ['Hello There','This is trapzcurrency.'],
		autoStart: true,
		});

       $('#skilsTransition').click(function(){
       		$('#skilsTransition').text('');
       		typing();
       })

})

function typing(){
	
	new Typewriter('#skilsTransition', {
  		strings: ['	"Highly skilled web developer with expertise in a powerful toolkit of technologies: PHP for server-side scripting, JavaScript for dynamic interactivity, HTML5 for structuring content, CSS for elegant design, and MySQL for efficient data management. Proficient in creating responsive and interactive web applications that blend functionality and aesthetics, delivering seamless user experiences."'],
		autoStart: true,
		delay: 75,
		});
}

