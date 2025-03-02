
function changebackgroundcolor(){
    let hex="#" + Math.random().toString(16).slice(2,8).padEnd(6,"0");
    document.body.style.backgroundColor= hex;
}


function removeitem(){
    
    let element= document.getElementById('activity-logs');
    
    element.innerHTML = ""
}