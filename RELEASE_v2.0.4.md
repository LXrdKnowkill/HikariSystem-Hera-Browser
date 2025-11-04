# 🎉 Hera Browser v2.0.4 - Polish Update

**Data de Lançamento:** 04/11/2025

## ✨ Destaques

### 🎨 Visual
- **Wallpaper Customizado na New-Tab** - HeraWallpaper.png como fundo elegante
- **Efeito Glassmorphism** - Barra de busca com backdrop-filter blur
- **Logo Otimizada** - Tamanho ajustado (180px) para melhor composição

### 🐛 Correções Importantes
- **Downloads Funcionando** - Sistema completamente corrigido
  - Eventos enviados para todas as abas (BrowserViews)
  - Suporte para ambas as sessões (defaultSession + persist:web-content)
  - Badge de contador funcionando
  - Notificações toast aparecendo
  - Página hera://downloads recebendo atualizações

### 🧹 Qualidade de Código
- **Warnings de TypeScript Removidos** - Arquivos de teste com @ts-nocheck
- **Código Limpo** - Logs de debug removidos
- **Documentação Atualizada** - CHANGELOG.md e README.md

## 📋 Changelog Completo

### Adicionado
- ✨ Suporte a wallpaper customizado na new-tab
- ✨ Efeito glassmorphism na barra de busca
- ✨ Sistema de broadcast de eventos de download

### Corrigido
- 🐛 Downloads não apareciam na página hera://downloads
- 🐛 Downloads de sites externos não eram capturados
- 🐛 Badge de downloads não aparecia
- 🐛 Warnings de TypeScript em arquivos de teste

### Melhorado
- 🎨 Logo da new-tab otimizada
- 🎨 Visual geral mais polido
- 📝 Documentação atualizada

## 🚀 Como Atualizar

```bash
git pull origin main
npm install
npm run rebuild
npm start
```

## 📦 Build de Produção

```bash
npm run package
```

## 🎯 Próximos Passos (v2.0.5)

- [ ] Reimplementar omnibox com BrowserView
- [ ] Melhorar sistema de z-index
- [ ] Adicionar mais opções de customização

## 🙏 Agradecimentos

Obrigado por usar o Hera Browser! 

**Parte do ecossistema HikariSystem** 🌟

---

**Versão:** 2.0.4  
**Data:** 04/11/2025  
**Tipo:** Polish Update + Bug Fixes  
**Status:** ✅ Pronto para produção
