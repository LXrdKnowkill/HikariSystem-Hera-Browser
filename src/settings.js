window.addEventListener('DOMContentLoaded', async () => {
    // Navegação entre páginas de configurações
    const sidebarItems = document.querySelectorAll('.settings-sidebar li[data-page]');
    const pages = document.querySelectorAll('.settings-page');

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetPage = item.getAttribute('data-page');

            // Remove active de todos os itens e páginas
            sidebarItems.forEach(i => i.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            // Adiciona active ao item clicado e à página correspondente
            item.classList.add('active');
            const page = document.getElementById(targetPage);
            if (page) {
                page.classList.add('active');
            }
        });
    });

    // Verifica se heraAPI está disponível
    if (!window.heraAPI) {
        console.error('heraAPI não está disponível!');
        return;
    }

    // Carregar configurações salvas
    const loadSettings = async () => {
        try {
            const settings = await window.heraAPI.getAllSettings();
            
            // Carregar tema
            if (settings.theme) {
                const themeSelect = document.getElementById('theme-select');
                if (themeSelect) {
                    themeSelect.value = settings.theme;
                }
            }

            // Carregar mecanismo de busca
            if (settings.searchEngine) {
                const searchEngineSelect = document.getElementById('search-engine-select');
                if (searchEngineSelect) {
                    searchEngineSelect.value = settings.searchEngine;
                }
            }
        } catch (error) {
            console.error('Erro ao carregar configurações:', error);
        }
    };

    // Salvar configuração
    const saveSetting = async (key, value) => {
        try {
            await window.heraAPI.setSetting(key, value);
            console.log(`Configuração ${key} salva:`, value);
        } catch (error) {
            console.error(`Erro ao salvar configuração ${key}:`, error);
            alert(`Erro ao salvar configuração: ${error.message}`);
        }
    };

    // Carregar configurações ao iniciar
    await loadSettings();

    // Tema
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            const value = e.target.value;
            saveSetting('theme', value);
            // Aqui você pode adicionar lógica para aplicar o tema imediatamente
            console.log('Tema alterado para:', value);
        });
    }

    // Mecanismo de busca
    const searchEngineSelect = document.getElementById('search-engine-select');
    if (searchEngineSelect) {
        searchEngineSelect.addEventListener('change', (e) => {
            const value = e.target.value;
            saveSetting('searchEngine', value);
            console.log('Mecanismo de busca alterado para:', value);
        });
    }

    // Botão de limpar histórico
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', async () => {
            if (confirm('Tem certeza que deseja limpar todos os dados de navegação?')) {
                try {
                    await window.heraAPI.clearHistory();
                    alert('Dados de navegação limpos com sucesso!');
                } catch (error) {
                    console.error('Erro ao limpar histórico:', error);
                    alert('Erro ao limpar dados de navegação.');
                }
            }
        });
    }
});

