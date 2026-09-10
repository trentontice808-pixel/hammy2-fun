// Update current time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const displayHours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    
    document.getElementById('current-time').textContent = 
        `${String(displayHours).padStart(2, '0')}:${minutes} ${ampm}`;
}

updateTime();
setInterval(updateTime, 60000);

// Game data with logos from open-source projects
const games = [
    {
        name: '0 A.D.',
        genre: 'Real-Time Strategy',
        url: 'https://play0ad.com/',
        github: 'https://github.com/0ad/0ad',
        logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23FF9500%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 font-size=%2748%22 fill=%22%23FFF%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-weight=%22bold%22%3E0AD%3C/text%3E%3C/svg%3E'
    },
    {
        name: 'Battle for Wesnoth',
        genre: 'Turn-Based Strategy',
        url: 'https://www.wesnoth.org/',
        github: 'https://github.com/wesnoth/wesnoth',
        logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23FF6B9D%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 font-size=%2740%22 fill=%22%23FFF%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-weight=%22bold%22%3EBFW%3C/text%3E%3C/svg%3E'
    },
    {
        name: 'SuperTuxKart',
        genre: 'Kart Racing',
        url: 'https://supertuxkart.net/',
        github: 'https://github.com/supertuxkart/stk-code',
        logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23FF8C00%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 font-size=%2732%22 fill=%22%23FFF%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-weight=%22bold%22%3ESTK%3C/text%3E%3C/svg%3E'
    },
    {
        name: 'OpenRA',
        genre: 'RTS Strategy',
        url: 'https://www.openra.net/',
        github: 'https://github.com/OpenRA/OpenRA',
        logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23FFB6D9%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 font-size=%2240%22 fill=%22%23000%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-weight=%22bold%22%3ERA%3C/text%3E%3C/svg%3E'
    },
    {
        name: 'Minetest',
        genre: 'Sandbox Voxel',
        url: 'https://www.minetest.net/',
        github: 'https://github.com/minetest/minetest',
        logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%2300AA00%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 font-size=%2242%22 fill=%22%23FFF%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-weight=%22bold%22%3EMT%3C/text%3E%3C/svg%3E'
    },
    {
        name: 'Extreme Tux Racer',
        genre: 'Arcade Racing',
        url: 'https://www.extremetuxracer.com/',
        github: 'https://sourceforge.net/projects/extremetuxracer/',
        logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%235599FF%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 font-size=%2232%22 fill=%22%23FFF%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-weight=%22bold%22%3EETR%3C/text%3E%3C/svg%3E'
    }
];

// Populate games grid
function loadGames() {
    const gamesGrid = document.querySelector('.games-grid');
    gamesGrid.innerHTML = '';
    
    games.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="card-content">
                <img src="${game.logo}" alt="${game.name}">
                <div class="game-info">
                    <h3>${game.name}</h3>
                    <p>${game.genre}</p>
                </div>
            </div>
            <div class="star-icon">⭐</div>
        `;
        
        gameCard.addEventListener('click', () => {
            openGame(game);
        });
        
        gamesGrid.appendChild(gameCard);
    });
}

// Open game handler
function openGame(game) {
    alert(`${game.name}\n\nGenre: ${game.genre}\n\nWebsite: ${game.url}\n\nGitHub: ${game.github}`);
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        const gameName = card.textContent.toLowerCase();
        if (gameName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Color wheel functionality
document.querySelector('.color-wheel').addEventListener('click', () => {
    const colors = ['#FF9500', '#FFB6D9', '#FF6B9D', '#FF8C00', '#FF7F50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const gameCards = document.querySelectorAll('.card-content');
    gameCards.forEach(card => {
        card.style.background = `linear-gradient(135deg, ${randomColor} 0%, ${randomColor}40 100%)`;
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadGames);