const applyTheme = isLight => {
  const colors = {
    '--theme-content-color': `${isLight ? '#21252B' : '#FFFFFF'}`,
    '--theme-background-color': `${isLight ? '#FFFFFF' : '#21252B'}`,
  };

  for (const key in colors) {
    document.querySelector('body').style.setProperty(key, colors[key]);
  };
};

const themeInitialState = 
JSON.parse(localStorage.getItem('isLightTheme')) === false ? false : true;

export { applyTheme, themeInitialState };
