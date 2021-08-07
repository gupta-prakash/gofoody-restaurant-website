let table = document.getElementById("table");
let meal = document.getElementById("meal");
let catering = document.getElementById("catering");

table.style.display = "none";
meal.style.display = "none";
catering.style.display = "none";

document.body.addEventListener('change', function (e) {
    let target = e.target;
    switch (target.id) {
        case 'order_table':
            table.style.display = "block";
            meal.style.display = "none";
            catering.style.display = "none";
            break;

        case 'order_meal':
            table.style.display = "none";
            meal.style.display = "block";
            catering.style.display = "none";
            break;

        case 'order_catering':
            table.style.display = "none";
            meal.style.display = "none";
            catering.style.display = "block";
            break;
    }
});

let desserts_custom = 0;
let soups_custom = 0;
let rice_custom = 0;
let roti_custom = 0;
let noodles_custom = 0;
let pizzas_custom = 0;
let burgers_custom = 0;
let sandwiches_custom = 0;
let lamb_custom = 0;
let fish_custom = 0;
let prawns_custom = 0;
let chicken_custom = 0;
let appetizers_custom = 0;
let mocktails_custom = 0;
let beverages_custom = 0;
let thai_soup_custom = 0;
let thai_appetizers_custom = 0;
let thai_salads_custom = 0;
let thai_main_course_custom = 0;
let thai_rice_noodles_custom = 0;
let chinese_soups_custom = 0;
let chinese_dimsums_custom = 0;
let local_food_custom = 0;
let hot_combos_custom = 0;
let foody_andaaz_custom = 0;
// *********************** to add customize meal options on clicking customize *********************8
function desserts_customize() {
    desserts_custom = 1;
    document.getElementById("desserts_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity1" placeholder="carbs"><input type="number" id="protein_qauntity1" placeholder="protein"><input type="number" id="fat_qauntity1" placeholder="fat"><input type="number" id="calories_qauntity1" placeholder="calories"><input type="number" id="sugar_qauntity1" placeholder="sugar"></div>')
}
function rice_customize() {
    rice_custom = 1;
    document.getElementById("rice_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity3" placeholder="carbs"><input type="number" id="protein_qauntity3" placeholder="protein"><input type="number" id="fat_qauntity3" placeholder="fat"><input type="number" id="calories_qauntity3" placeholder="calories"><input type="number" id="sugar_qauntity3" placeholder="sugar"></div>')
}
function roti_customize() {
    roti_custom = 1;
    document.getElementById("roti_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity4" placeholder="carbs"><input type="number" id="protein_qauntity4" placeholder="protein"><input type="number" id="fat_qauntity4" placeholder="fat"><input type="number" id="calories_qauntity4" placeholder="calories"><input type="number" id="sugar_qauntity4" placeholder="sugar"></div>')
}
function soups_customize() {
    soups_custom = 1;
    document.getElementById("soups_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity2" placeholder="carbs"><input type="number" id="protein_qauntity2" placeholder="protein"><input type="number" id="fat_qauntity2" placeholder="fat"><input type="number" id="calories_qauntity2" placeholder="calories"><input type="number" id="sugar_qauntity2" placeholder="sugar"></div>')
}
function noodles_customize() {
    noodles_custom = 1;
    document.getElementById("noodles_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity5" placeholder="carbs"><input type="number" id="protein_qauntity5" placeholder="protein"><input type="number" id="fat_qauntity5" placeholder="fat"><input type="number" id="calories_qauntity5" placeholder="calories"><input type="number" id="sugar_qauntity5" placeholder="sugar"></div>')
}
function pizzas_customize() {
    pizzas_custom = 1;
    document.getElementById("pizzas_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity6" placeholder="carbs"><input type="number" id="protein_qauntity6" placeholder="protein"><input type="number" id="fat_qauntity6" placeholder="fat"><input type="number" id="calories_qauntity6" placeholder="calories"><input type="number" id="sugar_qauntity6" placeholder="sugar"></div>')
}
function burgers_customize() {
    burgers_custom = 1;
    document.getElementById("burgers_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity7" placeholder="carbs"><input type="number" id="protein_qauntity7" placeholder="protein"><input type="number" id="fat_qauntity7" placeholder="fat"><input type="number" id="calories_qauntity7" placeholder="calories"><input type="number" id="sugar_qauntity7" placeholder="sugar"></div>')
}
function sandwiches_customize() {
    sandwiches_custom = 1;
    document.getElementById("sandwiches_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity8" placeholder="carbs"><input type="number" id="protein_qauntity8" placeholder="protein"><input type="number" id="fat_qauntity8" placeholder="fat"><input type="number" id="calories_qauntity8" placeholder="calories"><input type="number" id="sugar_qauntity8" placeholder="sugar"></div>')
}
function lamb_customize() {
    lamb_custom = 1;
    document.getElementById("lamb_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity9" placeholder="carbs"><input type="number" id="protein_qauntity9" placeholder="protein"><input type="number" id="fat_qauntity9" placeholder="fat"><input type="number" id="calories_qauntity9" placeholder="calories"><input type="number" id="sugar_qauntity9" placeholder="sugar"></div>')
}
function fish_customize() {
    fish_custom = 1;
    document.getElementById("fish_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity10" placeholder="carbs"><input type="number" id="protein_qauntity10" placeholder="protein"><input type="number" id="fat_qauntity10" placeholder="fat"><input type="number" id="calories_qauntity10" placeholder="calories"><input type="number" id="sugar_qauntity10" placeholder="sugar"></div>')
}
function prawns_customize() {
    prawns_custom = 1;
    document.getElementById("prawns_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity11" placeholder="carbs"><input type="number" id="protein_qauntity11" placeholder="protein"><input type="number" id="fat_qauntity11" placeholder="fat"><input type="number" id="calories_qauntity11" placeholder="calories"><input type="number" id="sugar_qauntity11" placeholder="sugar"></div>')
}
function chicken_customize() {
    chicken_custom = 1;
    document.getElementById("chicken_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity12" placeholder="carbs"><input type="number" id="protein_qauntity12" placeholder="protein"><input type="number" id="fat_qauntity12" placeholder="fat"><input type="number" id="calories_qauntity12" placeholder="calories"><input type="number" id="sugar_qauntity12" placeholder="sugar"></div>')
}
function appetizers_customize() {
    appetizers_custom = 1;
    document.getElementById("appetizers_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity13" placeholder="carbs"><input type="number" id="protein_qauntity13" placeholder="protein"><input type="number" id="fat_qauntity13" placeholder="fat"><input type="number" id="calories_qauntity13" placeholder="calories"><input type="number" id="sugar_qauntity13" placeholder="sugar"></div>')
}
function mocktails_customize() {
    mocktails_custom = 1;
    document.getElementById("mocktails_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity14" placeholder="carbs"><input type="number" id="protein_qauntity14" placeholder="protein"><input type="number" id="fat_qauntity14" placeholder="fat"><input type="number" id="calories_qauntity14" placeholder="calories"><input type="number" id="sugar_qauntity14" placeholder="sugar"></div>')
}
function beverages_customize() {
    beverages_custom = 1;
    document.getElementById("beverages_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity15" placeholder="carbs"><input type="number" id="protein_qauntity15" placeholder="protein"><input type="number" id="fat_qauntity15" placeholder="fat"><input type="number" id="calories_qauntity15" placeholder="calories"><input type="number" id="sugar_qauntity15" placeholder="sugar"></div>')
}
function thai_soup_customize() {
    thai_soup_custom = 1;
    document.getElementById("thai_soup_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity16" placeholder="carbs"><input type="number" id="protein_qauntity16" placeholder="protein"><input type="number" id="fat_qauntity16" placeholder="fat"><input type="number" id="calories_qauntity16" placeholder="calories"><input type="number" id="sugar_qauntity16" placeholder="sugar"></div>')
}
function thai_appetizers_customize() {
    thai_appetizers_custom = 1;
    document.getElementById("thai_appetizers_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity17" placeholder="carbs"><input type="number" id="protein_qauntity17" placeholder="protein"><input type="number" id="fat_qauntity17" placeholder="fat"><input type="number" id="calories_qauntity17" placeholder="calories"><input type="number" id="sugar_qauntity17" placeholder="sugar"></div>')
}
function thai_salads_customize() {
    thai_salads_custom = 1;
    document.getElementById("thai_salads_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity18" placeholder="carbs"><input type="number" id="protein_qauntity18" placeholder="protein"><input type="number" id="fat_qauntity18" placeholder="fat"><input type="number" id="calories_qauntity18" placeholder="calories"><input type="number" id="sugar_qauntity18" placeholder="sugar"></div>')
}
function thai_main_course_customize() {
    thai_main_course_custom = 1;
    document.getElementById("thai_main_course_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity19" placeholder="carbs"><input type="number" id="protein_qauntity19" placeholder="protein"><input type="number" id="fat_qauntity19" placeholder="fat"><input type="number" id="calories_qauntity19" placeholder="calories"><input type="number" id="sugar_qauntity19" placeholder="sugar"></div>')
}
function thai_rice_noodles_customize() {
    thai_rice_noodles_custom = 1;
    document.getElementById("thai_rice_noodles_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity20" placeholder="carbs"><input type="number" id="protein_qauntity20" placeholder="protein"><input type="number" id="fat_qauntity20" placeholder="fat"><input type="number" id="calories_qauntity20" placeholder="calories"><input type="number" id="sugar_qauntity20" placeholder="sugar"></div>')
}
function chinese_soups_customize() {
    chinese_soups_custom = 1;
    document.getElementById("chinese_soups_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity21" placeholder="carbs"><input type="number" id="protein_qauntity21" placeholder="protein"><input type="number" id="fat_qauntity21" placeholder="fat"><input type="number" id="calories_qauntity21" placeholder="calories"><input type="number" id="sugar_qauntity21" placeholder="sugar"></div>')
}
function chinese_dimsums_customize() {
    chinese_dimsums_custom = 1;
    document.getElementById("chinese_dimsums_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity22" placeholder="carbs"><input type="number" id="protein_qauntity22" placeholder="protein"><input type="number" id="fat_qauntity22" placeholder="fat"><input type="number" id="calories_qauntity22" placeholder="calories"><input type="number" id="sugar_qauntity22" placeholder="sugar"></div>')
}
function local_food_customize() {
    local_food_custom = 1;
    document.getElementById("local_food_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity23" placeholder="carbs"><input type="number" id="protein_qauntity23" placeholder="protein"><input type="number" id="fat_qauntity23" placeholder="fat"><input type="number" id="calories_qauntity23" placeholder="calories"><input type="number" id="sugar_qauntity23" placeholder="sugar"></div>')
}
function hot_combos_customize() {
    hot_combos_custom = 1;
    document.getElementById("hot_combos_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity24" placeholder="carbs"><input type="number" id="protein_qauntity24" placeholder="protein"><input type="number" id="fat_qauntity24" placeholder="fat"><input type="number" id="calories_qauntity24" placeholder="calories"><input type="number" id="sugar_qauntity24" placeholder="sugar"></div>')
}
function foody_andaaz_customize() {
    foody_andaaz_custom = 1;
    document.getElementById("foody_andaaz_add").insertAdjacentHTML('afterend', '<div><input type="number" id="carbs_qauntity25" placeholder="carbs"><input type="number" id="protein_qauntity25" placeholder="protein"><input type="number" id="fat_qauntity25" placeholder="fat"><input type="number" id="calories_qauntity25" placeholder="calories"><input type="number" id="sugar_qauntity25" placeholder="sugar"></div>')
}


// ***************************to make final order list along with total amount*****************
var order = "";
var amount = 0;

function add_item_dessert() {
    let ordered_item = document.getElementById("desserts").value;
    let quantity = parseInt(document.getElementById("dessert_qauntity").value);
    let custom_req = "";
    if (desserts_custom > 0) {
        let carbs = parseFloat(document.getElementById("carbs_qauntity1").value);
        let protein = parseFloat(document.getElementById("protein_qauntity1").value);
        let fat = parseFloat(document.getElementById("fat_qauntity1").value);
        let calories = parseFloat(document.getElementById("calories_qauntity1").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity1").value);
        if (carbs >= 0)
            custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
            custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
            custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
            custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
            custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity >= 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_soups() {
    let ordered_item = document.getElementById("soups").value;
    let quantity = parseInt(document.getElementById("soups_qauntity").value);

    let custom_req = "";
    if (soups_custom > 0) {

        var carbs = parseFloat(document.getElementById("carbs_qauntity2").value);
        var protein = parseFloat(document.getElementById("protein_qauntity2").value);
        var fat = parseFloat(document.getElementById("fat_qauntity2").value);
        var calories = parseFloat(document.getElementById("calories_qauntity2").value);
        var sugar = parseFloat(document.getElementById("sugar_qauntity2").value);
        if (carbs >= 0)
            custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
            custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
            custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
            custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
            custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_rice() {
    let ordered_item = document.getElementById("rice").value;
    let quantity = parseInt(document.getElementById("rice_qauntity").value);

    let custom_req = "";
    if (rice_custom > 0) {

        let carbs = parseFloat(document.getElementById("carbs_qauntity3").value);
        let protein = parseFloat(document.getElementById("protein_qauntity3").value);
        let fat = parseFloat(document.getElementById("fat_qauntity3").value);
        let calories = parseFloat(document.getElementById("calories_qauntity3").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity3").value);
        if (carbs >= 0)
            custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
            custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
            custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
            custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
            custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_roti() {
    let ordered_item = document.getElementById("roti").value;
    let quantity = parseInt(document.getElementById("roti_qauntity").value);

    let custom_req = "";
    if (roti_custom > 0) {

        let carbs = parseFloat(document.getElementById("carbs_qauntity4").value);
        let protein = parseFloat(document.getElementById("protein_qauntity4").value);
        let fat = parseFloat(document.getElementById("fat_qauntity4").value);
        let calories = parseFloat(document.getElementById("calories_qauntity4").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity4").value);
        if (carbs >= 0)
            custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
            custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
            custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
            custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
            custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_noodles() {
    let ordered_item = document.getElementById("noodles").value;
    let quantity = parseInt(document.getElementById("noodles_qauntity").value);

    let custom_req = "";
    if (noodles_custom > 0) {

        let carbs = parseFloat(document.getElementById("carbs_qauntity5").value);
        let protein = parseFloat(document.getElementById("protein_qauntity5").value);
        let fat = parseFloat(document.getElementById("fat_qauntity5").value);
        let calories = parseFloat(document.getElementById("calories_qauntity5").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity5").value);
        if (carbs >= 0)
            custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
            custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
            custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
            custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
            custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_pizzas() {
    let ordered_item = document.getElementById("pizzas").value;
    let quantity = parseInt(document.getElementById("pizzas_qauntity").value);

    let custom_req = "";
    if (pizzas_custom > 0) {

        let carbs = parseFloat(document.getElementById("carbs_qauntity6").value);
        let protein = parseFloat(document.getElementById("protein_qauntity6").value);
        let fat = parseFloat(document.getElementById("fat_qauntity6").value);
        let calories = parseFloat(document.getElementById("calories_qauntity6").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity6").value);
        if (carbs >= 0)
            custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
            custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
            custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
            custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
            custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_burgers() {
    let ordered_item = document.getElementById("burgers").value;
    let quantity = parseInt(document.getElementById("burgers_qauntity").value);

    let custom_req = "";
    if (burgers_custom > 0) {

        let carbs = parseFloat(document.getElementById("carbs_qauntity7").value);
        let protein = parseFloat(document.getElementById("protein_qauntity7").value);
        let fat = parseFloat(document.getElementById("fat_qauntity7").value);
        let calories = parseFloat(document.getElementById("calories_qauntity7").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity7").value);
        if (carbs >= 0)
            custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
            custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
            custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
            custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
            custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_sandwiches() {
    let ordered_item = document.getElementById("sandwiches").value;
    let quantity = parseInt(document.getElementById("sandwiches_qauntity").value);

    let custom_req = "";
    if (sandwiches_custom > 0) {

        let carbs = parseFloat(document.getElementById("carbs_qauntity8").value);
        let protein = parseFloat(document.getElementById("protein_qauntity8").value);
        let fat = parseFloat(document.getElementById("fat_qauntity8").value);
        let calories = parseFloat(document.getElementById("calories_qauntity8").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity8").value);
        if (carbs >= 0)
            custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
            custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
            custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
            custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
            custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_lamb() {
    let ordered_item = document.getElementById("lamb").value;
    let quantity = parseInt(document.getElementById("lamb_qauntity").value);

    let custom_req = "";
    if (lamb_custom > 0) {

        let carbs = parseFloat(document.getElementById("carbs_qauntity9").value);
        let protein = parseFloat(document.getElementById("protein_qauntity9").value);
        let fat = parseFloat(document.getElementById("fat_qauntity9").value);
        let calories = parseFloat(document.getElementById("calories_qauntity9").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity9").value);
        if (carbs >= 0)
            custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
            custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
            custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
            custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
            custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_fish() {
    let ordered_item = document.getElementById("fish").value;
    let quantity = parseInt(document.getElementById("fish_qauntity").value);

    let custom_req = "";
    if (fish_custom > 0) {

        let carbs = parseFloat(document.getElementById("carbs_qauntity10").value);
        let protein = parseFloat(document.getElementById("protein_qauntity10").value);
        let fat = parseFloat(document.getElementById("fat_qauntity10").value);
        let calories = parseFloat(document.getElementById("calories_qauntity10").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity10").value);
        if (carbs >= 0)
            custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
            custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
            custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
            custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
            custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_prawns() {
    let ordered_item = document.getElementById("prawns").value;
    let quantity = parseInt(document.getElementById("prawns_qauntity").value);

    let custom_req = "";
    if(prawns_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity11").value);
        let protein = parseFloat(document.getElementById("protein_qauntity11").value);
        let fat = parseFloat(document.getElementById("fat_qauntity11").value);
        let calories = parseFloat(document.getElementById("calories_qauntity11").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity11").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_chicken() {
    let ordered_item = document.getElementById("chicken").value;
    let quantity = parseInt(document.getElementById("chicken_qauntity").value);

    let custom_req = "";
    if(chicken_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity12").value);
        let protein = parseFloat(document.getElementById("protein_qauntity12").value);
        let fat = parseFloat(document.getElementById("fat_qauntity12").value);
        let calories = parseFloat(document.getElementById("calories_qauntity12").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity12").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_appetizers() {
    let ordered_item = document.getElementById("appetizers").value;
    let quantity = parseInt(document.getElementById("appetizers_qauntity").value);

    let custom_req = "";
    if(appetizers_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity13").value);
        let protein = parseFloat(document.getElementById("protein_qauntity13").value);
        let fat = parseFloat(document.getElementById("fat_qauntity13").value);
        let calories = parseFloat(document.getElementById("calories_qauntity13").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity13").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }
        
    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_mocktails() {
    let ordered_item = document.getElementById("mocktails").value;
    let quantity = parseInt(document.getElementById("mocktails_qauntity").value);

    let custom_req = "";
    if(mocktails_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity14").value);
        let protein = parseFloat(document.getElementById("protein_qauntity14").value);
        let fat = parseFloat(document.getElementById("fat_qauntity14").value);
        let calories = parseFloat(document.getElementById("calories_qauntity14").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity14").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }
        
        var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_beverages() {
    let ordered_item = document.getElementById("beverages").value;
    let quantity = parseInt(document.getElementById("beverages_qauntity").value);

    let custom_req = "";
    if(beverages_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity15").value);
        let protein = parseFloat(document.getElementById("protein_qauntity15").value);
        let fat = parseFloat(document.getElementById("fat_qauntity15").value);
        let calories = parseFloat(document.getElementById("calories_qauntity15").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity15").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }
        
    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_thai_soup() {
    let ordered_item = document.getElementById("thai_soup").value;
    let quantity = parseInt(document.getElementById("thai_soup_qauntity").value);

    let custom_req = "";
    if(thai_soup_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity16").value);
        let protein = parseFloat(document.getElementById("protein_qauntity16").value);
        let fat = parseFloat(document.getElementById("fat_qauntity16").value);
        let calories = parseFloat(document.getElementById("calories_qauntity16").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity16").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_thai_appetizers() {
    let ordered_item = document.getElementById("thai_appetizers").value;
    let quantity = parseInt(document.getElementById("thai_appetizers_qauntity").value);

    let custom_req = "";
    if(thai_appetizers_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity17").value);
        let protein = parseFloat(document.getElementById("protein_qauntity17").value);
        let fat = parseFloat(document.getElementById("fat_qauntity17").value);
        let calories = parseFloat(document.getElementById("calories_qauntity17").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity17").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }
        
    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_thai_salads() {
    let ordered_item = document.getElementById("thai_salads").value;
    let quantity = parseInt(document.getElementById("thai_salads_qauntity").value);

    let custom_req = "";
    if(thai_salads_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity18").value);
        let protein = parseFloat(document.getElementById("protein_qauntity18").value);
        let fat = parseFloat(document.getElementById("fat_qauntity18").value);
        let calories = parseFloat(document.getElementById("calories_qauntity18").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity18").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_thai_main_course() {
    let ordered_item = document.getElementById("thai_main_course").value;
    let quantity = parseInt(document.getElementById("thai_main_course_qauntity").value);

    let custom_req = "";
    if(thai_main_course_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity19").value);
        let protein = parseFloat(document.getElementById("protein_qauntity19").value);
        let fat = parseFloat(document.getElementById("fat_qauntity19").value);
        let calories = parseFloat(document.getElementById("calories_qauntity19").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity19").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_thai_rice_noodles() {
    let ordered_item = document.getElementById("thai_rice_noodles").value;
    let quantity = parseInt(document.getElementById("thai_rice_noodles_qauntity").value);

    let custom_req = "";
    if(thai_rice_noodles_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity20").value);
        let protein = parseFloat(document.getElementById("protein_qauntity20").value);
        let fat = parseFloat(document.getElementById("fat_qauntity20").value);
        let calories = parseFloat(document.getElementById("calories_qauntity20").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity20").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_chinese_soups() {
    let ordered_item = document.getElementById("chinese_soups").value;
    let quantity = parseInt(document.getElementById("chinese_soups_qauntity").value);

    let custom_req = "";
    if(chinese_soups_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity21").value);
        let protein = parseFloat(document.getElementById("protein_qauntity21").value);
        let fat = parseFloat(document.getElementById("fat_qauntity21").value);
        let calories = parseFloat(document.getElementById("calories_qauntity21").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity21").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_chinese_dimsums() {
    let ordered_item = document.getElementById("chinese_dimsums").value;
    let quantity = parseInt(document.getElementById("chinese_dimsums_qauntity").value);

    let custom_req = "";
    if(chinese_dimsums_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity22").value);
        let protein = parseFloat(document.getElementById("protein_qauntity22").value);
        let fat = parseFloat(document.getElementById("fat_qauntity22").value);
        let calories = parseFloat(document.getElementById("calories_qauntity22").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity22").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }

    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_local_food() {
    let ordered_item = document.getElementById("local_food").value;
    let quantity = parseInt(document.getElementById("local_food_qauntity").value);

    let custom_req = "";
    if(local_food_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity23").value);
        let protein = parseFloat(document.getElementById("protein_qauntity23").value);
        let fat = parseFloat(document.getElementById("fat_qauntity23").value);
        let calories = parseFloat(document.getElementById("calories_qauntity23").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity23").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
        
    }
    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_hot_combos() {
    let ordered_item = document.getElementById("hot_combos").value;
    let quantity = parseInt(document.getElementById("hot_combos_qauntity").value);

    let custom_req = "";
    if(hot_combos_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity24").value);
        let protein = parseFloat(document.getElementById("protein_qauntity24").value);
        let fat = parseFloat(document.getElementById("fat_qauntity24").value);
        let calories = parseFloat(document.getElementById("calories_qauntity24").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity24").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
    }
        
        var item = ordered_item.slice(0, ordered_item.length - 3);
        if (quantity > 1) {
            
    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}
function add_item_foody_andaaz() {
    let ordered_item = document.getElementById("foody_andaaz").value;
    let quantity = parseInt(document.getElementById("foody_andaaz_qauntity").value);

    let custom_req = "";
    if(foody_andaaz_custom>0){

        let carbs = parseFloat(document.getElementById("carbs_qauntity25").value);
        let protein = parseFloat(document.getElementById("protein_qauntity25").value);
        let fat = parseFloat(document.getElementById("fat_qauntity25").value);
        let calories = parseFloat(document.getElementById("calories_qauntity25").value);
        let sugar = parseFloat(document.getElementById("sugar_qauntity25").value);
        if (carbs >= 0)
        custom_req = custom_req + " carbs:" + carbs;
        if (protein >= 0)
        custom_req = custom_req + " protein:" + protein;
        if (fat >= 0)
        custom_req = custom_req + " fat:" + fat;
        if (calories >= 0)
        custom_req = custom_req + " calories:" + calories;
        if (sugar >= 0)
        custom_req = custom_req + " sugar:" + sugar;
        
    }
    var item = ordered_item.slice(0, ordered_item.length - 3);
    if (quantity > 1) {

    }
    else if (quantity <= 0) {
        quantity = 0;
        item = "";
    }
    else
        quantity = 1;
    var price = parseInt(ordered_item.slice(ordered_item.length - 3, ordered_item.length));
    amount = amount + (quantity * price);

    if (order == "")
        order = order + quantity + ": " + item + " " + custom_req;
    else
        order = order + " , " + quantity + ": " + item + " " + custom_req;

    document.getElementById("bill").innerHTML = "<h3>My Order</h3><p>" + order + "</p><p>Total Bill : " + amount + "</p>";
}

// ************************to confirm the order on click of order button************************
var gift=false;
function gift_a_meal(){
    gift=true;
    document.getElementById("address").innerHTML='<label for="enter_address">Address: </label><input type="text" id="enter_address">';
    document.getElementById("msg").innerHTML='<textarea name="enter_msg" id="enter_msg" cols="30" rows="7" placeholder="Enter your message"></textarea>';    
}

function order_now() {
    // order
    // amount
    //home_take (home delivery or take away)
    var home_take="";
    if(document.getElementById("home_delivery").checked==true){
        home_take="Home Delivery"
    }
    else
        home_take="Take away";
    console.log(home_take);
    if(gift){
        let gift_on = document.getElementById("enter_address").value; //address on which meal is to be delivered
        let write_msg = document.getElementById("enter_msg").value; //write this msg with food.
        console.log(gift_on);
        console.log(write_msg);
    }

    alert("Your order has been confirmed. Thank You.");
}

// *********************************************book catering***********************************
function book_catering(){
    var occasion = document.getElementById("occasion").value;
    if(occasion=="other"){
        occasion = document.getElementById("other_occasion").value;
    }

    let persons = parseInt(document.getElementById("food_for_persons").value);
    let date_time_from = document.getElementById("date_time_from").value;
    let date_time_to = document.getElementById("date_time_to").value;

    console.log(occasion); //for what occasion catering is req
    console.log(persons); //food for how many persons is req
    console.log(date_time_from); //when catering is req
    console.log(date_time_to); //untill when catering is req

    alert("We'll soon contact you for further details. Thank You.");
}

// ************************************book table********************************
function book_table(){
    let table_type = document.getElementById("table_type").value;
    let table_no = parseInt(document.getElementById("table_no").value);
    let no_of_persons = parseInt(document.getElementById("no_of_persons").value);
    let date_time = document.getElementById("date_time").value;

    console.log(table_type)
    console.log(table_no)
    console.log(no_of_persons)
    console.log(date_time)

    alert("Your table has been booked. Thank You.")
}