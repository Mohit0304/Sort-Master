var delay_time = 1000/(Math.floor(ar_size/10));
var c_delay = 0;
var speed_inp = 0;    //Initially set to 0, this variable will store the speed value chosen by the user.

for(let i=0; i<speed.length;i++)   //This loop adds an event listener to each element in the speed array. 
{                                  //The speed array presumably contains elements (like buttons) that the user can click to select a speed.
    speed[i].addEventListener("click", speedModule);
}

function speedModule()    //This function is called when a speed button is clicked
{
    speed_inp = this.value;    // This line sets the speed_inp variable to the value of the clicked element (button). 
    delay_time = 10000/(Math.floor(ar_size/10)*speed_inp);
}

function div_update(divss, height, color)    //Schedules a function to run after a cumulative delay (c_delay).
{
    window.setTimeout(function(){
        divss.style = "margin: 0%"+ margin_size + "%; width:" + (100/ar_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + "; border-radius:0px 0px 15px 15px;  transition: 0.6s all ease-in-out;";
    } , c_delay+=delay_time);
    
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0; i<butts_algos.length; i++)
        {
            butts_algos[i].disabled = false;
            gen_ar.disabled = false;
            inp_as.disabled = false;
        }
    }, c_delay+=delay_time);
}