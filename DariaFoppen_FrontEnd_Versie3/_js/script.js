/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var icoontjesElement1 = document.querySelector('#icoontjes1');
var icoontjesElement2 = document.querySelector('#icoontjes2');
var icoontjesElement3 = document.querySelector('#icoontjes3');
var icoontjesElement4 = document.querySelector('#icoontjes4');
var icoontjesElement5 = document.querySelector('#icoontjes5');
var icoontjesElement6 = document.querySelector('#icoontjes6');

function veranderIcoontjes1(event) {
    icoontjesElement1.src = "../images/icoontjeshart.png";
}

function veranderIcoontjes2(event) {
    icoontjesElement2.src = "../images/icoontjeshart.png";
}

function veranderIcoontjes3(event) {
    icoontjesElement3.src = "../images/icoontjeshart.png";
}

function veranderIcoontjes4(event) {
    icoontjesElement4.src = "../images/icoontjeshart.png";
}

function veranderIcoontjes5(event) {
    icoontjesElement5.src = "../images/icoontjeshart.png";
}

function veranderIcoontjes6(event) {
    icoontjesElement6.src = "../images/icoontjeshart.png";
}


icoontjesElement1.addEventListener('click', veranderIcoontjes1);
icoontjesElement2.addEventListener('click', veranderIcoontjes2);
icoontjesElement3.addEventListener('click', veranderIcoontjes3);
icoontjesElement4.addEventListener('click', veranderIcoontjes4);
icoontjesElement5.addEventListener('click', veranderIcoontjes5);
icoontjesElement6.addEventListener('click', veranderIcoontjes6);
