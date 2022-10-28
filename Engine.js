// Start out by picking elements of the DOM
let result =  document.querySelector('.result');
let one = document.querySelectorAll('.square');
// make one a true array so that I can loop through it.
let one1 = Array.from(one);


//Loop through one1 and add eventistener for 'click' event
for(let choke of one1){
    //choke is just a variable which is listened for
    // addEventLister takes 2 arguements 'click' and function abner. Function abner also takes a function called 'random_item()'
    choke.addEventListener('click',abner);
    function abner(){
// This function makes sure that 1 item is picked from the array 'items'
        function random_item(items){ 
            return items[Math.floor(Math.random()*items.length)];    
            }
            
            const items = ['Red', 'Blue', 'Orange', 'Crimson', 'Gold','Violet', 'Purple','Beige', 'Silver', 'Brown','Indigo','White'];
            let outer = random_item(items);
            //console.log(outer)
// $ sign is used here as a Template Literal
        choke.style.backgroundColor =`${outer}`;
        result.innerHTML=`<h3>${outer} !!</h3>`;
    }
    //console.log() deliberate
    console.log(choke);
}

// Reset the Game when the h3 element is clicked/tapped
result.addEventListener('click',()=>{
    location.reload(true);
})





