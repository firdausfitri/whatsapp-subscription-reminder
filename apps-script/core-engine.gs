/**
 * Core expiry check engine
 * (Sensitive values removed)
 */

function runExpiryCheck_(mode) {
  const sheet = SpreadsheetApp.getActive()
    .getSheetByName("Customers");

  const data = sheet.getDataRange().getValues();
  const today = new Date(); today.setHours(0,0,0,0);

  for (let i = 1; i < data.length; i++) {
    const username = data[i][0];
    const phone    = data[i][1];
    const expiry   = data[i][3];

    if (!phone || !expiry) continue;

    // expiry logic (simplified)
    const exp = new Date(expiry);
    exp.setHours(0,0,0,0);

    if (mode === "TOMORROW" && isTomorrow(exp)) {
      sendReminder_(phone, username);
    }

    if (mode === "YESTERDAY" && isYesterday(exp)) {
      sendExpiredNotice_(phone, username);
    }
  }
}
