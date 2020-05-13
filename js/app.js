//These are my instance variables
const cell = document.querySelectorAll('td');
let previous_item = null;
let previous_deg = 180;
let same_item = false;

cell.forEach(item => {
    //This adds an onclick event listener that triggers the click cell to rotate
    item.addEventListener('click', function() {
        if (previous_item == null){
            item.style.animation = "rotate 3s 1";
        }
        else if(previous_item == item){
            item.style.animation = "reset 3s 1";
            same_item = true;
        }
        else{
            item.style.animation = "rotate 3s 1";
            previous_item.style.animation = "reset 3s 1";
        }
    });
    /*Event listener triggers when animation ends, changes default transformation
     of current click cell and the previous one*/
    item.addEventListener("animationend", function(){
        if(item.style.animationName == "reset" && same_item == true){
            item.style.transform = "rotate(360deg)";
            previous_item = null;
            previous_deg = 180;
            same_item = false;

        }
        else if(item.style.animationName == "rotate" && previous_item == null){
            item.style.transform = "rotate(180deg)";
            previous_item = item;
        }
        else if(item.style.animationName == "rotate" && previous_item != null && previous_deg ==180){
            item.style.transform = "rotate(180deg)";
            previous_deg = 360;
            previous_item.style.transform = "rotate("+ previous_deg + "deg)";
            previous_item = item;
        }
        else if(item.style.animationName == "rotate" && previous_item != null && previous_deg ==360){
            item.style.transform = "rotate(180deg)";
            previous_item.style.transform = "rotate("+ previous_deg + "deg)";
            previous_deg = 180;
            previous_item = item;
        }
    });
})
