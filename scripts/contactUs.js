let upper = document.getElementById("upper");
let h2 = document.createElement("h2");
h2.innerHTML = `Get In Touch <span>.</span>`;
let nextLine = document.createElement("br");
let p1 = document.createElement("p");
p1.innerText = 'Fill in the form to the right to get in touch with someone on our team, and we will reach out shortly.';
let p2 = document.createElement("p");
p2.innerHTML = `If you are seeking support please visit our <a href="" style="text-decoration:none; color:rgb(255, 0, 119);;"> support portal </a> before reaching out directly.`;
upper.append(h2, nextLine, p1, nextLine, p2);

let obj = {};
document.getElementById('btn').addEventListener('click', getMessage);

async function getMessage(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let name = `${firstName} ${lastName}`;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let contactReason = document.getElementById("contactReason").value;
    let message = document.getElementById("msg").value;

    obj = {
        name,
        email,
        phoneNumber,
        contactReason,
        message
    }
    console.log('obj:', obj)

    let res = await fetch(`http://localhost:3000/posts`, {
        method: 'POST',

        body: JSON.stringify(obj),

        headers: {
            'Content-Type': "application/json",
        },

    })
    let data = await res.json();
    console.log('data:', data)
}
