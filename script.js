$(document).ready(function() {
   
    new Typewriter('#pText', {
  		strings: ['Hello There','This is trapzcurrency.'],
		autoStart: true,
		loop:true,
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
		loop:true,
		});
}

function academics(type) {

	var html = '';
	var title='';

	if(type==1){

		title = 'Academics';

		 html='<p>1) Bharatiya Jain Sanghatana College.</p>'+
	            '<p>2) S.m.joshi jr College.</p>'+
	            '<p>3) St.Oscar convent high school.</p>';	

	}
	if(type=='2'){

		title='Skills';

		html='<p>1) Data Processing and Logic Building.</p>'+
	            '<p>2) Specifif skills : API"s,Ajax,Jquery,JSON,ARRAY,Objects.</p>'+
	            '<p>3) Proficiency in Laravel,Code-Igniter and MVC concepts.</p>'+
	            '<p>4) Database : Mysql,Yog sql.</p>';
	}
	
	var box= bootbox.alert({
		title:title,
		size:'large',
		message:html,
		closeButton:false
	})

	if(type==1){

		box.find('.modal-header').css({'background-color': '#D3D3D3' ,'color':'#36454F'})
		box.find('.modal-body').css({'background-color': '#36454F' ,'color':'#D3D3D3'})
		box.find('.modal-footer').css({'background-color': '#36454F' ,'color':'#D3D3D3'})

	}else{

		box.find('.modal-header').css({'background-color': '#0096FF' ,'color':'#ffd700'})
		box.find('.modal-body').css({'background-color': '#36454F' ,'color':'#D3D3D3'})
		box.find('.modal-footer').css({'background-color': '#36454F' ,'color':'#D3D3D3'})
	}
	
}

