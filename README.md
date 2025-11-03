# 🌟 Hera Browser

Um navegador moderno e elegante construído com Electron, inspirado nas melhores práticas do Chromium.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Electron](https://img.shields.io/badge/Electron-38.4.0-47848F.svg)

## ✨ Características

### 🚀 Funcionalidades Principais
- ✅ **Sistema de Abas Avançado** - Gerencia múltiplas abas com persistência entre sessões
- ✅ **Sistema de Favoritos Completo** - Organize seus sites favoritos com suporte a pastas
- ✅ **Histórico Inteligente** - Busque e navegue pelo seu histórico de forma eficiente
- ✅ **Omnibox Inteligente** - Sugestões em tempo real baseadas em histórico e favoritos
- ✅ **Downloads Gerenciados** - Painel de downloads com progresso e ações rápidas
- ✅ **DevTools Integrado** - Ferramentas de desenvolvedor (F12) para debugging
- ✅ **Interface Moderna** - UI escura e elegante com animações suaves

### 🎯 Recursos Avançados (v2.0.0)
- 🔖 **Sistema de Favoritos com Pastas** - Organize seus bookmarks hierarquicamente
- 🔍 **Omnibox com Autocomplete** - Sugestões inteligentes de histórico, favoritos e busca
- ⌨️ **Atalhos de Teclado Avançados** - Ctrl+T, Ctrl+W, Ctrl+1-9, Ctrl+Tab, Ctrl+D, etc.
- 📱 **Persistência de Abas** - Restaura todas as abas ao reiniciar
- 🎨 **Tema Escuro Moderno** - Interface visualmente agradável e profissional
- 🔒 **Indicadores de Segurança** - Ícones visuais para conexões HTTP/HTTPS

## 📸 Screenshots

_Em breve..._

## 🛠️ Tecnologias

- **Electron** 38.4.0 - Framework para aplicações desktop
- **TypeScript** - Linguagem de programação
- **SQLite3** - Banco de dados para histórico, favoritos e configurações
- **Webpack** - Bundler e build system
- **Electron Forge** - Ferramentas de build e distribuição

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/SEU_USUARIO/hera-browser.git
cd hera-browser
```

2. **Instale as dependências**
```bash
npm install
```

3. **Recompile módulos nativos** (para SQLite3)
```bash
npm run rebuild
```

4. **Execute o navegador**
```bash
npm start
```

## 🔨 Build para Produção

### Windows
```bash
npm run package
```

### Criar instalador
```bash
npm run make
```

## ⌨️ Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Ctrl+T` | Nova aba |
| `Ctrl+W` | Fechar aba atual |
| `Ctrl+R` / `F5` | Recarregar página |
| `Ctrl+Tab` | Próxima aba |
| `Ctrl+Shift+Tab` | Aba anterior |
| `Ctrl+1-9` | Ir para aba número N |
| `Ctrl+D` | Adicionar/remover favorito |
| `Ctrl+L` | Focar barra de endereço |
| `Ctrl+H` | Mostrar/ocultar histórico |
| `Ctrl+J` | Mostrar/ocultar downloads |
| `F12` | Abrir/fechar DevTools |
| `Esc` | Fechar modais/painéis |

## 🗂️ Estrutura do Projeto

```
hera-browser/
├── src/
│   ├── index.ts          # Processo principal (Electron)
│   ├── renderer.ts       # Renderer process (UI)
│   ├── preload.ts        # Bridge entre main e renderer
│   ├── database.ts       # Operações SQLite
│   ├── index.html        # Interface principal
│   ├── index.css         # Estilos
│   ├── settings.html/js  # Página de configurações
│   ├── new-tab.html/css  # Página de nova aba
│   └── menu.html/js/css  # Menu de contexto
├── .webpack/             # Build output
├── out/                  # Builds de distribuição
└── package.json
```

## 📝 Changelog

Veja [CHANGELOG.md](CHANGELOG.md) para histórico completo de mudanças.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Knowkill**

- GitHub: [@LXrdKnowkill](https://github.com/LXrdKnowkill)

## 🙏 Agradecimentos

- Equipe do Electron pelo framework incrível
- Comunidade open source

---

⭐ Se você gostou do projeto, considere dar uma estrela no repositório!

