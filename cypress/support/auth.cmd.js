Cypress.Cookies.defaults({
  preserve: "session_id"
});

// Preserve all cookies across tests
Cypress.Cookies.defaults({
  preserve: (cookie) => {
    return true;
  }
});