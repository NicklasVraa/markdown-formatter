'use babel';

import {
  CompositeDisposable
} from 'atom';

export default {
  subscriptions: null,

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:bold': () => this.bold()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:italic': () => this.italic()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:strikethrough': () => this.strikethrough()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:key': () => this.key()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:quote': () => this.quote()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:code': () => this.code()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:math': () => this.math()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:flex': () => this.flex()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:bar': () => this.bar()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:fraction': () => this.fraction()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:derivative': () => this.derivative()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:integral': () => this.integral()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-formatter:case': () => this.case()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  bold() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`**${selection}**`);
      }
    }
  },

  italic() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`*${selection}*`);
      }
    }
  },

  strikethrough() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`~~${selection}~~`);
      }
    }
  },

  key() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`<kbd>${selection}<\\kbd>`);
      }
    }
  },

  quote() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`"${selection}"`);
      }
    }
  },

  code() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`\`${selection}\``);
      }
    }
  },

  math() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`$${selection}$`);
      }
    }
  },

  bar() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`\\bar{${selection}}`);
      }
    }
  },

  flex() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`\\left( ${selection} \\right)`);
      }
    }
  },

  fraction() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`\\frac{${selection}}{}`);
      }
    }
  },

  derivative() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`(${selection})'`);
      }
    }
  },

  integral() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        editor.insertText(`\\int_{}^{} ${selection} \\ dx`);
      }
    }
  },
  
  case() {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();

      if (selection) {
        if (selection == selection.toUpperCase()) {
          editor.insertText(`${selection.toLowerCase()}`);
        } else {
          editor.insertText(`${selection.toUpperCase()}`);
        }
      }
    }
  }
};
