function handleKeyCommand(command)
{
  //  console.log("command = " + JSON.stringify(command));

        // copy the URL of the currently active tab to the clipboard.
    browser.tabs.query({active: true, windowId: browser.windows.WINDOW_ID_CURRENT})
	.then(tabs => browser.tabs.get(tabs[0].id))
	.then( t => {  navigator.clipboard.writeText( t.url) });
}


browser.commands.onCommand.addListener(handleKeyCommand);
