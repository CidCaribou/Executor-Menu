(function() {
    if (document.getElementById('executor-menu')) return;

    const ExecutorVersion = 'V2.0.0';

    const swalScript = document.createElement('script');
    swalScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
    document.head.appendChild(swalScript);

    const menu = document.createElement('div');
    menu.id = 'executor-menu';
    menu.style.cssText = `
      position: fixed;
      top: 100px;
      left: 100px;
      width: 400px;
      height: 350px;
      background: #f5f5f7;
      color: #333;
      border: 1px solid #ccc;
      border-radius: 12px;
      z-index: 99999;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      font-family: Arial, sans-serif;
      user-select: none;
      overflow: hidden;
      transition: opacity 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
      opacity: 0; `;

    setTimeout(() => {
        menu.style.opacity = '1';
    }, 10);

    document.body.appendChild(menu);

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
    title.innerText = `Executor ${ExecutorVersion}`;
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

    const sidebarButtons = ['All', 'Games', 'Tools', 'Game Cheats', 'Fun', 'Settings'];
    const buttonGroups = {
        'All': [{
                text: 'Dark&Light Mode',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/LightDarkMode/optomized1.js'
            },
            {
                text: 'Clear Session Storage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/clear-sessionStorage.js'
            },
            {
                text: 'Kahoot Name Bypass',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-name-bypass.js'
            },
            {
                text: 'X-Ray',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/x-ray.js'
            },
            {
                text: 'Draw On website',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/drawonwebsite.js'
            },
            {
                text: 'Wordle Unlimited Hack',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-unlimited-hack.js'
            },
            {
                text: 'DOMI',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/DOMI.js'
            },
            {
                text: 'wasm-patcher',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/wasm-patcher.js'
            },
            {
                text: 'Clear Cache',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/clear-cache.js'
            },
            {
                text: 'Clear IndexDB',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Clear-IndexDB.js'
            },
            {
                text: 'Clear Session Storage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/clear-sessionStorage.js'
            },
            {
                text: 'Inspect (Toggle)',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/inspect.js'
            },
            {
                text: 'Auto Scroll',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Auto-Scroll.js'
            },
            {
                text: 'Old School',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Old-School.js'
            },
            {
                text: 'Browser',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Browser-In-Browser.js'
            },
            {
                text: 'Wordle+',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Wordle+/mainfile.js'
            },
            {
                text: 'Slope',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Slope/menu.js'
            },
            {
                text: 'DragonX V2 International',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/MineCraft-DragonX-V2/mainfile.js'
            },
            {
                text: 'Flappy Bird',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Flappy%20Bird/menu.js'
            },
            {
                text: 'Earthquake',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/earthquake.js'
            },
            {
                text: 'Star Wars Intro',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Star-Wars-Intro.js'
            },
            {
                text: 'Google Translate Page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/translate-page.js'
            },
            {
                text: 'Time Shooter 2',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/TimeShooter-2/mainfile.js'
            },
            {
                text: 'Color Picker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/color-picker.js'
            },
            {
                text: 'Wordle Hack',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-hacks.js'
            },
            {
                text: 'Clear Local Storage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Local-Storage-Clear.js'
            },
            {
                text: 'Prodigy Cheats',
                url: 'https://pxi-fusion-menu.pages.dev/beta/main.js'
            },
            {
                text: 'Matrix',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Matrix.js'
            },
            {
                text: 'Clear Cookies',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/clear-cookies.js'
            },
            {
                text: 'Custom Cursors',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Custom%20Cursors/script.js'
            },
            {
                text: 'Glitch Images',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/glitch_image.js'
            },
            {
                text: 'WebGL-Fluid-Simulation',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/Games%20/WebGL-Fluid-Simulation/mainfile.js'
            },
            {
                text: 'Auto Clicker V2',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/autoclicker.js'
            },
            {
                text: '2048',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/2048/mainfile.js'
            },
            {
                text: 'MineCraft (Offline)',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/MineCraft_(Offline)/MineCraft_(Offline).js'
            },
            {
                text: 'Snow',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/snow.js'
            },
            {
                text: 'Gimkit Hacks',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Gimkit%20Hacks/Gimkit.js'
            },
            {
                text: 'Cloaker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Tab_Cloaker.js'
            },
            {
                text: 'Kahoot Hacks',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Kahoot%20Hacks/KahootHacks.js'
            },
            {
                text: 'History Flooder',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/HistoryFlooder.js'
            },
            {
                text: 'Ego-Client',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/ego-client.js'
            },
            {
                text: 'Kahoot Botter',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-botter.js'
            },
            {
                text: 'Dev Console',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/DevConsole.js'
            },
            {
                text: 'Blooket Bot',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/blooketbot.js'
            },
            {
                text: 'Car-Axle-Client',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/car-axle-client.js'
            },
            {
                text: 'MineCraft Overlay',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/MineCraftOverlay.js'
            },
            {
                text: 'Fps Viewer',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/fps-viewer(Needs-Update).js'
            },
            {
                text: 'Dictionary',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/dictionary.js'
            },
            {
                text: 'Ad Blocker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/adblocker.js'
            },
            {
                text: 'Blooket Cheats',
                url: 'https://cdn.jsdelivr.net/gh/randomstuff69/blooketcheatsplus@main/GUI/Gui.js'
            },
            {
                text: 'Cookie Clicker Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Cookie%20Clicker%20Hacks/mainmenu.js'
            },
            {
                text: 'Chrome Dino Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Chrome_Dino_Hacks.js'
            },
            {
                text: '3D Webpage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js'
            },
            {
                text: 'Snake X More Menu Mod',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js'
            },
            {
                text: 'Duolingo Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Duolingo%20Mod%20Menu/menu.js'
            }
        ],
        'Games': [{
                text: 'Snake X More Menu Mod',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js'
            },
            {
                text: '2048',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/2048/mainfile.js'
            },
            {
                text: 'Wordle+',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Wordle+/mainfile.js'
            },
            {
                text: 'Slope',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Slope/menu.js'
            },
            {
                text: 'DragonX V2 International',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/MineCraft-DragonX-V2/mainfile.js'
            },
            {
                text: 'Flappy Bird',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Flappy%20Bird/menu.js'
            },
            {
                text: 'WebGL-Fluid-Simulation',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/Games%20/WebGL-Fluid-Simulation/mainfile.js'
            },
            {
                text: 'Time Shooter 2',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/TimeShooter-2/mainfile.js'
            },
            {
                text: 'MineCraft (Offline)',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/MineCraft_(Offline)/MineCraft_(Offline).js'
            }
        ],
        'Tools': [{
                text: 'Cloaker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Tab_Cloaker.js'
            },
            {
                text: 'Clear Cache',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/clear-cache.js'
            },
            {
                text: 'X-Ray',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/x-ray.js'
            },
            {
                text: 'wasm-patcher',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/wasm-patcher.js'
            },
            {
                text: 'Clear IndexDB',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Clear-IndexDB.js'
            },
            {
                text: 'Clear Session Storage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/clear-sessionStorage.js'
            },
            {
                text: 'Browser',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Browser-In-Browser.js'
            },
            {
                text: 'Google Translate Page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/translate-page.js'
            },
            {
                text: 'Auto Scroll',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Auto-Scroll.js'
            },
            {
                text: 'Color Picker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/color-picker.js'
            },
            {
                text: 'Clear Local Storage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Local-Storage-Clear.js'
            },
            {
                text: 'Clear Cookies',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/clear-cookies.js'
            },
            {
                text: 'Fps Viewer',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/fps-viewer(Needs-Update).js'
            },
            {
                text: 'Custom Cursors',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Custom%20Cursors/script.js'
            },
            {
                text: 'Inspect (Toggle)',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/inspect.js'
            },
            {
                text: 'Ego-Client',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/ego-client.js'
            },
            {
                text: 'Car-Axle-Client',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/car-axle-client.js'
            },
            {
                text: 'History Flooder',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/HistoryFlooder.js'
            },
            {
                text: 'Dictionary',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/dictionary.js'
            },
            {
                text: 'Ad Blocker',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/adblocker.js'
            },
            {
                text: 'Dev Console',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/DevConsole.js'
            },
            {
                text: 'Dark&Light Mode',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/LightDarkMode/optomized1.js'
            },
            {
                text: 'Auto Clicker V2',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/autoclicker.js'
            }
        ],
        'Game Cheats': [{
                text: 'Blooket Cheats',
                url: 'https://cdn.jsdelivr.net/gh/randomstuff69/blooketcheatsplus@main/GUI/Gui.js'
            },
            {
                text: 'Wordle Unlimited Hack',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-unlimited-hack.js'
            },
            {
                text: 'Prodigy Cheats',
                url: 'https://pxi-fusion-menu.pages.dev/beta/main.js'
            },
            {
                text: 'Kahoot Name Bypass',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-name-bypass.js'
            },
            {
                text: 'wasm-patcher',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/wasm-patcher.js'
            },
            {
                text: 'Wordle Hack',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-hacks.js'
            },
            {
                text: 'Kahoot Botter',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-botter.js'
            },
            {
                text: 'Blooket Bot',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/blooketbot.js'
            },
            {
                text: 'Cookie Clicker Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Cookie%20Clicker%20Hacks/mainmenu.js'
            },
            {
                text: 'Kahoot Hacks',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Kahoot%20Hacks/KahootHacks.js'
            },
            {
                text: 'Gimkit Hacks',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Gimkit%20Hacks/Gimkit.js'
            },
            {
                text: 'Chrome Dino Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Chrome_Dino_Hacks.js'
            },
            {
                text: 'Duolingo Cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Duolingo%20Mod%20Menu/menu.js'
            },
            {
                text: 'Snake X More Menu Mod',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js'
            }
        ],
        'Fun': [{
                text: 'Draw On website',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/drawonwebsite.js'
            },
            {
                text: 'Matrix',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Matrix.js'
            },
            {
                text: 'DOMI',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/DOMI.js'
            },
            {
                text: 'MineCraft Overlay',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/MineCraftOverlay.js'
            },
            {
                text: 'Star Wars Intro',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Star-Wars-Intro.js'
            },
            {
                text: 'Old School',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Old-School.js'
            },
            {
                text: 'Earthquake',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/earthquake.js'
            },
            {
                text: 'Glitch Images',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/glitch_image.js'
            },
            {
                text: 'Snow',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/snow.js'
            },
            {
                text: '3D Webpage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js'
            }
        ],
        'Settings': []
    };

    const content = document.createElement('div');
    content.style.marginLeft = '140px';
    content.style.padding = '20px';
    content.style.height = 'calc(100% - 60px)';
    content.style.overflowY = 'auto';
    content.style.display = 'block';


    function displayButtons(groupName) {
        content.innerHTML = '';
        const buttonsToDisplay = buttonGroups[groupName];
        buttonsToDisplay.forEach((item) => {
            const button = createButtonElement(item.text, item.url);
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
        button.style.transition = 'transform 0.2s ease-in-out';

        if (groupName === 'Settings') {
            button.innerHTML = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXtJREFUSEu1letRxDAMhPc6gUqASoBKgEqASoBKoBPgy3gzi+JzzMDpjyeJrX1IVg46cRxOnF+zAJeS7iSxEq+SHto65DgL8C7prGQC5GrPgRkAEgNAeP9nez6X9DEC6QHYDhgS920lEQmJVPQUAG/fSvN5U4MbSY8dRtXzWpM8cpsgVYGlw8Kej4oJEIQggELUslKbxboEMPu0wswAo4vYw3crqv7bulVFD8C+P7dkWeS04gfTpgQCBAqWGlaLzJKk7hAs4CAHYEbwDnvcqkkCm7B1iV4XWaa/+Xll1erD+7ST+m3sHQFYQQ8A9i9B0gp2AbDIfW8AEtkOpJPEFtFt2DZlUW7yQUj+psgQYf+wi3ozhkPXrdiAZsGzs4ZtmiMAmzw5Zy6a74YvmkdKt01dg2Rmxr5YKHId6mQZjgo20/MXccq+Zlt7pPhSsrJvo3ZmXNeWJNmfxnWVnLWpo2L1unfo2E3u7fXU9IT991/mMYK772dqsJtktOEL4YBvGcKicUQAAAAASUVORK5CYII=" alt="Settings Icon" style="width: 20px; margin-right: 8px; vertical-align: middle;"> Settings`;
            setTimeout(() => {
                const icon = button.querySelector('img');
                if (icon) icon.style.transition = 'transform 0.2s ease';
            }, 0);
        }

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            if (groupName === 'Settings') {
                const icon = button.querySelector('img');
                if (icon) icon.style.transform = 'rotate(90deg) scale(1.1)';
            }
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            if (groupName === 'Settings') {
                const icon = button.querySelector('img');
                if (icon) icon.style.transform = 'rotate(0deg) scale(1)';
            }
        });

        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.9)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });

        button.addEventListener('click', () => {
            if (groupName === 'Settings') {
                Swal.fire({
                    title: "Settings Menu Not Finished",
                    text: "I have not finished making the settings menu join the discord server to find out when I release it.",
                    icon: "error"
                });
            } else {
                displayButtons(groupName);
            }
        });

        return button;
    }

    function executeScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;

            script.onload = () => {
                script.remove();
                resolve();
            };

            script.onerror = () => {
                script.remove();
                const errorMsg = event.message || event.type || 'Unknown script loading error';
                reject(new Error(`Failed to load script: ${errorMsg}`));
            };

            document.head.appendChild(script);
        });
    }

    function createButtonElement(btnText, url) {
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
        button.style.transition = 'transform 0.2s ease-in-out';

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.9)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });

        button.addEventListener('click', () => {
            showToast('Loading...', 'warning');

            executeScript(url)
                .then(() => {
                    showToast('Script loaded successfully', 'success');
                })
                .catch(() => {
                    showToast('Failed to load script. Check console for details.', 'error');
                    console.log(`Failed to load script: ${error.message}`)
                });
        })

        const showToast = (message, icon) => {
            const swalInstance = Swal.fire({
                toast: true,
                position: 'bottom',
                icon: icon,
                title: message,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                willClose: () => Swal.stopTimer()
            });
        };

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
        const filteredButtons = allButtons.filter(({
                text
            }) =>
            text.toLowerCase().includes(query)
        );
        filteredButtons.forEach((item) => {
            const button = createButtonElement(item.text, item.url);
            content.appendChild(button);
        });
    });

    let isDragging = false;
    let offsetX = 0,
        offsetY = 0;

    header.addEventListener('mousedown', (e) => {
        if (
            e.target === searchInput ||
            e.target === maximizeButton ||
            e.target === minimizeButton ||
            e.target === closeButton
        ) {
            return;
        }
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

    header.addEventListener('touchstart', (e) => {
        if (
            e.target === searchInput ||
            e.target === maximizeButton ||
            e.target === minimizeButton ||
            e.target === closeButton
        ) {
            return;
        }
        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - menu.offsetLeft;
        offsetY = touch.clientY - menu.offsetTop;
        e.preventDefault();
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            menu.style.left = touch.clientX - offsetX + 'px';
            menu.style.top = touch.clientY - offsetY + 'px';
            e.preventDefault();
        }
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });

    document.addEventListener('touchcancel', () => {
        isDragging = false;
    });

    closeButton.addEventListener('click', () => {
        menu.style.transition = 'opacity 0.2s ease-out';
        menu.style.opacity = '0';

        menu.addEventListener('transitionend', () => {
            menu.remove();
        }, {
            once: true
        });
    });

    maximizeButton.addEventListener('click', () => {
        // Started Develoupment For Fullscreen
        //if (document.fullscreenElement) {
        //document.exitFullscreen();
        //sidebar.style.width = '140px';
        //} else {
        //menu.requestFullscreen();
        //sidebar.style.width = '540px';
        //}

        Swal.fire({
            title: "Fullscreen Not Finished",
            text: "Started Develoupment For Fullscreen",
            icon: "error"
        });
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
