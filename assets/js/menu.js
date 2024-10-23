l/*et secaoAtiva = null; // Variável para controlar a seção ativa

        // Função para exibir todas as seções
        function mostrarTodasSecoes() {
            document.querySelectorAll('.conteudo-paginamenu .section').forEach(section => {
                section.style.display = 'block';
            });
            // Remover a classe 'active' de todos os botões
            document.querySelectorAll('.menu button').forEach(button => {
                button.classList.remove('active');
            });
            secaoAtiva = null; // Resetar a seção ativa
        }

        // Função para exibir apenas uma seção específica
        function mostrarSecao(titulo, botao) {
            if (secaoAtiva === titulo) {
                // Se a seção clicada já está ativa, exibe todas as seções
                mostrarTodasSecoes();
            } else {
                // Exibe apenas a seção correspondente
                document.querySelectorAll('.conteudo-paginamenu .section').forEach(section => {
                    if (section.getAttribute('data-title') === titulo) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
                // Atualiza a seção ativa e os botões
                document.querySelectorAll('.menu button').forEach(button => {
                    button.classList.remove('active');
                });
                botao.classList.add('active');
                secaoAtiva = titulo; // Define a seção ativa
            }
        }

        // Inicializa o menu
       function criarMenu() {
            const menu = document.querySelector('.menu');
            const secoes = document.querySelectorAll('.conteudo-paginamenu .section');

            // Criar botões para cada seção
            secoes.forEach(section => {
                const titulo = section.getAttribute('data-title');
                const botao = document.createElement('button');
                botao.classList.add('menu-secao');

                botao.textContent = titulo;
                botao.onclick = () => mostrarSecao(titulo, botao);
                menu.appendChild(botao);
            });
        }

        // Chama a função para criar o menu e exibe todas as seções ao carregar a página
        criarMenu();
        mostrarTodasSecoes();*/

let secaoAtiva = null; // Variável para controlar a seção ativa

// Função para exibir todas as seções
function mostrarConteudo(index) {
    const conteudos = document.querySelectorAll('.section'); // Seleciona todas as seções
    const menuItems = document.querySelectorAll('.menu-item');

    // Esconde todos os conteúdos
    conteudos.forEach((conteudo, i) => {
        conteudo.classList.remove('active');
        menuItems[i].classList.remove('active');
    });

    // Mostra o conteúdo selecionado
    conteudos[index].classList.add('active');
    menuItems[index].classList.add('active');

    // Rola para o conteúdo
    const target = conteudos[index];
    target.scrollIntoView({ behavior: 'smooth' });
}

function mostrarTodasSecoes() {
    document.querySelectorAll('.conteudo-paginamenu .section').forEach(section => {
        section.style.display = 'block';
    });
    // Remover a classe 'active' de todos os links
    document.querySelectorAll('.menu a').forEach(link => {
        link.classList.remove('active');
    });
    secaoAtiva = null; // Resetar a seção ativa
}

// Função para exibir apenas uma seção específica
function mostrarSecao(titulo, link) {
    if (secaoAtiva === titulo) {
        // Se a seção clicada já está ativa, exibe todas as seções
        mostrarTodasSecoes();
    } else {
        // Exibe apenas a seção correspondente
        document.querySelectorAll('.conteudo-paginamenu .section').forEach(section => {
            if (section.getAttribute('data-title') === titulo) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
        // Atualiza a seção ativa e os links
        document.querySelectorAll('.menu a').forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
        secaoAtiva = titulo; // Define a seção ativa
    }
}

// Inicializa o menu
function criarMenu() {
    const menu = document.querySelector('.menu');
    const secoes = document.querySelectorAll('.conteudo-paginamenu .section');

    // Criar links para cada seção
    secoes.forEach(section => {
        const titulo = section.getAttribute('data-title');
        const link = document.createElement('a'); // Mudei de 'button' para 'a'
        link.classList.add('menu-secao');
        link.textContent = titulo;
        link.href = '#'; // Para que o link não redirecione

        // Atualiza o evento de clique
        link.onclick = (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link
            mostrarSecao(titulo, link);
        };

        menu.appendChild(link);
    });
}

// Chama a função para criar o menu e exibe todas as seções ao carregar a página
criarMenu();
mostrarTodasSecoes();
