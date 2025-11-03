# 🌟 Hera Browser

Um navegador moderno e elegante construído com Electron, inspirado nas melhores práticas do Chromium.

![Version](https://img.shields.io/badge/version-2.0.2-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Electron](https://img.shields.io/badge/Electron-38.4.0-47848F.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue.svg)

## ✨ Características

### 🚀 Funcionalidades Principais
- ✅ **Sistema de Abas Avançado** - Gerencia múltiplas abas com persistência entre sessões
- ✅ **Sistema de Favoritos Completo** - Organize seus sites favoritos com suporte a pastas
- ✅ **Barra de Favoritos Visual** - Acesso rápido aos seus sites favoritos (v2.0.2)
- ✅ **Histórico Inteligente** - Busque e navegue pelo seu histórico de forma eficiente
- ✅ **Páginas Dedicadas** - `hera://history` e `hera://downloads` (v2.0.1)
- ✅ **Omnibox Inteligente** - Sugestões em tempo real baseadas em histórico e favoritos
- ✅ **Downloads Gerenciados** - Notificações visuais e gerenciamento completo
- ✅ **DevTools Integrado** - Ferramentas de desenvolvedor (F12) para debugging
- ✅ **Interface Moderna** - UI escura e elegante com animações suaves
- 🔒 **Segurança Aprimorada** - Compartimentalização de preload (v2.0.1)

### 🎯 Recursos Avançados

#### v2.0.2 - Barra de Favoritos
- 🔖 **Visualização de Favoritos** - Barra superior mostra todos os bookmarks salvos
- 🎨 **Design Moderno** - Favicons, hover effects e animações suaves
- ⚡ **Atualização em Tempo Real** - Adicione/remova favoritos e veja na hora
- 📜 **Scroll Horizontal** - Suporte para muitos favoritos com scrollbar customizada

#### v2.0.1 - Páginas Dedicadas & Segurança
- 📜 **Página de Histórico** (`hera://history`)
  - Busca em tempo real
  - Agrupamento por data (Hoje, Ontem, etc.)
  - Remoção individual de itens
  - Interface moderna e intuitiva

- 📥 **Página de Downloads** (`hera://downloads`)
  - Visualização de progresso em tempo real
  - Abrir arquivo ou mostrar na pasta
  - Ícones por tipo de arquivo
  - Persistência entre sessões

- 🔔 **Notificações de Download**
  - Badge contador no botão
  - Toast notifications
  - Animação de pulso durante download
  - Auto-fechamento inteligente

- 🔒 **Segurança Crítica**
  - Preload compartimentalizado
  - Sites externos não acessam APIs privilegiadas
  - Princípio do menor privilégio

#### v2.0.0 - Base Sólida
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
- **TypeScript** 4.5.4 - Linguagem de programação (100% type coverage)
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
| `Ctrl+H` | Abrir histórico |
| `Ctrl+J` | Abrir downloads |
| `F12` | Abrir/fechar DevTools |
| `Esc` | Fechar modais/painéis |

## 🌐 URLs Internas

O Hera Browser possui páginas internas acessíveis via protocolo `hera://`:

| URL | Descrição |
|-----|-----------|
| `hera://new-tab` | Página de nova aba |
| `hera://settings` | Configurações do navegador |
| `hera://history` | Histórico de navegação (v2.0.1) |
| `hera://downloads` | Gerenciador de downloads (v2.0.1) |

## 🗂️ Estrutura do Projeto

```
hera-browser/
├── src/
│   ├── index.ts              # Processo principal (Electron)
│   ├── renderer.ts           # Renderer process (UI)
│   ├── preload-ui.ts         # Preload privilegiado (páginas internas)
│   ├── preload-web.ts        # Preload limitado (sites externos)
│   ├── database.ts           # Operações SQLite
│   ├── index.html            # Interface principal
│   ├── index.css             # Estilos
│   ├── settings.html/js/css  # Página de configurações
│   ├── new-tab.html/css      # Página de nova aba
│   ├── history.html/js/css   # Página de histórico (v2.0.1)
│   ├── downloads.html/js/css # Página de downloads (v2.0.1)
│   ├── menu.html/js/css      # Menu de contexto
│   └── types/                # Definições TypeScript
│       ├── api.types.ts
│       ├── database.types.ts
│       ├── ui.types.ts
│       ├── ipc.types.ts
│       ├── guards.ts
│       └── __tests__/        # Testes de tipos
├── .webpack/                 # Build output
├── out/                      # Builds de distribuição
└── package.json
```

## 🔒 Segurança

O Hera Browser implementa várias camadas de segurança:

- **Compartimentalização de Preload** - Sites externos não têm acesso a APIs privilegiadas
- **Context Isolation** - Isolamento completo entre processos
- **Type Safety** - 100% TypeScript com validação em tempo de compilação
- **Validação de Dados** - Type guards para dados do banco de dados
- **Princípio do Menor Privilégio** - Cada componente tem apenas as permissões necessárias

Veja [SECURITY_PRELOAD.md](SECURITY_PRELOAD.md) para mais detalhes.

## 📝 Changelog

### v2.0.2 (2025-11-03)
- ✨ Barra de favoritos funcional com visualização
- 🎨 Design moderno com favicons e animações
- ⚡ Atualização em tempo real

### v2.0.1 (2025-11-03)
- 🔒 **CORREÇÃO CRÍTICA DE SEGURANÇA** - Compartimentalização de preload
- 📜 Página dedicada de histórico (`hera://history`)
- 📥 Página dedicada de downloads (`hera://downloads`)
- 🔔 Sistema de notificações de download
- 📊 100% TypeScript type coverage

### v2.0.0 (2025)
- 🔖 Sistema completo de favoritos com pastas
- 🔍 Omnibox inteligente com sugestões
- ⌨️ Atalhos de teclado avançados
- 📱 Persistência de abas
- 🎨 Interface moderna

Veja [CHANGELOG.md](CHANGELOG.md) para histórico completo.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

### Diretrizes de Desenvolvimento

- Mantenha 100% de cobertura de tipos TypeScript
- Siga os padrões de código existentes
- Adicione testes de tipos quando aplicável
- Documente novas funcionalidades
- Teste em diferentes cenários antes de submeter

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Knowkill**

- GitHub: [@LXrdKnowkill](https://github.com/LXrdKnowkill)
- Email: Todosjogosposssiveis@gmail.com

## 🙏 Agradecimentos

- Equipe do Electron pelo framework incrível
- Comunidade open source
- Todos os contribuidores

## 📚 Documentação Adicional

- [SECURITY_PRELOAD.md](SECURITY_PRELOAD.md) - Documentação de segurança
- [TYPE_TESTS_EXPLAINED.md](TYPE_TESTS_EXPLAINED.md) - Explicação dos testes de tipos
- [DOWNLOAD_NOTIFICATIONS.md](DOWNLOAD_NOTIFICATIONS.md) - Sistema de notificações
- [PAGES_CREATION_SUMMARY.md](PAGES_CREATION_SUMMARY.md) - Páginas dedicadas

---

⭐ Se você gostou do projeto, considere dar uma estrela no repositório!

**Parte do ecossistema HikariSystem** 🌟
