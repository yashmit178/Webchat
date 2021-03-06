const config = (() => {
  let script
  if (typeof document !== 'undefined') {
    script = document && (document.currentScript || document.getElementById('cai-webchat'))
  }
  const apiRoot = (script && script.getAttribute('apiRoot')) || 'https://api.cai.tools.sap'

  return {
    apiUrl: `${apiRoot}${apiRoot.slice(-1) === '/' ? '' : '/'}connect/v1`,
  }
})()

export default config
