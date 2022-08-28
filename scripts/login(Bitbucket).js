
// Made By Pranshu Singh Bisht (fw20_0423)

let container = document.getElementById("container");

let div = document.createElement('div');

let h1 = document.createElement('h1');
h1.innerText="Login to Codecov";

let p = document.createElement('p');
p.innerText = "You’ll be taken to your repo provider to authenticate";

let tapGit = document.createElement('div');
tapGit.setAttribute("id","tapGit");

let l1 = document.createElement('div');
l1.setAttribute("id","l1");
l1.setAttribute("class","line");
l1.innerHTML=`<hr>`;

let but_anc = document.createElement('div');
but_anc.setAttribute("id","but-anc");

let div1_a = document.createElement('div');
let a = document.createElement('a');
a.innerHTML = `<img src="https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/bitbucket/bitbucket-icon.svg" alt="">
Login with Bitbucket`;

let div2_a = document.createElement('div');
let span = document.createElement('span');
span.setAttribute("class","material-symbols-outlined");
span.innerHTML=`expand_more`;

let l2 = document.createElement('div');
l2.setAttribute("id","l2");
l2.setAttribute("class","line");
l2.innerHTML=`<hr><br>`;

let div_p = document.createElement('div');
div_p.innerHTML= `<p>If you are using GitHub Enterprise, GitLab EE/CE, or <br> Bitbucket Server please view our <a href="">self hosted</a> 
option.</p>`

div1_a.append(a);
div2_a.append(span);
but_anc.append(div1_a,div2_a);
tapGit.append(l1,but_anc,l2,div_p);
div.append(h1,p,tapGit);
container.append(div);