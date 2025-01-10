
document.addEventListener('DOMContentLoaded', function () {
    let openMenu = document.getElementById("open__menu")
    let closeMenu = document.getElementById("close__menu")
    let menu = document.getElementById("bt__menu")

    openMenu.addEventListener('click', () => {
        menu.style.display = 'flex'

        menu.style.right = (menu.offsetWidth * -1) + 'px'

        openMenu.style.display = 'none'

        setTimeout(() => {
            menu.style.opacity = '1'

            menu.style.right = '0'
        }, 10)
    })

    closeMenu.addEventListener('click', () => {
        menu.style.opacity = '0'

        menu.style.right = (menu.offsetWidth * -1) + 'px'

        openMenu.removeAttribute('style')

        setTimeout(() => {
            menu.removeAttribute('style')
        }, 200)
    })

        // Adiciona um event listener para os links do menu
        let links = document.querySelectorAll('.link__')
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.style.opacity = '0'
    
                menu.style.right = (menu.offsetWidth * -1) + 'px'
    
                openMenu.removeAttribute('style')
    
                setTimeout(() => {
                    menu.removeAttribute('style')
                }, 200)
            })
        })

        // Obtém a URL da página atual
        var urlAtual = window.location.href;

        // Obtém todos os links na página
        var links__menu = document.querySelectorAll('.link__');

        // Itera sobre os links
        for (var i = 0; i < links__menu.length; i++) {
            var link = links__menu[i];
            
            // Obtém o URL de destino do link
            var urlDestino = link.href;

            // Verifica se a URL de destino é igual à URL atual
            if (urlDestino === urlAtual) {
                // Se forem iguais, oculta o link
                link.style.display = 'none';
            }
        }

        // função de seleção de setor

        const unidades = document.querySelectorAll('.unidade');

        function mostrarUnidade(id) {
            unidades.forEach(unidade => {
                unidade.style.display = 'none';
            });
    
            const unidadeSelecionada = document.getElementById(id);
            unidadeSelecionada.style.display = 'block';
        }
    
        document.querySelectorAll('.link__menu').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const id = this.getAttribute('href').substring(1);
                mostrarUnidade(id);

                const menu = document.querySelector('.inicial__menu');
                menu.style.display = 'none';
            });
        });
    
        // // Para exibir a primeira unidade ao carregar a página
        // mostrarUnidade('UA1'); // Altere para a unidade desejada
        
});

 let listaDeUrls = [];


const unidades = {

    URPG1: {
        Transporte: [
            { data: "01/03/2024", captura: ["capturas/2024/6- Junho/Transporte/3-pt1.jpg", "capturas/2024/6- Junho/Transporte/3-pt2.jpg", "capturas/2024/6- Junho/Transporte/3-ptg.jpg"] },
            { data: "01/04/2024", captura: ["capturas/2024/6- Junho/Transporte/4-pt1.jpg", "capturas/2024/6- Junho/Transporte/4-pt2.jpg", "capturas/2024/6- Junho/Transporte/4-ptg.jpg"] },
            { data: "01/05/2024", captura: ["capturas/2024/6- Junho/Transporte/5-pt1.jpg", "capturas/2024/6- Junho/Transporte/5-pt2.jpg", "capturas/2024/6- Junho/Transporte/5-ptg.jpg"] },
            { data: "01/06/2024", captura: ["capturas/2024/6- Junho/Transporte/6-pt1.jpg", "capturas/2024/6- Junho/Transporte/6-pt2.jpg", "capturas/2024/6- Junho/Transporte/6-ptg.jpg"] },

            { data: "05/07/2024", captura: ["capturas/2024/7- Julho/1- Transporte/semana1/PARTE 1.jpg", "capturas/2024/7- Julho/1- Transporte/semana1/PARTE 2.jpg", "capturas/2024/7- Julho/1- Transporte/semana1/PARTE 3.jpg"] },
            { data: "12/07/2024", captura: ["capturas/2024/7- Julho/1- Transporte/semana2/PARTE 1.jpg", "capturas/2024/7- Julho/1- Transporte/semana2/PARTE 2.jpg", "capturas/2024/7- Julho/1- Transporte/semana2/PARTE 3.jpg"] },
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/1- Transporte/semana3/PRINT 1.jpg", "capturas/2024/7- Julho/1- Transporte/semana3/PRINT 2.jpeg", "capturas/2024/7- Julho/1- Transporte/semana3/PRINT 3.jpg"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/1- Transporte/semana4/PRINT 1.jpg", "capturas/2024/7- Julho/1- Transporte/semana4/PRINT 2.jpg", "capturas/2024/7- Julho/1- Transporte/semana4/PRINT 3.jpg"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/1- Transporte/semana5/PRINT 1.jpg", "capturas/2024/7- Julho/1- Transporte/semana5/PRINT 2.jpg", "capturas/2024/7- Julho/1- Transporte/semana5/PRINT 3.jpg"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/1- Transporte/semana1/PRINT 1.jpg", "capturas/2024/8- Agosto/1- Transporte/semana1/PRINT 2.jpg", "capturas/2024/8- Agosto/1- Transporte/semana1/PRINT 3.jpg"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/1- Transporte/semana2/PRINT 1.jpg", "capturas/2024/8- Agosto/1- Transporte/semana2/PRINT 2.jpg", "capturas/2024/8- Agosto/1- Transporte/semana2/PRINT 3.jpg"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/1- Transporte/semana3/PRINT 1.jpg", "capturas/2024/8- Agosto/1- Transporte/semana3/PRINT 2.jpg", "capturas/2024/8- Agosto/1- Transporte/semana3/PRINT 3.jpg"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/1- Transporte/semana4/1.jpeg", "capturas/2024/8- Agosto/1- Transporte/semana4/2.jpeg", "capturas/2024/8- Agosto/1- Transporte/semana4/3.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/1- Transporte/semana1/PRINT 1.jpg", "capturas/2024/9- Setembro/1- Transporte/semana1/PRINT 2.jpg", "capturas/2024/9- Setembro/1- Transporte/semana1/PRINT 3.jpg"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/1- Transporte/semana2/1.jpg", "capturas/2024/9- Setembro/1- Transporte/semana2/2.jpg", "capturas/2024/9- Setembro/1- Transporte/semana2/3.jpg"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/1- Transporte/semana3/1.jpg", "capturas/2024/9- Setembro/1- Transporte/semana3/2.jpg", "capturas/2024/9- Setembro/1- Transporte/semana3/3.jpg"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/1- Transporte/semana4/1.jpg", "capturas/2024/9- Setembro/1- Transporte/semana4/2.jpg", "capturas/2024/9- Setembro/1- Transporte/semana4/3.jpg"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/1- Transporte/semana1/1.jpg", "capturas/2024/10- Outubro/1- Transporte/semana1/2.jpg", "capturas/2024/10- Outubro/1- Transporte/semana1/3.jpg"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/1- Transporte/semana2/1.jpg", "capturas/2024/10- Outubro/1- Transporte/semana2/2.jpg", "capturas/2024/10- Outubro/1- Transporte/semana2/3.jpg"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/1- Transporte/semana3/1.jpg", "capturas/2024/10- Outubro/1- Transporte/semana3/2.jpg", "capturas/2024/10- Outubro/1- Transporte/semana3/3.jpg"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/1- Transporte/semana4/1.jpg", "capturas/2024/10- Outubro/1- Transporte/semana4/2.jpg", "capturas/2024/10- Outubro/1- Transporte/semana4/3.jpg"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/1- Transporte/semana5/1.jpg", "capturas/2024/10- Outubro/1- Transporte/semana5/2.jpg", "capturas/2024/10- Outubro/1- Transporte/semana5/3.jpg"] },
           
            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/1- Transporte/semana1/1.jpg", "capturas/2024/11-Novembro/1- Transporte/semana1/2.jpg", "capturas/2024/11-Novembro/1- Transporte/semana1/3.jpg"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/1- Transporte/semana2/1.jpg", "capturas/2024/11-Novembro/1- Transporte/semana2/2.jpg", "capturas/2024/11-Novembro/1- Transporte/semana2/3.jpg"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/1- Transporte/semana3/1.jpg", "capturas/2024/11-Novembro/1- Transporte/semana3/2.jpg", "capturas/2024/11-Novembro/1- Transporte/semana3/3.jpg"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/1- Transporte/semana4/1.jpg", "capturas/2024/11-Novembro/1- Transporte/semana4/2.jpg", "capturas/2024/11-Novembro/1- Transporte/semana4/3.jpg"] },

            { data: "05/12/2024", captura: ["capturas/2024/12-Dezembro/1- Transporte/semana1/1.jpg", "capturas/2024/12-Dezembro/1- Transporte/semana1/2.jpg", "capturas/2024/12-Dezembro/1- Transporte/semana1/3.jpg"] },
            { data: "12/12/2024", captura: ["capturas/2024/12-Dezembro/1- Transporte/semana2/1.jpg", "capturas/2024/12-Dezembro/1- Transporte/semana2/2.jpg", "capturas/2024/12-Dezembro/1- Transporte/semana2/3.jpg"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["capturas/2025/1- Janeiro/1- Transporte/semana1/1.jpg", "capturas/2025/1- Janeiro/1- Transporte/semana1/2.jpg", "capturas/2025/1- Janeiro/1- Transporte/semana1/3.jpg"] },
        
            // { data: "", captura: ["", "", ""] },
        
        ],

        Pcp: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/2 -Pcp/semana3/WhatsApp Image 2024-07-19 at 16.34.28.jpeg", "capturas/2024/7- Julho/2 -Pcp/semana3/f349b25f-03c0-4420-9212-841dc873b5f8.jpeg", "capturas/2024/7- Julho/2 -Pcp/semana3/WhatsApp Image 2024-07-19 at 16.36.32.jpeg"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/2 -Pcp/semana4/print 1.png", "capturas/2024/7- Julho/2 -Pcp/semana4/print 2.png", "capturas/2024/7- Julho/2 -Pcp/semana4/print 3.png", "capturas/2024/7- Julho/2 -Pcp/semana4/print 4.png"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/2 -Pcp/semana5/p1.jpeg", "capturas/2024/7- Julho/2 -Pcp/semana5/p2.jpeg", "capturas/2024/7- Julho/2 -Pcp/semana5/p3.jpeg", "capturas/2024/7- Julho/2 -Pcp/semana5/p4.jpeg"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/2 -Pcp/semana1/1.jpeg", "capturas/2024/8- Agosto/2 -Pcp/semana1/2.jpeg", "capturas/2024/8- Agosto/2 -Pcp/semana1/3.jpeg"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/2 -Pcp/semana3/1.jpeg", "capturas/2024/8- Agosto/2 -Pcp/semana3/2.jpeg", "capturas/2024/8- Agosto/2 -Pcp/semana3/3.jpeg"] },
            { data: "22/08/2024", captura: ["capturas/2024/8- Agosto/2 -Pcp/semana4/1.jpeg", "capturas/2024/8- Agosto/2 -Pcp/semana4/2.jpeg", "capturas/2024/8- Agosto/2 -Pcp/semana4/3.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/2 -Pcp/semana5/WhatsApp Image 2024-08-30 at 07.05.40.jpeg", "capturas/2024/8- Agosto/2 -Pcp/semana5/WhatsApp Image 2024-08-30 at 07.06.14.jpeg", "capturas/2024/8- Agosto/2 -Pcp/semana5/WhatsApp Image 2024-08-30 at 07.07.10.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/2 -Pcp/semana1/1.jpeg", "capturas/2024/9- Setembro/2 -Pcp/semana1/2.jpeg", "capturas/2024/9- Setembro/2 -Pcp/semana1/3.jpeg"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/2 -Pcp/semana2/1.jpeg", "capturas/2024/9- Setembro/2 -Pcp/semana2/2.jpeg", "capturas/2024/9- Setembro/2 -Pcp/semana2/3.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/2 -Pcp/semana3/1.jpeg", "capturas/2024/9- Setembro/2 -Pcp/semana3/2.jpeg", "capturas/2024/9- Setembro/2 -Pcp/semana3/3.jpeg"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/2 -Pcp/semana4/1.jpeg", "capturas/2024/9- Setembro/2 -Pcp/semana4/2.jpeg", "capturas/2024/9- Setembro/2 -Pcp/semana4/3.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/2 -Pcp/semana1/1.jpeg", "capturas/2024/10- Outubro/2 -Pcp/semana1/2.jpeg", "capturas/2024/10- Outubro/2 -Pcp/semana1/3.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/2 -Pcp/semana2/1.jpeg", "capturas/2024/10- Outubro/2 -Pcp/semana2/2.jpeg", "capturas/2024/10- Outubro/2 -Pcp/semana2/3.jpeg"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/2 -Pcp/semana3/1.jpeg", "capturas/2024/10- Outubro/2 -Pcp/semana3/2.jpeg", "capturas/2024/10- Outubro/2 -Pcp/semana3/3.jpeg"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/2 -Pcp/semana4/1.jpeg", "capturas/2024/10- Outubro/2 -Pcp/semana4/2.jpeg", "capturas/2024/10- Outubro/2 -Pcp/semana4/3.jpeg"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/2 -Pcp/semana5/1.jpeg", "capturas/2024/10- Outubro/2 -Pcp/semana5/2.jpeg", "capturas/2024/10- Outubro/2 -Pcp/semana5/3.jpeg"] },
            
            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/2 -Pcp/semana2/WhatsApp Image 2024-11-08 at 09.16.52.jpeg", "capturas/2024/11-Novembro/2 -Pcp/semana2/WhatsApp Image 2024-11-08 at 09.17.12.jpeg", "capturas/2024/11-Novembro/2 -Pcp/semana2/WhatsApp Image 2024-11-08 at 09.18.00.jpeg"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/2 -Pcp/semana3/WhatsApp Image 2024-11-14 at 13.30.58.jpeg", "capturas/2024/11-Novembro/2 -Pcp/semana3/grafico com data certa.jpeg", "capturas/2024/11-Novembro/2 -Pcp/semana3/WhatsApp Image 2024-11-14 at 13.31.56.jpeg"] },
            { data: "15/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "28/11/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "05/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "12/12/2024", captura: ["capturas/2024/12-Dezembro/2 -Pcp/semana2/WhatsApp Image 2024-12-12 at 16.20.35.jpeg", "capturas/2024/12-Dezembro/2 -Pcp/semana2/WhatsApp Image 2024-12-12 at 16.21.18.jpeg", "capturas/2024/12-Dezembro/2 -Pcp/semana2/WhatsApp Image 2024-12-12 at 16.25.16.jpeg"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["NÃO FOI ENTREGUE"] },
        
            // { data: "", captura: ["", "", "", ""] },
        ],

        ti: [
            { data: "03/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "10/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "17/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "24/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "31/10/2024", captura: ["NÃO FOI ENTREGUE"] },
           
            { data: "07/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "14/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "15/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "28/11/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "05/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "12/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["NÃO FOI ENTREGUE"] },
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        Cadastro: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/4- Cadastro - Kbm/semana3/pt 01 19-07.jpg", "capturas/2024/7- Julho/4- Cadastro - Kbm/semana3/pt 02 19-07.jpg", "capturas/2024/7- Julho/4- Cadastro - Kbm/semana3/pt 03 19-07.jpg"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/4- Cadastro - Kbm/semana4/1pt22 à 25-07.png", "capturas/2024/7- Julho/4- Cadastro - Kbm/semana4/2 pt 22 à 25-07.png", "capturas/2024/7- Julho/4- Cadastro - Kbm/semana4/3 pt 22 à 25-07.png", "capturas/2024/7- Julho/4- Cadastro - Kbm/semana4/4 pt 22 à 25-07.png"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/4- Cadastro - Kbm/semana5/pt 01 26-07 à 01-08 .png", "capturas/2024/7- Julho/4- Cadastro - Kbm/semana5/pt 02 26- 07 à 01-08.png", "capturas/2024/7- Julho/4- Cadastro - Kbm/semana5/pt 03 26-07 à 01-08.png", "capturas/2024/7- Julho/4- Cadastro - Kbm/semana5/pt 04 26-07 à 01-08.png"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/4- Cadastro - Kbm/semana1/pt 01 02 à 08-08.png", "capturas/2024/8- Agosto/4- Cadastro - Kbm/semana1/pt 02 02 à 08-08.png", "capturas/2024/8- Agosto/4- Cadastro - Kbm/semana1/pt 03 02 à 08-08.png"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/4- Cadastro - Kbm/semana2/pt.01 09 à 15-08.png", "capturas/2024/8- Agosto/4- Cadastro - Kbm/semana2/pt 02 09 à 15-08.png", "capturas/2024/8- Agosto/4- Cadastro - Kbm/semana2/pt 03 09 à 15-08.png"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/4- Cadastro - Kbm/semana3/pt 01 16 à 22-08.png", "capturas/2024/8- Agosto/4- Cadastro - Kbm/semana3/pt 02 16 à 22-08.png", "capturas/2024/8- Agosto/4- Cadastro - Kbm/semana3/pt 03 16 à 22-08.png"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/4- Cadastro - Kbm/semana4/pt 01 23 à 29-08.png", "capturas/2024/8- Agosto/4- Cadastro - Kbm/semana4/pt 02 23 à 29-08.png", "capturas/2024/8- Agosto/4- Cadastro - Kbm/semana4/pt 03 23 à 29-08.png"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/4- Cadastro - Kbm/semana1/pt 01 30-08 à 05-09.png", "capturas/2024/9- Setembro/4- Cadastro - Kbm/semana1/pt 02 30-08 à 05-09.png", "capturas/2024/9- Setembro/4- Cadastro - Kbm/semana1/pt 03 30-08 à 05-09.png"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/4- Cadastro - Kbm/semana2/1 pt 06 à 12-09.png", "capturas/2024/9- Setembro/4- Cadastro - Kbm/semana2/2 pt 06 à 12-09.png", "capturas/2024/9- Setembro/4- Cadastro - Kbm/semana2/3 pt 06 à 12-09.png"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/4- Cadastro - Kbm/semana3/pt 01 13 à 19-09.png", "capturas/2024/9- Setembro/4- Cadastro - Kbm/semana3/pt 02 13 à 19-09.png", "capturas/2024/9- Setembro/4- Cadastro - Kbm/semana3/pt 03 13 à 19-09.png"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/4- Cadastro - Kbm/semana4/pt 01 20 à 26-09.png", "capturas/2024/9- Setembro/4- Cadastro - Kbm/semana4/pt 02 20 à 26-09.png", "capturas/2024/9- Setembro/4- Cadastro - Kbm/semana4/pt 03 20 à 26-09.png"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/4- Cadastro - Kbm/semana1/pt 01 27-09 à 03-10.png", "capturas/2024/10- Outubro/4- Cadastro - Kbm/semana1/pt 02 27-09 à 03-10.png", "capturas/2024/10- Outubro/4- Cadastro - Kbm/semana1/pt 03 27-09 à 03-10.png"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/4- Cadastro - Kbm/semana2/pt 01 04-10 à 10-10.png", "capturas/2024/10- Outubro/4- Cadastro - Kbm/semana2/pt 02 04-10 à 10-10.png", "capturas/2024/10- Outubro/4- Cadastro - Kbm/semana2/pt 03 04-10 à 10-10.png"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/4- Cadastro - Kbm/semana3/pt 01 11-10 à 17-10.png", "capturas/2024/10- Outubro/4- Cadastro - Kbm/semana3/pt 02 11-10 à 17-10.png", "capturas/2024/10- Outubro/4- Cadastro - Kbm/semana3/pt 03 11-10 à 17-10.png"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/4- Cadastro - Kbm/semana4/pt 01 18-10 à 24-10.png", "capturas/2024/10- Outubro/4- Cadastro - Kbm/semana4/pt 02 18-10 à 24-10.png", "capturas/2024/10- Outubro/4- Cadastro - Kbm/semana4/pt 03 18-10 à 24-10.png"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/4- Cadastro - Kbm/semana5/pt 01 25-10 à 31-10.png", "capturas/2024/10- Outubro/4- Cadastro - Kbm/semana5/pt 02 25-10 à 31-10.png", "capturas/2024/10- Outubro/4- Cadastro - Kbm/semana5/pt 03 25-10 à 31-10.png"] },
           
            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/4- Cadastro - Kbm/semana1/pt 01 01-11 à 07-11.png", "capturas/2024/11-Novembro/4- Cadastro - Kbm/semana1/pt 02 01-11 à 07-11.png", "capturas/2024/11-Novembro/4- Cadastro - Kbm/semana1/pt 03 01-11 à 07-11.png"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/4- Cadastro - Kbm/semana2/pt 01 08-11 à 14-11.png", "capturas/2024/11-Novembro/4- Cadastro - Kbm/semana2/pt 02 08-11 à 14-11.png", "capturas/2024/11-Novembro/4- Cadastro - Kbm/semana2/pt 03 08-11 à 14-11.png"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/4- Cadastro - Kbm/semana3/pt 01 18-11 à 21-11.png", "capturas/2024/11-Novembro/4- Cadastro - Kbm/semana3/pt 02 18-11 à 21-11.png", "capturas/2024/11-Novembro/4- Cadastro - Kbm/semana3/pt 03 18-11 à 21-11.png"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/4- Cadastro - Kbm/semana4/pt 01 22-11 à 28-11.png", "capturas/2024/11-Novembro/4- Cadastro - Kbm/semana4/pt 02 22-11 à 28-11.png", "capturas/2024/11-Novembro/4- Cadastro - Kbm/semana4/pt 03 22-11 à 28-11.png"] },

            { data: "05/12*2024", captura: ["capturas/2024/12-Dezembro/4- Cadastro - Kbm/semana1/pt 01 29-11 à 05 -12.png", "capturas/2024/12-Dezembro/4- Cadastro - Kbm/semana1/pt 02 29-11 à 05- 12.png", "capturas/2024/12-Dezembro/4- Cadastro - Kbm/semana1/pt 03 29-11 à 05- 12.png"] },
            { data: "12/12/2024", captura: ["capturas/2024/12-Dezembro/4- Cadastro - Kbm/semana2/pt 01 06-12 à 12-12.png", "capturas/2024/12-Dezembro/4- Cadastro - Kbm/semana2/pt 02 06-12 à 12-12.png", "capturas/2024/12-Dezembro/4- Cadastro - Kbm/semana2/pt 03 06-12 à 12-12.png"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["capturas/2025/1- Janeiro/4- Cadastro - Kbm/semana1/pt 01 06-01 à 09-01-25.png", "capturas/2025/1- Janeiro/4- Cadastro - Kbm/semana1/pt 02 06-01 à 09-01-25.png", "capturas/2025/1- Janeiro/4- Cadastro - Kbm/semana1/pt 03 06-01 à 09-01-25.png"] },

            // { data: "", captura: ["", "", "", ""] },
            
        
        ],

        Comercial: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/5- Comercial/semana3/Print 01.png", "capturas/2024/7- Julho/5- Comercial/semana3/Print 02.png", "capturas/2024/7- Julho/5- Comercial/semana3/Print 03.png"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/5- Comercial/semana4/PRINT 1.png", "capturas/2024/7- Julho/5- Comercial/semana4/PRINT 2.png", "capturas/2024/7- Julho/5- Comercial/semana4/PRINT 3.png", "capturas/2024/7- Julho/5- Comercial/semana4/PRINT 4.png"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/5- Comercial/semana5/PRINT 1.png", "capturas/2024/7- Julho/5- Comercial/semana5/PRINT 2.png", "capturas/2024/7- Julho/5- Comercial/semana5/PRINT 3.png"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/5- Comercial/semana1/PRINT  1.png", "capturas/2024/8- Agosto/5- Comercial/semana1/PRINT  2.png", "capturas/2024/8- Agosto/5- Comercial/semana1/PRINT  3.png"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/5- Comercial/semana2/PRINT  1.png", "capturas/2024/8- Agosto/5- Comercial/semana2/PRINT  2.png", "capturas/2024/8- Agosto/5- Comercial/semana2/PRINT  3.png"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/5- Comercial/semana3/PRINT  1.png", "capturas/2024/8- Agosto/5- Comercial/semana3/PRINT  2.png", "capturas/2024/8- Agosto/5- Comercial/semana3/PRINT  3.png"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/5- Comercial/semana4/1.jpeg", "capturas/2024/8- Agosto/5- Comercial/semana4/2.jpeg", "capturas/2024/8- Agosto/5- Comercial/semana4/3.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/5- Comercial/semana1/PRINT 01.png", "capturas/2024/9- Setembro/5- Comercial/semana1/PRINT 02.png", "capturas/2024/9- Setembro/5- Comercial/semana1/PRINT 03.png"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/5- Comercial/semana2/PRINT 01.png", "capturas/2024/9- Setembro/5- Comercial/semana2/PRINT 02.png", "capturas/2024/9- Setembro/5- Comercial/semana2/PRINT 03.png"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/5- Comercial/semana3/PRINT 01.png", "capturas/2024/9- Setembro/5- Comercial/semana3/PRINT 02.png", "capturas/2024/9- Setembro/5- Comercial/semana3/PRINT 03.png"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/5- Comercial/semana4/PRINT 01.png", "capturas/2024/9- Setembro/5- Comercial/semana4/PRINT 02.png", "capturas/2024/9- Setembro/5- Comercial/semana4/PRINT 03.png"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/5- Comercial/semana1/PRINT 01.png", "capturas/2024/10- Outubro/5- Comercial/semana1/PRINT 02.png", "capturas/2024/10- Outubro/5- Comercial/semana1/PRINT 03.png"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/5- Comercial/semana2/PRINT 01.png", "capturas/2024/10- Outubro/5- Comercial/semana2/PRINT 02.png", "capturas/2024/10- Outubro/5- Comercial/semana2/PRINT 03.png"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/5- Comercial/semana3/PRINT 01.png", "capturas/2024/10- Outubro/5- Comercial/semana3/PRINT 02.png", "capturas/2024/10- Outubro/5- Comercial/semana3/PRINT 03.png"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/5- Comercial/semana4/PRINT 01.png", "capturas/2024/10- Outubro/5- Comercial/semana4/PRINT 02.png", "capturas/2024/10- Outubro/5- Comercial/semana4/PRINT 03.png"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/5- Comercial/semana5/PRINT 01.png", "capturas/2024/10- Outubro/5- Comercial/semana5/PRINT 02.png", "capturas/2024/10- Outubro/5- Comercial/semana5/PRINT 03.png"] },
           
            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/5- Comercial/semana1/PRINT 01.png", "capturas/2024/11-Novembro/5- Comercial/semana1/PRINT 02.png", "capturas/2024/11-Novembro/5- Comercial/semana1/PRINT 03.png"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/5- Comercial/semana2/PRINT 01.png", "capturas/2024/11-Novembro/5- Comercial/semana2/PRINT 02.png", "capturas/2024/11-Novembro/5- Comercial/semana2/PRINT 03.png"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/5- Comercial/semana3/PRINT 01.png", "capturas/2024/11-Novembro/5- Comercial/semana3/PRINT 02.png", "capturas/2024/11-Novembro/5- Comercial/semana3/PRINT 03.png"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/5- Comercial/semana4/PRINT 01.png", "capturas/2024/11-Novembro/5- Comercial/semana4/PRINT 02.png", "capturas/2024/11-Novembro/5- Comercial/semana4/PRINT 03.png"] },

            { data: "05/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "12/12/2024", captura: ["capturas/2024/12-Dezembro/5- Comercial/semana2/PRINT 01.png", "capturas/2024/12-Dezembro/5- Comercial/semana2/PRINT 02.png", "capturas/2024/12-Dezembro/5- Comercial/semana2/PRINT 03.png"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["capturas/2025/1- Janeiro/5- Comercial/semana2/1.jpeg", "capturas/2025/1- Janeiro/5- Comercial/semana2/2.jpeg", "capturas/2025/1- Janeiro/5- Comercial/semana2/3.jpeg"] },

            // { data: "", captura: ["", "", "", ""] },
        ],

        Compras: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/6- Compras/semana3/Print 01.png", "capturas/2024/7- Julho/6- Compras/semana3/Print 02.jpeg", "capturas/2024/7- Julho/6- Compras/semana3/Print 03.png"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/6- Compras/semana4/01.png", "capturas/2024/7- Julho/6- Compras/semana4/02.png", "capturas/2024/7- Julho/6- Compras/semana4/03.png", "capturas/2024/7- Julho/6- Compras/semana4/04.png"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/6- Compras/semana5/Print 01.png", "capturas/2024/7- Julho/6- Compras/semana5/Print 02.jpeg", "capturas/2024/7- Julho/6- Compras/semana5/Print 03.png"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/6- Compras/semana1/Print 01.png", "capturas/2024/8- Agosto/6- Compras/semana1/Print 02.png", "capturas/2024/8- Agosto/6- Compras/semana1/Print 03.png"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/6- Compras/semana3/Print 01.png", "capturas/2024/8- Agosto/6- Compras/semana3/Print 02.png", "capturas/2024/8- Agosto/6- Compras/semana3/Print 03.png"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/6- Compras/semana4/Print 01.png", "capturas/2024/8- Agosto/6- Compras/semana4/Print 02.jpeg", "capturas/2024/8- Agosto/6- Compras/semana4/Print 03.png"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/6- Compras/semana5/Print 01.png", "capturas/2024/8- Agosto/6- Compras/semana5/Print 02.png", "capturas/2024/8- Agosto/6- Compras/semana5/Print 03.png"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/6- Compras/semana1/Print 01.png", "capturas/2024/9- Setembro/6- Compras/semana1/Print 02.png", "capturas/2024/9- Setembro/6- Compras/semana1/Print 03.png"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/6- Compras/semana2/Print 01.png", "capturas/2024/9- Setembro/6- Compras/semana2/Print 02.png", "capturas/2024/9- Setembro/6- Compras/semana2/Print 03.png"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/6- Compras/semana3/Print 01.png", "capturas/2024/9- Setembro/6- Compras/semana3/Print 02.png", "capturas/2024/9- Setembro/6- Compras/semana3/Print 03.png"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/6- Compras/semana4/Print 01.png", "capturas/2024/9- Setembro/6- Compras/semana4/Print 02.jpeg", "capturas/2024/9- Setembro/6- Compras/semana4/Print 03.png"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/6- Compras/semana1/Print 01.png", "capturas/2024/10- Outubro/6- Compras/semana1/Print 02.jpeg", "capturas/2024/10- Outubro/6- Compras/semana1/Print 03.png"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/6- Compras/semana2/Print 01.png", "capturas/2024/10- Outubro/6- Compras/semana2/Print 02.jpeg", "capturas/2024/10- Outubro/6- Compras/semana2/Print 03.jpeg"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/6- Compras/semana3/Print 01.png", "capturas/2024/10- Outubro/6- Compras/semana3/Print 02.png", "capturas/2024/10- Outubro/6- Compras/semana3/Print 03.png"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/6- Compras/semana4/Print 01.png", "capturas/2024/10- Outubro/6- Compras/semana4/Print 02.png", "capturas/2024/10- Outubro/6- Compras/semana4/Print 03.png"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/6- Compras/semana5/Print 01.png", "capturas/2024/10- Outubro/6- Compras/semana5/Print 02.jpeg", "capturas/2024/10- Outubro/6- Compras/semana5/Print 03.png"] },
            
            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/6- Compras/semana1/Print 01.png", "capturas/2024/11-Novembro/6- Compras/semana1/Print 02.png", "capturas/2024/11-Novembro/6- Compras/semana1/Print 03.png"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/6- Compras/semana2/Print 01.png", "capturas/2024/11-Novembro/6- Compras/semana2/Print 02.png", "capturas/2024/11-Novembro/6- Compras/semana2/Print 03.png"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/6- Compras/semana4/Print 01.png", "capturas/2024/11-Novembro/6- Compras/semana4/Print 02.png", "capturas/2024/11-Novembro/6- Compras/semana4/Print 03.png"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/6- Compras/semana5/Print 01.png", "capturas/2024/11-Novembro/6- Compras/semana5/Print 02.png", "capturas/2024/11-Novembro/6- Compras/semana5/Print 03.png"] },

            { data: "05/12/2024", captura: ["capturas/2024/12-Dezembro/6- Compras/semana1/Print 01.png", "capturas/2024/12-Dezembro/6- Compras/semana1/Print 02.png", "capturas/2024/12-Dezembro/6- Compras/semana1/Print 03.png"] },
            { data: "12/12/2024", captura: ["capturas/2024/12-Dezembro/6- Compras/semana2/Print 01.png", "capturas/2024/12-Dezembro/6- Compras/semana2/Print 02.png", "capturas/2024/12-Dezembro/6- Compras/semana2/Print 03.png"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["capturas/2025/1- Janeiro/6- Compras/semana1/Print 01.png", "capturas/2025/1- Janeiro/6- Compras/semana1/Print 02.png", "capturas/2025/1- Janeiro/6- Compras/semana1/Print 03.png"] },
            
            // { data: "", captura: ["", "", "", ""] },

        ],

        Design: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/7- Design/semana3/01.png", "capturas/2024/7- Julho/7- Design/semana3/2.jpeg", "capturas/2024/7- Julho/7- Design/semana3/3.jpeg"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/7- Design/semana4/1.jpeg", "capturas/2024/7- Julho/7- Design/semana4/2.jpeg", "capturas/2024/7- Julho/7- Design/semana4/3.jpeg"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/7- Design/semana5/1.jpg", "capturas/2024/7- Julho/7- Design/semana5/2.jpg", "capturas/2024/7- Julho/7- Design/semana5/3.jpg"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/7- Design/semana1/02.jpg", "capturas/2024/8- Agosto/7- Design/semana1/03.jpg", "capturas/2024/8- Agosto/7- Design/semana1/01.jpg"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/7- Design/semana3/01.jpg", "capturas/2024/8- Agosto/7- Design/semana3/02.jpg", "capturas/2024/8- Agosto/7- Design/semana3/03.jpg"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/7- Design/semana4/01.jpg", "capturas/2024/8- Agosto/7- Design/semana4/02.jpg", "capturas/2024/8- Agosto/7- Design/semana4/03.jpg"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/7- Design/semana1/01.jpg", "capturas/2024/9- Setembro/7- Design/semana1/02.jpg", "capturas/2024/9- Setembro/7- Design/semana1/03.jpg"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/7- Design/semana2/01.jpg", "capturas/2024/9- Setembro/7- Design/semana2/02.jpg", "capturas/2024/9- Setembro/7- Design/semana2/03.jpg"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/7- Design/semana2/01.jpg", "capturas/2024/9- Setembro/7- Design/semana2/02.jpg", "capturas/2024/9- Setembro/7- Design/semana2/03.jpg"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/7- Design/semana4/01.jpg", "capturas/2024/9- Setembro/7- Design/semana4/02.jpg", "capturas/2024/9- Setembro/7- Design/semana4/03.jpg"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/7- Design/semana1/01.jpg", "capturas/2024/10- Outubro/7- Design/semana1/02.jpg", "capturas/2024/10- Outubro/7- Design/semana1/03.jpg"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/7- Design/semana2/01.jpg", "capturas/2024/10- Outubro/7- Design/semana2/02.jpg", "capturas/2024/10- Outubro/7- Design/semana2/03.jpg"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/7- Design/semana3/01.jpg", "capturas/2024/10- Outubro/7- Design/semana3/02.jpg", "capturas/2024/10- Outubro/7- Design/semana3/03.jpg"] },
            { data: "24/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "31/10/2024", captura: ["NÃO FOI ENTREGUE"] },
           
            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/7- Design/semana1/01.jpg", "capturas/2024/11-Novembro/7- Design/semana1/02.jpg", "capturas/2024/11-Novembro/7- Design/semana1/03.jpg"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/7- Design/semana2/01.jpg", "capturas/2024/11-Novembro/7- Design/semana2/02.jpg", "capturas/2024/11-Novembro/7- Design/semana2/03.jpg"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/7- Design/semana3/01.jpg", "capturas/2024/11-Novembro/7- Design/semana3/02.jpg", "capturas/2024/11-Novembro/7- Design/semana3/03.jpg"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/7- Design/semana4/01.jpg", "capturas/2024/11-Novembro/7- Design/semana4/02.jpg", "capturas/2024/11-Novembro/7- Design/semana4/03.jpg"] },

            { data: "05/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "12/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["capturas/2025/1- Janeiro/7- Design/semana1/01.jpeg", "capturas/2025/1- Janeiro/7- Design/semana1/02.jpeg", "capturas/2025/1- Janeiro/7- Design/semana1/03.jpeg"] },
            
            // { data: "", captura: ["", "", ""] },
        ],
    

        AssistenciaC: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/8- Assistência Comercial/semana3/Captura de tela 2024-07-19 161834.png", "capturas/2024/7- Julho/8- Assistência Comercial/semana3/grafico.png", "capturas/2024/7- Julho/8- Assistência Comercial/semana3/comparação.PNG"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/8- Assistência Comercial/semana4/1.png", "capturas/2024/7- Julho/8- Assistência Comercial/semana4/2.png", "capturas/2024/7- Julho/8- Assistência Comercial/semana4/3.png", "capturas/2024/7- Julho/8- Assistência Comercial/semana4/4.png"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/8- Assistência Comercial/semana5/print 1.jpg", "capturas/2024/7- Julho/8- Assistência Comercial/semana5/print 2.jpg", "capturas/2024/7- Julho/8- Assistência Comercial/semana5/print 3.jpg", "capturas/2024/7- Julho/8- Assistência Comercial/semana5/print 4.jpg"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/8- Assistência Comercial/semana1/1.PNG", "capturas/2024/8- Agosto/8- Assistência Comercial/semana1/2.jpeg", "capturas/2024/8- Agosto/8- Assistência Comercial/semana1/3.jpeg"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/8- Assistência Comercial/semana2/1.jpeg", "capturas/2024/8- Agosto/8- Assistência Comercial/semana2/2.jpeg", "capturas/2024/8- Agosto/8- Assistência Comercial/semana2/3.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/8- Assistência Comercial/semana3/1.jpeg", "capturas/2024/8- Agosto/8- Assistência Comercial/semana3/2.jpeg", "capturas/2024/8- Agosto/8- Assistência Comercial/semana3/3.jpeg"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/8- Assistência Comercial/semana4/1.jpeg", "capturas/2024/8- Agosto/8- Assistência Comercial/semana4/2.jpeg", "capturas/2024/8- Agosto/8- Assistência Comercial/semana4/3.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/8- Assistência Comercial/semana1/1.jpeg", "capturas/2024/9- Setembro/8- Assistência Comercial/semana1/2.jpeg", "capturas/2024/9- Setembro/8- Assistência Comercial/semana1/3.jpeg"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/8- Assistência Comercial/semana2/1.jpeg", "capturas/2024/9- Setembro/8- Assistência Comercial/semana2/2.jpeg"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/8- Assistência Comercial/semana3/1.jpeg", "capturas/2024/9- Setembro/8- Assistência Comercial/semana3/2.jpeg", "capturas/2024/9- Setembro/8- Assistência Comercial/semana3/3.jpeg"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/8- Assistência Comercial/semana4/1.jpeg", "capturas/2024/9- Setembro/8- Assistência Comercial/semana4/2.jpeg", "capturas/2024/9- Setembro/8- Assistência Comercial/semana4/3.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/8- Assistência Comercial/semana1/1.jpeg", "capturas/2024/10- Outubro/8- Assistência Comercial/semana1/2.jpeg"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/8- Assistência Comercial/semana2/1.PNG", "capturas/2024/10- Outubro/8- Assistência Comercial/semana2/2.jpeg"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/8- Assistência Comercial/semana3/1.PNG", "capturas/2024/10- Outubro/8- Assistência Comercial/semana3/2.jpeg", "capturas/2024/10- Outubro/8- Assistência Comercial/semana3/3.jpeg"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/8- Assistência Comercial/semana4/1.jpeg", "capturas/2024/10- Outubro/8- Assistência Comercial/semana4/2.jpeg", "capturas/2024/10- Outubro/8- Assistência Comercial/semana4/3.jpeg"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/8- Assistência Comercial/semana5/1.jpeg", "capturas/2024/10- Outubro/8- Assistência Comercial/semana5/2.jpeg", "capturas/2024/10- Outubro/8- Assistência Comercial/semana5/3.jpeg"] },

            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/8- Assistência Comercial/semana1/1.jpeg", "capturas/2024/11-Novembro/8- Assistência Comercial/semana1/2.jpeg", "capturas/2024/11-Novembro/8- Assistência Comercial/semana1/3.jpeg"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/8- Assistência Comercial/semana2/1.jpeg", "capturas/2024/11-Novembro/8- Assistência Comercial/semana2/2.jpeg", "capturas/2024/11-Novembro/8- Assistência Comercial/semana2/3.jpeg"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/8- Assistência Comercial/semana3/1.jpeg", "capturas/2024/11-Novembro/8- Assistência Comercial/semana3/2.jpeg", "capturas/2024/11-Novembro/8- Assistência Comercial/semana3/3.jpeg"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/8- Assistência Comercial/semana4/1.jpeg", "capturas/2024/11-Novembro/8- Assistência Comercial/semana4/2.jpeg", "capturas/2024/11-Novembro/8- Assistência Comercial/semana4/GERA.jpg"] },

            { data: "05/12/2024", captura: ["capturas/2024/12-Dezembro/8- Assistência Comercial/semana1/1.jpeg", "capturas/2024/12-Dezembro/8- Assistência Comercial/semana1/2.jpeg", "capturas/2024/12-Dezembro/8- Assistência Comercial/semana1/3.jpeg"] },
            { data: "12/12/2024", captura: ["capturas/2024/12-Dezembro/8- Assistência Comercial/semana2/01 PT.jpeg", "capturas/2024/12-Dezembro/8- Assistência Comercial/semana2/02 PT.jpeg", "capturas/2024/12-Dezembro/8- Assistência Comercial/semana2/G.jpeg"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["capturas/2025/1- Janeiro/8- Assistência Comercial/semana2/1.jpeg", "capturas/2025/1- Janeiro/8- Assistência Comercial/semana2/2.jpeg", "capturas/2025/1- Janeiro/8- Assistência Comercial/semana2/3.jpeg"] },

            // { data: "", captura: ["", "", "", ""] },

        ],

        Custos: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/9- Custos/semana3/Print 01.png", "capturas/2024/7- Julho/9- Custos/semana3/Print 02.png", "capturas/2024/7- Julho/9- Custos/semana3/Print 03.png"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/9- Custos/semana4/print 01.png", "capturas/2024/7- Julho/9- Custos/semana4/print 02.png", "capturas/2024/7- Julho/9- Custos/semana4/print 03.png"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/9- Custos/semana5/1.jpeg", "capturas/2024/7- Julho/9- Custos/semana5/2.jpeg", "capturas/2024/7- Julho/9- Custos/semana5/3.jpeg"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/9- Custos/semana1/print 01.png", "capturas/2024/8- Agosto/9- Custos/semana1/print 02.png", "capturas/2024/8- Agosto/9- Custos/semana1/print 03.png"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/9- Custos/semana3/print 01.png", "capturas/2024/8- Agosto/9- Custos/semana3/print 02.png", "capturas/2024/8- Agosto/9- Custos/semana3/print 03.png"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/9- Custos/semana4/print 01.png", "capturas/2024/8- Agosto/9- Custos/semana4/print 02.png", "capturas/2024/8- Agosto/9- Custos/semana4/print 03.png"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/9- Custos/semana5/01.png", "capturas/2024/8- Agosto/9- Custos/semana5/02.png", "capturas/2024/8- Agosto/9- Custos/semana5/03.png"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/9- Custos/semana1/01.png", "capturas/2024/9- Setembro/9- Custos/semana1/02.png", "capturas/2024/9- Setembro/9- Custos/semana1/03.png"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/9- Custos/semana2/01..png", "capturas/2024/9- Setembro/9- Custos/semana2/02.png", "capturas/2024/9- Setembro/9- Custos/semana2/03.png"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/9- Custos/semana3/01.png", "capturas/2024/9- Setembro/9- Custos/semana3/02.png", "capturas/2024/9- Setembro/9- Custos/semana3/03.png"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/9- Custos/semana4/01.png", "capturas/2024/9- Setembro/9- Custos/semana4/02.png", "capturas/2024/9- Setembro/9- Custos/semana4/03.png"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/9- Custos/semana1/01.png", "capturas/2024/10- Outubro/9- Custos/semana1/02.png", "capturas/2024/10- Outubro/9- Custos/semana1/03.png"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/9- Custos/semana2/01.png", "capturas/2024/10- Outubro/9- Custos/semana2/02.png", "capturas/2024/10- Outubro/9- Custos/semana2/03.png"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/9- Custos/semana3/01.png", "capturas/2024/10- Outubro/9- Custos/semana3/02.png", "capturas/2024/10- Outubro/9- Custos/semana3/03.png"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/9- Custos/semana4/01.png", "capturas/2024/10- Outubro/9- Custos/semana4/02.png", "capturas/2024/10- Outubro/9- Custos/semana4/03.png"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/9- Custos/semana5/01.png", "capturas/2024/10- Outubro/9- Custos/semana5/02.png", "capturas/2024/10- Outubro/9- Custos/semana5/03.png"] },
           
            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/9- Custos/semana1/01.png", "capturas/2024/11-Novembro/9- Custos/semana1/02.png", "capturas/2024/11-Novembro/9- Custos/semana1/03.png"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/9- Custos/semana2/01.png", "capturas/2024/11-Novembro/9- Custos/semana2/02.png", "capturas/2024/11-Novembro/9- Custos/semana2/03.png"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/9- Custos/semana3/01.png", "capturas/2024/11-Novembro/9- Custos/semana3/02.png", "capturas/2024/11-Novembro/9- Custos/semana3/03.png"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/9- Custos/semana4/01.png", "capturas/2024/11-Novembro/9- Custos/semana4/02.png", "capturas/2024/11-Novembro/9- Custos/semana4/03.png"] },

            { data: "05/12/2024", captura: ["capturas/2024/12-Dezembro/9- Custos/semana1/01.png", "capturas/2024/12-Dezembro/9- Custos/semana1/02.png", "G GERAL NÃO FEITO", ] },
            { data: "12/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["NÃO FOI ENTREGUE"] },

            // { data: "", captura: ["", "", "", ""] },
        
        ],

        Programacao: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/10- Programação/semana3/p1.jpg", "capturas/2024/7- Julho/10- Programação/semana3/2CORRETO.jpeg", "capturas/2024/7- Julho/10- Programação/semana3/p3.jpg"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/10- Programação/semana4/1.png", "capturas/2024/7- Julho/10- Programação/semana4/2.png", "capturas/2024/7- Julho/10- Programação/semana4/3.png", "capturas/2024/7- Julho/10- Programação/semana4/4.png"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/10- Programação/semana5/1.jpeg", "capturas/2024/7- Julho/10- Programação/semana5/2.jpeg", "capturas/2024/7- Julho/10- Programação/semana5/3.jpeg"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/10- Programação/semana1/1.jpeg", "capturas/2024/8- Agosto/10- Programação/semana1/2.jpeg", "capturas/2024/8- Agosto/10- Programação/semana1/3.jpeg"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/10- Programação/semana3/1.png", "capturas/2024/8- Agosto/10- Programação/semana3/2.png", "capturas/2024/8- Agosto/10- Programação/semana3/3.png"] },
            { data: "22/08/2024", captura: ["capturas/2024/8- Agosto/10- Programação/semana4/1.jpeg", "capturas/2024/8- Agosto/10- Programação/semana4/2.jpeg", "capturas/2024/8- Agosto/10- Programação/semana4/3.jpeg"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/10- Programação/semana1/1.png", "capturas/2024/9- Setembro/10- Programação/semana1/2.png", "capturas/2024/9- Setembro/10- Programação/semana1/3.png"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/10- Programação/semana2/1.png", "capturas/2024/9- Setembro/10- Programação/semana2/2.png", "capturas/2024/9- Setembro/10- Programação/semana2/3.png"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/10- Programação/semana3/1.png", "capturas/2024/9- Setembro/10- Programação/semana3/2.png", "capturas/2024/9- Setembro/10- Programação/semana3/3.png"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/10- Programação/semana4/1.png", "capturas/2024/9- Setembro/10- Programação/semana4/2.jpg", "capturas/2024/9- Setembro/10- Programação/semana4/3.jpg"] },
            { data: "03/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "10/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/10- Programação/semana3/1.png", "capturas/2024/10- Outubro/10- Programação/semana3/2.png", "capturas/2024/10- Outubro/10- Programação/semana3/3.png"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/10- Programação/semana4/1.png", "capturas/2024/10- Outubro/10- Programação/semana4/2.png", "capturas/2024/10- Outubro/10- Programação/semana4/3.png"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/10- Programação/semana5/1.png", "capturas/2024/10- Outubro/10- Programação/semana5/2.png", "capturas/2024/10- Outubro/10- Programação/semana5/3.png"] },

            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/10- Programação/semana1/1.png", "capturas/2024/11-Novembro/10- Programação/semana1/2.png", "capturas/2024/11-Novembro/10- Programação/semana1/3.png"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/10- Programação/semana2/1.png", "capturas/2024/11-Novembro/10- Programação/semana2/2.png", "", "capturas/2024/11-Novembro/10- Programação/semana2/3.png"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/10- Programação/semana3/1.png", "capturas/2024/11-Novembro/10- Programação/semana3/2.png", "capturas/2024/11-Novembro/10- Programação/semana3/3.png"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/10- Programação/semana4/1.png", "capturas/2024/11-Novembro/10- Programação/semana4/2.png", "capturas/2024/11-Novembro/10- Programação/semana4/3.png"] },

            { data: "05/12/2024", captura: ["capturas/2024/12-Dezembro/10- Programação/semana1/1.png", "capturas/2024/12-Dezembro/10- Programação/semana1/2.png", "capturas/2024/12-Dezembro/10- Programação/semana1/3.png"] },
            { data: "12/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["NÃO FOI ENTREGUE"] },
            
            // { data: "", captura: ["", "", ""] },


        
            
        ],

        Contabilidade: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/11- Contabilidade/semana3/1.png", "capturas/2024/7- Julho/11- Contabilidade/semana3/2.png", "capturas/2024/7- Julho/11- Contabilidade/semana3/3.png"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/11- Contabilidade/semana4/1.png", "capturas/2024/7- Julho/11- Contabilidade/semana4/2.png", "capturas/2024/7- Julho/11- Contabilidade/semana4/3.png"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/11- Contabilidade/semana5/1.png", "capturas/2024/7- Julho/11- Contabilidade/semana5/2.png", "capturas/2024/7- Julho/11- Contabilidade/semana5/3.png"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/11- Contabilidade/semana1/1.png", "capturas/2024/8- Agosto/11- Contabilidade/semana1/2.png", "capturas/2024/8- Agosto/11- Contabilidade/semana1/3.png"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/11- Contabilidade/semana3/1.jpeg", "capturas/2024/8- Agosto/11- Contabilidade/semana3/2.jpeg", "capturas/2024/8- Agosto/11- Contabilidade/semana3/3.jpeg"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/11- Contabilidade/semana4/1.png", "capturas/2024/8- Agosto/11- Contabilidade/semana4/2.png", "capturas/2024/8- Agosto/11- Contabilidade/semana4/3.png"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/11- Contabilidade/semana5/01.png", "capturas/2024/8- Agosto/11- Contabilidade/semana5/02.png", "capturas/2024/8- Agosto/11- Contabilidade/semana5/03.png"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/11- Contabilidade/semana4/01.png", "capturas/2024/9- Setembro/11- Contabilidade/semana4/02.png", "capturas/2024/9- Setembro/11- Contabilidade/semana4/03.png"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/11- Contabilidade/semana1/01.png", "capturas/2024/10- Outubro/11- Contabilidade/semana1/02.png", "capturas/2024/10- Outubro/11- Contabilidade/semana1/03.png"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/11- Contabilidade/semana2/01.png", "capturas/2024/10- Outubro/11- Contabilidade/semana2/02.png", "capturas/2024/10- Outubro/11- Contabilidade/semana2/03.png"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/11- Contabilidade/semana3/01.png", "capturas/2024/10- Outubro/11- Contabilidade/semana3/02.png", "capturas/2024/10- Outubro/11- Contabilidade/semana3/03.png"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/11- Contabilidade/semana4/01.png", "capturas/2024/10- Outubro/11- Contabilidade/semana4/02.png", "capturas/2024/10- Outubro/11- Contabilidade/semana4/03.png"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/11- Contabilidade/semana5/01.png", "capturas/2024/10- Outubro/11- Contabilidade/semana5/02.png", "capturas/2024/10- Outubro/11- Contabilidade/semana5/03.png"] },
           
            { data: "07/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "14/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/11- Contabilidade/semana3/21 pt01.jpg", "capturas/2024/11-Novembro/11- Contabilidade/semana3/21 pt02.jpg", "capturas/2024/11-Novembro/11- Contabilidade/semana3/21 pt03.jpg"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/11- Contabilidade/semana4/01.png", "capturas/2024/11-Novembro/11- Contabilidade/semana4/02.png", "capturas/2024/11-Novembro/11- Contabilidade/semana4/03.png"] },

            { data: "05/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "12/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["NÃO FOI ENTREGUE"] },
            
            // { data: "", captura: ["", "", "", ""] },
            // { data: "", captura: ["", "", "", ""] },
            
        ],

        Almoxarifado: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/12- Almoxarifado/semana3/1.png", "capturas/2024/7- Julho/12- Almoxarifado/semana3/2..png", "capturas/2024/7- Julho/12- Almoxarifado/semana3/3.png"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/12- Almoxarifado/semana4/1.png", "capturas/2024/7- Julho/12- Almoxarifado/semana4/2.png", "capturas/2024/7- Julho/12- Almoxarifado/semana4/3.png"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/12- Almoxarifado/semana5/1.jpeg", "capturas/2024/7- Julho/12- Almoxarifado/semana5/2.jpeg", "capturas/2024/7- Julho/12- Almoxarifado/semana5/3.jpeg"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/12- Almoxarifado/semana1/1.jpeg", "capturas/2024/8- Agosto/12- Almoxarifado/semana1/2.jpeg", "capturas/2024/8- Agosto/12- Almoxarifado/semana1/3.jpeg"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/12- Almoxarifado/semana3/1.png", "capturas/2024/8- Agosto/12- Almoxarifado/semana3/2.png", "capturas/2024/8- Agosto/12- Almoxarifado/semana3/3.png"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/12- Almoxarifado/semana5/Captura de tela 2024-08-29 132608.png", "capturas/2024/8- Agosto/12- Almoxarifado/semana5/Captura de tela 2024-08-29 1401542.png", "capturas/2024/8- Agosto/12- Almoxarifado/semana5/Captura de tela 2024-08-29 132805.png"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/12- Almoxarifado/semana1/1.png", "capturas/2024/9- Setembro/12- Almoxarifado/semana1/2.png", "capturas/2024/9- Setembro/12- Almoxarifado/semana1/3.png"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/12- Almoxarifado/semana2/1.png", "capturas/2024/9- Setembro/12- Almoxarifado/semana2/2.png", "capturas/2024/9- Setembro/12- Almoxarifado/semana2/3.png"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/12- Almoxarifado/semana3/1.jpeg", "capturas/2024/9- Setembro/12- Almoxarifado/semana3/2.jpeg", "capturas/2024/9- Setembro/12- Almoxarifado/semana3/3.jpeg"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/12- Almoxarifado/semana4/1.png", "capturas/2024/9- Setembro/12- Almoxarifado/semana4/2.png", "capturas/2024/9- Setembro/12- Almoxarifado/semana4/3.png"] },
            { data: "03/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "11/10/2024", captura: ["capturas/2024/10- Outubro/12- Almoxarifado/semana2/1.png", "capturas/2024/10- Outubro/12- Almoxarifado/semana2/2.png", "capturas/2024/10- Outubro/12- Almoxarifado/semana2/3.png"] },
            { data: "17/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/12- Almoxarifado/semana2/1.png", "capturas/2024/10- Outubro/12- Almoxarifado/semana2/2.png", "capturas/2024/10- Outubro/12- Almoxarifado/semana2/3.png"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/12- Almoxarifado/semana5/1.png", "capturas/2024/10- Outubro/12- Almoxarifado/semana5/2.png", "capturas/2024/10- Outubro/12- Almoxarifado/semana5/3.png"] },
           
            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/12- Almoxarifado/semana1/Captura de tela 2024-11-07 132442.png", "capturas/2024/11-Novembro/12- Almoxarifado/semana1/Captura de tela 2024-11-07 132517.png", "capturas/2024/11-Novembro/12- Almoxarifado/semana1/Captura de tela 2024-11-07 132637.png"] },
            { data: "14/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "25/11/2024", captura: ["capturas/2024/11-Novembro/12- Almoxarifado/semana2/Captura de tela 2024-11-14 164748.png", "capturas/2024/11-Novembro/12- Almoxarifado/semana2/Captura de tela 2024-11-14 164825.png", "capturas/2024/11-Novembro/12- Almoxarifado/semana2/Captura de tela 2024-11-14 164846.png"] },
            { data: "18/11/2024", captura: ["capturas/2024/11-Novembro/12- Almoxarifado/semana5/Captura de tela 2024-11-28 091300.png", "capturas/2024/11-Novembro/12- Almoxarifado/semana5/TEXTE.png" ,"capturas/2024/11-Novembro/12- Almoxarifado/semana5/3pt.jpg"] },

            { data: "05/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "12/12/2024", captura: ["capturas/2024/12-Dezembro/12- Almoxarifado/semana2/Captura de tela 2024-12-12 110601.png", "capturas/2024/12-Dezembro/12- Almoxarifado/semana2/Sem título.png", "capturas/2024/12-Dezembro/12- Almoxarifado/semana2/Captura de tela 2024-12-12 110951.png"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["NÃO FOI ENTREGUE"] },

            
            // { data: "", captura: ["", "", "", ""] },
        ],

        ComprasManutencao: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/13- Compras Manutenção/semana3/1.jpg", "capturas/2024/7- Julho/13- Compras Manutenção/semana3/2.jpg", "capturas/2024/7- Julho/13- Compras Manutenção/semana3/3.jpg"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/13- Compras Manutenção/semana4/1.png", "capturas/2024/7- Julho/13- Compras Manutenção/semana4/2.png", "capturas/2024/7- Julho/13- Compras Manutenção/semana4/3.png"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/13- Compras Manutenção/semana5/1.png", "capturas/2024/7- Julho/13- Compras Manutenção/semana5/2.png", "capturas/2024/7- Julho/13- Compras Manutenção/semana5/3.png"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/13- Compras Manutenção/semana1/1.png", "capturas/2024/8- Agosto/13- Compras Manutenção/semana1/2.png", "capturas/2024/8- Agosto/13- Compras Manutenção/semana1/3.png"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/13- Compras Manutenção/semana3/1.png", "capturas/2024/8- Agosto/13- Compras Manutenção/semana3/2.png", "capturas/2024/8- Agosto/13- Compras Manutenção/semana3/3.png"] },
            { data: "03/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "10/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "17/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "24/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "31/10/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "07/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "14/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "15/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "28/11/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "05/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "12/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["NÃO FOI ENTREGUE"] },
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        Recepcao: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/14- Recepção/semana3/1.png", "capturas/2024/7- Julho/14- Recepção/semana3/2.jpeg", "capturas/2024/7- Julho/14- Recepção/semana3/3.jpeg"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/14- Recepção/semana4/1.jpeg", "capturas/2024/7- Julho/14- Recepção/semana4/2.jpeg", "capturas/2024/7- Julho/14- Recepção/semana4/3.jpeg"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/14- Recepção/semana1/1.jpeg", "capturas/2024/10- Outubro/14- Recepção/semana1/2.jpeg", "capturas/2024/10- Outubro/14- Recepção/semana1/3.jpeg"] },
            { data: "10/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "17/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "24/10/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "31/10/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "07/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "14/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "15/11/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "28/11/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "05/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "12/12/2024", captura: ["NÃO FOI ENTREGUE"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["NÃO FOI ENTREGUE"] },
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        AssistenciaP: [

            // { data: "", captura: ["", "", "", ""] },
        ],

        Financeiro: [
            { data: "19/07/2024", captura: ["capturas/2024/7- Julho/16- Financeiro/semana3/PARTE 1.png", "capturas/2024/7- Julho/16- Financeiro/semana3/PARTE 2.jpg", "capturas/2024/7- Julho/16- Financeiro/semana3/PARTE 3.png"] },
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/16- Financeiro/semana4/Parte 1.png", "capturas/2024/7- Julho/16- Financeiro/semana4/Parte 2.jpg", "capturas/2024/7- Julho/16- Financeiro/semana4/Parte 3.jpg"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/16- Financeiro/semana5/Parte 1.jpg", "capturas/2024/7- Julho/16- Financeiro/semana5/Parte 2.jpg", "capturas/2024/7- Julho/16- Financeiro/semana5/Parte 3.jpg"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/16- Financeiro/semana1/PARTE 1.jpg", "capturas/2024/8- Agosto/16- Financeiro/semana1/PARTE 2.jpg", "capturas/2024/8- Agosto/16- Financeiro/semana1/PARTE 3.jpg"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/16- Financeiro/semana3/Parte 1.jpg", "capturas/2024/8- Agosto/16- Financeiro/semana3/Parte 2.jpg", "capturas/2024/8- Agosto/16- Financeiro/semana3/Parte 3.jpg"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/16- Financeiro/semana3/Parte 1.jpg", "capturas/2024/8- Agosto/16- Financeiro/semana3/Parte 2.jpg", "capturas/2024/8- Agosto/16- Financeiro/semana3/Parte 3.jpg"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/16- Financeiro/semana4/Parte 1.jpg", "capturas/2024/8- Agosto/16- Financeiro/semana4/Parte 2.jpg", "capturas/2024/8- Agosto/16- Financeiro/semana4/Parte 3.jpg"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/16- Financeiro/semana1/Parte 1.jpg", "capturas/2024/9- Setembro/16- Financeiro/semana1/Parte 2.jpg", "capturas/2024/9- Setembro/16- Financeiro/semana1/Parte 3.jpg"] },
            { data: "12/09/2024", captura: ["capturas/2024/9- Setembro/16- Financeiro/semana2/Part 1.jpg", "capturas/2024/9- Setembro/16- Financeiro/semana2/Part 2.jpg", "capturas/2024/9- Setembro/16- Financeiro/semana2/Part 3.jpg"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/16- Financeiro/semana3/Parte 1.jpg", "capturas/2024/9- Setembro/16- Financeiro/semana3/Parte 2.jpeg", "capturas/2024/9- Setembro/16- Financeiro/semana3/Parte 3.jpg"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/16- Financeiro/semana4/Parte 1.jpg", "capturas/2024/9- Setembro/16- Financeiro/semana4/Parte 2.jpg", "capturas/2024/9- Setembro/16- Financeiro/semana4/Parte 3.jpg"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/16- Financeiro/semana1/Parte 1.jpg", "capturas/2024/10- Outubro/16- Financeiro/semana1/Parte 2.jpg", "capturas/2024/10- Outubro/16- Financeiro/semana1/Parte 3.jpg"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/16- Financeiro/semana2/Part 1.jpg", "capturas/2024/10- Outubro/16- Financeiro/semana2/Part 2.jpg", "capturas/2024/10- Outubro/16- Financeiro/semana2/Part 3.jpg"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/16- Financeiro/semana3/Part 1.jpg", "capturas/2024/10- Outubro/16- Financeiro/semana3/Part 2.jpg", "capturas/2024/10- Outubro/16- Financeiro/semana3/Part 3.jpg"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/16- Financeiro/semana4/Parte 1.jpg", "capturas/2024/10- Outubro/16- Financeiro/semana4/Parte 2.jpg", "capturas/2024/10- Outubro/16- Financeiro/semana4/Parte 3.jpg"] },
            { data: "31/10/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/16- Financeiro/semana1/Part 1.jpg", "capturas/2024/11-Novembro/16- Financeiro/semana1/Part 2.jpg", "capturas/2024/11-Novembro/16- Financeiro/semana1/Part 3.jpg"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/16- Financeiro/semana3/PART 1.jpg", "capturas/2024/11-Novembro/16- Financeiro/semana3/PART 2.jpg", "capturas/2024/11-Novembro/16- Financeiro/semana3/PART 3.jpg"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/16- Financeiro/semana3/PART 1.jpg", "capturas/2024/11-Novembro/16- Financeiro/semana3/PART 2.jpg", "capturas/2024/11-Novembro/16- Financeiro/semana3/PART 3.jpg"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/16- Financeiro/semana5/PART 1.jpg", "capturas/2024/11-Novembro/16- Financeiro/semana5/PART 2.jpg", "capturas/2024/11-Novembro/16- Financeiro/semana5/PART 3.jpg"] },
            
            { data: "05/12/2024", captura: ["capturas/2024/12-Dezembro/16- Financeiro/semana1/01 PT.jpg", "capturas/2024/12-Dezembro/16- Financeiro/semana1/01 PT2.jpg", "capturas/2024/12-Dezembro/16- Financeiro/semana1/01PT03.jpg"] },
            { data: "12/12/2024", captura: ["capturas/2024/12-Dezembro/16- Financeiro/semana2/Part 1.jpg", "capturas/2024/12-Dezembro/16- Financeiro/semana2/Part 2.jpg", "capturas/2024/12-Dezembro/16- Financeiro/semana2/Part 3.jpg"] },
            { data: "18/12/2024", captura: ["NÃO FOI ENTREGUE"] },

            { data: "09/01/2025", captura: ["NÃO FOI ENTREGUE"] },
            
            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG2: {
        Geral: [
            { data: "26/07/2024", captura: ["capturas/2024/7- Julho/17- Geral/Semana 4/geral.jpeg"] },
            { data: "01/08/2024", captura: ["capturas/2024/7- Julho/17- Geral/Semana 5/geral.jpeg"] },
            { data: "08/08/2024", captura: ["capturas/2024/8- Agosto/17- Geral/Semana 1/1.jpeg", "images/fraseGeral.png"] },
            { data: "15/08/2024", captura: ["capturas/2024/8- Agosto/17- Geral/Semana 3/1.png", "images/fraseGeral.png"] },
            { data: "23/08/2024", captura: ["capturas/2024/8- Agosto/17- Geral/Semana 4/1.jpeg", "images/fraseGeral.png"] },
            { data: "29/08/2024", captura: ["capturas/2024/8- Agosto/17- Geral/Semana 5/1.jpeg", "images/fraseGeral.png"] },
            { data: "06/09/2024", captura: ["capturas/2024/9- Setembro/17- Geral/Semana 1/1.jpeg", "images/fraseGeral.png"] },
            { data: "13/09/2024", captura: ["capturas/2024/9- Setembro/17- Geral/Semana 2/geral.png", "images/fraseGeral.png"] },
            { data: "19/09/2024", captura: ["capturas/2024/9- Setembro/17- Geral/Semana 3/geral.jpeg", "images/fraseGeral.png"] },
            { data: "25/09/2024", captura: ["capturas/2024/9- Setembro/17- Geral/Semana 4/geral.png", "images/fraseGeral.png"] },
            { data: "03/10/2024", captura: ["capturas/2024/10- Outubro/17- Geral/Semana 1/1.jpeg", "images/fraseGeral.png"] },
            { data: "10/10/2024", captura: ["capturas/2024/10- Outubro/17- Geral/Semana 2/geral.jpeg", "images/fraseGeral.png"] },
            { data: "17/10/2024", captura: ["capturas/2024/10- Outubro/17- Geral/Semana 3/geral.jpeg", "images/fraseGeral.png"] },
            { data: "24/10/2024", captura: ["capturas/2024/10- Outubro/17- Geral/Semana 4/geral.png", "images/fraseGeral.png"] },
            { data: "31/10/2024", captura: ["capturas/2024/10- Outubro/17- Geral/Semana 5/geral.jpg", "images/fraseGeral.png"] },
           
            { data: "07/11/2024", captura: ["capturas/2024/11-Novembro/17- Geral/Semana 1/1.jpg", "images/fraseGeral.png"] },
            { data: "14/11/2024", captura: ["capturas/2024/11-Novembro/17- Geral/Semana 2/2.jpg", "images/fraseGeral.png"] },
            { data: "15/11/2024", captura: ["capturas/2024/11-Novembro/17- Geral/Semana 3/3.jpg", "images/fraseGeral.png"] },
            { data: "28/11/2024", captura: ["capturas/2024/11-Novembro/17- Geral/Semana 4/GERAL.jpg", "images/fraseGeral.png"] },

            { data: "05/12/2024", captura: ["capturas/2024/12-Dezembro/17- Geral/Semana 1/GRAFICO GERAL.jpg", "images/fraseGeral.png"] },
            { data: "12/12/2024", captura: ["capturas/2024/12-Dezembro/17- Geral/Semana 2/geral.jpeg", "images/fraseGeral.png"] },
            { data: "18/12/2024", captura: ["capturas/2024/12-Dezembro/17- Geral/Semana 3/geral.jpeg", "images/fraseGeral.png"] },

            { data: "09/01/2025", captura: ["capturas/2025/1- Janeiro/17- Geral/Semana 2/GERAL.jpeg", "images/fraseGeral.png"] },

        ],
            // { data: "", captura: ["", "images/fraseGeral.png"] },
    
    },

     
    cinco_s: {
        Transporte: [
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        Pcp: [
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        ti: [

            // { data: "", captura: ["", "", "", ""] },
        ],

        Cadastro: [
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        Comercial: [
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        Compras: [
            
            // { data: "", captura: ["", "", "", ""] },

        ],

        Design: [

            // { data: "", captura: ["", "", "", ""] },
        ],

        AssistenciaC: [
            
            // { data: "", captura: ["", "", "", ""] },

        ],

        Custos: [
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        Programacao: [
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        Contabilidade: [
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        Almoxarifado: [
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        ComprasManutencao: [
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        Recepcao: [
            
            // { data: "", captura: ["", "", "", ""] },
        ],

        AssistenciaP: [

            // { data: "", captura: ["", "", "", ""] },
        ],

        Financeiro: [
           
            // { data: "", captura: ["", "", "", ""] },
        ],
    
    },

/*  
     URPG4: {},
    
     URPG5: {},
    
     URPG6: {},
    
     URPG7: {},
    
     URPG8: {},
    
     URPG9: {},
    
     URPG10: {},
    
     URPG11: {},
    
     URPG12: {},
    
     URPG13: {},
    
     URPG14: {},
    
     URPG15: {},
    
     URPG16: {},
*/

};

function exibirInformação(unidade) {
    // Exibe a mensagem de carregamento
    exibirMensagemDeCarregamento(unidade);

    listaDeUrls = []
    console.log(listaDeUrls)

    let data_input = document.getElementById(`dataInput_${unidade}`).value;
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];
    
    let detalhesContainer = document.getElementById(`detalhesContainer_${unidade}`);
    let detalhesContainerAlert = document.getElementById(`detalhesContainer_alert_${unidade}`);
    detalhesContainer.innerHTML = ''; // Limpar o conteúdo antes de adicionar novas capturas
    detalhesContainerAlert.innerHTML = ''; // Limpar o conteúdo do alerta

    let capturasEncontradas = false;

    // Função para exibir as imagens
    function exibirImagens() {

        for (let i = 0; i < capturas.length; i++) {
            let dataFormatada = capturas[i].data.split('/').reverse().join('-');

            if (dataFormatada === data_input) {
                for (let j = 0; j < capturas[i].captura.length; j++) {
                    let capturaAtual = capturas[i].captura[j];
                    listaDeUrls.push(capturaAtual);

                    let novaImagem = document.createElement('img');
                    novaImagem.src = capturas[i].captura[j];
                    
                    // Definir o texto alternativo
                    if (capturaAtual === "NÃO FOI ENTREGUE") {
                        novaImagem.alt = " NÃO FOI ENTREGUE";
                    } else {
                        novaImagem.alt = `Imagem ${j + 1} da captura`;
                    }

                    let novoDetalhe = document.createElement('div');
                    novoDetalhe.classList.add('detalhes');
                    novoDetalhe.innerHTML = `
                        <div class="detalhes-container"></div>
                    `;

                    novoDetalhe.querySelector('.detalhes-container').appendChild(novaImagem);

                    detalhesContainer.appendChild(novoDetalhe);
                }
                capturasEncontradas = true;

                const ocultar = document.querySelectorAll('.ocultar');
                ocultar.forEach(ocultar => {
                    ocultar.style.display = 'none';
                });

                const ocultar_dois = document.querySelectorAll('.ocultar_dois');
                ocultar_dois.forEach(ocultar_dois => {
                    ocultar_dois.style.display = 'flex';
                    ocultar_dois.style.align = 'center';
                });

                const main = document.querySelectorAll('.inicial__mn');
                main.forEach(main => {
                    main.style.height = '100vh';
                });
            }
        }
        console.log(listaDeUrls)

        // Esconde a mensagem de carregamento após o carregamento das imagens
        esconderMensagemDeCarregamento(unidade);

        if (!capturasEncontradas) {
            detalhesContainerAlert.innerHTML = "Apontamento não finalizado!";
        } else {
            detalhesContainerAlert.innerHTML = ''; // Limpar o conteúdo do alerta se novas capturas foram encontradas
        }
    }

    // Adiciona um tempo de espera (5 segundos) para simular o carregamento
    setTimeout(exibirImagens, 5000);

};

function exibirMensagemDeCarregamento(unidade) {
    let alerta_carregamento = document.getElementById(`loadingMessage_${unidade}`);

    if (alerta_carregamento) {
        alerta_carregamento.style.display = 'flex';

    } else {
        console.error(`Elemento de carregamento não encontrado para a unidade ${unidade}`);
    }
}

function esconderMensagemDeCarregamento(unidade) {
    let alerta_carregamento = document.getElementById(`loadingMessage_${unidade}`);

    if (alerta_carregamento) {
        alerta_carregamento.style.display = 'none';
    } else {
        console.error(`Elemento de carregamento não encontrado para a unidade ${unidade}`);
    }
}

function atualizarInputData(unidade) {
    let data_input = document.getElementById(`dataInput_${unidade}`);
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];

    // Verificar se o setor selecionado existe nas unidades
    if (!capturas) {
        console.error(`Setor ${setor} não encontrado para a unidade ${unidade}`);
        return;
    }

    let ultimaData = capturas[capturas.length - 1].data;

    // Convertendo o formato da data de "dd/mm/yyyy" para "yyyy-MM-dd"
    let dataFormatada = ultimaData.split('/').reverse().join('-');
    console.log(dataFormatada);

    // Atribuindo a data formatada ao valor do input
    data_input.value = dataFormatada;
    exibirInformação(unidade)
}

// Função para diminuir o índice em 1
function diminuirIndice(indice) {
    // Verificar se o índice é válido
    if (indice > 0) {
        return indice - 1;
    } else {
        console.error(`Erro ao diminuir o índice, índice inválido`);
        return indice;
    }
}

function aumentarIndice(indice) {
    // Verificar se o índice é válido
    if (indice >= 0) {
        return indice + 1;
    } else {
        console.error(`Erro ao aumentar o índice, índice inválido`);
        return indice;
    }
}

// BOTÕES

function proximoDia(unidade) {
    let data_input = document.getElementById(`dataInput_${unidade}`);
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];
    
    // Verificar se o setor selecionado existe nas unidades
    if (!capturas) {
        console.error(`Setor ${setor} não encontrado para a unidade ${unidade}`);
        return;
    }

    let dataFormatada = data_input.value; // Obter a data formatada do input

    // Converter o formato da data de entrada para o formato do array capturas
    let dataComparacao = dataFormatada.split('-').reverse().join('/');

    // Percorrer o array de capturas
    for (let i = 0; i < capturas.length; i++) {
        if (capturas[i].data === dataComparacao) { // Verificar se a data corresponde
            if (i < capturas.length - 1) {
                let proximaData = capturas[i + 1].data;
                console.log(`Próxima Data: ${proximaData}`);

                let tituloUnidade = document.querySelector(`#${unidade} h6`);
                tituloUnidade.scrollIntoView({ behavior: 'smooth' });

                // Converter a próxima data para o formato "dd/MM/yyyy"
                partesData = proximaData.split('/'); // Dividir a data em partes
                proximaData = `${partesData[2]}-${partesData[1]}-${partesData[0]}`; // Formatar para "dd/MM/yyyy"
                
                // Atribuir a próxima data ao valor do input
                data_input.value = proximaData;
                return; // Sair da função após encontrar a data
            } else {
                console.error(`Não há data posterior disponível`);
                return;
            }
        }
    }
    console.error(`Data ${dataFormatada} não encontrada no array de capturas`);
}

function diaAnterior(unidade) {
    let data_input = document.getElementById(`dataInput_${unidade}`);
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];
    
    // Verificar se o setor selecionado existe nas unidades
    if (!capturas) {
        console.error(`Setor ${setor} não encontrado para a unidade ${unidade}`);
        return;
    }

    let dataFormatada = data_input.value; // Obter a data formatada do input

    // Converter o formato da data de entrada para o formato do array capturas
    let dataComparacao = dataFormatada.split('-').reverse().join('/');

    // Percorrer o array de capturas de trás para frente
    for (let i = capturas.length - 1; i >= 0; i--) {
        if (capturas[i].data === dataComparacao) { // Verificar se a data corresponde
            if (i > 0) {
                let proximaData = capturas[i - 1].data;
                console.log(`Próxima Data: ${proximaData}`);

                let tituloUnidade = document.querySelector(`#${unidade} h6`);
                tituloUnidade.scrollIntoView({ behavior: 'smooth' });

                // Converter a próxima data para o formato "dd/MM/yyyy"
                partesData = proximaData.split('/'); // Dividir a data em partes
                proximaData = `${partesData[2]}-${partesData[1]}-${partesData[0]}`; // Formatar para "dd/MM/yyyy"
                
                // Atribuir a próxima data ao valor do input
                data_input.value = proximaData;
                return; // Sair da função após encontrar a data
            } else {
                console.error(`Não há data anterior disponível`);
                return;
            }
        }
    }
    console.error(`Data ${dataFormatada} não encontrada no array de capturas`);
}

function voltar (unidade) {
    let detalhesContainer = document.getElementById(`detalhesContainer_${unidade}`);
    detalhesContainer.innerHTML = "";

    let detalhesContainerAlerta = document.getElementById(`detalhesContainer_alert_${unidade}`);
    detalhesContainerAlerta.innerHTML = "";

    let tituloUnidade = document.querySelector(`#${unidade} h6`);
    tituloUnidade.scrollIntoView({ behavior: 'smooth' });


    const menu = document.querySelector('.inicial__menu');
    menu.style.display = 'flex';

    const unidades = document.querySelectorAll('.unidade');
    unidades.forEach(unidade => {
        unidade.style.display = 'none';
    });
    
    const ocultar = document.querySelectorAll('.ocultar');
    ocultar.forEach(ocultar => {
        ocultar.style.display = 'flex';
    });

    const main = document.querySelectorAll('.inicial__mn');
    main.forEach(main => {
        main.style.height =  'calc(100vh - 174px)';  
    });
}

function limparDetalhes(unidade) {
    let detalhesContainer = document.getElementById(`detalhesContainer_${unidade}`);
    detalhesContainer.innerHTML = "";

    let detalhesContainerAlerta = document.getElementById(`detalhesContainer_alert_${unidade}`);
    detalhesContainerAlerta.innerHTML = "";

    const ocultar = document.querySelectorAll('.ocultar');
    ocultar.forEach(ocultar => {
        ocultar.style.display = 'flex';
    });

    const ocultar_dois = document.querySelectorAll('.ocultar_dois');
    ocultar_dois.forEach(ocultar_dois => {
        ocultar_dois.style.display = 'none';
    });

    const main = document.querySelectorAll('.inicial__mn');
    main.forEach(main => {
        main.style.height =  'calc(100vh - 174px)'; 
    });
}
