const applyTheme = isLight => {
  const colors = {
    '--theme-color-1': `${isLight ? '#FFFFFF' : '#21252B'}`,
    '--theme-color-2': `${isLight ? '#21252B' : '#FFFFFF'}`,
    '--popup-theme-color':
    `${isLight ? 'rgba(255, 255, 255, 0.5)' : 'rgba(33, 37, 43, 0.8)'}`,
  };

  for (const key in colors) {
    document.querySelector('body').style.setProperty(key, colors[key]);
  };
};

const themeInitialState = 
JSON.parse(localStorage.getItem('isLightTheme')) === false ? false : true;

export { applyTheme, themeInitialState };
