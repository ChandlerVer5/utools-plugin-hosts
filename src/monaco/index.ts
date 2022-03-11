import { monaco } from './customMonaco'

monaco.editor.create(document.querySelector('#editor-container')!, {
  value: `# AnyGo
  127.0.0.1 download.itoolab.com
  127.0.0.1 order.luckydogsoft.com
  
  # HoudahSpot;
  127.0.0.1 dl.houdah.com;
  127.0.0.1 www.houdah.com;
  `,
  language: 'ini'
});