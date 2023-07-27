    const btn=document.querySelector('.btn');
    btn.addEventListener('click', function(){

    let height=document.querySelector('.height').value;
    let weight=document.querySelector('.weight').value;

    if(height == '' || weight == ''){
        alert('Please fill out the input fields!');
        return;
    }

    height= height/100;
    let bmi= (weight/ (height*height));
    bmi=bmi.toFixed(2);
    document.querySelector('.answer').innerHTML= bmi;
    
    if (bmi < 18.5) {
        document.querySelector('.comment').innerHTML="Comment: you are underweight.";
      } else 
        if (bmi>= 18.5 && bmi<= 24.9){
          document.querySelector('.comment').innerHTML="Comment: you have a normal weight.";
        } else {
          if (bmi > 24.9){
           document.querySelector('.comment').innerHTML="Comment: you are overweight.";
           }}
      


    })

  
    