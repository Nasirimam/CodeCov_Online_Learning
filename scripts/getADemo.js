    // form = document.querySelector("form")
    let popDiv = document.getElementById("popup1");
    let popText = document.getElementById("popAlert");


    document.getElementById('submit').addEventListener('click',getDetails);

    let obj = {};
    async function getDetails(event) {
        event.preventDefault();

        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let name = `${firstName} ${lastName}`;
        let email = document.getElementById('email').value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let setPassword = document.getElementById("setPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if(firstName === "" || lastName === ""|| email === "" || phoneNumber === "" ){
            visiblePOP()
            popText.innerHTML=`<br>All fields Are Mandatory<br><br>`
            return;
        }
        else if(setPassword === "" || confirmPassword === "" && setPassword==="" && confirmPassword === ""){
            visiblePOP()
            popText.innerHTML=`<br>Please Fill Both Password Inputs<br><br>`
            return;
        }
        else if( setPassword!=="" && confirmPassword === "" || setPassword === "" && confirmPassword !== ""){
            visiblePOP()
            popText.innerHTML=`<br>Please Fill Password Twice<br><br>`
            return;

        }
        else if(setPassword !== "" && confirmPassword !== ""){

            if(setPassword!==confirmPassword){
                visiblePOP();
                popText.innerHTML=`<br>Enter Your Password Carefully<br>`;
            }
            else if(setPassword === confirmPassword){
                    obj = {
                    name,
                    email,
                    phoneNumber,
                    confirmPassword,   
                }
                localStorage.setItem("userData",JSON.stringify(obj));
                visiblePOP();
                popText.innerHTML=`<br>
                <p style="display: block;">Register Successfully</p>
                <br>
                <button onclick="goToLogin()" id="goToLogin">Go to Login</button>`

                }
let res = await fetch(`http://localhost:3000/users`, {
method: 'POST',

body: JSON.stringify(obj),

headers: {
    'Content-Type': "application/json; charset=UTF-8",
},
} )
             
                let data = await res.json();
                console.log('data:', data);
            }
}
        
    function visiblePOP(){
        popDiv.style.visibility = "visible";
        popDiv.style.opacity = "1";
    }

    // close popUp
    close_popUp = document.getElementById("close");
    close_popUp.addEventListener("click", backPage)
    function backPage(){
        // window.history.go(-1);
        popDiv.style.visibility = "hidden";
        popDiv.style.opacity = "0";
    }

    goToLogin = () => {
        // console.log(12)
        window.location.href="./login.html"
    }


