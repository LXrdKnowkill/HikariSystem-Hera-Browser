// Omnibox suggestions view
const suggestionsList = document.getElementById('omnibox-suggestions-list');
let selectedIndex = -1;

// Render suggestions
function renderSuggestions(suggestions) {
    suggestionsList.innerHTML = '';
    selectedIndex = -1;

    if (!suggestions || suggestions.length === 0) {
        return;
    }

    suggestions.forEach((suggestion, index) => {
        const item = document.createElement('div');
        item.className = 'omnibox-suggestion-item';
        item.dataset.index = index;
        item.dataset.url = suggestion.url;

        const iconType = suggestion.type === 'bookmark' ? 'star' : suggestion.type === 'history' ? 'clock' : 'search';
        const iconSvg = suggestion.favicon 
            ? `<img src="${suggestion.favicon}" class="omnibox-suggestion-favicon" alt="" onerror="this.style.display='none'">`
            : `<svg class="omnibox-suggestion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${iconType === 'star' ? '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>' : ''}
                ${iconType === 'clock' ? '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>' : ''}
                ${iconType === 'search' ? '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>' : ''}
              </svg>`;

        const typeLabel = suggestion.type === 'bookmark' ? 'Favorito' : suggestion.type === 'history' ? 'Histórico' : 'Buscar';

        item.innerHTML = `
            ${iconSvg}
            <div class="omnibox-suggestion-content">
                <div class="omnibox-suggestion-title">${suggestion.title}</div>
                <div class="omnibox-suggestion-url">${suggestion.url}</div>
            </div>
            <span class="omnibox-suggestion-type">${typeLabel}</span>
        `;

        item.addEventListener('click', () => {
            window.heraAPI.send('omnibox:select', suggestion.url);
        });

        suggestionsList.appendChild(item);
    });
}

// Listen for suggestions from main window
if (window.heraAPI) {
    window.heraAPI.on('omnibox:update-suggestions', (suggestions) => {
        renderSuggestions(suggestions);
    });

    window.heraAPI.on('omnibox:select-index', (index) => {
        const items = suggestionsList.querySelectorAll('.omnibox-suggestion-item');
        items.forEach((item, idx) => {
            item.classList.toggle('selected', idx === index);
        });
        selectedIndex = index;
        if (index >= 0 && items[index]) {
            items[index].scrollIntoView({ block: 'nearest' });
        }
    });
}
