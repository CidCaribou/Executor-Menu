(function() {
    if (document.getElementById('executor-menu')) return;
  
  const ExecutorVersion = 'V1.9';
  
  //(function(){   
  //fetch("https://restless-thunder-4dbb.dano36860.workers.dev/?key=mysecretkey123")    
  //.then(response => response.json())})();

console.log("\x1b[31m%s\x1b[0m", "\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u2846\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28E6\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28FC\u28FF\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28E0\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28B8\u28F7\u28C4\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28B0\u28FF\u28FF\u28C7\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28E0\u28FE\u284F\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u28FF\u28FF\u28F7\u28C4\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28FE\u28FF\u28FF\u28FF\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28A0\u28FE\u28FF\u28FF\u2807\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28FF\u28FF\u28FF\u28FF\u28F7\u2840\u2800\u2800\u2800\u2800\u2800\u2838\u283F\u283F\u283F\u283F\u2807\u2800\u2800\u2800\u2800\u2800\u2800\u28F4\u28FF\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28B8\u287F\u281F\u280B\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2819\u283B\u283F\u284F\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28E0\u28E4\u28F6\u28F6\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28F6\u28E6\u28E4\u28C0\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28E0\u28F4\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28E6\u28C4\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28E0\u28F6\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F6\u28C4\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28E0\u28F4\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u281F\u281B\u2809\u2809\u2809\u2809\u2809\u2819\u281B\u283F\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28E6\u28C4\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u28E0\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u281F\u28F9\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u280B\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u283B\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u285F\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28C4\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2880\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u281F\u2809\u2800\u28B0\u28FF\u28FF\u28FF\u28FF\u28FF\u280F\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u2840\u2808\u283B\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28C4\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2880\u28F4\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u281F\u2801\u2800\u2800\u2800\u28FE\u28FF\u28FF\u28FF\u28FF\u284F\u2800\u2800\u2800\u2800\u2800\u28A0\u28F6\u28FF\u28FF\u28FF\u28FF\u28E6\u2840\u2800\u2800\u2800\u2800\u2808\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u2800\u2800\u2800\u2819\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u2844\u2800\u2800\u2800\r\n\u2800\u28A0\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u281F\u2801\u2800\u2800\u2800\u2800\u2800\u28FF\u28FF\u28FF\u28FF\u28FF\u2801\u2800\u2800\u2800\u2800\u2800\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u2800\u2800\u2800\u2800\u2800\u28B8\u28FF\u28FF\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2819\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28E6\u2800\u2800\r\n\u28F0\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2841\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28FF\u28FF\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2800\u2838\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2803\u2800\u2800\u2800\u2800\u2800\u28B8\u28FF\u28FF\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28F9\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u2844\r\n\u2808\u283B\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28E6\u28C0\u2800\u2800\u2800\u2800\u2800\u28FF\u28FF\u28FF\u28FF\u28FF\u28C7\u2800\u2800\u2800\u2800\u2800\u2800\u2809\u281B\u283F\u281F\u281B\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u28FE\u28FF\u28FF\u28FF\u28FF\u284F\u2800\u2800\u2800\u2800\u28C0\u28F4\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u281F\u2801\r\n\u2800\u2800\u2818\u283B\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28E4\u2840\u2800\u2800\u28B8\u28FF\u28FF\u28FF\u28FF\u28FF\u28C4\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28FC\u28FF\u28FF\u28FF\u28FF\u28FF\u2801\u2800\u28C0\u28F4\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u280B\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2808\u283B\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28E6\u28C0\u28BB\u28FF\u28FF\u28FF\u28FF\u28FF\u28E6\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28E0\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28E3\u28F4\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u281F\u2809\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2819\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F6\u28E4\u28C0\u2800\u2800\u2800\u2800\u2800\u2880\u28C0\u28E4\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u283F\u280B\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u281B\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u283F\u280B\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2819\u283B\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u281F\u280B\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2809\u281B\u283F\u283F\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u283F\u281B\u2809\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2809\u2809\u2819\u281B\u281B\u281B\u281B\u281B\u281B\u281B\u281B\u2809\u2809\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28B8\u28F7\u28F6\u28C4\u28C0\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28E0\u28F4\u28FE\u28E7\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28FE\u28FF\u28FF\u28FF\u281F\u2801\u2800\u2800\u2800\u2800\u2800\u28B0\u28F6\u28F6\u28F6\u28F6\u2876\u2800\u2800\u2800\u2800\u2800\u2800\u283B\u28FF\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28FF\u28FF\u287F\u280B\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28BF\u28FF\u28FF\u28FF\u2803\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u283B\u28FF\u28FF\u2847\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28B8\u287F\u280B\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2818\u28FF\u28FF\u284F\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u28BB\u28E7\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u280A\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28BB\u28FF\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2819\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2807\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n \n%c Executor V1.9 %c\n           Credits: Wasd And SimplyF", "color: #FF0000; font-size: 3rem", "color: #FFA500; font-size: 1rem");

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

    const sidebarButtons = ['All', 'Games', 'Tools', 'Game Cheats', 'Fun'];
    const buttonGroups = {
        'All': [
            { text: 'Dark&Light Mode', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/LightDarkMode/optomized1.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
            { text: 'Draw On website', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/drawonwebsite.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
          { text: '15th anniversary Cape Exploit (TEMP)', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/mc-exploit.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
          { text: 'Inspect (Toggle)', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/inspect.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Auto Scroll', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Auto-Scroll.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Old School', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Old-School.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
          { text: 'Browser', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Browser-In-Browser.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Wordle+', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games/Wordle/Wordle.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          { text: 'Earthquake', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/earthquake.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          { text: 'Star Wars Intro', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Star-Wars-Intro.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Google Translate Page', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/translate-page.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Time Shooter 2', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games/TimeShooter2.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          { text: 'Color Picker', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/color-picker.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Wordle Hack', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-hacks.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
 },
          { text: 'Clear Local Storage', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Local-Storage-Clear.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Prodigy Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Revamped_Menu/optomized.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
 },
          { text: 'Matrix', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Matrix.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
 },
          { text: 'Clear Cookies', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/clear-cookies.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Custom Cursors', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Custom%20Cursors/script.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Glitch Images', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/glitch_image.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'WebGL-Fluid-Simulation', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/Games%20/WebGL-Fluid-Simulation/mainfile.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
            { text: 'Auto Clicker', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/autoclicker.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          { text: '2048', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/2048/mainfile.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          
          { text: 'MineCraft (Offline)', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/MineCraft_(Offline)/MineCraft_(Offline).js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          
           { text: 'Snow', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/snow.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
          
          { text: 'Gimkit Hacks', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Gimkit%20Hacks/Gimkit.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
          
            { text: 'Cloaker', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Tab_Cloaker.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          
          { text: 'Kahoot Hacks', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Kahoot%20Hacks/KahootHacks.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'History Flooder', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/HistoryFlooder.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Ego-Client', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/ego-client.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Kahoot Botter', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-botter.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
 },
          { text: 'Dev Console', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/DevConsole.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Blooket Bot', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/blooketbot.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
 },
          { text: 'Car-Axle-Client', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/car-axle-client.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'MineCraft Overlay', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/MineCraftOverlay.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
          { text: 'Fps Viewer', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/fps-viewer(Needs-Update).js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Dictionary', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/dictionary.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Ad Blocker', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/adblocker.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
             { text: 'Blooket Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Blooket%20Hacks%20/Blooket_Hacks_V2.js')
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
            },
          { text: '2048', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/2048/mainfile.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          { text: 'Wordle+', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games/Wordle/Wordle.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          { text: 'WebGL-Fluid-Simulation', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/Games%20/WebGL-Fluid-Simulation/mainfile.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          { text: 'Time Shooter 2', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games/TimeShooter2.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          { text: 'MineCraft (Offline)', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/MineCraft_(Offline)/MineCraft_(Offline).js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            }  
        ],
        'Tools': [
            { text: 'Cloaker', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Tab_Cloaker.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Browser', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Browser-In-Browser.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Google Translate Page', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/translate-page.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: '15th anniversary Cape Exploit (TEMP)', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/mc-exploit.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
          { text: 'Auto Scroll', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Auto-Scroll.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Color Picker', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/color-picker.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Clear Local Storage', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Local-Storage-Clear.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Clear Cookies', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/clear-cookies.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Fps Viewer', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/fps-viewer(Needs-Update).js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Custom Cursors', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Custom%20Cursors/script.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Inspect (Toggle)', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/inspect.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Ego-Client', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/ego-client.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Car-Axle-Client', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/car-axle-client.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'History Flooder', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/HistoryFlooder.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Dictionary', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/dictionary.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Ad Blocker', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/adblocker.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Dev Console', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/DevConsole.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
            { text: 'Dark&Light Mode', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/LightDarkMode/optomized1.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          { text: 'Auto Clicker', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/autoclicker.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            }
        ],
        'Game Cheats': [
            { text: 'Blooket Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Blooket%20Hacks%20/Blooket_Hacks_V2.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
},
            { text: 'Prodigy Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Revamped_Menu/optomized.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
 },
          { text: 'Wordle Hack', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-hacks.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
 },
          { text: 'Kahoot Botter', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-botter.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
 },
          { text: 'Blooket Bot', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/blooketbot.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
 },
          { text: 'Cookie Clicker Cheats', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Cookie%20Clicker%20Hacks/mainmenu.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Kahoot Hacks', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Kahoot%20Hacks/KahootHacks.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Gimkit Hacks', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Gimkit%20Hacks/Gimkit.js')
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
          { text: 'Matrix', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Matrix.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
 },
          { text: 'MineCraft Overlay', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/MineCraftOverlay.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
          { text: 'Star Wars Intro', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Star-Wars-Intro.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Old School', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Old-School.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
          { text: 'Earthquake', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/earthquake.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
            },
          { text: 'Glitch Images', action: () =>fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/glitch_image.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))  
 },
          { text: 'Snow', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/snow.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))   
            },
            { text: '3D Webpage', action: () => fetch('https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js')
    .then(response => response.text())  
    .then(scriptText => eval(scriptText))
            }
        ],
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
        buttonsToDisplay.forEach(({ text, action }) => {
            const button = createButtonElement(text, action);
            content.appendChild(button);
        });
    }

const settingsButton = document.createElement('button');
settingsButton.innerHTML = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXtJREFUSEu1letRxDAMhPc6gUqASoBKgEqASoBKoBPgy3gzi+JzzMDpjyeJrX1IVg46cRxOnF+zAJeS7iSxEq+SHto65DgL8C7prGQC5GrPgRkAEgNAeP9nez6X9DEC6QHYDhgS920lEQmJVPQUAG/fSvN5U4MbSY8dRtXzWpM8cpsgVYGlw8Kej4oJEIQggELUslKbxboEMPu0wswAo4vYw3crqv7bulVFD8C+P7dkWeS04gfTpgQCBAqWGlaLzJKk7hAs4CAHYEbwDnvcqkkCm7B1iV4XWaa/+Xll1erD+7ST+m3sHQFYQQ8A9i9B0gp2AbDIfW8AEtkOpJPEFtFt2DZlUW7yQUj+psgQYf+wi3ozhkPXrdiAZsGzs4ZtmiMAmzw5Zy6a74YvmkdKt01dg2Rmxr5YKHId6mQZjgo20/MXccq+Zlt7pPhSsrJvo3ZmXNeWJNmfxnWVnLWpo2L1unfo2E3u7fXU9IT991/mMYK772dqsJtktOEL4YBvGcKicUQAAAAASUVORK5CYII=" alt="Settings Icon" style="width: 20px; margin-right: 8px; vertical-align: middle;"> Settings`;
settingsButton.style.display = 'block';
settingsButton.style.width = '120px';
settingsButton.style.margin = '10px auto';
settingsButton.style.padding = '10px';
settingsButton.style.border = '1px solid #ccc';
settingsButton.style.borderRadius = '12px';
settingsButton.style.background = '#ffffff'; 
settingsButton.style.color = '#000'; 
settingsButton.style.cursor = 'pointer';
settingsButton.style.transition = 'transform 0.2s ease-in-out';
settingsButton.style.position = 'absolute'; 
settingsButton.style.top = '280px'; 
settingsButton.style.left = '10px'; 
settingsButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

  const icon = settingsButton.querySelector('img');
icon.style.transition = 'transform 0.2s ease';

settingsButton.addEventListener('mouseenter', () => {
    settingsButton.style.transform = 'scale(1.1)'; 
    const icon = settingsButton.querySelector('img');
    icon.style.transform = 'rotate(90deg) scale(1.1)'; 
});

settingsButton.addEventListener('mouseleave', () => {
    settingsButton.style.transform = 'scale(1)'; 
    const icon = settingsButton.querySelector('img');
    icon.style.transform = 'rotate(0deg) scale(1)'; 
});

settingsButton.addEventListener('mousedown', () => {
    settingsButton.style.transform = 'scale(0.9)';
});

settingsButton.addEventListener('mouseup', () => {
    settingsButton.style.transform = 'scale(1)';
});

settingsButton.addEventListener('click', () => {
});

sidebar.appendChild(settingsButton);

settingsButton.addEventListener('click', () => {
Swal.fire({
  title: "Settings Menu Not Finished",
  text: "I have not finished making the settings menu join the discord server to find out when I release it.",
  icon: "error"
});
  });

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
    action()
      .then(() => {
        showToast('Script loaded successfully', 'success');
      })
      .catch(() => {
        showToast('Failed to load script', 'error'); 
      });
  });

const showToast = (message, icon) => {
  Swal.fire({
    toast: true,
    position: 'bottom',
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
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

    closeButton.addEventListener('click', () => {
    menu.style.transition = 'opacity 0.2s ease-out'; 
    menu.style.opacity = '0';

    menu.addEventListener('transitionend', () => {
        menu.remove();
    }, { once: true }); 
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
