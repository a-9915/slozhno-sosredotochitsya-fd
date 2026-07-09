
(function () {
  const themeButtons = document.querySelectorAll('.header__theme-menu-button');
  const htmlElement = document.documentElement;

  function setTheme(theme) {
    // Удаляем все классы тем
    htmlElement.classList.remove('theme-light', 'theme-dark');
    
    // Добавляем нужный класс
    if (theme !== 'auto') {
      htmlElement.classList.add(`theme-${theme}`);
    }
    
    // Обновляем активную кнопку
    themeButtons.forEach(button => {
      button.classList.remove('header__theme-menu-button_active');
      button.disabled = false;
      
      const buttonType = button.classList.contains('header__theme-menu-button_type_light') ? 'light' :
                         button.classList.contains('header__theme-menu-button_type_dark') ? 'dark' : 'auto';
      
      if (buttonType === theme) {
        button.classList.add('header__theme-menu-button_active');
        button.disabled = true;
      }
    });
  }

  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let theme = 'auto';
      if (button.classList.contains('header__theme-menu-button_type_light')) {
        theme = 'light';
      } else if (button.classList.contains('header__theme-menu-button_type_dark')) {
        theme = 'dark';
      }
      setTheme(theme);
    });
  });

  // Устанавливаем начальную тему (auto)
  setTheme('auto');
})();