const applyTheme = (isLight) => {
  const body = document.querySelector('body').style;
  const colors = {
    '--theme-content-color': `${isLight ? 'black' : 'white'}`,
    '--theme-background-color': `${isLight ? 'white' : 'black'}`,
  };

  for (const key in colors) {
    body.setProperty(key, colors[key]);
  };
};

const isLightTheme = JSON.parse(localStorage.getItem('isLightTheme'));
const themeInitialState = 
isLightTheme === true || isLightTheme === null ? true : false;

export { applyTheme, themeInitialState };
