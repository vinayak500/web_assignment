

document.getElementById("buttoncalculate").addEventListener("click", function(event){
   
    event.preventDefault();

    let age =  document.getElementById("age").value;
    let height =  document.getElementById("height").value;
    let weight =  document.getElementById("weight").value;
    let gender;
    let bmr;
    let activityratio = document.getElementById("activity").value;
   let calorie = 1500;

    var ele = document.getElementsByName('gender');
 
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                        gender = ele[i].value;
            }

            if(gender=='male'){
                 bmr = (10 * weight ) + (6.25 * height) - (5*age) + 5;
                 calorie = bmr * activityratio;

            }else{
                 bmr = (10 * weight ) + (6.25 * height) - (5*age) + -161;
                 calorie = bmr * activityratio;
            }
 
            console.log(calorie);
   
            var calorieView = document.getElementById("calorieView2");
            calorieView.innerHTML=calorie + " cals";
 
  });