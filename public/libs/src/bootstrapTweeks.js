$(function(){ // let all dom elements are loaded
  $('#createNewProject').on('hide.bs.modal', e => e.currentTarget.children[0].children[0].children[1].reset());
  $('#createNewProject').ready(() => $('#create_app_container')[0].reset());
  $('#updateProject').on('hide.bs.modal', e => e.currentTarget.children[0].children[0].children[1].reset());

  const form = $('#create_app_container');
  form.on('submit', e => {
    e.preventDefault();

    let errorMsg = [];
    form.serializeArray().forEach(field => {
      switch (field.name) {
        case "title": if(!field.value) errorMsg.push("Needs Title"); break; 
        case "description": if(!field.value) errorMsg.push("Needs Description"); break; 
        case "repository": if(!field.value) errorMsg.push("Needs Repository"); break; 
        case "website": if(!field.value) errorMsg.push("Needs Website"); break; 
      }
    });
    
    if(!createFormControlIconFile.value) errorMsg.push("Needs Icon"); 

    
    errorMsg.length && alert("ERROR: "+JSON.stringify(errorMsg));
    
    !errorMsg.length && e.target.submit()
  })

});