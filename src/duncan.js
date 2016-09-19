function greatings(){
  alert("Welcome to Duncan's Just-In-Time Donuts!");
}

function getElement(id){
  var element = document.getElementById(id);
  return element;
}

function getNumCakeDonuts(){
  var numCakeDonuts = 0;
  numCakeDonuts = parseFloat(getElement("cakedonuts").value);
  return numCakeDonuts;
}

function getNumGlazedDonuts(){
  var numGlazedDonuts = 0;
  numGlazedDonuts = parseFloat(getElement("glazeddonuts").value);
  return numGlazedDonuts;
}

function getSubTotal(){
  const DONUTPRICE = 0.50;
  var subTotal = 0;
  subTotal = ( getNumCakeDonuts() + getNumGlazedDonuts() ) * DONUTPRICE;
  return subTotal;
}

function getTax(){
  const TAXRATE = 0.07;
  var tax = 0;
  tax = getSubTotal() * TAXRATE;
  return tax;
}

function getTotal(){
  var total = 0;
  total = getSubTotal() + getTax();
  return total;
}

function updateOrder(){
  const NICEDAY = "Have a nice day!";
  getElement("subtotal").value = "$" + getSubTotal().toFixed(2);
  getElement("tax").value = "$" + getTax().toFixed(2);
  getElement("total").value = "$" + getTotal().toFixed(2);
  getElement("niceday").innerHTML = NICEDAY;
}
