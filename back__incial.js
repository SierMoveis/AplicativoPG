
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


            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG2: {
        Pcp: [

            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG3: {
        ti: [

            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG4: {
        Cadastro: [

            // { data: "", captura: ["", "", "", ""] },

        ],
    },

    URPG5: {
        Comercial: [

            // { data: "", captura: ["", "", "", ""] },

        ],
    },

    URPG6: {
        Compras: [

            // { data: "", captura: ["", "", "", ""] },

        ],
    },

    URPG7: {
        Assistencia: [

            // { data: "", captura: ["", "", "", ""] },

        ],
    },

    URPG8: {
        Design: [

            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG9: {
        Faturamento: [

            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG10: {
        Financeiro: [

            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG11: {
        Financeiro: [

            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG12: {
        Financeiro: [

            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG13: {
        Financeiro: [

            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG14: {
        Financeiro: [

            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    URPG15: {
        Financeiro: [

            // { data: "", captura: ["", "", "", ""] },
        ],
    },
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
                    listaDeUrls.push(capturas[i].captura[j]);

                    let novaImagem = document.createElement('img');
                    novaImagem.src = capturas[i].captura[j];
                    novaImagem.alt = data_input;

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
