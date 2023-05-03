import '../css/style.css'
import { sideNav } from './sideNavigation'
import { contentSection } from './content'

document.getElementById('app').appendChild(sideNav)
document.getElementById('app').appendChild(contentSection)

/* 
document.querySelector('#app').innerHTML = `

${sideNav}
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
` */