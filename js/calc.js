var cname = document.getElementById("cname");
var peoples = document.getElementById("peoples");
var inputtip = document.getElementById("inputtip");
var billamt = document.getElementById("billamt");
var totalamt = document.getElementById("totalamt");
var iname = document.getElementById("iname");
var iqty = document.getElementById("iqty");
var iprice = document.getElementById("iprice");

changename = () =>{
    var nameval = document.getElementById("nameval");
    var peopleval = document.getElementById("peopleval");
    var tipval = document.getElementById("tipval");
    if (cname.value == "" && peoples.value == "" && inputtip.value == "") {
        nameval.innerText = "--";
        peopleval.innerText = "--";
        tipval.innerText = "--";
    } else {
        nameval.innerText = cname.value;
        peopleval.innerText = peoples.value;
        tipval.innerText = inputtip.value + " %";
        total()
    }
}

change_percentage = (val) => {
    inputtip.value = val;
    changename()
}

var item_array = [];

additem = () =>{
    var itemname = iname.value
    var itemq = iqty.value
    var itemp = iprice.value
    if(itemname == "" || itemq == "" || itemp == ""){
        alert("Please Fill The All Add Items Field")
    }else{
        let item = {
            name : itemname ,
            quantity : itemq ,
            price : itemp
        }
        item_array.push(item);
        show_item();
        iname.value = "";
        iqty.value = "";
        iprice.value ="";
    }
}

show_item = () => {
    var allitem = document.getElementById("allitem");
    allitem.innerHTML = "";
    for (let i = 0; i < item_array.length; i++) {
        const item = item_array[i];
        let itemdiv = document.createElement("div");
        itemdiv.classList.add("s1");
        itemdiv.innerHTML = `<p>${item.quantity}</p>
        <p>${item.name}</p>
        <p>Rs. ${item.price}</p>`
        allitem.appendChild(itemdiv);
    }
    total()
}


total = () => {
    let total = 0;
    for (let i = 0; i < item_array.length; i++) {
        const item = item_array[i];
        total += item.quantity * item.price;
    }
    billamt.innerText = "Rs. " + total;
    totalamt.innerText = "Rs. " + (total + (total*inputtip.value/100))
}