
       const error = document.querySelector("#errors-holder");
       const result = document.querySelector("#result-holder");
       const checkbox = document.querySelector("#q_owns_phone");
       const button = document.querySelector('button')
       let age = 0;

       function ageChange(e){
        age = e.target.value;
      //  console.log(age);

        if(age > 0 && age < 5){
            error.innerHTML = "You need to be atleast 5 years old to participate"
            button.disabled = true;
        }
        else {
            error.innerHTML = "";
        }
        if(age>5){
            button.disabled = false;
        }

    }

    

    function handleSubmit(e){
        e.preventDefault()
      //  console.log(age);
     //   console.log(checkbox.value)
        if(age === 0){
            error.innerHTML = "Please choose age";
        }
        else  {
           
            if(checkbox.value === "on" ){
            
                if(age < 13){
                    result.innerHTML = "You are too young to have a phone";
                }
                else if (age >= 13){
                    result.innerHTML = "Use your phone in moderation";
                }
    
            }
            else {
                if(age < 13){
                    result.innerHTML = "You will get a phone soon";
                }
                else if (age >= 13){
                    result.innerHTML = "You should get a phone";
                }
            }

        }

       
    }