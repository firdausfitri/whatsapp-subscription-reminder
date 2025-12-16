# WhatsApp Subscription Reminder System

A small automation system built to manage subscription expiry dates
and send WhatsApp reminders automatically.

This is a real system used in real conditions, not a polished product.

---

## Problem

I manage multiple subscriptions with different expiry dates.
Manually tracking and reminding users was error-prone and time-consuming.

I needed a simple system that:
- Tracks expiry dates
- Sends WhatsApp reminders automatically
- Alerts me when something breaks

---

## Constraints

- Google Sheets as the database
- No dedicated backend server
- WhatsApp API can fail or expire (QR-based)
- Must be easy to maintain solo

---

## Architecture

- **Google Sheets** — subscription data
- **Google Apps Script** — automation & scheduling
- **WhatsApp API** — message delivery
- **Health checks & fail-safe alerts** — detect failures early

---

## Key Features

- Expiry detection (tomorrow & yesterday)
- Idempotent reminders (no duplicate sends)
- Failure streak detection & auto-block
- Admin WhatsApp + email alerts
- Health check system

---

## Lessons Learned

- External APIs will fail — design for it
- Idempotency is critical for cron-based systems
- Logs and alerts matter more than optimism
- Simple systems can still break in complex ways

---

## Write-up

A detailed write-up of the system design and decisions is available here:

👉 https://dausfitri.wordpress.com/2025/12/16/building-a-whatsapp-reminder-system-with-google-sheets/

---

## Disclaimer

API keys, phone numbers, and sensitive values are not included in this repository.
