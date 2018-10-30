let i = document.getElementById('input');
i.value = localStorage.getItem('input')
function doStorage(){
    localStorage.setItem('input',i.value)
}
function removeStorage(){
    i.value = '';
    localStorage.setItem('input','')
}