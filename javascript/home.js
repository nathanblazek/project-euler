$(document).ready(function(){
    if(lesson){
      $('#projectNumber').html(lesson.number);
      $('#projectDescription').html('<pre>'+lesson.description+'</pre>');
      $('#projectOutput').append(lesson.output);
    }
});

function output(content){
  console.log(content);
  $('#projectOutput').append(content+"\n");
}
if(lesson){
  execute();
}