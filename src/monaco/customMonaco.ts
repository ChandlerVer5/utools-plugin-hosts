// for Monaco Editor
import 'monaco-editor/esm/vs/editor/editor.all.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
import 'monaco-editor/esm/vs/basic-languages/monaco.contribution';

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const monacoOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
  readOnly: true,
  //   theme: 'vs-dark',
  language: 'ini',
  fontSize: 14,
  automaticLayout: true,
  hideCursorInOverviewRuler: true,
  overviewRulerBorder: false,
  renderLineHighlight: 'line',
  fontFamily:
    'Operator Mono Lig, Dank Mono, Microsoft YaHei Mono, Source_Code_Pro-YaHei Hybrid',
  lineHeight: 20,
  fontLigatures: true,
  detectIndentation: true,
  wordWrap: 'on',
  fixedOverflowWidgets: true,
  lineNumbersMinChars: 3,
  scrollBeyondLastColumn: 2,
  scrollBeyondLastLine: false,
  minimap: {
    enabled: false
  },
  smoothScrolling: true,
  contextmenu: false,
  autoIndent: 'keep'
  // formatOnPaste: true,
  // formatOnType: true,
};
export { monaco, monacoOptions };
