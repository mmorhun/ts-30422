import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    theia.window.onDidChangeVisibleTextEditors((editors: theia.TextEditor[]) => {
        let list: string = '';
        for (let editor of editors) {
            list += editor.document.uri.toString() + ', ';
        }
        console.log(list);
    });

    // theia.window.onDidC
}

export function stop() { }
