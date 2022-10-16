function heartbeat(){
 
 let email = 
prompt(`Would you like to recieve daily update about our product.
If yes, kindly enter your email.`)
if(email === "" || email === null){
alert(`Thanks,
 You did not enter any value.`);
}else {
alert( `Your Email: ` + email + ` has been successfully submitted.
Thanks for providing your email.`);
}
}

function getValue(){
let val = document.getElementById("cakes").value;

if(val === "Chocolate"){
let amount1 = "#4000";
document.getElementById("cakescreen").src ="https://i.ibb.co/5xRwB2P/chocolate.jpg";
document.getElementById("pricedisplay").innerHTML =
`The price of ${val} cake is ${amount1}`;
}
else if(val === "Sponge"){
let amount2 = "#3000";
document.getElementById("cakescreen").src="https://i.ibb.co/Srz7XR0/Sponge.jpg";
document.getElementById("pricedisplay").innerHTML = 
`The price of a ${val} cake  is ${amount2}`;
}
else if(val === "Red Velvet"){
let amount3 = "#3500";
document.getElementById("cakescreen").src="https://i.ibb.co/wJX5RtV/Red-Velvet.jpg";
document.getElementById("pricedisplay").innerHTML = 
`The price of a ${val} cake is ${amount3}`;
}
else if(val === "Cupcakes"){
let amount4 = "#150";
document.getElementById("cakescreen").src="https://i.ibb.co/tbSH65t/cup.jpg";
document.getElementById("pricedisplay").innerHTML =
 `The price of a Cupcake is ${amount4}`;
}
else if(val === "Foil Cake"){
let amount3 = "#1500";
document.getElementById("cakescreen").src=src="https://i.ibb.co/tZq3qQw/Foil.png";
document.getElementById("pricedisplay").innerHTML = 
`The price of a ${val} cake is ${amount3}`;
}
else{
document.getElementById("cakescreen").src=" ";
document.getElementById("pricedisplay").innerHTML = " ";
}
}
/*
function getDate(){
let day = new Date().getHours();
if(day < 12){
document.getElementById("datevaled").innerHTML = 
"Good Morning";
}
else if(day < 19){
document.getElementById("dateval").innerHTML =
"Good Aftenoon";
}

else{
document.getElementById("dateval").innerHTML =
"Good Evening";
}
}

getDate();

*/
function aboutUs(){
alert(
`Meenah Cakes is a full service bakery that consistently delivers superior quality in cakes and desserts.
We've been in the business of delighting taste buds for over 2 years.`
)
}

function privacyPolicy(){
alert(`
MEENAH CAKES is committed to respecting the privacy rights of visitors to its website and its app.
This Privacy Policy aims to give you information on how MEENAH CAKE Limited collects and processes your personal data through your use of this website or our app, including and information you may provide through this website or our app when you purchase a product or service, sign up to our marketing emails or take part in a competition. 
This website is not intended for children and we do not knowingly collect data relating to children.`
)
}

function termsAndConditions(){
alert(
`By ordering from Meenah Cakes, you agree to be legally bound by these Terms and Conditions.Cakes and Cupcakes: We require a full prepayment for products featured on the website to confirm the order at least 5 working days in advance. Wedding Cakes and Desert Table: We require 50% deposit and is due 4 weeks prior to the cake delivery as specified on your order form.  The final balance specified on the invoice must be paid by the Buyer at least 2 weeks before the delivery date. A reminder of the remaining amount will be emailed to you no less than 2 weeks before the payment due date. Failure to complete payment 2 weeks before the delivery date may result in your order being cancelled and your date being made available to someone else.Payment Methods: Direct Transfer, Paypal and Bitcoin. `
)
}

function whitePaper(){
alert(
`Our Guarantee Insurance Schemes:
        [Meenah(2019)]
        [Meenah(2020)]
        

`
)
}

function contactUs(){
alert(
`Phone: +234 9016789057,
Gmail: aminatekungomi@gmail.com,
View the third slide to see more of our details.
`
)
}

let timeOut = setTimeout(function(){
  let email = 
prompt(`Would you like to recieve daily update about our product.
If yes, kindly enter your email.`)
if(email === "" || email === null){
alert(`Thanks,
 You did not enter any value.`);
}else {
alert( `Your Email: ` + email + ` has been successfully submitted.
Thanks for providing your email.`);
}
 },10000);

console.log(timeOut) 



function sendButton(){
 let val1 = document.getElementById("demo1").value;
  alert(`${val1}, your message has been sent successfully and will be replied to in a short while.`)
 }
 function  sendIcon() {
  let val2 = document.getElementById("demo2").value;
  alert(`Your email ${val2}, has been sent successfully submitted.`)
 }