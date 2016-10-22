/*Смена сторонности двери*/
/*Левосторонняя дверь*/
function StoronnostLeft() {
    document.getElementById("petlaya-top").style.right = "245px";
    document.getElementById("petlaya-bottom").style.right = "245px";
    document.getElementById("ld-nakladkic").style.right = "35px";
    document.getElementById("ld-nakladkis").style.right = "35px";
    document.getElementById("ld-ruchka").style.right = "35px";
    document.getElementById("rd-nakladkic").style.left = "15px";
    document.getElementById("rd-nakladkis").style.left = "15px";
    document.getElementById("rd-ruchka").style.left = "15px";
    document.getElementById("rust-canvas-left").style.display = "block";
    document.getElementById("rust-canvas-right").style.display = "none";
    if (document.getElementById("furnitura-chrom").checked == true) {
        document.getElementById("ld-ruchka").style.background = "url(../img/metal-nakladki/handlesr.png)";
        document.getElementById("ld-ruchka").style.backgroundSize = "100%";
        document.getElementById("ld-ruchka").style.backgroundRepeat = "no-repeat";
        document.getElementById("rd-ruchka").style.background = "url(../img/metal-nakladki/handlesl.png)";
        document.getElementById("rd-ruchka").style.backgroundSize = "100%";
        document.getElementById("rd-ruchka").style.backgroundRepeat = "no-repeat";
    } else {
        document.getElementById("ld-ruchka").style.background = "url(../img/metal-nakladki/handleszr.png)";
        document.getElementById("ld-ruchka").style.backgroundSize = "100%";
        document.getElementById("ld-ruchka").style.backgroundRepeat = "no-repeat";
        document.getElementById("rd-ruchka").style.background = "url(../img/metal-nakladki/handleszl.png)";
        document.getElementById("rd-ruchka").style.backgroundSize = "100%";
        document.getElementById("rd-ruchka").style.backgroundRepeat = "no-repeat";
    }
}
/*Правосторонняя дверь*/
function StoronnostRight() {
    document.getElementById("petlaya-top").style.right = "21px";
    document.getElementById("petlaya-bottom").style.right = "21px";
    document.getElementById("ld-nakladkic").style.right = "215px";
    document.getElementById("ld-nakladkis").style.right = "215px";
    document.getElementById("ld-ruchka").style.right = "185px";
    document.getElementById("rd-nakladkic").style.left = "195px";
    document.getElementById("rd-nakladkis").style.left = "195px";
    document.getElementById("rd-ruchka").style.left = "165px";
    document.getElementById("rust-canvas-right").style.display = "block";
    document.getElementById("rust-canvas-left").style.display = "none";
    if (document.getElementById("furnitura-chrom").checked == true) {
        document.getElementById("ld-ruchka").style.background = "url(../img/metal-nakladki/handlesl.png)";
        document.getElementById("ld-ruchka").style.backgroundSize = "100%";
        document.getElementById("ld-ruchka").style.backgroundRepeat = "no-repeat";
        document.getElementById("rd-ruchka").style.background = "url(../img/metal-nakladki/handlesr.png)";
        document.getElementById("rd-ruchka").style.backgroundSize = "100%";
        document.getElementById("rd-ruchka").style.backgroundRepeat = "no-repeat";
    } else {
        document.getElementById("ld-ruchka").style.background = "url(../img/metal-nakladki/handleszl.png)";
        document.getElementById("ld-ruchka").style.backgroundSize = "100%";
        document.getElementById("ld-ruchka").style.backgroundRepeat = "no-repeat";
        document.getElementById("rd-ruchka").style.background = "url(../img/metal-nakladki/handleszr.png)";
        document.getElementById("rd-ruchka").style.backgroundSize = "100%";
        document.getElementById("rd-ruchka").style.backgroundRepeat = "no-repeat";
    }
}

/*Скрытые петли*/
function Petli() {
    if (document.getElementById("scrit-peli-no").checked == true) {
        document.getElementById("petlaya-top").style.display = 'block';
        document.getElementById("petlaya-bottom").style.display = 'block';
    } else {
        document.getElementById("petlaya-top").style.display = 'none';
        document.getElementById("petlaya-bottom").style.display = 'none';
    }
}

/*Цвет фурнитуры*/
function Furnitura() {
    if (document.getElementById("furnitura-chrom").checked == true) {

        document.getElementById("ld-nakladkic").style.background = "url(../img/metal-nakladki/nakladkaccp.png)";
        document.getElementById("ld-nakladkic").style.backgroundSize = "100%";
        document.getElementById("ld-nakladkic").style.backgroundRepeat = "no-repeat";

        document.getElementById("rd-nakladkic").style.background = "url(../img/metal-nakladki/nakladkaccp.png)";
        document.getElementById("rd-nakladkic").style.backgroundSize = "100%";
        document.getElementById("rd-nakladkic").style.backgroundRepeat = "no-repeat";

        document.getElementById("ld-nakladkis").style.background = "url(../img/metal-nakladki/nakladkascp.png)";
        document.getElementById("ld-nakladkis").style.backgroundSize = "100%";
        document.getElementById("ld-nakladkis").style.backgroundRepeat = "no-repeat";

        document.getElementById("rd-nakladkis").style.background = "url(../img/metal-nakladki/nakladkascp.png)";
        document.getElementById("rd-nakladkis").style.backgroundSize = "100%";
        document.getElementById("rd-nakladkis").style.backgroundRepeat = "no-repeat";

        if (document.getElementById("stor-dver-left").checked == true) {

            document.getElementById("ld-ruchka").style.background = "url(../img/metal-nakladki/handlesr.png)";
            document.getElementById("ld-ruchka").style.backgroundSize = "100%";
            document.getElementById("ld-ruchka").style.backgroundRepeat = "no-repeat";

            document.getElementById("rd-ruchka").style.background = "url(../img/metal-nakladki/handlesl.png)";
            document.getElementById("rd-ruchka").style.backgroundSize = "100%";
            document.getElementById("rd-ruchka").style.backgroundRepeat = "no-repeat";
        } else {

            document.getElementById("ld-ruchka").style.background = "url(../img/metal-nakladki/handlesl.png)";
            document.getElementById("ld-ruchka").style.backgroundSize = "100%";
            document.getElementById("ld-ruchka").style.backgroundRepeat = "no-repeat";

            document.getElementById("rd-ruchka").style.background = "url(../img/metal-nakladki/handlesr.png)";
            document.getElementById("rd-ruchka").style.backgroundSize = "100%";
            document.getElementById("rd-ruchka").style.backgroundRepeat = "no-repeat";
        }
    } else {

        document.getElementById("ld-nakladkic").style.background = "url(../img/metal-nakladki/nakladkacag.png)";
        document.getElementById("ld-nakladkic").style.backgroundSize = "100%";
        document.getElementById("ld-nakladkic").style.backgroundRepeat = "no-repeat";

        document.getElementById("rd-nakladkic").style.background = "url(../img/metal-nakladki/nakladkacag.png)";
        document.getElementById("rd-nakladkic").style.background = "url(../img/metal-nakladki/nakladkacag.png)";
        document.getElementById("rd-nakladkic").style.backgroundSize = "100%";
        document.getElementById("rd-nakladkic").style.backgroundRepeat = "no-repeat";

        document.getElementById("ld-nakladkis").style.background = "url(../img/metal-nakladki/nakladkasag.png)";
        document.getElementById("ld-nakladkis").style.backgroundSize = "100%";
        document.getElementById("ld-nakladkis").style.backgroundRepeat = "no-repeat";

        document.getElementById("rd-nakladkis").style.background = "url(../img/metal-nakladki/nakladkasag.png)";
        document.getElementById("rd-nakladkis").style.backgroundSize = "100%";
        document.getElementById("rd-nakladkis").style.backgroundRepeat = "no-repeat";

        if (document.getElementById("stor-dver-left").checked == true) {

            document.getElementById("ld-ruchka").style.background = "url(../img/metal-nakladki/handleszr.png)";
            document.getElementById("ld-ruchka").style.backgroundSize = "100%";
            document.getElementById("ld-ruchka").style.backgroundRepeat = "no-repeat";

            document.getElementById("rd-ruchka").style.background = "url(../img/metal-nakladki/handleszl.png)";
            document.getElementById("rd-ruchka").style.backgroundSize = "100%";
            document.getElementById("rd-ruchka").style.backgroundRepeat = "no-repeat";
        } else {

            document.getElementById("ld-ruchka").style.background = "url(../img/metal-nakladki/handleszl.png)";
            document.getElementById("ld-ruchka").style.backgroundSize = "100%";
            document.getElementById("ld-ruchka").style.backgroundRepeat = "no-repeat";

            document.getElementById("rd-ruchka").style.background = "url(../img/metal-nakladki/handleszr.png)";
            document.getElementById("rd-ruchka").style.backgroundSize = "100%";
            document.getElementById("rd-ruchka").style.backgroundRepeat = "no-repeat";
        }
    }
}

/*Смена цвета металла*/
(function ColorMet() {

    // onclick vs. onchange
    var colormet = document.forms['color-met-form'].elements['ld-color-met'];
    var evro = document.getElementById('form-input-evro');
    for (var i = 0, len = colormet.length; i < len; i++) {

        colormet[i].onclick = function () {

            var labels = document.getElementsByTagName('LABEL');
            for (var y = 0; y < labels.length; y++) {
                if (labels[y].htmlFor == this.id) {
                    var o = labels[y];
                    var a = window.getComputedStyle(o, "").getPropertyValue('background');
                    if (evro.checked == true) {
                        document.getElementById('ld-met').style.background = a;
                        document.getElementById('right-door-opanelka').style.background = a;
                        document.getElementById('rd-met').style.background = a;
                        document.getElementById('petlaya-opanelka-top').style.background = a;
                        document.getElementById('petlaya-opanelka-bottom').style.background = a;
                        document.getElementById('color-met').checked = false;

                        break;
                    } else {
                        document.getElementById('left-door-opanelka').style.background = a;
                        document.getElementById('ld-met').style.background = a;
                        document.getElementById('right-door-opanelka').style.background = a;
                        document.getElementById('rd-met').style.background = a;
                        document.getElementById('petlaya-opanelka-top').style.background = a;
                        document.getElementById('petlaya-opanelka-bottom').style.background = a;
                        document.getElementById('ld-arrow').style.background = a;
                        document.getElementById('color-met').checked = false;
                        document.getElementById('img-no-vno').style.background = a;
                        document.getElementById('label-no-vnr').style.background = a;
                        break;
                    }


                }
            }

        };


    }

    // disable submission of all forms on this page
    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () {
            return false;
        };
    }

}());

/*Смена цвета мдф*/
(function ColorMDF() {

    // onclick vs. onchange
    var colormdf = document.forms['form-color-mdf'].elements['input-color-mdf'];

    for (var i = 0, len = colormdf.length; i < len; i++) {

        colormdf[i].onclick = function () {

            var labels = document.getElementsByTagName('LABEL');
            for (var y = 0; y < labels.length; y++) {
                if (labels[y].htmlFor == this.id) {
                    var o = labels[y];
                    var a = window.getComputedStyle(o, "").getPropertyValue('background');
                    document.getElementById('color-mdf').style.background = a;

                    document.getElementById('color-vnut-otdelka').checked = false;

                    break;
                }
            }

        };


    }

    // disable submission of all forms on this page
    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () {
            return false;
        };
    }

}());

window.onload = function () {
    Price();
    Text();
}
window.onclick = function () {
    Price();
    Text();
}

function Zamki(){
    document.getElementById('zamki').checked = false;
   /* var lock = document.forms['form-zamki'].elements['input-zamki'];

    for (var i = 0; i < lock.length; i++) {

        lock[i].onclick = function () {

            var labels = document.getElementsByTagName('LABEL');
            for (var y = 0; y < labels.length; y++) {
                if (labels[y].htmlFor == this.id) {
                    var o = labels[y];
                    var a = window.getComputedStyle(o, "").getPropertyValue('background');
                    document.getElementById('color-mdf').style.background = a;

                    document.getElementById('color-vnut-otdelka').checked = false;

                    break;
                }
            }

        };


    }

    // disable submission of all forms on this page
    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () {
            return false;
        };
    }

}*/
}

//Рсчет стоимости двери
function Arrow() {
    var color = document.forms['color-arrow'].elements['color-arrow-input'];
    for (var i = 0; i < color.length; i++) {

        if (color[i].id != 'color-arrow-no') {
            return otdelka[{
                label: "arrow",
                value: "3000"
            }];

            for (var y = 0; y < otdelka.length; y++) {
                if (otdelka[y].lable == "arrow") {
                    otdelka[y].value = "8000";
                    return otdelka;
                }
            }

        }
    }
}

function Price() {
    var inputs = document.getElementsByTagName("input");
    var money = 0;
    //var moneyot = 0;
    document.getElementById("total_money").textContent = money;




    for (var i = 0; i < inputs.length; i++) {


        if (inputs[i].type == "radio") {

            if (inputs[i].checked == true) {

                /*    for (var x = 0; x < otdelka.length; x++) {
                        if (inputs[i].id == otdelka[x].label) {
                            var z = 0;
                            z = money * 1 + otdelka[x].value * 1.3;
                            //console.log(z);
                            //return moneyot;
                        }
                    }   */


                for (var y = 0; y < values.length; y++) {
                    if (inputs[i].id == values[y].label) {

                        money = money * 1 + values[y].value * 1 + PriceArrow() * 1 + PriceOtdelkaNar() * 1 + PriceOtdelkaVnut() * 1 + PriceZamki() * 1;
                      
                        document.getElementById("total_money").textContent = Math.ceil(money * 1.3) + "руб.";

                    }
                }



            }


        }

    }
}

function PriceZamki() {
    var total = 0;
    var inputs = document.forms['form-zamki'].elements['input-zamki'];
    for (var i = 0; i < inputs.length; i++) {


        

            if (inputs[i].checked == true) {

                for (var y = 0; y < otdelka.length; y++) {
                    if (inputs[i].id == otdelka[y].label) {

                        
                        total = total * 1 + otdelka[y].value * 1 + PriceFilenka() * 1;

                        return total;
                        
                    }
                }
            }
      
    }

}


function PriceFilenka() {
    var total = 0;
    var inputs = document.forms['form-filenka-variant'].elements['input-filenka-variant'];
    var filenka = document.getElementById('filenka');
    for (var i = 0; i < inputs.length; i++) {


        

            if (inputs[i].checked == true) {

                for (var y = 0; y < otdelka.length; y++) {
                    if (inputs[i].id == otdelka[y].label) {
                        
                        if (filenka.checked == true){
                            total = total * 1 + otdelka[y].value * 1;
                           
                        return total;
                        
                        } else {
                           
                            return total;
                            
                        }
                        
                        
                    } 
                    }
                }  
            }
      
    }



function PriceOtdelkaNar() {
    var total = 0;
    var inputs = document.forms['form-nar-otdelka'].elements['form-nar-otdelka'];
    for (var i = 0; i < inputs.length; i++) {


        

            if (inputs[i].checked == true) {

                for (var y = 0; y < otdelka.length; y++) {
                    if (inputs[i].id == otdelka[y].label) {

                        
                        total = total * 1 + otdelka[y].value * 1 + PriceFilenka() * 1;
                      
                        return total;
                        
                    }
                }
            }
      
    }

}

function PriceOtdelkaVnut() {
    var total = 0;
    var inputs = document.forms['form-vnr'].elements['input-vnr'];
    for (var i = 0; i < inputs.length; i++) {


       

            if (inputs[i].checked == true) {

                for (var y = 0; y < otdelka.length; y++) {
                    if (inputs[i].id == otdelka[y].label) {

                        
                        total = total * 1 + otdelka[y].value * 1;
                       // console.log(total);
                        return total;
                        
                    }
                }
            }
        }
    }


function PriceArrow() {
    var ar = 0;
    var arrow = document.forms['color-arrow'].elements['color-arrow-input'];
    for (var i = 0; i < arrow.length; i++) {
        if (arrow[i].checked == true) {
            if (arrow[i].id != "color-arrow-no") {
                var stil = document.forms['form-nar-otdelka'].elements['form-nar-otdelka'];
                for (var y = 0; y < stil.length; y++) {
                    if (stil[y].checked == true) {
                        if (stil[y].id == "arrow") {
                            ar = 5000;
                            return ar;
                        } else {
                            ar = 0;
                            return ar;
                        }
                    }
                }


            } else {
                return ar;
            }
        }
    }
}





// Внутренняя отделка

(function RisMdf() {

    // onclick vs. onchange
    var vnutmdf = document.forms['form-vnut-otdelka'].elements['input-vnut-otdelka'];

    for (var i = 0, len = vnutmdf.length; i < len; i++) {

        vnutmdf[i].onclick = function () {

            var labels = document.getElementsByTagName('LABEL');
            for (var y = 0; y < labels.length; y++) {
                if (labels[y].htmlFor == this.id) {
                    var o = labels[y];
                    var a = window.getComputedStyle(o, "").getPropertyValue('background');
                    document.getElementById('rd-mdf').style.background = a;
                    document.getElementById('rd-mdf').style.display = "block";
                    document.getElementById('rd-met').style.display = "none";
                    document.getElementById('color-mdf').style.display = "block";

                    document.getElementById('vnut-otdelka').checked = false;
                    document.getElementById('color-vnut-otdelka').disabled = false;
                    break;
                }
            }

        };


    }

    // disable submission of all forms on this page
    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () {
            return false;
        };
    }

}());
// МДФ снаружи
(function RisMdfNar() {

    // onclick vs. onchange
    var narmdf = document.forms['form-nar-otdelka-mdf'].elements['input-nar-otdelka'];

    for (var i = 0; i < narmdf.length; i++) {

        narmdf[i].onclick = function () {

            var labels = document.getElementsByTagName('LABEL');
            for (var y = 0; y < labels.length; y++) {
                if (labels[y].htmlFor == this.id) {
                    var o = labels[y];
                    var a = window.getComputedStyle(o, "").getPropertyValue('background');
                    document.getElementById('ld-mdf').style.background = a;
                    document.getElementById('ld-mdf').style.display = "block";
                    document.getElementById('ld-met').style.display = "none";
                    document.getElementById('ld-color-mdf').style.display = "block";
                    document.getElementById('form-color-mdf-nar').style.display = "block";

                    document.getElementById('nar-mdf-vybor').checked = false;
                    document.getElementById('color-nar-otdelka').disabled = false;
                    break;
                }
            }

        }


    }

    // disable submission of all forms on this page
    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () {
            return false;
        }
    }

}());

/*Смена цвета мдф снаружи*/
(function ColorMDFNar() {

    // onclick vs. onchange
    var colormdf = document.forms['form-color-mdf-nar'].elements['input-color-mdf-nar'];
    var evro = document.getElementById('form-input-evro');
    for (var i = 0, len = colormdf.length; i < len; i++) {

        colormdf[i].onclick = function () {

            var labels = document.getElementsByTagName('LABEL');
            for (var y = 0; y < labels.length; y++) {
                if (labels[y].htmlFor == this.id) {
                    var o = labels[y];
                    var a = window.getComputedStyle(o, "").getPropertyValue('background');
                    if (evro.checked == true) {
                        document.getElementById('left-door-opanelka').style.background = a;
                    }
                    document.getElementById('ld-color-mdf').style.background = a;

                    document.getElementById('color-nar-otdelka').checked = false;

                    break;
                }
            }

        };


    }

    // disable submission of all forms on this page
    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () {
            return false;
        };
    }

}());

//Тип двери
function TypeDoorEvro() {
    document.getElementById('type-dver').checked = false;
    document.getElementById('scrit-peli-yes').checked = true;
    document.getElementById('scrit-peli-no').disabled = true;
    Petli();
    document.getElementById('label-nar-otdelka').style.display = 'none';
    document.getElementById('label-nar-mdf-vybor').style.display = 'block';
    document.getElementById('label-color-nar-otdelka').style.display = 'block';
    document.getElementById('form-color-mdf-nar').style.display = 'block';
    document.getElementById('ld-color-mdf').style.display = 'block';
    document.getElementById('ld-mdf').style.display = 'block';
    document.getElementById('ld-met').style.display = 'none';
    document.getElementById('rd-met').style.display = 'none';
    document.getElementById('color-mdf').style.display = 'block';
    document.getElementById('rd-mdf').style.display = 'block';
    document.getElementById('left-door-opanelka').style.background = window.getComputedStyle(document.getElementById('ld-color-mdf'), "").getPropertyValue('background');
    document.getElementById('label-np').style.display = 'none';
    document.getElementById('label-nar-otdelka').style.display = 'block';
    document.getElementById('ld-aplication').style.display = 'none';
    document.getElementById('ld-still').style.display = 'none';
    document.getElementById('ld-arrow').style.display = 'none';
    document.getElementById('ld-rust').style.display = 'none';
    document.getElementById('ld-filenka').style.display = 'none';
    document.getElementById('label-nar-otdelka').style.display = 'none';
    document.getElementById('narmdf').checked = true;

    document.getElementById('span-nar-otdelka').style.display = 'inline-block';
    document.getElementById('span-input-np').style.display = 'none';
    document.getElementById('span-input-nar-otdelka').style.display = 'inline-block';
    document.getElementById('span-filenka-variant').style.display = 'none';
    document.getElementById('span-color-mdf-nar').style.display = 'inline-block';
    document.getElementById('span-color-arrow-input').style.display = 'none';

    document.getElementById('label-filenka-variant').style.display = 'none';

}

function TypeDoor2k() {
    document.getElementById('type-dver').checked = false;
    document.getElementById('scrit-peli-no').disabled = false;
    document.getElementById('scrit-peli-yes').disabled = false;
    document.getElementById('label-nar-otdelka').style.display = 'block';
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('label-color-nar-otdelka').style.display = 'none';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    Petli();
    document.getElementById('left-door-opanelka').style.background = window.getComputedStyle(document.getElementById('ld-met'), "").getPropertyValue('background');
    document.getElementById('label-np').style.display = 'none';
    document.getElementById('label-nar-otdelka').style.display = 'block';
    document.getElementById('ld-aplication').style.display = 'none';
    document.getElementById('no-form-nar-otdelka').checked = true;

    document.getElementById('span-nar-otdelka').style.display = 'inline-block';
    document.getElementById('span-input-np').style.display = 'none';
    document.getElementById('span-input-nar-otdelka').style.display = 'none';
    document.getElementById('span-filenka-variant').style.display = 'none';
    document.getElementById('span-color-mdf-nar').style.display = 'none';
    document.getElementById('span-color-arrow-input').style.display = 'inline-block';
}

function TypeDoor3k() {
    document.getElementById('type-dver').checked = false;
    document.getElementById('scrit-peli-no').disabled = false;
    document.getElementById('scrit-peli-yes').disabled = false;
    document.getElementById('label-nar-otdelka').style.display = 'block';
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('label-color-nar-otdelka').style.display = 'none';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    Petli();
    document.getElementById('left-door-opanelka').style.background = window.getComputedStyle(document.getElementById('ld-met'), "").getPropertyValue('background');
    document.getElementById('label-np').style.display = 'none';
    document.getElementById('label-nar-otdelka').style.display = 'block';
    document.getElementById('ld-aplication').style.display = 'none';

    document.getElementById('span-nar-otdelka').style.display = 'inline-block';
    document.getElementById('span-input-np').style.display = 'none';
    document.getElementById('span-input-nar-otdelka').style.display = 'none';
    document.getElementById('span-filenka-variant').style.display = 'none';
    document.getElementById('span-color-mdf-nar').style.display = 'none';
    document.getElementById('span-color-arrow-input').style.display = 'inline-block';
}

function TypeDoorTermo2k() {
    document.getElementById('type-dver').checked = false;
    document.getElementById('scrit-peli-yes').disabled = true;
    document.getElementById('scrit-peli-no').checked = true;
    document.getElementById('scrit-peli-no').disabled = false;
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('label-color-nar-otdelka').style.display = 'none';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    Petli();
    document.getElementById('left-door-opanelka').style.background = window.getComputedStyle(document.getElementById('ld-met'), "").getPropertyValue('background');
    document.getElementById('label-np').style.display = 'none';
    document.getElementById('label-nar-otdelka').style.display = 'block';
    document.getElementById('ld-aplication').style.display = 'none';
    document.getElementById('ld-still').style.display = 'none';
    document.getElementById('ld-arrow').style.display = 'none';
    document.getElementById('ld-rust').style.display = 'none';
    document.getElementById('ld-filenka').style.display = 'none';
    document.getElementById('label-nar-otdelka').style.display = 'none';

    document.getElementById('span-nar-otdelka').style.display = 'none';
    document.getElementById('span-input-np').style.display = 'none';
    document.getElementById('span-input-nar-otdelka').style.display = 'none';
    document.getElementById('span-filenka-variant').style.display = 'none';
    document.getElementById('span-color-mdf-nar').style.display = 'none';
    document.getElementById('span-color-arrow-input').style.display = 'none';
    document.getElementById('label-filenka-variant').style.display = 'none';
}

function TypeDoorTermo3k() {
    document.getElementById('type-dver').checked = false;
    document.getElementById('scrit-peli-no').disabled = false;
    document.getElementById('scrit-peli-yes').disabled = false;
    document.getElementById('label-nar-otdelka').style.display = 'block';
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('label-color-nar-otdelka').style.display = 'none';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    Petli();
    document.getElementById('left-door-opanelka').style.background = window.getComputedStyle(document.getElementById('ld-met'), "").getPropertyValue('background');
    document.getElementById('label-np').style.display = 'none';
    document.getElementById('label-nar-otdelka').style.display = 'block';
    document.getElementById('ld-aplication').style.display = 'none';

    document.getElementById('span-nar-otdelka').style.display = 'inline-block';
    document.getElementById('span-input-np').style.display = 'none';
    document.getElementById('span-input-nar-otdelka').style.display = 'none';
    document.getElementById('span-filenka-variant').style.display = 'none';
    document.getElementById('span-color-mdf-nar').style.display = 'none';
    document.getElementById('span-color-arrow-input').style.display = 'inline-block';
}

function TypeDoorAero() {
    document.getElementById('type-dver').checked = false;
    document.getElementById('scrit-peli-yes').checked = true;
    document.getElementById('scrit-peli-no').disabled = true;
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('label-color-nar-otdelka').style.display = 'none';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';

    document.getElementById('label-np').style.display = 'block';
    document.getElementById('ld-aplication').style.display = 'block';
    document.getElementById('label-nar-otdelka').style.display = 'none';
    Petli();
    document.getElementById('ld-still').style.display = 'none';
    document.getElementById('ld-arrow').style.display = 'none';
    document.getElementById('ld-rust').style.display = 'none';
    document.getElementById('ld-filenka').style.display = 'none';
    document.getElementById('no-form-nar-otdelka').checked = true;

    document.getElementById('span-nar-otdelka').style.display = 'none';
    document.getElementById('span-input-np').style.display = 'inline-block';
    document.getElementById('span-input-nar-otdelka').style.display = 'none';
    document.getElementById('span-filenka-variant').style.display = 'none';
    document.getElementById('span-color-mdf-nar').style.display = 'none';
    document.getElementById('span-color-arrow-input').style.display = 'none';
    document.getElementById('label-filenka-variant').style.display = 'none';
}

//Выбор наружной отделки
function NarOtdelkaNo() {
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('ld-filenka').style.display = 'none';
    document.getElementById('ld-rust').style.display = 'none';
    document.getElementById('ld-aplication').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-steklo').style.display = 'none';
    document.getElementById('ld-arrow').style.display = 'none';
    document.getElementById('ld-still').style.display = 'none';
    document.getElementById('nar-mdf-vybor').style.display = 'none';
    document.getElementById('color-nar-otdelka').style.display = 'none';
    document.getElementById('nar-otdelka').checked = false;
    document.getElementById('label-filenka-variant').style.display = 'none';
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('label-color-nar-otdelka').style.display = 'none';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    NoFilenka();
}

function NarOtdelkaApplication() {
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('ld-filenka').style.display = 'none';
    document.getElementById('ld-rust').style.display = 'none';
    document.getElementById('ld-aplication').style.display = 'block';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-steklo').style.display = 'none';
    document.getElementById('ld-arrow').style.display = 'none';
    document.getElementById('ld-still').style.display = 'none';
    document.getElementById('nar-mdf-vybor').style.display = 'none';
    document.getElementById('color-nar-otdelka').style.display = 'none';
    document.getElementById('nar-otdelka').checked = false;
    document.getElementById('label-filenka-variant').style.display = 'none';
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('label-color-nar-otdelka').style.display = 'block';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    NoFilenka();
}

function NarOtdelkaRust() {
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('ld-filenka').style.display = 'none';
    document.getElementById('ld-rust').style.display = 'block';
    document.getElementById('ld-aplication').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-steklo').style.display = 'none';
    document.getElementById('ld-arrow').style.display = 'none';
    document.getElementById('ld-still').style.display = 'none';
    document.getElementById('nar-mdf-vybor').style.display = 'none';
    document.getElementById('color-nar-otdelka').style.display = 'none';
    document.getElementById('nar-otdelka').checked = false;
    document.getElementById('color-arrow').style.display = 'block';
    document.getElementById('label-filenka-variant').style.display = 'none';
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('label-color-nar-otdelka').style.display = 'block';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    Rust();
    document.getElementById('label-color-nar-otdelka').style.display = 'none';
    NoFilenka();
}

function NarOtdelkaStil() {
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('ld-filenka').style.display = 'none';
    document.getElementById('ld-rust').style.display = 'none';
    document.getElementById('ld-aplication').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-steklo').style.display = 'none';
    document.getElementById('ld-arrow').style.display = 'none';
    document.getElementById('ld-still').style.display = 'block';
    document.getElementById('nar-mdf-vybor').style.display = 'none';
    document.getElementById('color-nar-otdelka').style.display = 'none';
    document.getElementById('nar-otdelka').checked = false;
    document.getElementById('color-arrow').style.display = 'block';
    document.getElementById('label-filenka-variant').style.display = 'none';
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('label-color-nar-otdelka').style.display = 'block';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    NoFilenka();
}

function NarOtdelkaSteklo() {
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('ld-filenka').style.display = 'none';
    document.getElementById('ld-rust').style.display = 'none';
    document.getElementById('ld-aplication').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-steklo').style.display = 'block';
    document.getElementById('ld-arrow').style.display = 'none';
    document.getElementById('ld-still').style.display = 'none';
    document.getElementById('nar-mdf-vybor').style.display = 'none';
    document.getElementById('color-nar-otdelka').style.display = 'none';
    document.getElementById('label-filenka-variant').style.display = 'none';
    document.getElementById('nar-otdelka').checked = false;
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('label-color-nar-otdelka').style.display = 'block';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    NoFilenka();
}

function NarOtdelkaMDF() {
    document.getElementById('ld-met').style.display = 'none';
    document.getElementById('ld-filenka').style.display = 'none';
    document.getElementById('ld-rust').style.display = 'none';
    document.getElementById('ld-aplication').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'block';
    document.getElementById('ld-mdf').style.display = 'block';
    document.getElementById('label-nar-mdf-vybor').style.display = 'block';
    document.getElementById('label-color-nar-otdelka').style.display = 'block';
    document.getElementById('form-color-mdf-nar').style.display = 'block';
    document.getElementById('ld-color-mdf').style.display = 'block';
    document.getElementById('ld-steklo').style.display = 'none';
    document.getElementById('ld-arrow').style.display = 'none';
    document.getElementById('ld-still').style.display = 'none';
    document.getElementById('nar-otdelka').checked = false;
    document.getElementById('label-filenka-variant').style.display = 'none';
    NoFilenka();
}

function NarOtdelkaArrow() {
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('ld-filenka').style.display = 'none';
    document.getElementById('ld-rust').style.display = 'none';
    document.getElementById('ld-aplication').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-steklo').style.display = 'none';
    document.getElementById('ld-arrow').style.display = 'block';
    document.getElementById('ld-still').style.display = 'none';
    document.getElementById('nar-mdf-vybor').style.display = 'none';
    document.getElementById('color-nar-otdelka').style.display = 'none';
    document.getElementById('nar-otdelka').checked = false;
    document.getElementById('color-arrow').style.display = 'block';
    document.getElementById('label-filenka-variant').style.display = 'none';
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('label-color-nar-otdelka').style.display = 'block';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    NoFilenka();
}

function NarOtdelkaPhil() {
    document.getElementById('ld-met').style.display = 'block';
    document.getElementById('ld-filenka').style.display = 'block';
    document.getElementById('ld-rust').style.display = 'none';
    document.getElementById('ld-aplication').style.display = 'none';
    document.getElementById('ld-color-mdf').style.display = 'none';
    document.getElementById('ld-mdf').style.display = 'none';
    document.getElementById('ld-steklo').style.display = 'none';
    document.getElementById('ld-arrow').style.display = 'none';
    document.getElementById('ld-still').style.display = 'none';
    document.getElementById('nar-mdf-vybor').style.display = 'none';
    document.getElementById('color-nar-otdelka').style.display = 'none';
    document.getElementById('nar-otdelka').checked = false;
    document.getElementById('label-color-nar-otdelka').style.display = 'none';
    document.getElementById('label-filenka-variant').style.display = 'block';
    document.getElementById('label-nar-mdf-vybor').style.display = 'none';
    document.getElementById('form-color-mdf-nar').style.display = 'none';
    document.getElementById('filenka20').checked = true;
    document.getElementById('ld-filenka').style.background = "url(../img/mdf/020.png)";
}


//Смена цвет элемента стрела
(function ColorArrow() {

    // onclick vs. onchange
    var colorarrow = document.forms['color-arrow'].elements['color-arrow-input'];

    for (var i = 0, len = colorarrow.length; i < len; i++) {

        colorarrow[i].onclick = function () {

            var labels = document.getElementsByTagName('LABEL');
            for (var y = 0; y < labels.length; y++) {
                if (labels[y].htmlFor == this.id) {
                    var o = labels[y];
                    var a = window.getComputedStyle(o, "").getPropertyValue('background');

                    document.getElementById('dver-arrow-left').style.background = a;

                    document.getElementById('dver-arrow-right').style.background = a;

                    document.getElementById('ld-still-left').style.background = a;

                    document.getElementById('ld-still-right').style.background = a;

                    document.getElementById('color-nar-otdelka').checked = false;

                    break;
                }
            }

        };


    }

    // disable submission of all forms on this page
    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () {
            return false;
        };
    }

}());

//Элемент Раст
function Rust() {
    var left = document.getElementById('rust-canvas-left');
    var ctxl = left.getContext('2d');
    var ctxlv = left.getContext('2d');
    var right = document.getElementById('rust-canvas-right');
    var ctxr = right.getContext('2d');
    var ctxrv = right.getContext('2d');


    ctxl.beginPath();
    ctxl.moveTo(25, 0);
    ctxl.lineTo(25, 215);
    ctxl.moveTo(25, 215);
    ctxl.lineTo(0, 245);
    ctxl.moveTo(0, 245);
    ctxl.lineTo(25, 275);
    ctxl.moveTo(25, 275);
    ctxl.lineTo(25, 475);

    ctxl.moveTo(25, 475);
    ctxl.lineTo(50, 475);

    ctxl.moveTo(50, 475);
    ctxl.lineTo(50, 275);
    ctxl.moveTo(50, 275);
    ctxl.lineTo(25, 245);
    ctxl.moveTo(25, 245);
    ctxl.lineTo(50, 215);
    ctxl.moveTo(50, 215);
    ctxl.lineTo(50, 0);
    ctxl.moveTo(50, 0);
    ctxl.lineTo(25, 0);


    ctxl.moveTo(37, 15);
    ctxl.lineTo(30, 5);
    ctxl.moveTo(37, 15);
    ctxl.lineTo(45, 5);
    ctxl.moveTo(37, 15);
    ctxl.lineTo(37, 215);
    ctxl.moveTo(37, 215);
    ctxl.lineTo(12, 245);
    ctxl.moveTo(12, 245);
    ctxl.lineTo(37, 275);
    ctxl.moveTo(37, 275);
    ctxl.lineTo(37, 460);
    ctxl.moveTo(37, 460);
    ctxl.lineTo(30, 470);
    ctxl.lineTo(45, 470);
    ctxl.closePath();
    // ctxl.lineWidth = 1;



    ctxl.shadowBlur = 3;
    ctxl.shadowColor = 'black';
    ctxl.stroke();

    ctxlv.beginPath();
    ctxlv.moveTo(30, 5);
    ctxlv.lineTo(30, 215);
    ctxlv.moveTo(30, 215);
    ctxlv.lineTo(5, 245);
    ctxlv.moveTo(5, 245);
    ctxlv.lineTo(30, 275);
    ctxlv.moveTo(30, 275);
    ctxlv.lineTo(30, 470);

    ctxlv.moveTo(30, 470);
    ctxlv.lineTo(45, 470);

    ctxlv.moveTo(45, 470);
    ctxlv.lineTo(45, 275);
    ctxlv.moveTo(45, 275);
    ctxlv.lineTo(20, 245);
    ctxlv.moveTo(20, 245);
    ctxlv.lineTo(45, 215);
    ctxlv.moveTo(45, 215);
    ctxlv.lineTo(45, 5);
    ctxlv.moveTo(45, 5);
    ctxlv.lineTo(30, 5);

    ctxlv.closePath();
    // ctxlv.lineWidth = 1;



    ctxlv.shadowBlur = 3;
    ctxlv.shadowColor = 'black';
    ctxlv.stroke();
    ctxlv.shadowOffsetX = 0;
    ctxlv.shadowOffsetY = 0;


    ctxr.beginPath();
    ctxr.moveTo(25, 0);
    ctxr.lineTo(25, 215);
    ctxr.moveTo(25, 215);
    ctxr.lineTo(50, 245);
    ctxr.moveTo(50, 245);
    ctxr.lineTo(25, 275);
    ctxr.moveTo(25, 275);
    ctxr.lineTo(25, 475);

    ctxr.moveTo(25, 475);
    ctxr.lineTo(0, 475);

    ctxr.moveTo(0, 475);
    ctxr.lineTo(0, 275);
    ctxr.moveTo(0, 275);
    ctxr.lineTo(25, 245);
    ctxr.moveTo(25, 245);
    ctxr.lineTo(0, 215);
    ctxr.moveTo(0, 215);
    ctxr.lineTo(0, 0);
    ctxr.moveTo(0, 0);
    ctxr.lineTo(25, 0);


    ctxr.moveTo(12, 15);
    ctxr.lineTo(5, 5);
    ctxr.moveTo(12, 15);
    ctxr.lineTo(20, 5);
    ctxr.moveTo(12, 15);
    ctxr.lineTo(12, 215);
    ctxr.moveTo(12, 215);
    ctxr.lineTo(37, 245);
    ctxr.moveTo(37, 245);
    ctxr.lineTo(12, 275);
    ctxr.moveTo(12, 275);
    ctxr.lineTo(12, 460);
    ctxr.moveTo(12, 460);
    ctxr.lineTo(5, 470);
    ctxr.lineTo(20, 470);
    ctxr.closePath();
    // ctxl.lineWidth = 1;



    ctxr.shadowBlur = 3;
    ctxr.shadowColor = 'black';
    ctxr.stroke();

    ctxrv.beginPath();
    ctxrv.moveTo(5, 5);
    ctxrv.lineTo(5, 215);
    ctxrv.moveTo(5, 215);
    ctxrv.lineTo(30, 245);
    ctxrv.moveTo(30, 245);
    ctxrv.lineTo(5, 275);
    ctxrv.moveTo(5, 275);
    ctxrv.lineTo(5, 470);

    ctxrv.moveTo(5, 470);
    ctxrv.lineTo(20, 470);

    ctxrv.moveTo(20, 470);
    ctxrv.lineTo(20, 275);
    ctxrv.moveTo(20, 275);
    ctxrv.lineTo(45, 245);
    ctxrv.moveTo(45, 245);
    ctxrv.lineTo(20, 215);
    ctxrv.moveTo(20, 215);
    ctxrv.lineTo(20, 5);
    ctxrv.moveTo(20, 5);
    ctxrv.lineTo(5, 5);

    ctxrv.closePath();
    // ctxlv.lineWidth = 1;



    ctxrv.shadowBlur = 3;
    ctxrv.shadowColor = 'black';
    ctxrv.stroke();
    ctxrv.shadowOffsetX = 0;
    ctxrv.shadowOffsetY = 0;
}

//Филенки

(function Filenka() {

    // onclick vs. onchange
    var fil = document.forms['form-filenka-variant'].elements['input-filenka-variant'];

    for (var i = 0, len = fil.length; i < len; i++) {

        fil[i].onclick = function () {

            var labels = document.getElementsByTagName('LABEL');
            for (var y = 0; y < labels.length; y++) {
                if (labels[y].htmlFor == this.id) {
                    var o = labels[y];
                    var a = window.getComputedStyle(o, "").getPropertyValue('background');

                    document.getElementById('ld-filenka').style.background = a;

                    document.getElementById('filenka-variant').checked = false;

                    break;
                }
            }

        };


    }

    // disable submission of all forms on this page
    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () {
            return false;
        };
    }

}());

function NoFilenka() {
    var fil = document.forms['form-filenka-variant'].elements['input-filenka-variant'];
    for (var i = 0, len = fil.length; i < len; i++) {
        if (fil[i].checked == true) {
            document.getElementById('filenka20').checked = true;
            document.getElementById('ld-filenka').style.background = 'transparent';
        }
    }
}

//Выбор внутренней отделки
function NoVNR() {
    NoMDF();
    NoPV();
    document.getElementById('rd-mdf').style.display = "none";
    document.getElementById('rd-met').style.display = "block";
    document.getElementById('rd-photo').style.display = "none";
    document.getElementById('label-vnut-otdelka').style.display = "none";
    document.getElementById('color-mdf').style.display = "none";
    document.getElementById('label-color-vnut-otdelka').style.display = "none";
    document.getElementById('label-vp').style.display = "none";
    document.getElementById('vybor-nar-otdelka').checked = false;
}

function MDFVNR() {
    NoPV();
    document.getElementById('rd-mdf').style.display = "block";
    document.getElementById('rd-met').style.display = "none";
    document.getElementById('rd-photo').style.display = "none";
    document.getElementById('label-vnut-otdelka').style.display = "block";
    document.getElementById('color-mdf').style.display = "block";
    document.getElementById('label-color-vnut-otdelka').style.display = "block";
    document.getElementById('label-vp').style.display = "none";
    document.getElementById('vybor-nar-otdelka').checked = false;
}

function PhotoVNR() {
    NoMDF();
    document.getElementById('rd-mdf').style.display = "none";
    document.getElementById('rd-met').style.display = "none";
    document.getElementById('rd-photo').style.display = "block";
    document.getElementById('label-vnut-otdelka').style.display = "none";
    document.getElementById('color-mdf').style.display = "none";
    document.getElementById('label-color-vnut-otdelka').style.display = "none";
    document.getElementById('label-vp').style.display = "block";
    document.getElementById('vybor-nar-otdelka').checked = false;
}

function NoMDF() {
    var fil = document.forms['form-vnut-otdelka'].elements['input-vnut-otdelka'];
    for (var i = 0, len = fil.length; i < len; i++) {
        if (fil[i].checked == true) {
            fil[i].checked = false;
            document.getElementById('ld-filenka').style.display = 'none';
        }
    }
}

function NoPV() {
    var fil = document.forms['form-vp'].elements['input-pv'];
    for (var i = 0, len = fil.length; i < len; i++) {
        if (fil[i].checked == true) {
            fil[i].checked = false;
            document.getElementById('rd-photo').style.display = 'none';
        }
    }
}

//Фотопечать внутри
(function PV() {

    // onclick vs. onchange
    var fil = document.forms['form-vp'].elements['input-pv'];

    for (var i = 0, len = fil.length; i < len; i++) {

        fil[i].onclick = function () {

            var labels = document.getElementsByTagName('LABEL');
            for (var y = 0; y < labels.length; y++) {
                if (labels[y].htmlFor == this.id) {
                    var o = labels[y];
                    var a = window.getComputedStyle(o, "").getPropertyValue('background');

                    document.getElementById('rd-photo').style.background = a;

                    document.getElementById('vnut-photo').checked = false;

                    break;
                }
            }

        };


    }

    // disable submission of all forms on this page
    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () {
            return false;
        };
    }

}());
//Фотопечать на металле
(function PV() {

    // onclick vs. onchange
    var fil = document.forms['form-np'].elements['input-np'];

    for (var i = 0, len = fil.length; i < len; i++) {

        fil[i].onclick = function () {

            var labels = document.getElementsByTagName('LABEL');
            for (var y = 0; y < labels.length; y++) {
                if (labels[y].htmlFor == this.id) {
                    var o = labels[y];
                    var a = window.getComputedStyle(o, "").getPropertyValue('background');

                    document.getElementById('ld-aplication').style.background = a;

                    document.getElementById('nar-photo').checked = false;

                    break;
                }
            }

        };


    }

    // disable submission of all forms on this page
    for (var i = 0, len = document.forms.length; i < len; i++) {
        document.forms[i].onsubmit = function () {
            return false;
        };
    }

}());

//Описание двери
function Text() {
    var input = document.getElementsByTagName('input');
    var span = document.getElementsByTagName('span');
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked == true) {
            var figure = input[i].nextElementSibling.childNodes[0];

            for (var y = 0; y < span.length; y++) {

                if (span[y].getAttribute("value") == input[i].name) {
                    if (input[i].getAttribute("value") != null) {

                        span[y].textContent = input[i].getAttribute("value");
                    } else {

                        var label = input[i].nextSibling;
                        span[y].textContent = label.nextSibling.textContent;
                    }


                }
            }
        }
    }
}