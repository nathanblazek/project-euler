$(document).ready(function(){
    if(lesson){
      $('#projectNumber').html(lesson.number);
      $('#projectDescription').html('<pre>'+lesson.description+'</pre>');
      $('#projectOutput').append(lesson.result);
    }
});

function output(content){
  console.log(content);
  $('#projectOutput').append(content+"\n");
}
if(lesson && lesson.result == ""){
  execute();
}