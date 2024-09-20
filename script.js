document.getElementById('download-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    document.getElementById('popup').style.display = 'flex'; // Exibe o pop-up
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; // Fecha o pop-up
});

// Para fechar o pop-up ao clicar fora dele
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};
