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
    },

    deactivate() {
        this.subscriptions.dispose();
    },

    bold () {
        const editor = atom.workspace.getActiveTextEditor();
        if (editor) {
            const selection = editor.getSelectedText();

            // If text is selected
            if (selection) {
                editor.insertText(`**${selection}**`);
            } else {
                console.log('No selection');
            }
        }
    },

    italic () {
        const editor = atom.workspace.getActiveTextEditor();
        if (editor) {
            const selection = editor.getSelectedText();

            // If text is selected
            if (selection) {
                editor.insertText(`*${selection}*`);
            } else {
                console.log('No selection');
            }
        }
    }
    
    italic () {
        const editor = atom.workspace.getActiveTextEditor();
        if (editor) {
            const selection = editor.getSelectedText();

            // If text is selected
            if (selection) {
                editor.insertText(`*${selection}*`);
            } else {
                console.log('No selection');
            }
        }
    }
};
