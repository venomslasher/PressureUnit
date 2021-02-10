function torr_fn(){
    var t = document.getElementById("torr").value
    document.getElementById("Pa").value = t*(10000/76)
    document.getElementById("mbar").value = t*(100/76)
    document.getElementById("atm").value= t/760
    document.getElementById("psi").value= t*(14.5/760)
}


function atm_fn(){
    var t = document.getElementById("atm").value
    document.getElementById("Pa").value = t*(100000)
    document.getElementById("mbar").value = t*(1000)
    document.getElementById("torr").value= t*760
    document.getElementById("psi").value= t*(14.5)
}

function pa_fn(){
    var t = document.getElementById("Pa").value
    document.getElementById("torr").value = t*(76/10000)
    document.getElementById("mbar").value = t/100
    document.getElementById("atm").value= t/100000
    document.getElementById("psi").value= t*(14.5/100000)
}


function psi_fn(){
    var t = document.getElementById("psi").value
    document.getElementById("Pa").value = t*(100000/14.5)
    document.getElementById("mbar").value = t*(1000/14.5)
    document.getElementById("atm").value= t/14.5
    document.getElementById("torr").value= t*(760/14.5)
}

//Ngokul
function mbar_fn(){
    var t = document.getElementById("mbar").value
    document.getElementById("Pa").value = t*(100)
    document.getElementById("torr").value = t*(76/100)
    document.getElementById("atm").value= t/1000
    document.getElementById("psi").value= t*(14.5/1000)
}
