document.querySelector('.entrar').addEventListener('click', function(){
    document.querySelector('.login .bg-modal').style.display='flex';
})
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.login .bg-modal').style.display='none';
})

document.querySelector('.cadastrar').addEventListener('click', function(){
    document.querySelector('.cadastro .bg-modal').style.display='flex';
    document.querySelector('.login .bg-modal').style.display='none';
})
document.querySelector('.fechar').addEventListener('click', function(){
    document.querySelector('.cadastro .bg-modal').style.display='none';
})

document.getElementById("logar").onclick = function () {
    window.location.href = "/profile.html";
};

document.getElementById("groups").onclick = function () {
    window.location.href = "/grupos.html";
};