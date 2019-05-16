jQuery(function ($) {
  const ThemeHelper = function() {

    const preloadTheme = (href) => {
      let link = document.createElement('link')
      link.rel = "stylesheet"
      link.href = href
      document.head.appendChild(link)

      return new Promise((resolve, reject) => {
        link.onload = e => {
          const sheet = e.target.sheet
          sheet.disabled = true
          resolve(sheet)
        }
        link.onerror = reject
      })
    }

    const selectTheme = (themes, name) => {
      if (name && !themes[name]) {
        throw new Error(`"${name}" has not been defined as a theme.`)
      }
      Object.keys(themes).forEach(n => themes[n].disabled = (n !== name))
    }

    let themes = {}

    return {
      add(name, href) { return preloadTheme(href).then(s => themes[name] = s) },
      set theme(name) { selectTheme(themes, name) },
      get theme() { return Object.keys(themes).find(n => !themes[n].disabled) }
    }
  }

  const themes = {
    sunrise: "/assets/scss/sunrise.css",
    dawn: "https://bootswatch.com/4/materia/bootstrap.min.css",
    sunset: "/assets/scss/sunset.css"
  }

  const themeHelper = new ThemeHelper()

  let added = Object.keys(themes).map(n => themeHelper.add(n, themes[n]))

  Promise.all(added).then(sheets => {
    console.log(`${sheets.length} themes loaded`)
    themeHelper.theme = "sunset"
  })
})
