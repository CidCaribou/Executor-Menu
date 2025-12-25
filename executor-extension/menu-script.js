(function() {
    if (document.getElementById('executor-menu')) return;

    const ExecutorVersion = 'V2.4.3';
    const ID = 'executor-menu';

    const swalScript = document.createElement('script');
    swalScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
    document.head.appendChild(swalScript);

    const host = document.createElement('div');
    host.id = ID;
    host.style.cssText = 'all:initial;position:fixed;inset:auto 50% 50% auto;z-index:2147483647;'
    const shadow = host.attachShadow({
        mode: 'open'
    });

    host.style.right = (window.innerWidth - 600) / 2 + "px";
    host.style.bottom = (window.innerHeight - 450) / 2 + "px";

    const style = document.createElement('style');
    style.textContent = `
:host {
  all: initial;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.panel {
  position: relative;
  width: 600px;
  height: 450px;
  background: #ffffff;
  color: #111827;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
}
.row {
  display: flex;
  align-items: stretch;
}
.col {
  display: flex;
  flex-direction: column;
}
.divider {
  height: 1px;
  background: #e0e0e4;
  margin-top: 4px;
}
.sidebar {
  width: 208px;
  background: #f3f4f6;
  border-right: 1px solid #e0e0e4;
  display: flex;
  flex-direction: column;
}
.iconWrap {
  padding: 16px;
  border-bottom: 1px solid #cfd2d8;
  display: flex;
  align-items: center;
  gap: 8px;
}
.icon {
  position: relative;
  width: 32px;
  height: 32px;
  display: inline-block;
  overflow: hidden;
  background: none;
  border-radius: 0;
}
.icon img {
  width: 100%;
  height: 100%;
}
.iconText {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  white-space: nowrap;
}
.nav {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.navItem {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  color: #4b5563;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;
}
.navItem:hover {
  background: #e5e7eb;
  color: #111827;
  transform: translateX(4px);
}
.navItem:focus {
  outline: none;
}
.navItem:active {
  transform: scale(0.95);
  background: #e5e7eb;
}
.navItem.selected {
  background: #d8dce2;
  color: #111827;
}
.navIcon {
  width: 20px;
  height: 20px;
  display: inline-block;
  color: currentColor;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  position: relative;
}
.section {
  padding: 16px 20px 6px 20px;
  position: relative;
}
.topDragRegion {
  position: absolute;
  left: 0px;
  right: 0;
  top: 0;
  height: 64px;
  cursor: grab;
  z-index: 0;
}
.topDragRegion.active {
  cursor: grabbing;
}
@media (max-width: 480px) {
  .topDragRegion {
    left: 0;
  }
}
.searchWrap {
  position: relative;
  display: flex;
  align-items: center;
}
.dragRegion {
  position: absolute;
  inset: 0;
  cursor: grab;
}
.dragRegion.active {
  cursor: grabbing;
}
.searchWrap > .dragRegion {
  z-index: 0;
}
.searchIcon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  width: 16px;
  height: 16px;
  z-index: 2;
}
.input {
  flex: 0 1 65%;
  max-width: 65%;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  border-radius: 10px;
  padding: 10px 12px 10px 40px;
  color: #111827;
  font-size: 14px;
  outline: none;
  z-index: 1;
}
.input::placeholder {
  color: #9ca3af;
}
.input:focus {
  outline: none;
  box-shadow: none;
  border-color: #d1d5db;
}
.winControls {
  position: absolute;
  right: -8px;
  top: 0px;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  height: 32px;
  z-index: 1;
}
.winBtn {
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: #111827;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  transition: transform 0.15s ease;
}
.winBtn.min {
  width: 30px;
  height: 28px;
  font-size: 14px;
}
.winBtn.max {
  width: 38px;
  height: 30px;
}
.winBtn.close {
  width: 36px;
  height: 30px;
  font-size: 16px;
}
.winIcon {
  display: block;
  width: 16px;
  height: 16px;
}
.winBtn.min:hover,
.winBtn.max:hover,
winBtn.close:hover {
  height: 30px;
}
.winBtn.close:hover {
  background: #fee2e2;
  color: #991b1b;
}
.winBtn:hover {
  background: #e5e7eb;
}
.winBtn:active {
  transform: scale(0.9);
}
.winBtn.max svg {
  width: 20px;
  height: 20px;
}
.scripts {
  flex: 1;
  padding: 8px 20px 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
}
.script {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  gap: 12px;
  padding: 14px 14px;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #eef0f3;
}
.script:hover {
  background: #f3f4f6;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.15));
  transform: scale(1.02);
}
.scriptText {
  flex: 1;
  min-width: 0;
}
.scriptTitle {
  font-size: 14px;
  font-weight: 700;
  color: #374151;
  margin: 0;
}
.scriptsSub {
  font-size: 12px;
  color: #6b7280;
  margin: 4px 0 0 0;
}
.check {
  width: 24px;
  height: 24px;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
}
.script:active {
  transform: scale(0.98);
}
.dragHandle {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: transparent;
  cursor: grab;
}
.hidden {
  display: none;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e6;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #c9c9d1;
}
    `;

    const wrap = document.createElement('div');
    wrap.className = 'panel row';
    wrap.innerHTML = `

<div class="sidebar">
        <div class="iconWrap">
  <div class="icon">
    <img src="https://cdn-icons-png.freepik.com/512/8083/8083509.png" alt="Profile">
  </div>
  <span class="iconText">Executor ${ExecutorVersion}</span>
</div>

        <nav class="nav">
          ${navItem('Home', homeIcon(), false)}
          ${navItem('Games', ControllerIcon(), true)}
          ${navItem('Tools', ToolsIcon(), false)}
          ${navItem('Game Cheats', CheatsIcon(), false)}
          ${navItem('Fun', FunIcon(), false)}
          ${navItem('Settings', settingsIcon(), false)}
        </nav>
      </div>
      <div class="main">
        <div class="section">
          <div class="topDragRegion" aria-hidden="true"></div>
          <div class="searchWrap">
            <div class="dragRegion" aria-hidden="true"></div>
            <span class="searchIcon">${searchIcon()}</span>
            <input class="input" placeholder="Search scripts..." />
            <div class="winControls" aria-label="window controls">
              <button class="winBtn min" title="Minimize">&#8212;</button>
              <button class="winBtn max" title="Maximize" aria-label="Maximize"><svg class="winIcon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><rect x="5.75" y="5.75" width="12.5" height="12.5" rx="1.6" ry="1.6" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></button>
              <button class="winBtn close" title="Close">&#10005;</button>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="scripts"></div>
      </div>
      <div class="dragHandle" title="Drag panel"></div>
    `;

    function navItem(label, svg, active) {
        return `<div class="navItem ${active?'active':''}"><span class="navIcon">${svg}</span><span class="label" style="font-size:14px">${label}</span></div>`;
    }

    function searchIcon() {
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }

    function homeIcon() {
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }

    function ControllerIcon() {
        return `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad2-icon lucide-gamepad-2"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>
  `;
    }

    function ToolsIcon() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hammer-icon lucide-hammer"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg>`;
    }

    function CheatsIcon() {
        return `<svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.1809 4.2755C14.581 4.3827 14.8185 4.79396 14.7113 5.19406L10.7377 20.0238C10.6304 20.4239 10.2192 20.6613 9.81909 20.5541C9.41899 20.4469 9.18156 20.0356 9.28876 19.6355L13.2624 4.80583C13.3696 4.40573 13.7808 4.16829 14.1809 4.2755Z" fill="#1C274C"></path> <path d="M16.4425 7.32781C16.7196 7.01993 17.1938 6.99497 17.5017 7.27206L19.2392 8.8358C19.9756 9.49847 20.5864 10.0482 21.0058 10.5467C21.4468 11.071 21.7603 11.6342 21.7603 12.3295C21.7603 13.0248 21.4468 13.5881 21.0058 14.1123C20.5864 14.6109 19.9756 15.1606 19.2392 15.8233L17.5017 17.387C17.1938 17.6641 16.7196 17.6391 16.4425 17.3313C16.1654 17.0234 16.1904 16.5492 16.4983 16.2721L18.1947 14.7452C18.9826 14.0362 19.5138 13.5558 19.8579 13.1467C20.1882 12.7541 20.2603 12.525 20.2603 12.3295C20.2603 12.1341 20.1882 11.9049 19.8579 11.5123C19.5138 11.1033 18.9826 10.6229 18.1947 9.91383L16.4983 8.387C16.1904 8.10991 16.1654 7.63569 16.4425 7.32781Z" fill="#1C274C"></path> <path d="M7.50178 8.387C7.80966 8.10991 7.83462 7.63569 7.55752 7.32781C7.28043 7.01993 6.80621 6.99497 6.49833 7.27206L4.76084 8.8358C4.0245 9.49847 3.41369 10.0482 2.99428 10.5467C2.55325 11.071 2.23975 11.6342 2.23975 12.3295C2.23975 13.0248 2.55325 13.5881 2.99428 14.1123C3.41369 14.6109 4.02449 15.1606 4.76082 15.8232L6.49833 17.387C6.80621 17.6641 7.28043 17.6391 7.55752 17.3313C7.83462 17.0234 7.80966 16.5492 7.50178 16.2721L5.80531 14.7452C5.01743 14.0362 4.48623 13.5558 4.14213 13.1467C3.81188 12.7541 3.73975 12.525 3.73975 12.3295C3.73975 12.1341 3.81188 11.9049 4.14213 11.5123C4.48623 11.1033 5.01743 10.6229 5.80531 9.91383L7.50178 8.387Z" fill="#1C274C"></path> </g></svg>`;
    }

    function CheatsIcon() {
        return `<svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.1809 4.2755C14.581 4.3827 14.8185 4.79396 14.7113 5.19406L10.7377 20.0238C10.6304 20.4239 10.2192 20.6613 9.81909 20.5541C9.41899 20.4469 9.18156 20.0356 9.28876 19.6355L13.2624 4.80583C13.3696 4.40573 13.7808 4.16829 14.1809 4.2755Z" fill="#1C274C"></path> <path d="M16.4425 7.32781C16.7196 7.01993 17.1938 6.99497 17.5017 7.27206L19.2392 8.8358C19.9756 9.49847 20.5864 10.0482 21.0058 10.5467C21.4468 11.071 21.7603 11.6342 21.7603 12.3295C21.7603 13.0248 21.4468 13.5881 21.0058 14.1123C20.5864 14.6109 19.9756 15.1606 19.2392 15.8233L17.5017 17.387C17.1938 17.6641 16.7196 17.6391 16.4425 17.3313C16.1654 17.0234 16.1904 16.5492 16.4983 16.2721L18.1947 14.7452C18.9826 14.0362 19.5138 13.5558 19.8579 13.1467C20.1882 12.7541 20.2603 12.525 20.2603 12.3295C20.2603 12.1341 20.1882 11.9049 19.8579 11.5123C19.5138 11.1033 18.9826 10.6229 18.1947 9.91383L16.4983 8.387C16.1904 8.10991 16.1654 7.63569 16.4425 7.32781Z" fill="#1C274C"></path> <path d="M7.50178 8.387C7.80966 8.10991 7.83462 7.63569 7.55752 7.32781C7.28043 7.01993 6.80621 6.99497 6.49833 7.27206L4.76084 8.8358C4.0245 9.49847 3.41369 10.0482 2.99428 10.5467C2.55325 11.071 2.23975 11.6342 2.23975 12.3295C2.23975 13.0248 2.55325 13.5881 2.99428 14.1123C3.41369 14.6109 4.02449 15.1606 4.76082 15.8232L6.49833 17.387C6.80621 17.6641 7.28043 17.6391 7.55752 17.3313C7.83462 17.0234 7.80966 16.5492 7.50178 16.2721L5.80531 14.7452C5.01743 14.0362 4.48623 13.5558 4.14213 13.1467C3.81188 12.7541 3.73975 12.525 3.73975 12.3295C3.73975 12.1341 3.81188 11.9049 4.14213 11.5123C4.48623 11.1033 5.01743 10.6229 5.80531 9.91383L7.50178 8.387Z" fill="#1C274C"></path> </g></svg>`;
    }

    function FunIcon() {
        return `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>balloon</title> <path d="M26.715 10.997c-0.002-4.389-4.963-9.747-10.75-9.747-5.752 0-10.68 5.361-10.68 9.747-0.032 8.134 7.535 13.792 9.743 15.269l-1.699 3.398c-0.050 0.098-0.079 0.213-0.079 0.336 0 0.414 0.336 0.75 0.75 0.75h4c0 0 0.001 0 0.002 0 0.413 0 0.749-0.335 0.749-0.749 0-0.123-0.030-0.239-0.082-0.342l0.002 0.004-1.698-3.398c2.208-1.477 9.775-7.135 9.743-15.269zM15.214 29.25l0.786-1.572 0.786 1.572zM16 25.107c-1.798-1.201-9.244-6.629-9.215-14.107 0.674-4.578 4.493-8.077 9.162-8.249l0.017-0.001c4.709 0.157 8.554 3.658 9.243 8.196l0.007 0.054v0.003c0.029 7.478-7.417 12.905-9.215 14.104zM13.152 5.338c-2.561 1.18-4.323 3.694-4.398 6.628l-0 0.010c-0 0.007-0 0.015-0 0.024 0 0.406 0.322 0.737 0.725 0.751l0.001 0h0.024c0.406-0 0.736-0.322 0.75-0.724l0-0.001c0.059-2.391 1.506-4.43 3.563-5.347l0.038-0.015c0.239-0.129 0.398-0.377 0.398-0.662 0-0.414-0.336-0.75-0.75-0.75-0.129 0-0.25 0.032-0.356 0.090l0.004-0.002z"></path> </g></svg>`;
    }

    function settingsIcon() {
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" stroke-width="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 3.3l.06.06c.48.48 1.17.62 1.82.33A1.65 1.65 0 0 0 10.5 2.2V2a2 2 0 1 1 4 0v.09c0 .67.4 1.27 1.02 1.54.64.3 1.34.16 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.48.48-.62 1.17-.33 1.82.27.62.87 1.02 1.54 1.02H22a2 2 0 1 1 0 4h-.09c-.67 0-1.27.4-1.54 1.02Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }

    const Scripts = {
        'Home': [{
                text: 'Dark&Light Mode',
                description: 'Toggle between dark and light themes',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/LightDarkMode/optomized1.js',
            },
            {
                text: 'Voxiom.io Hacks',
                description: 'Hacks for Voxiom.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/voxiom.io-hacks/loader.js'
            },
            {
                text: 'Vectaria.io Hacks',
                description: 'Hacks for Vectaria.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Vectaria.io-hacks.js'
            },
            {
                text: 'Narrow.one Hacks',
                description: 'Hacks for narrow.one',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/voxiom.io-hacks/loader.js'
            },
            {
                text: 'Cryzen.io Hacks',
                description: 'Hacks for cryzen.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/cryzen.io-hacks.js'
            },
            {
                text: 'Minefun.io hacks',
                description: 'Hacks for minefun.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/minefun.io-hacks.js'
            },
            {
                text: 'Kirka.io Hacks',
                description: 'Hacks for Kirka.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kirka.io-hacks/hack.js'
            },
            {
                text: 'Slope Hacks',
                description: 'Hacks For Slope',
                url: 'https://cdn.jsdelivr.net/gh/dano36860/-s@main/Whisp-Slope.js'
            },
            {
                text: 'ev.io hacks',
                description: 'Hacks for the Shooter Game ev.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/ev-dot-io/ev-dot-io.js'
            },
            {
                text: 'Bloxd.io Hacks',
                description: 'Progressive Hacked Client for Bloxd.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Progressive-Client.js'
            },
            {
                text: 'Flappy Bird Hacks',
                description: 'Hacks for Flappy Bird',
                url: 'https://cdn.jsdelivr.net/gh/dano36860/-s@main/Whisp-flappyBird.js'
            },
            {
                text: 'Rain Emojis',
                description: 'Make the page rain emojis',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/emoji-rain.js'
            },
            {
                text: 'Kahoot Name Bypass',
                description: 'Bypass nickname restrictions kahoot',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-name-bypass.js'
            },
            {
                text: 'Edit Session Storage',
                description: 'A ui used to edit session storage data for the current site',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/edit-sessionStorage.js'
            },
            {
                text: 'X-Ray',
                description: 'Reveal hidden elements on the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/x-ray.js'
            },
            {
                text: 'Draw On website',
                description: 'Draw freely on any webpage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/drawonwebsite.js'
            },
            {
                text: 'Wordle Unlimited Hack',
                description: 'Reveal Answer for Wordle Unlimited',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-unlimited-hack.js'
            },
            {
                text: 'DOMI',
                description: 'DOM inspection and manipulation game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/DOMI.js'
            },
            {
                text: 'wasm-patcher',
                description: 'Patch WebAssembly code in real time',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/wasm-patcher.js'
            },
            {
                text: 'View Cache',
                description: 'View cache for the current site',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/view-cache.js'
            },
            {
                text: 'IndexDB Viewer',
                description: 'IndexedDB viewer for the current site',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/IndexDB-Editor.js'
            },
            {
                text: 'Inspect (Toggle)',
                description: 'Toggle content editable for the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/inspect.js',
                swal: 'true'
            },
            {
                text: 'Auto Scroll',
                description: 'Automatically scroll the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Auto-Scroll.js',
                swal: 'true'
            },
            {
                text: 'Old School',
                description: 'Make  webpage look old school',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Old-School.js'
            },
            {
                text: 'Browser',
                description: 'Open a browser within the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Browser-In-Browser.js'
            },
            {
                text: 'Wordle+',
                description: 'Enhanced Wordle gameplay features',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Wordle+/mainfile.js'
            },
            {
                text: 'Slope',
                description: 'Play Slope game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Slope/menu.js'
            },
            {
                text: 'DragonX V2 International',
                description: 'Minecraft DragonX V2 international version hack client',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/MineCraft-DragonX-V2/mainfile.js'
            },
            {
                text: 'Flappy Bird',
                description: 'Play Flappy Bird',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Flappy%20Bird/menu.js'
            },
            {
                text: 'Earthquake',
                description: 'Trigger earthquake effect on the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/earthquake.js'
            },
            {
                text: 'Star Wars Intro',
                description: 'Display Star Wars style intro',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Star-Wars-Intro.js'
            },
            {
                text: 'Google Translate Page',
                description: 'Translate entire webpage using Google Translate',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/translate-page.js'
            },
            {
                text: 'Time Shooter 2',
                description: 'Play Time Shooter 2',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/TimeShooter-2/mainfile.js'
            },
            {
                text: 'Color Picker',
                description: 'Pick colors from anywhere on the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/color-picker.js'
            },
            {
                text: 'Wordle Hack',
                description: 'Hack Wordle game to see solutions',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-hacks.js'
            },
            {
                text: 'Edit Local Storage',
                description: 'Edit local storage for the site',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Local-Storage-Editor.js',
            },
            {
                text: 'Prodigy Cheats',
                description: 'Cheats for Prodigy game',
                url: 'https://menu.pxi-fusion.com/pxi-2.0/main.js'
            },
            {
                text: 'Matrix',
                description: 'Matrix effect on webpage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Matrix.js'
            },
            {
                text: 'Cookie Editor',
                description: 'Edit all cookies for the site',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/cookie-editor.js'
            },
            {
                text: 'Custom Cursors',
                description: 'Use custom cursors on websites',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Custom%20Cursors/script.js'
            },
            {
                text: 'Glitch Images',
                description: 'Apply glitch effect to images',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/glitch_image.js'
            },
            {
                text: 'WebGL-Fluid-Simulation',
                description: 'Fluid simulation using WebGL',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/Games%20/WebGL-Fluid-Simulation/mainfile.js'
            },
            {
                text: 'Auto Clicker V2',
                description: 'Automate clicks on the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/autoclicker.js'
            },
            {
                text: '2048',
                description: 'Play 2048 game with enhancements',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/2048/mainfile.js'
            },
            {
                text: 'MineCraft (Offline)',
                description: 'Offline Minecraft version',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/MineCraft_(Offline)/MineCraft_(Offline).js'
            },
            {
                text: 'Snow',
                description: 'Add snow effect to the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/snow.js'
            },
            {
                text: 'Gimkit Hacks',
                description: 'Cheats for Gimkit game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Gimkit%20Hacks/Gimkit.js'
            },
            {
                text: 'Tab Cloaker',
                description: 'Disguise tab',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Tab_Cloaker.js'
            },
            {
                text: 'Kahoot Hacks',
                description: 'Cheats for Kahoot quizzes',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Kahoot%20Hacks/KahootHacks.js'
            },
            {
                text: 'History Flooder',
                description: 'Flood browser history with entries',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/HistoryFlooder.js'
            },
            {
                text: 'Ego-Client',
                description: 'Ego-client tool for page modifications',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/ego-client.js'
            },
            {
                text: 'Kahoot Botter',
                description: 'Automated Kahoot participant',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-botter.js'
            },
            {
                text: 'Dev Console',
                description: 'Open developer console with extra features',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/DevConsole.js'
            },
            {
                text: 'Blooket Bot',
                description: 'Automate Blooket gameplay',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/blooketbot.js'
            },
            {
                text: 'Car-Axle-Client',
                description: 'Car Axle client modifications',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/car-axle-client.js'
            },
            {
                text: 'MineCraft Overlay',
                description: 'Overlay Minecraft themed for websites',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/MineCraftOverlay.js'
            },
            {
                text: 'Fps Viewer',
                description: 'Display FPS on page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/fps-viewer(Needs-Update).js'
            },
            {
                text: 'Dictionary',
                description: 'Quick dictionary lookup tool',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/dictionary.js'
            },
            {
                text: 'Ad Blocker',
                description: 'Block ads on the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/adblocker.js'
            },
            {
                text: 'Blooket Cheats',
                description: 'Blooket game cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Blooket%20Hacks%20/Blooket_Hacks.js'
            },
            {
                text: 'Cookie Clicker Cheats',
                description: 'Cheats for Cookie Clicker game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Cookie%20Clicker%20Hacks/mainmenu.js'
            },
            {
                text: 'Chrome Dino Cheats',
                description: 'Chrome Dino game cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Tus-Dino/loader.js'
            },
            {
                text: '3D Webpage',
                description: '3D effects on webpages',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js'
            },
            {
                text: 'Snake X More Menu Mod',
                description: 'Enhanced menu for Google Snake game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js'
            },
            {
                text: 'Duolingo Cheats',
                description: 'Cheats for Duolingo',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Duolingo%20Mod%20Menu/menu.js'
            }
        ],
        'Games': [{
                text: 'Snake X More Menu Mod',
                description: 'Enhanced menu for Google Snake game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js'
            },
            {
                text: '2048',
                description: 'Play 2048 game with enhancements',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/2048/mainfile.js'
            },
            {
                text: 'Wordle+',
                description: 'Enhanced Wordle gameplay features',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Wordle+/mainfile.js'
            },
            {
                text: 'Slope',
                description: 'Play Slope game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Slope/menu.js'
            },
            {
                text: 'DragonX V2 International',
                description: 'Minecraft DragonX V2 international version hack client',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/MineCraft-DragonX-V2/mainfile.js'
            },
            {
                text: 'Flappy Bird',
                description: 'Play Flappy Bird',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Games%20/Flappy%20Bird/menu.js'
            },
            {
                text: 'WebGL-Fluid-Simulation',
                description: 'Fluid simulation using WebGL',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/Games%20/WebGL-Fluid-Simulation/mainfile.js'
            },
            {
                text: 'Time Shooter 2',
                description: 'Play Time Shooter 2',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/TimeShooter-2/mainfile.js'
            },
            {
                text: 'MineCraft (Offline)',
                description: 'Offline Minecraft version',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Games%20/MineCraft_(Offline)/MineCraft_(Offline).js'
            }
        ],
        'Tools': [{
                text: 'Tab Cloaker',
                description: 'Disguise tab',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Tab_Cloaker.js'
            },
            {
                text: 'View Cache',
                description: 'View cache for the current site',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/view-cache.js'
            },
            {
                text: 'X-Ray',
                description: 'Reveal hidden elements on the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/x-ray.js'
            },
            {
                text: 'wasm-patcher',
                description: 'Patch WebAssembly code in real time',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/wasm-patcher.js'
            },
            {
                text: 'IndexDB Viewer',
                description: 'IndexedDB viewer for the current site',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/IndexDB-Editor.js'
            },
            {
                text: 'Edit Session Storage',
                description: 'A ui used to edit session storage data for the current site',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/edit-sessionStorage.js'
            },
            {
                text: 'Browser',
                description: 'Open a browser within the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Browser-In-Browser.js'
            },
            {
                text: 'Google Translate Page',
                description: 'Translate entire webpage using Google Translate',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/translate-page.js'
            },
            {
                text: 'Auto Scroll',
                description: 'Automatically scroll the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Auto-Scroll.js',
                swal: 'true'
            },
            {
                text: 'Color Picker',
                description: 'Pick colors from anywhere on the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/color-picker.js'
            },
            {
                text: 'Edit Local Storage',
                description: 'Edit local storage for the site',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Local-Storage-Editor.js',
            },
            {
                text: 'Cookie Editor',
                description: 'Edit all cookies for the site',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/cookie-editor.js'
            },
            {
                text: 'Fps Viewer',
                description: 'Display FPS on page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/fps-viewer(Needs-Update).js'
            },
            {
                text: 'Custom Cursors',
                description: 'Use custom cursors on websites',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Custom%20Cursors/script.js'
            },
            {
                text: 'Inspect (Toggle)',
                description: 'Toggle content editable for the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/inspect.js',
                swal: 'true'
            },
            {
                text: 'Ego-Client',
                description: 'Ego-client tool for page modifications',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/ego-client.js'
            },
            {
                text: 'Car-Axle-Client',
                description: 'Car Axle client modifications',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/car-axle-client.js'
            },
            {
                text: 'History Flooder',
                description: 'Flood browser history with entries',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/HistoryFlooder.js'
            },
            {
                text: 'Dictionary',
                description: 'Quick dictionary lookup tool',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/dictionary.js'
            },
            {
                text: 'Ad Blocker',
                description: 'Block ads on the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/adblocker.js'
            },
            {
                text: 'Dev Console',
                description: 'Open developer console with extra features',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/DevConsole.js'
            },
            {
                text: 'Dark&Light Mode',
                description: 'Toggle between dark and light themes',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/LightDarkMode/optomized1.js'
            },
            {
                text: 'Auto Clicker V2',
                description: 'Automate clicks on the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/autoclicker.js'
            }
        ],
        'Game Cheats': [{
                text: 'Blooket Cheats',
                description: 'Blooket game cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Blooket%20Hacks%20/Blooket_Hacks.js'
            },
            {
                text: 'Vectaria.io Hacks',
                description: 'Hacks for Vectaria.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Vectaria.io-hacks.js'
            },
            {
                text: 'Voxiom.io Hacks',
                description: 'Hacks for Voxiom.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/voxiom.io-hacks/loader.js'
            },
            {
                text: 'Narrow.one Hacks',
                description: 'Hacks for narrow.one',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/voxiom.io-hacks/loader.js'
            },
            {
                text: 'Minefun.io hacks',
                description: 'Hacks for minefun.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/minefun.io-hacks.js'
            },
            {
                text: 'Kirka.io Hacks',
                description: 'Hacks for Kirka.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kirka.io-hacks/hack.js'
            },
            {
                text: 'Slope Hacks',
                description: 'Hacks For Slope',
                url: 'https://cdn.jsdelivr.net/gh/dano36860/-s@main/Whisp-Slope.js'
            },
            {
                text: 'Flappy Bird Hacks',
                description: 'Hacks for Flappy Bird',
                url: 'https://cdn.jsdelivr.net/gh/dano36860/-s@main/Whisp-flappyBird.js'
            },
            {
                text: 'Bloxd.io Hacks',
                description: 'Progressive Hacked Client for Bloxd.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Progressive-Client.js'
            },
            {
                text: 'Wordle Unlimited Hack',
                description: 'Reveal Answer for Wordle Unlimited',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-unlimited-hack.js'
            },
            {
                text: 'ev.io hacks',
                description: 'Hacks for the Shooter Game ev.io',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/ev-dot-io/ev-dot-io.js'
            },
            {
                text: 'Kahoot Name Bypass',
                description: 'Bypass nickname restrictions kahoot',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-name-bypass.js'
            },
            {
                text: 'Prodigy Cheats',
                description: 'Cheats for Prodigy game',
                url: 'https://menu.pxi-fusion.com/pxi-2.0/main.js'
            },
            {
                text: 'wasm-patcher',
                description: 'Patch WebAssembly code in real time',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/wasm-patcher.js'
            },
            {
                text: 'Wordle Hack',
                description: 'Hack Wordle game to see solutions',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/wordle-hacks.js'
            },
            {
                text: 'Kahoot Botter',
                description: 'Automated Kahoot participant',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/kahoot-botter.js'
            },
            {
                text: 'Blooket Bot',
                description: 'Automate Blooket gameplay',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/blooketbot.js'
            },
            {
                text: 'Cookie Clicker Cheats',
                description: 'Cheats for Cookie Clicker game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Cookie%20Clicker%20Hacks/mainmenu.js'
            },
            {
                text: 'Kahoot Hacks',
                description: 'Cheats for Kahoot quizzes',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Kahoot%20Hacks/KahootHacks.js'
            },
            {
                text: 'Gimkit Hacks',
                description: 'Cheats for Gimkit game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Gimkit%20Hacks/Gimkit.js'
            },
            {
                text: 'Chrome Dino Cheats',
                description: 'Chrome Dino game cheats',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Tus-Dino/loader.js'
            },
            {
                text: 'Duolingo Cheats',
                description: 'Cheats for Duolingo',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Duolingo%20Mod%20Menu/menu.js'
            },
            {
                text: 'Snake X More Menu Mod',
                description: 'Enhanced menu for Google Snake game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Google_SnakeXMore_Menu_Mod.js'
            }
        ],
        'Fun': [{
                text: 'Draw On website',
                description: 'Draw freely on any webpage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/drawonwebsite.js'
            },
            {
                text: 'Rain Emojis',
                description: 'Make the page rain emojis',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/emoji-rain.js'
            },
            {
                text: 'Matrix',
                description: 'Matrix effect on webpage',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/Matrix.js'
            },
            {
                text: 'DOMI',
                description: 'DOM inspection and manipulation game',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/DOMI.js'
            },
            {
                text: 'MineCraft Overlay',
                description: 'Overlay Minecraft themed for websites',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/MineCraftOverlay.js'
            },
            {
                text: 'Star Wars Intro',
                description: 'Display Star Wars style intro',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Star-Wars-Intro.js'
            },
            {
                text: 'Old School',
                description: 'Make webpage look old school',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/Old-School.js'
            },
            {
                text: 'Earthquake',
                description: 'Trigger earthquake effect on the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/earthquake.js'
            },
            {
                text: 'Glitch Images',
                description: 'Apply glitch effect to images',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/glitch_image.js'
            },
            {
                text: 'Snow',
                description: 'Add snow effect to the page',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/snow.js'
            },
            {
                text: '3D Webpage',
                description: '3D effects on webpages',
                url: 'https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js'
            }
        ]
    };

    function renderScripts(category, filter = '') {
        const list = wrap.querySelector('.scripts');
        list.innerHTML = '';

        (Scripts[category] || []).forEach(s => {
            if (filter && !s.text.toLowerCase().includes(filter.toLowerCase()) && !s.description?.toLowerCase().includes(filter.toLowerCase())) {
                return;
            }

            const row = document.createElement('div');
            row.className = 'script';
            row.innerHTML = `
      <div class="scriptText">
        <h3 class="scriptTitle">${escapeHtml(s.text)}</h3>
        <p class="scriptsSub">${escapeHtml(s.description||'')}</p>
      </div>
      <div class="check">
        <img src="https://www.iconpacks.net/icons/2/free-rocket-icon-3430-thumb.png" alt="Execute Script" width="100%" height="100%">
      </div>
    `;
            const check = row.querySelector('.check');
            row.addEventListener('click', () => {
                executeScript(s.url, check, s.swal);
            });
            list.appendChild(row);
        });
    }

    const defaultCategory = 'Home';
    renderScripts(defaultCategory);

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, function(m) {
            return ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            })[m] || m;
        });
    }

    const searchInput = wrap.querySelector('.input');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.trim();
        const selectedCategory = wrap.querySelector('.navItem.selected .label').textContent;
        renderScripts(selectedCategory, filter);
    });

    function executeScript(url, check, swal) {
        if (!check) return;

        const defaultIconHtml = `<img src="https://www.iconpacks.net/icons/2/free-rocket-icon-3430-thumb.png" alt="Execute" width="100%" height="100%">`;

        check.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-dasharray="31.4 31.4">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" from="0 25 25" to="360 25 25"/>
      </circle>
    </svg>
  `;

        showToast('Loading...', 'warning');

        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        return new Promise((res, rej) => {
            script.onload = () => {
                script.remove();
                check.innerHTML = `<span style="font-size:24px;">✔</span>`;
                if (swal !== 'true') {
                    showToast('Script loaded successfully', 'success', 3000);
                }

                res();
            };
            script.onerror = (e) => {
                script.remove();
                check.innerHTML = `
         <img 
    src="https://www.svgrepo.com/show/379925/alert-error.svg" 
    alt="Error" 
    width="22" 
    height="22"
    style="display:block"
  />
  `;
                showToast('Failed to load script. Check console for details.', 'error');

                setTimeout(() => {
                    check.innerHTML = defaultIconHtml || '';
                }, 2500);

                rej(e);
            };
            document.head.appendChild(script);
        });
    }

    shadow.appendChild(style);
    shadow.appendChild(wrap);
    document.body.appendChild(host);

    const closeBtn = wrap.querySelector('.winBtn.close');
    const minBtn = wrap.querySelector('.winBtn.min');
    const maxBtn = wrap.querySelector('.winBtn.max');
    const panel = wrap;
    const hostEl = host;
    let maximized = false;
    let prevState = {
        right: host.style.right,
        bottom: host.style.bottom,
        width: panel.style.width,
        height: panel.style.height
    };

    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        document.getElementById('executor-menu').remove();
    });
    minBtn.addEventListener('click', function(e) {
        e.stopPropagation();

        const rect = panel.getBoundingClientRect();

        panel.style.transition = "all 0.3s ease";
        panel.style.transform = "scale(0.2)";
        panel.style.opacity = "0";

        panel.addEventListener("transitionend", function handleTransition() {
            panel.removeEventListener("transitionend", handleTransition);

            panel.classList.add('hidden');
            panel.style.transition = "";
            panel.style.transform = "";
            panel.style.opacity = "";

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const minimized = document.createElement("div");
            minimized.style.cssText = `
            all:initial;
            position:fixed;
            width:65px;
            height:65px;
            background:white;
            border:1px solid #ccc;
            border-radius:8px;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:move;
            user-select:none;
            z-index:2147483647;
            box-shadow:0 4px 12px rgba(0,0,0,0.25);
            opacity:0;
            transition:opacity 0.3s ease;
            left:${centerX - 25}px;
            top:${centerY - 25}px;
        `;

            const img = document.createElement("img");
            img.src = "https://cdn-icons-png.freepik.com/512/8083/8083509.png";
            img.style.cssText = "width:70%;height:70%;object-fit:contain;pointer-events:none;";
            minimized.appendChild(img);
            document.body.appendChild(minimized);

            requestAnimationFrame(() => minimized.style.opacity = "1");

            let offsetX = 0,
                offsetY = 0,
                dragging = false,
                moved = false;

            minimized.addEventListener("mousedown", e => {
                dragging = true;
                moved = false;
                offsetX = e.clientX - minimized.getBoundingClientRect().left;
                offsetY = e.clientY - minimized.getBoundingClientRect().top;
                minimized.style.transition = "";
            });

            document.addEventListener("mousemove", e => {
                if (!dragging) return;
                moved = true;
                minimized.style.left = e.clientX - offsetX + "px";
                minimized.style.top = e.clientY - offsetY + "px";
            });

            document.addEventListener("mouseup", () => {
                if (!dragging) return;
                dragging = false;
            });

            minimized.addEventListener("click", e => {
                e.stopPropagation();
                if (!dragging && !moved) restorePanel();
            });

            function restorePanel() {
                const minRect = minimized.getBoundingClientRect();

                panel.classList.remove("hidden");

                const panelRect = panel.getBoundingClientRect();
                host.style.right = (window.innerWidth - (minRect.left + minRect.width / 2 + panelRect.width / 2)) + "px";
                host.style.bottom = (window.innerHeight - (minRect.top + minRect.height / 2 + panelRect.height / 2)) + "px";

                panel.style.transition = "none";
                panel.style.transform = "scale(0.2)";
                panel.style.opacity = "0";

                requestAnimationFrame(() => {
                    panel.style.transition = "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease";
                    panel.style.transform = "scale(1)";
                    panel.style.opacity = "1";
                });

                minimized.remove();
            }

        }, {
            once: true
        });
    });
    maxBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const padding = -3;

        if (!maximized) {
            const rect = hostEl.getBoundingClientRect();
            prevState = {
                width: rect.width + "px",
                height: rect.height + "px",
                top: hostEl.style.top,
                left: hostEl.style.left,
                right: hostEl.style.right,
                bottom: hostEl.style.bottom,
                position: hostEl.style.position || "absolute"
            };

            hostEl.style.position = "absolute";
            hostEl.style.top = rect.top + "px";
            hostEl.style.left = rect.left + "px";
            hostEl.style.width = rect.width + "px";
            hostEl.style.height = rect.height + "px";

            hostEl.style.transition = "all 0.3s ease";
            panel.style.transition = "all 0.3s ease";

            hostEl.offsetWidth;

            hostEl.style.top = padding + "px";
            hostEl.style.left = padding + "px";
            hostEl.style.width = `calc(100% - ${padding * 2}px)`;
            hostEl.style.height = `calc(100% - ${padding * 2}px)`;
            panel.style.width = "100%";
            panel.style.height = "100%";
        } else {
            const rect = hostEl.getBoundingClientRect();
            hostEl.style.transition = "all 0.3s ease";
            panel.style.transition = "all 0.3s ease";

            if (prevState.top && prevState.left) {
                hostEl.style.top = prevState.top;
                hostEl.style.left = prevState.left;
            } else {
                hostEl.style.right = prevState.right || (window.innerWidth - (rect.left + rect.width)) + "px";
                hostEl.style.bottom = prevState.bottom || (window.innerHeight - (rect.top + rect.height)) + "px";
            }

            hostEl.style.width = prevState.width;
            hostEl.style.height = prevState.height;
            hostEl.style.position = prevState.position;
            panel.style.width = prevState.width;
            panel.style.height = prevState.height;
        }

        maximized = !maximized;

        setTimeout(() => {
            hostEl.style.transition = "";
            panel.style.transition = "";
            hostEl.style.transform = "";
        }, 300);
    });

    window.addEventListener("resize", () => {
        if (maximized) {
            hostEl.style.top = "0px";
            hostEl.style.left = "0px";
            hostEl.style.width = "100%";
            hostEl.style.height = "100%";
            panel.style.width = "100%";
            panel.style.height = "100%";
        }
    });

    const main = wrap;

    let dragging = false,
        offX = 0,
        offY = 0;
    const handle = wrap.querySelector('.dragHandle');
    const dragRegion = wrap.querySelector('.dragRegion');
    const topDragRegion = wrap.querySelector('.topDragRegion');

    function startDrag(e, region, isHandle = false) {
        if (maximized) return;
        const target = e.target;
        if (target.closest('.winControls') || target.closest('.input')) return;
        dragging = true;
        if (!isHandle) region.classList.add('active');
        const r = host.getBoundingClientRect();
        offX = e.clientX - r.right;
        offY = e.clientY - r.bottom;
        e.preventDefault();
    }

    [handle, dragRegion, topDragRegion].forEach(el => {
        const isHandle = el === handle;
        el.addEventListener('mousedown', e => startDrag(e, el, isHandle));
    });

    function onMove(e) {
        if (!dragging || maximized) return;
        const x = e.clientX - offX;
        const y = e.clientY - offY;
        host.style.right = (window.innerWidth - x) + 'px';
        host.style.bottom = (window.innerHeight - y) + 'px';
    }

    function onUp() {
        if (!dragging) return;
        dragging = false;
        handle.style.cursor = 'grab';
        dragRegion.classList.remove('active');
        topDragRegion.classList.remove('active');
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);

    const navItems = wrap.querySelectorAll(".navItem");
    let selectedItem = null;

    navItems.forEach(item => {
        const label = item.querySelector('.label').textContent;
        if (label === defaultCategory) {
            item.classList.add("selected");
            selectedItem = item;
        }
        item.addEventListener("click", () => {
            if (selectedItem) selectedItem.classList.remove("selected");
            item.classList.add("selected");
            selectedItem = item;
            renderScripts(item.querySelector('.label').textContent);
        });
    });

    const showToast = (message, icon, timer) => {
        const swalInstance = Swal.fire({
            toast: true,
            position: 'bottom',
            icon: icon,
            title: message,
            showConfirmButton: false,
            timer: timer,
            timerProgressBar: true,
            willClose: () => Swal.stopTimer()
        });
    };

    const homeBtn = Array.from(navItems).find(i =>
        i.querySelector('.label').textContent === defaultCategory
    );

    if (homeBtn) {
        homeBtn.classList.add('selected');
    }
})();