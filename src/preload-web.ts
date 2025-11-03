/**
 * PRELOAD NÃO-CONFIÁVEL (WEB)
 * 
 * Este preload é usado para sites externos (youtube.com, google.com, etc.)
 * 
 * ⚠️ SEGURANÇA: Este preload NÃO expõe acesso ao banco de dados ou APIs sensíveis.
 * Sites externos NÃO podem:
 * - Acessar histórico
 * - Limpar dados
 * - Acessar favoritos
 * - Modificar configurações
 * - Acessar downloads
 * 
 * Sites externos PODEM apenas:
 * - Solicitar menu de contexto (futuro)
 * - Comunicação básica e segura com o navegador
 */

import { contextBridge, ipcRenderer } from 'electron';

/**
 * API limitada e segura para sites externos
 */
const webAPI = {
  /**
   * Solicita menu de contexto (implementação futura)
   * Isso é seguro porque apenas mostra um menu, não expõe dados
   */
  requestContextMenu: (x: number, y: number) => {
    ipcRenderer.send('web:context-menu', { x, y });
  },

  /**
   * Notifica o navegador sobre eventos da página (seguro)
   */
  notifyPageEvent: (eventType: string) => {
    // Apenas eventos permitidos
    const allowedEvents = ['page-ready', 'page-error'];
    if (allowedEvents.includes(eventType)) {
      ipcRenderer.send('web:page-event', eventType);
    }
  },
};

// Expõe apenas a API limitada
contextBridge.exposeInMainWorld('webAPI', webAPI);

// Log para debug (remover em produção)
console.log('[Preload-Web] API limitada carregada - Site externo protegido');
