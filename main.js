
var butts_algos = document.querySelectorAll(".algos button");    //This variable selects all the buttons inside the .algos container using querySelectorAll.
var inp_as = document.getElementById("slider")  //This line selects the slider element with the ID slider and assigns it to the variable inp_as.
var ar_size = inp_as.value;    //This line initializes ar_size with the current value of the slider. 
var gen_ar = document.getElementById("array");
var div_sizes = [];   //div_sizes is an array to store the heights of the div elements representing array values.
var divs = [];        //divs is an array to store the div elements themselves.
var margin_size;
var cont = document.getElementById("array_container");
var sizeLabel = document.querySelector(".range-slider_value");
var speed = document.querySelectorAll("#dot-slider input");


gen_ar.addEventListener("click",generate_array);    
//Adds a click event listener to the "New Array" button, triggering the generate_array function.

inp_as.addEventListener("input", update_array_size);
//Adds an input event listener to the slider, triggering the update_array_size function whenever the slider value changes.

function generate_array()
{
    cont.innerHTML="";  //Clears any existing content inside the container (cont) before generating new array elements.

    for(var i=0; i<ar_size; i++)
    {
        div_sizes[i]=Math.floor(Math.random()*(100-5))+5;
        divs[i]=document.createElement("div");     //Create a new div element for each array element.
        cont.appendChild(divs[i]);                 //: Add the newly created div element to the container.
        margin_size=0.1;                           //margin_size is set to 0.1, which will be used to add space between the div elements.
        divs[i].style=" margin:0% " + margin_size + "%; background-color: #6B48FF; width:" + (100/ar_size-(1*margin_size)) + "%; height:" + (div_sizes[i]) + "%; display: inline-block; border-radius:0px 0px 15px 15px;  transition: 0.7s all ease-in-out;";
    }
}

// The update_array_size function updates the size of the array based on the current value of a slider input. 
// It also updates a label to display the current array size and calls a function to generate a new array 
// with the updated size.
function update_array_size()
{
    ar_size=inp_as.value;
    sizeLabel.innerHTML = "Length : " + ar_size;
    generate_array();
}

window.onload= update_array_size();
// When the window loads, update_array_size() is called, 
// initializing the array display based on the current value of the slider.

for(let i=0; i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click", runalgo);

    // This loop iterates over all buttons inside the .algos container (stored in butts_algos). 
    // For each button, it adds an event listener that calls the runalgo function when the
    // button is clicked.
}


// The disable_buttons function is designed to disable all the sorting algorithm buttons, as well 
// as the "New Array" button and the slider input. This ensures that no user interactions can occur 
// while a sorting algorithm is running
function disable_buttons()
{
    for(var i=0; i<butts_algos.length;i++)
    {
        butts_algos[i].disabled = true;
        gen_ar.disabled = true; //After the loop, the "New Array" button, referenced by gen_ar, is disabled. 
                                //This ensures that the user cannot generate a new array while a sorting algorithm is running.
        inp_as.disabled = true;
    }
}

function runalgo()
{
    disable_buttons();  //The function starts by calling disable_buttons to prevent any further user interactions while the sorting algorithm is running.
    switch(this.innerHTML)
    {
        case "<b>Bubble Sort</b>": Bubble();   //Calls the Bubble() function to perform Bubble Sort.
                            break;
        case "<b>Selection Sort</b>": Selection();
                            break;
        case "<b>Insertion Sort</b>": Insertion();
                            break;
        case "<b>Merge Sort</b>": Merge();
                            break;
        case "<b>Quick Sort</b>": Quick();
                            break;
    }
}