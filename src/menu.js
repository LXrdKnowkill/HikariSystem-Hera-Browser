window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu-new-tab').addEventListener('click', () => {
        window.heraAPI.menuAction('new-tab');
    });
    document.getElementById('menu-history').addEventListener('click', () => {
        window.heraAPI.menuAction('history');
    });
    document.getElementById('menu-downloads').addEventListener('click', () => {
        window.heraAPI.menuAction('downloads');
    });
    document.getElementById('menu-settings').addEventListener('click', () => {
        window.heraAPI.menuAction('settings');
    });
    document.getElementById('menu-exit').addEventListener('click', () => {
        window.heraAPI.menuAction('exit');
    });
});
