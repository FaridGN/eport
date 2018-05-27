//Responsible for generating DOM elements

//wrapper  data-error-message   data-success-message

//{"name":"div",attributes:{"key":"value"},"innerText":"djhfdskfj"}
function createElement(obj) {

    if(_isNotEmpty(obj["name"])){
    
        let _element =  document.createElement(obj["name"]);
       
        if(_isNotEmpty(obj["innerText"])){

            _element.innerText = obj["innerText"];
            
        }

       if(typeof obj["attributes"]=="object") {
    
        for(let attr in obj["attributes"]) {

               _element.setAttribute(attr,obj["attributes"][attr]);

            }

       }

       return _element;
    }
}




function _isNotEmpty(item) {

    if(item!=null && item!=undefined && item!=""){
        return true; 
    }
    else
    return false;
}