// ==UserScript==
// @name         Executor Menu for Any Site
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A menu with various functionality for any site
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function() {
    if (document.getElementById('executor-menu')) return;

    const menu = document.createElement('div');
    menu.id = 'executor-menu';
    menu.style.position = 'fixed';
    menu.style.top = '100px';
    menu.style.left = '100px';
    menu.style.width = '400px';
    menu.style.height = '350px';
    menu.style.background = '#f5f5f7';
    menu.style.color = '#333';
    menu.style.border = '1px solid #ccc';
    menu.style.borderRadius = '12px';
    menu.style.zIndex = '10000';
    menu.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    menu.style.fontFamily = 'Arial, sans-serif';
    menu.style.userSelect = 'none';
    menu.style.overflow = 'hidden';
    menu.style.transition = 'height 0.3s ease, border-radius 0.3s ease';

    const header = document.createElement('div');
    header.style.width = '100%';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.padding = '8px 10px';
    header.style.background = '#e5e5e7';
    header.style.borderBottom = '1px solid #ccc';
    header.style.borderRadius = '12px 12px 0 0';
    header.style.cursor = 'grab';
    header.style.boxSizing = 'border-box';

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '8px';
    header.appendChild(buttonContainer);

    const createButton = (color) => {
        const btn = document.createElement('div');
        btn.style.width = '12px';
        btn.style.height = '12px';
        btn.style.borderRadius = '50%';
        btn.style.background = color;
        btn.style.border = '1px solid rgba(0,0,0,0.1)';
        btn.style.cursor = 'pointer';
        return btn;
    };

    const closeButton = createButton('#ff5f57');
    const minimizeButton = createButton('#ffbd2e');
    const maximizeButton = createButton('#28c840');

    buttonContainer.appendChild(closeButton);
    buttonContainer.appendChild(minimizeButton);
    buttonContainer.appendChild(maximizeButton);

    const title = document.createElement('div');
    title.innerText = 'Executor v1';
    title.style.marginLeft = 'auto';
    title.style.marginRight = '';
    title.style.fontSize = '14px';
    title.style.color = '#333';
    header.appendChild(title);

    const searchContainer = document.createElement('div');
    searchContainer.style.marginLeft = 'auto';
    searchContainer.style.display = 'flex';
    searchContainer.style.alignItems = 'center';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.style.width = '120px';
    searchInput.style.padding = '5px';
    searchInput.style.border = '1px solid #ccc';
    searchInput.style.borderRadius = '8px';
    searchInput.style.fontSize = '12px';
    searchInput.style.color = '#000';
    searchInput.style.backgroundColor = '#fff';

    searchContainer.appendChild(searchInput);
    header.appendChild(searchContainer);

    menu.appendChild(header);

    const sidebar = document.createElement('div');
    sidebar.style.width = '140px';
    sidebar.style.height = 'calc(100% - 30px)';
    sidebar.style.background = '#d3d3d3';
    sidebar.style.borderRight = '1px solid #ccc';
    sidebar.style.float = 'left';
    sidebar.style.boxSizing = 'border-box';
    menu.appendChild(sidebar);

    const sidebarButtons = ['All', 'Games', 'Useful', 'Game Cheats', 'Fun', 'Settings'];
    const buttonGroups = {
        'All': [
            { text: 'Dark&Light Mode', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/darklightmode.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            },
            { text: 'Draw On website', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/drawonwebsite.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            },
            { text: 'Auto Clicker', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/autoclicker.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            },
            { text: 'Cloaker', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Tab_Cloaker.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
           },
            { text: 'Cookie Clicker Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Cookie%20Clicker%20Hacks/mainmenu.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
  },
          { text: 'Chrome Dino Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Chrome_Dino_Hacks.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
 },
          { text: '3D Webpage', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
  },
            { text: 'Snake X More Menu Mod', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            },
          { text: 'Duolingo Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Duolingo%20Mod%20Menu/menu.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            }
        ],
        'Games': [
            { text: 'Snake X More Menu Mod', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            }
        ],
        'Useful': [
            { text: 'Cloaker', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Tab_Cloaker.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
 },
            { text: 'Dark&Light Mode', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/darklightmode.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            },
          { text: 'Auto Clicker', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/autoclicker.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            }
        ],
        'Game Cheats': [
            { text: 'Blooket Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/BlooketGUI.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
},
            { text: 'Prodigy Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Prodigy-menu@main/Menu.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
 },
          { text: 'Cookie Clicker Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Cookie%20Clicker%20Hacks/mainmenu.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
 },
          { text: 'Chrome Dino Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Chrome_Dino_Hacks.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
 },
          { text: 'Duolingo Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Duolingo%20Mod%20Menu/menu.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
 },
          { text: 'Snake X More Menu Mod', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
 }
        ],
        'Fun': [
            { text: 'Draw On website', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/drawonwebsite.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            },
            { text: '3D Webpage', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            }
        ],
      'Settings': [
            { text: 'Open Settings', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Settings.js')
    .then(response => response.text())
    .then(scriptText => eval(scriptText))
            }
        ],

    };

    const content = document.createElement('div');
    content.style.marginLeft = '140px';
    content.style.padding = '20px';
    content.style.height = 'calc(100% - 40px)';
    content.style.overflowY = 'auto';
    content.style.display = 'block';

    function displayButtons(groupName) {
        content.innerHTML = '';
        const buttonsToDisplay = buttonGroups[groupName];
        buttonsToDisplay.forEach(({ text, action }) => {
            const button = createButtonElement(text, action);
            content.appendChild(button);
        });
    }

    function createSidebarButton(groupName) {
        const button = document.createElement('button');
        button.innerText = groupName;
        button.style.display = 'block';
        button.style.width = '120px';
        button.style.margin = '10px auto';
        button.style.padding = '10px';
        button.style.border = '1px solid #ccc';
        button.style.borderRadius = '12px';
        button.style.background = '#ffffff';
        button.style.color = '#000';
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => {
            displayButtons(groupName);
        });

        return button;
    }

    function createButtonElement(btnText, action) {
        const button = document.createElement('button');
        button.innerText = btnText;
        button.style.display = 'block';
        button.style.width = '120px';
        button.style.margin = '10px auto';
        button.style.padding = '10px';
        button.style.border = '1px solid #ccc';
        button.style.borderRadius = '12px';
        button.style.background = '#ffffff';
        button.style.color = '#000';
        button.style.cursor = 'pointer';

        button.addEventListener('click', action);

        return button;
    }

    sidebarButtons.forEach((btnText) => {
        const button = createSidebarButton(btnText);
        sidebar.appendChild(button);
    });

    menu.appendChild(content);
    document.body.appendChild(menu);

    displayButtons('All');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        content.innerHTML = '';
        const allButtons = buttonGroups['All'];
        const filteredButtons = allButtons.filter(({ text }) =>
            text.toLowerCase().includes(query)
        );
        filteredButtons.forEach(({ text, action }) => {
            const button = createButtonElement(text, action);
            content.appendChild(button);
        });
    });

    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - menu.offsetLeft;
        offsetY = e.clientY - menu.offsetTop;
        header.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            menu.style.left = e.clientX - offsetX + 'px';
            menu.style.top = e.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        header.style.cursor = 'grab';
    });

    closeButton.addEventListener('click', () => {
        menu.remove();
    });

    let isMinimized = false;
    minimizeButton.addEventListener('click', () => {
        if (isMinimized) {
            menu.style.height = '350px';
            content.style.display = 'block';
        } else {
            menu.style.height = '42.3px';
            content.style.display = 'none';
        }
        isMinimized = !isMinimized;
    });
})();
