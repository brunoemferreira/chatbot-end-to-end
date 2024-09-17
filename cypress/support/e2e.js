import "./gui_commands";

const today = new Date();

Cypress.on("window:before:lead", (window) => {
  window.document.cookie = `OptanonAlertBoxClosed=${today.toISOString()}`;
});
