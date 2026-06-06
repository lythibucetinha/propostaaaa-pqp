 function sim() {
        alert("Ebaaaaa! :)");
        // redireciona para um URL após clicar no SIM
        location.href = "https://www.youtube.com/watch?v=Q0G-SThjW0c";
    }

    function desvia(btn, event) {
        if (event && event.type === 'click') {
            location.href = "https://www.youtube.com/shorts/w3oIvR5HuGs";
            return;
        }

        btn.style.position = 'absolute';
        btn.style.bottom = geraPosicao(10, 90);
        btn.style.left = geraPosicao(10, 90);
    }

    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + "%";
    }

    document.addEventListener('DOMContentLoaded', function() {
        var naoBtn = document.getElementById('naoBtn');
        if (naoBtn) {
            naoBtn.addEventListener('mouseover', function() {
                desvia(this);
            });
            naoBtn.addEventListener('click', function(event) {
                desvia(this, event);
            });
        }
    });
