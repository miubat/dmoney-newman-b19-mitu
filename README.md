# Dmoney Newman B19

## Project Summary

API test automation suite for the **Dmoney** mobile money application, built with [Postman](https://www.postman.com/) collections and run headlessly via [Newman](https://github.com/postmanlabs/newman). It exercises the full user journey — from account creation to money transfers — across five actor types (Admin, System, Agent, Customer, Merchant), including both positive and negative test cases, and produces a styled HTML test report.

### What the collection tests

| Folder | Covered scenarios |
|---|---|
| **Admin** | Login, create Customer/Agent/Merchant, view user list, activate accounts, negative cases (duplicate email, missing required field) |
| **System** | System login, deposit funds to an Agent |
| **Agent** | Login, OTP verification, deposit to Customer, negative cases (insufficient balance, invalid account) |
| **Customer1** | Login, OTP verification, send money to Customer2, negative cases (insufficient balance, invalid receiver) |
| **Customer2** | Login, OTP verification, cash-out from Agent, pay Merchant, negative cases (insufficient balance, invalid merchant account) |
| **Merchant** | Login, OTP verification |

Auth tokens and OTPs are captured from responses and chained into collection variables, so the whole run simulates a realistic end-to-end money flow: Admin onboards users → System funds an Agent → Agent deposits to a Customer → Customer sends/cashes out/pays a Merchant.

## Technologies

- **Node.js** — runtime
- **Newman** (`newman`) — CLI collection runner for Postman
- **newman-reporter-htmlextra** — generates a rich HTML test report
- **Postman Collection** (`collection/Dmoney-B19.json`) — API test cases

## Project Structure

```
dmoney-newman-b19/
├── collection/
│   └── Dmoney-B19.json   # Postman collection with API test requests
├── Reports/
│   └── report.html       # Generated HTML test report (created after a run)
├── Report.js             # Script that runs the collection via Newman
└── package.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) (includes npm)
- Git

## Clone the Project

```bash
git clone <repository-url>
cd dmoney-newman-b19
```

## Install Dependencies

```bash
npm install
```

## Run the Tests

```bash
npm test
```

This runs `Report.js`, which executes the Postman collection (`collection/Dmoney-B19.json`) through Newman and generates an HTML report at `Reports/report.html`. Open that file in a browser to view detailed results.
