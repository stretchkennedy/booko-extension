browser.commands.onCommand.addListener((c) => {
  browser.tabs.create({ url: "list.html" });
});
