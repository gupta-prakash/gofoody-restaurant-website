let a = document.getElementById("nutrient");
let b = document.getElementById("menu_v_nv_all");
a.style.display = 'none';
b.style.display = 'none';


//function to select menu_type or nutrient
function mainFilter() {
    let main_filter = document.getElementById("main_filter").value;
    let a = document.getElementById("nutrient");
    let b = document.getElementById("menu_v_nv_all");
    a.style.display = "none";
    b.style.display = "none";

    if (main_filter == "menu_v_nv_all") {

        b.style.display = "block";
        console.log("v an all");
    }
    else {
        a.style.display = "block";
        console.log('nutrients');
    }
}

function filterMenu() {

    var menu = document.getElementsByName('menu_type');
    let vegmenu = document.getElementsByClassName("veg");
    let nonvegmenu = document.getElementsByClassName("non-veg");
    let both_veg = document.getElementsByClassName("both_veg");
    let both_nonveg = document.getElementsByClassName("both_non-veg");
    let both = document.getElementsByClassName("both");

    let main_filter = document.getElementById("main_filter").value;

    //if menu_type is selected
    if (main_filter == "menu_v_nv_all") {

        if (menu[0].checked) {

            console.log("all menu selected");

            for (var i = 0; i < vegmenu.length; i++)
                vegmenu[i].style.display = 'block';

            for (var i = 0; i < nonvegmenu.length; i++)
                nonvegmenu[i].style.display = 'block';

            for (var i = 0; i < both.length; i++)
                both[i].style.display = "block";

            for (var i = 0; i < both_nonveg.length; i++)
                both_nonveg[i].style.display = "none";

            for (var i = 0; i < both_veg.length; i++)
                both_veg[i].style.display = "none";

        }
        else if (menu[1].checked) {

            console.log("veg menu selected");

            for (var i = 0; i < vegmenu.length; i++)
                vegmenu[i].style.display = "block";

            for (var i = 0; i < nonvegmenu.length; i++)
                nonvegmenu[i].style.display = 'none';

            for (var i = 0; i < both.length; i++)
                both[i].style.display = "none";

            for (var i = 0; i < both_nonveg.length; i++)
                both_nonveg[i].style.display = "none";

            for (var i = 0; i < both_veg.length; i++)
                both_veg[i].style.display = "block";
        }
        else if (menu[2].checked) {

            console.log("nonveg menu selected");

            for (var i = 0; i < nonvegmenu.length; i++)
                nonvegmenu[i].style.display = 'block';

            for (var i = 0; i < vegmenu.length; i++)
                vegmenu[i].style.display = "none";

            for (var i = 0; i < both.length; i++)
                both[i].style.display = "none";

            for (var i = 0; i < both_nonveg.length; i++)
                both_nonveg[i].style.display = "block";

            for (var i = 0; i < both_veg.length; i++)
                both_veg[i].style.display = "none";
        }
    }

    //if nutrient is selected
    else {
        let nutrient_type = document.getElementById("nutrient_type").value;
        let nutrient_amount = parseFloat(document.getElementById("nutrient_amount").value);

        //if nutrient selected is carbs
        if (nutrient_type == "carbs") {

            let carbs1 = document.getElementsByClassName("carbs1");
            let carbs2 = document.getElementsByClassName("carbs2");
            let carbs3 = document.getElementsByClassName("carbs3");
            let carbs4 = document.getElementsByClassName("carbs4");
            let carbs5 = document.getElementsByClassName("carbs5");
            let carbs6 = document.getElementsByClassName("carbs6");
            let carbs7 = document.getElementsByClassName("carbs7");
            let carbs8 = document.getElementsByClassName("carbs8");
            let carbs9 = document.getElementsByClassName("carbs9");
            let carbs10 = document.getElementsByClassName("carbs10");
            let carbs11 = document.getElementsByClassName("carbs11");
            let carbs12 = document.getElementsByClassName("carbs12");
            let carbs13 = document.getElementsByClassName("carbs13");
            let carbs14 = document.getElementsByClassName("carbs14");
            let carbs15 = document.getElementsByClassName("carbs15");
            let carbs16 = document.getElementsByClassName("carbs16");
            let carbs17 = document.getElementsByClassName("carbs17");
            let carbs18 = document.getElementsByClassName("carbs18");
            let carbs19 = document.getElementsByClassName("carbs19");
            let carbs20 = document.getElementsByClassName("carbs20");
            let carbs21 = document.getElementsByClassName("carbs21");
            let carbs22 = document.getElementsByClassName("carbs22");
            let carbs23 = document.getElementsByClassName("carbs23");
            let carbs24 = document.getElementsByClassName("carbs24");

            if (nutrient_amount >= 0) {
                for (var i = 0; i < carbs1.length; i++)
                    carbs1[i].style.display = "none";
                for (var i = 0; i < carbs2.length; i++)
                    carbs2[i].style.display = "none";
                for (var i = 0; i < carbs3.length; i++)
                    carbs3[i].style.display = "none";
                for (var i = 0; i < carbs4.length; i++)
                    carbs4[i].style.display = "none";
                for (var i = 0; i < carbs5.length; i++)
                    carbs5[i].style.display = "none";
                for (var i = 0; i < carbs6.length; i++)
                    carbs6[i].style.display = "none";
                for (var i = 0; i < carbs7.length; i++)
                    carbs7[i].style.display = "none";
                for (var i = 0; i < carbs8.length; i++)
                    carbs8[i].style.display = "none";
                for (var i = 0; i < carbs9.length; i++)
                    carbs9[i].style.display = "none";
                for (var i = 0; i < carbs10.length; i++)
                    carbs10[i].style.display = "none";
                for (var i = 0; i < carbs11.length; i++)
                    carbs11[i].style.display = "none";
                for (var i = 0; i < carbs12.length; i++)
                    carbs12[i].style.display = "none";
                for (var i = 0; i < carbs13.length; i++)
                    carbs13[i].style.display = "none";
                for (var i = 0; i < carbs14.length; i++)
                    carbs14[i].style.display = "none";
                for (var i = 0; i < carbs15.length; i++)
                    carbs15[i].style.display = "none";
                for (var i = 0; i < carbs16.length; i++)
                    carbs16[i].style.display = "none";
                for (var i = 0; i < carbs17.length; i++)
                    carbs17[i].style.display = "none";
                for (var i = 0; i < carbs18.length; i++)
                    carbs18[i].style.display = "none";
                for (var i = 0; i < carbs19.length; i++)
                    carbs19[i].style.display = "none";
                for (var i = 0; i < carbs20.length; i++)
                    carbs20[i].style.display = "none";
                for (var i = 0; i < carbs21.length; i++)
                    carbs21[i].style.display = "none";
                for (var i = 0; i < carbs22.length; i++)
                    carbs22[i].style.display = "none";
                for (var i = 0; i < carbs23.length; i++)
                    carbs23[i].style.display = "none";
                for (var i = 0; i < carbs24.length; i++)
                    carbs24[i].style.display = "none";
                for (var i = 0; i < both.length; i++)
                    both[i].style.display = "none";
            }


            if (nutrient_amount == 0) //carbs1
            {
                for (var i = 0; i < carbs1.length; i++)
                    carbs1[i].style.display = "block";
            }
            if (nutrient_amount > 0 && nutrient_amount <= 10) //carbs2
            {
                for (var i = 0; i < carbs2.length; i++)
                    carbs2[i].style.display = "block";
            }
            if (nutrient_amount > 10 && nutrient_amount <= 30) //carbs3
            {
                for (var i = 0; i < carbs3.length; i++)
                    carbs3[i].style.display = "block";
            }
            if (nutrient_amount > 30 && nutrient_amount <= 60) //carbs4
            {
                for (var i = 0; i < carbs4.length; i++)
                    carbs4[i].style.display = "block";
            }
            if (nutrient_amount > 60 && nutrient_amount <= 100) //carbs5
            {
                for (var i = 0; i < carbs5.length; i++)
                    carbs5[i].style.display = "block";
            }
            if (nutrient_amount > 100 && nutrient_amount <= 130) //carbs6
            {
                for (var i = 0; i < carbs6.length; i++)
                    carbs6[i].style.display = "block";
            }
            if (nutrient_amount > 130 && nutrient_amount <= 165) //carbs7
            {
                for (var i = 0; i < carbs7.length; i++)
                    carbs7[i].style.display = "block";
            }
            if (nutrient_amount > 165 && nutrient_amount <= 200) //carbs8
            {
                for (var i = 0; i < carbs8.length; i++)
                    carbs8[i].style.display = "block";
            }
            if (nutrient_amount > 200 && nutrient_amount <= 240) //carbs9
            {
                for (var i = 0; i < carbs9.length; i++)
                    carbs9[i].style.display = "block";
            }
            if (nutrient_amount > 240 && nutrient_amount <= 270) //carbs10
            {
                for (var i = 0; i < carbs10.length; i++)
                    carbs10[i].style.display = "block";
            }
            if (nutrient_amount > 270 && nutrient_amount <= 300) //carbs11
            {
                for (var i = 0; i < carbs11.length; i++)
                    carbs11[i].style.display = "block";
            }
            if (nutrient_amount > 300 && nutrient_amount <= 340) //carbs12
            {
                for (var i = 0; i < carbs12.length; i++)
                    carbs12[i].style.display = "block";
            }
            if (nutrient_amount > 340 && nutrient_amount <= 365) //carbs13
            {
                for (var i = 0; i < carbs13.length; i++)
                    carbs13[i].style.display = "block";
            }
            if (nutrient_amount > 365 && nutrient_amount <= 400) //carbs14
            {
                for (var i = 0; i < carbs14.length; i++)
                    carbs14[i].style.display = "block";
            }
            if (nutrient_amount > 400 && nutrient_amount <= 440) //carbs15
            {
                for (var i = 0; i < carbs15.length; i++)
                    carbs15[i].style.display = "block";
            }
            if (nutrient_amount > 440 && nutrient_amount <= 470) //carbs16
            {
                for (var i = 0; i < carbs16.length; i++)
                    carbs16[i].style.display = "block";
            }
            if (nutrient_amount > 470 && nutrient_amount <= 500) //carbs17
            {
                for (var i = 0; i < carbs17.length; i++)
                    carbs17[i].style.display = "block";
            }
            if (nutrient_amount > 500 && nutrient_amount <= 540) //carbs18
            {
                for (var i = 0; i < carbs18.length; i++)
                    carbs18[i].style.display = "block";
            }
            if (nutrient_amount > 540 && nutrient_amount <= 570) //carbs19
            {
                for (var i = 0; i < carbs19.length; i++)
                    carbs19[i].style.display = "block";
            }
            if (nutrient_amount > 570 && nutrient_amount <= 600) //carbs20
            {
                for (var i = 0; i < carbs20.length; i++)
                    carbs20[i].style.display = "block";
            }
            if (nutrient_amount > 600 && nutrient_amount <= 640) //carbs21
            {
                for (var i = 0; i < carbs21.length; i++)
                    carbs21[i].style.display = "block";
            }
            if (nutrient_amount > 640 && nutrient_amount <= 700) //carbs22
            {
                for (var i = 0; i < carbs22.length; i++)
                    carbs22[i].style.display = "block";
            }
            if (nutrient_amount > 700 && nutrient_amount <= 750) //carbs23
            {
                for (var i = 0; i < carbs23.length; i++)
                    carbs23[i].style.display = "block";
            }
            if (nutrient_amount > 750 && nutrient_amount <= 800) //carbs24
            {
                for (var i = 0; i < carbs24.length; i++)
                    carbs24[i].style.display = "block";
            }
        }

        //if nutrient selected is protein
        if (nutrient_type == "protein") {

            let protein1 = document.getElementsByClassName("protein1");
            let protein2 = document.getElementsByClassName("protein2");
            let protein3 = document.getElementsByClassName("protein3");
            let protein4 = document.getElementsByClassName("protein4");
            let protein5 = document.getElementsByClassName("protein5");
            let protein6 = document.getElementsByClassName("protein6");
            let protein7 = document.getElementsByClassName("protein7");
            let protein8 = document.getElementsByClassName("protein8");
            let protein9 = document.getElementsByClassName("protein9");
            let protein10 = document.getElementsByClassName("protein10");
            let protein11 = document.getElementsByClassName("protein11");
            let protein12 = document.getElementsByClassName("protein12");
            let protein13 = document.getElementsByClassName("protein13");
            let protein14 = document.getElementsByClassName("protein14");

            if (nutrient_amount >= 0) {
                for (var i = 0; i < protein1.length; i++)
                    protein1[i].style.display = "none";
                for (var i = 0; i < protein2.length; i++)
                    protein2[i].style.display = "none";
                for (var i = 0; i < protein3.length; i++)
                    protein3[i].style.display = "none";
                for (var i = 0; i < protein4.length; i++)
                    protein4[i].style.display = "none";
                for (var i = 0; i < protein5.length; i++)
                    protein5[i].style.display = "none";
                for (var i = 0; i < protein6.length; i++)
                    protein6[i].style.display = "none";
                for (var i = 0; i < protein7.length; i++)
                    protein7[i].style.display = "none";
                for (var i = 0; i < protein8.length; i++)
                    protein8[i].style.display = "none";
                for (var i = 0; i < protein9.length; i++)
                    protein9[i].style.display = "none";
                for (var i = 0; i < protein10.length; i++)
                    protein10[i].style.display = "none";
                for (var i = 0; i < protein11.length; i++)
                    protein11[i].style.display = "none";
                for (var i = 0; i < protein12.length; i++)
                    protein12[i].style.display = "none";
                for (var i = 0; i < protein13.length; i++)
                    protein13[i].style.display = "none";
                for (var i = 0; i < protein14.length; i++)
                    protein14[i].style.display = "none";
                for (var i = 0; i < both.length; i++)
                    both[i].style.display = "none";
            }

            if (nutrient_amount == 0) //protein1
            {
                for (var i = 0; i < protein1.length; i++)
                    protein1[i].style.display = "block";
            }
            if (nutrient_amount > 0 && nutrient_amount <= 1) //protein2
            {
                for (var i = 0; i < protein2.length; i++)
                    protein2[i].style.display = "block";
            }
            if (nutrient_amount > 1 && nutrient_amount <= 3) //protein3
            {
                for (var i = 0; i < protein3.length; i++)
                    protein3[i].style.display = "block";
            }
            if (nutrient_amount > 3 && nutrient_amount <= 5) //protein4
            {
                for (var i = 0; i < protein4.length; i++)
                    protein4[i].style.display = "block";
            }
            if (nutrient_amount > 5 && nutrient_amount <= 7) //protein5
            {
                for (var i = 0; i < protein5.length; i++)
                    protein5[i].style.display = "block";
            }
            if (nutrient_amount > 7 && nutrient_amount <= 10) //protein6
            {
                for (var i = 0; i < protein6.length; i++)
                    protein6[i].style.display = "block";
            }
            if (nutrient_amount > 10 && nutrient_amount <= 15) //protein7
            {
                for (var i = 0; i < protein7.length; i++)
                    protein7[i].style.display = "block";
            }
            if (nutrient_amount > 15 && nutrient_amount <= 20) //protein8
            {
                for (var i = 0; i < protein8.length; i++)
                    protein8[i].style.display = "block";
            }
            if (nutrient_amount > 20 && nutrient_amount <= 25) //protein9
            {
                for (var i = 0; i < protein9.length; i++)
                    protein9[i].style.display = "block";
            }
            if (nutrient_amount > 25 && nutrient_amount <= 30) //protein10
            {
                for (var i = 0; i < protein10.length; i++)
                    protein10[i].style.display = "block";
            }
            if (nutrient_amount > 30 && nutrient_amount <= 40) //protein11
            {
                for (var i = 0; i < protein10.length; i++)
                    protein10[i].style.display = "block";
            }
            if (nutrient_amount > 40 && nutrient_amount <= 50) //protein12
            {
                for (var i = 0; i < protein10.length; i++)
                    protein10[i].style.display = "block";
            }
            if (nutrient_amount > 50 && nutrient_amount <= 60) //protein13
            {
                for (var i = 0; i < protein10.length; i++)
                    protein10[i].style.display = "block";
            }
            if (nutrient_amount > 60 && nutrient_amount <= 70) //protein14
            {
                for (var i = 0; i < protein10.length; i++)
                    protein10[i].style.display = "block";
            }
        }

        //if nutrient selected is fat
        if (nutrient_type == "fat") {
            let fat1 = document.getElementsByClassName("fat1");
            let fat2 = document.getElementsByClassName("fat2");
            let fat3 = document.getElementsByClassName("fat3");
            let fat4 = document.getElementsByClassName("fat4");
            let fat5 = document.getElementsByClassName("fat5");
            let fat6 = document.getElementsByClassName("fat6");
            let fat7 = document.getElementsByClassName("fat7");
            let fat8 = document.getElementsByClassName("fat8");
            let fat9 = document.getElementsByClassName("fat9");

            if (nutrient_amount >= 0) {
                for (var i = 0; i < fat1.length; i++)
                    fat1[i].style.display = "none";
                for (var i = 0; i < fat2.length; i++)
                    fat2[i].style.display = "none";
                for (var i = 0; i < fat3.length; i++)
                    fat3[i].style.display = "none";
                for (var i = 0; i < fat4.length; i++)
                    fat4[i].style.display = "none";
                for (var i = 0; i < fat5.length; i++)
                    fat5[i].style.display = "none";
                for (var i = 0; i < fat6.length; i++)
                    fat6[i].style.display = "none";
                for (var i = 0; i < fat7.length; i++)
                    fat7[i].style.display = "none";
                for (var i = 0; i < fat8.length; i++)
                    fat8[i].style.display = "none";
                for (var i = 0; i < fat9.length; i++)
                    fat9[i].style.display = "none";
                for (var i = 0; i < both.length; i++)
                    both[i].style.display = "none";
            }

            if (nutrient_amount == 0) //fat1
            {
                for (var i = 0; i < fat1.length; i++)
                    fat1[i].style.display = "block";
            }
            if (nutrient_amount > 0 && nutrient_amount <= 2) //fat2
            {
                for (var i = 0; i < fat2.length; i++)
                    fat2[i].style.display = "block";
            }
            if (nutrient_amount > 2 && nutrient_amount <= 5) //fat3
            {
                for (var i = 0; i < fat3.length; i++)
                    fat3[i].style.display = "block";
            }
            if (nutrient_amount > 5 && nutrient_amount <= 10) //fat4
            {
                for (var i = 0; i < fat4.length; i++)
                    fat4[i].style.display = "block";
            }
            if (nutrient_amount > 10 && nutrient_amount <= 15) //fat5
            {
                for (var i = 0; i < fat5.length; i++)
                    fat5[i].style.display = "block";
            }
            if (nutrient_amount > 15 && nutrient_amount <= 20) //fat6
            {
                for (var i = 0; i < fat6.length; i++)
                    fat6[i].style.display = "block";
            }
            if (nutrient_amount > 20 && nutrient_amount <= 25) //fat7
            {
                for (var i = 0; i < fat7.length; i++)
                    fat7[i].style.display = "block";
            }
            if (nutrient_amount > 25 && nutrient_amount <= 30) //fat8
            {
                for (var i = 0; i < fat8.length; i++)
                    fat8[i].style.display = "block";
            }
            if (nutrient_amount > 30 && nutrient_amount <= 35) //fat9
            {
                for (var i = 0; i < fat9.length; i++)
                    fat9[i].style.display = "block";
            }
        }

        //if nutrient selected is calories
        if (nutrient_type == "calories") {
            let calories1 = document.getElementsByClassName("calories1");
            let calories2 = document.getElementsByClassName("calories2");
            let calories3 = document.getElementsByClassName("calories3");
            let calories4 = document.getElementsByClassName("calories4");
            let calories5 = document.getElementsByClassName("calories5");
            let calories6 = document.getElementsByClassName("calories6");
            let calories7 = document.getElementsByClassName("calories7");
            let calories8 = document.getElementsByClassName("calories8");
            let calories9 = document.getElementsByClassName("calories9");
            let calories10 = document.getElementsByClassName("calories10");

            if (nutrient_amount >= 0) {
                for (var i = 0; i < calories1.length; i++)
                    calories1[i].style.display = "none";
                for (var i = 0; i < calories2.length; i++)
                    calories2[i].style.display = "none";
                for (var i = 0; i < calories3.length; i++)
                    calories3[i].style.display = "none";
                for (var i = 0; i < calories4.length; i++)
                    calories4[i].style.display = "none";
                for (var i = 0; i < calories5.length; i++)
                    calories5[i].style.display = "none";
                for (var i = 0; i < calories6.length; i++)
                    calories6[i].style.display = "none";
                for (var i = 0; i < calories7.length; i++)
                    calories7[i].style.display = "none";
                for (var i = 0; i < calories8.length; i++)
                    calories8[i].style.display = "none";
                for (var i = 0; i < calories9.length; i++)
                    calories9[i].style.display = "none";
                for (var i = 0; i < calories10.length; i++)
                    calories10[i].style.display = "none";
                for (var i = 0; i < both.length; i++)
                    both[i].style.display = "none";
            }

            if (nutrient_amount > 0 && nutrient_amount <= 50) //calories1
            {
                for (var i = 0; i < calories1.length; i++)
                    calories1[i].style.display = "block";
            }
            if (nutrient_amount > 50 && nutrient_amount <= 100) //calories2
            {
                for (var i = 0; i < calories2.length; i++)
                    calories2[i].style.display = "block";
            }
            if (nutrient_amount > 100 && nutrient_amount <= 150) //calories3
            {
                for (var i = 0; i < calories3.length; i++)
                    calories3[i].style.display = "block";
            }
            if (nutrient_amount > 150 && nutrient_amount <= 200) //calories4
            {
                for (var i = 0; i < calories4.length; i++)
                    calories4[i].style.display = "block";
            }
            if (nutrient_amount > 200 && nutrient_amount <= 300) //calories5
            {
                for (var i = 0; i < calories5.length; i++)
                    calories5[i].style.display = "block";
            }
            if (nutrient_amount > 300 && nutrient_amount <= 400) //calories6
            {
                for (var i = 0; i < calories6.length; i++)
                    calories6[i].style.display = "block";
            }
            if (nutrient_amount > 400 && nutrient_amount <= 500) //calories7
            {
                for (var i = 0; i < calories7.length; i++)
                    calories7[i].style.display = "block";
            }
            if (nutrient_amount > 500 && nutrient_amount <= 600) //calories8
            {
                for (var i = 0; i < calories8.length; i++)
                    calories8[i].style.display = "block";
            }
            if (nutrient_amount > 600 && nutrient_amount <= 700) //calories9
            {
                for (var i = 0; i < calories9.length; i++)
                    calories9[i].style.display = "block";
            }
            if (nutrient_amount > 700 && nutrient_amount <= 800) //calories10
            {
                for (var i = 0; i < calories10.length; i++)
                    calories10[i].style.display = "block";
            }

        }

        //if nutrient selected is sugar
        if (nutrient_type == "sugar") {
            let sugar1 = document.getElementsByClassName("sugar1");
            let sugar2 = document.getElementsByClassName("sugar2");
            let sugar3 = document.getElementsByClassName("sugar3");
            let sugar4 = document.getElementsByClassName("sugar4");
            let sugar5 = document.getElementsByClassName("sugar5");
            let sugar6 = document.getElementsByClassName("sugar6");
            let sugar7 = document.getElementsByClassName("sugar7");
            let sugar8 = document.getElementsByClassName("sugar8");
            let sugar9 = document.getElementsByClassName("sugar9");
            let sugar10 = document.getElementsByClassName("sugar10");

            if (nutrient_amount >= 0) {
                for (var i = 0; i < sugar1.length; i++)
                    sugar1[i].style.display = "none";
                for (var i = 0; i < sugar2.length; i++)
                    sugar2[i].style.display = "none";
                for (var i = 0; i < sugar3.length; i++)
                    sugar3[i].style.display = "none";
                for (var i = 0; i < sugar4.length; i++)
                    sugar4[i].style.display = "none";
                for (var i = 0; i < sugar5.length; i++)
                    sugar5[i].style.display = "none";
                for (var i = 0; i < sugar6.length; i++)
                    sugar6[i].style.display = "none";
                for (var i = 0; i < sugar7.length; i++)
                    sugar7[i].style.display = "none";
                for (var i = 0; i < sugar8.length; i++)
                    sugar8[i].style.display = "none";
                for (var i = 0; i < sugar9.length; i++)
                    sugar9[i].style.display = "none";
                for (var i = 0; i < sugar10.length; i++)
                    sugar10[i].style.display = "none";
                for (var i = 0; i < both.length; i++)
                    both[i].style.display = "none";
            }

            if (nutrient_amount == 0) //sugar1
            {
                for (var i = 0; i < sugar1.length; i++)
                    sugar1[i].style.display = "block";
            }
            if (nutrient_amount > 0 && nutrient_amount <= 1) //sugar2
            {
                for (var i = 0; i < sugar2.length; i++)
                    sugar2[i].style.display = "block";
            }
            if (nutrient_amount > 1 && nutrient_amount <= 3) //sugar3
            {
                for (var i = 0; i < sugar3.length; i++)
                    sugar3[i].style.display = "block";
            }
            if (nutrient_amount > 3 && nutrient_amount <= 6) //sugar4
            {
                for (var i = 0; i < sugar4.length; i++)
                    sugar4[i].style.display = "block";
            }
            if (nutrient_amount > 6 && nutrient_amount <= 10) //sugar5
            {
                for (var i = 0; i < sugar5.length; i++)
                    sugar5[i].style.display = "block";
            }
            if (nutrient_amount > 10 && nutrient_amount <= 20) //sugar6
            {
                for (var i = 0; i < sugar6.length; i++)
                    sugar6[i].style.display = "block";
            }
            if (nutrient_amount > 20 && nutrient_amount <= 30) //sugar7
            {
                for (var i = 0; i < sugar7.length; i++)
                    sugar7[i].style.display = "block";
            }
            if (nutrient_amount > 30 && nutrient_amount <= 45) //sugar8
            {
                for (var i = 0; i < sugar8.length; i++)
                    sugar8[i].style.display = "block";
            }
            if (nutrient_amount > 45 && nutrient_amount <= 60) //sugar9
            {
                for (var i = 0; i < sugar9.length; i++)
                    sugar9[i].style.display = "block";
            }
            if (nutrient_amount > 60 && nutrient_amount <= 80) //sugar10
            {
                for (var i = 0; i < sugar10.length; i++)
                    sugar10[i].style.display = "block";
            }
        }

    }
}