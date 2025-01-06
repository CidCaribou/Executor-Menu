settingsButton.addEventListener('click', () => {
    sidebar.style.display = 'none';
    content.innerHTML = '';

    content.style.display = 'flex';
    content.style.justifyContent = 'center';
    content.style.alignItems = 'center';
    content.style.height = '100vh';
    content.style.backgroundColor = '#f5f5f5'; 

    const settingsContainer = document.createElement('div');
    settingsContainer.style.display = 'grid';
    settingsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    settingsContainer.style.gap = '20px';
    settingsContainer.style.backgroundColor = 'white';
    settingsContainer.style.padding = '30px';
    settingsContainer.style.borderRadius = '10px';
    settingsContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    settingsContainer.style.maxWidth = '318px';
    settingsContainer.style.width = '100%';
    settingsContainer.style.textAlign = 'center';
    settingsContainer.style.position = 'relative';

    settingsContainer.style.position = 'absolute';
    settingsContainer.style.top = '65px';
    settingsContainer.style.left = '10px';

    const categories = [
        { name: 'Accounts', icon: '👤' },
        { name: 'Privacy', icon: '🔒' },
        { name: 'Update Checker', icon: '🔄️' },
        { name: 'Back', icon: '⬅️' }
    ];

    categories.forEach(category => {

        const categoryContainer = document.createElement('div');
        categoryContainer.style.display = 'flex';
        categoryContainer.style.flexDirection = 'column';
        categoryContainer.style.alignItems = 'center';
        categoryContainer.style.cursor = 'pointer';
        categoryContainer.style.transition = 'transform 0.3s, background-color 0.3s';
        categoryContainer.style.padding = '10px';
        categoryContainer.style.borderRadius = '10px';

        categoryContainer.addEventListener('mouseover', () => {
            categoryContainer.style.backgroundColor = '#f0f0f0';
            categoryContainer.style.transform = 'translateY(-5px)';
        });
        categoryContainer.addEventListener('mouseout', () => {
            categoryContainer.style.backgroundColor = 'transparent';
            categoryContainer.style.transform = 'none';
        });

        categoryContainer.addEventListener('click', () => {
            if (category.name === 'Back') {

                sidebar.style.display = 'block'; 
                content.innerHTML = ''; 
                return; 
            }
            openSettings(category.name);
        });

        const icon = document.createElement('div');
        icon.style.fontSize = '36px';
        icon.style.marginBottom = '10px';
        icon.innerText = category.icon;
        categoryContainer.appendChild(icon);

        const text = document.createElement('div');
        text.style.fontSize = '14px';
        text.style.fontWeight = 'bold';
        text.innerText = category.name;
        categoryContainer.appendChild(text);

        settingsContainer.appendChild(categoryContainer);
    });

    content.appendChild(settingsContainer);

    function openSettings(category) {
        alert(`Opening settings for ${category}`);

    }
});
