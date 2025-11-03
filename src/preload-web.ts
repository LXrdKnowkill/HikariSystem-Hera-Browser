/**
 * PRELOAD NÃO-CONFIÁVEL (WEB)
 * 
 * Este preload é usado para sites externos (youtube.com, google.com, etc.)
 * 
 * ⚠️ SEGURANÇA: Este preload NÃO expõe acesso ao banco de dados ou APIs sensíveis.
 */

import { contextBridge, ipcRenderer } from 'electron';

// ========================================
// MASCARAMENTO - DEVE SER A PRIMEIRA COISA
// ========================================

// Remove Electron ANTES de qualquer coisa
try {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof (process as any) !== 'undefined' && (process as any).versions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (process as any).versions.electron;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (process as any).type;
  }
} catch (e) {
  // Ignorar
}

// Adiciona window.chrome básico
if (!(window as any).chrome) {
  (window as any).chrome = {
    runtime: {}
  };
}

/**
 * API limitada e segura para sites externos
 */
const webAPI = {
  requestContextMenu: (x: number, y: number) => {
    ipcRenderer.send('web:context-menu', { x, y });
  },

  notifyPageEvent: (eventType: string) => {
    const allowedEvents = ['page-ready', 'page-error'];
    if (allowedEvents.includes(eventType)) {
      ipcRenderer.send('web:page-event', eventType);
    }
  },
};

// Expõe apenas a API limitada
contextBridge.exposeInMainWorld('webAPI', webAPI);

console.log('[Preload-Web] ✅ Carregado');
