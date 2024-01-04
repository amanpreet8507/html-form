 const itemForm = document.getElementById('itemForm');


 itemForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const nameVal = event.target.name.value;
    const emailVal = event.target.email.value;
    const passwordVal = event.target.password.value;
    const confirmPasswordVal = event.target.confirmPassword.value;
    const subscribedVal = event.target.subscribeEmails.value;

    if(passwordVal !== confirmPasswordVal){
        alert('Passwords do not match!');
    } else{
        console.log(` Name: ${nameVal} \n Email: ${emailVal} \n Email Upadates: ${subscribedVal}`)
    }    

 })
