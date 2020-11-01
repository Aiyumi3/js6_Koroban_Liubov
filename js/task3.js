function task3() {
    let reg = /\d/g;
    let el = document.getElementById("t2");
    if(el.value.match(reg)){
        el.value = el.value.replace(reg, '');;
    }
}