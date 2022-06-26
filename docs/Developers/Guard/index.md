---
id: doc-openmev
title: OpenMEV
hide_title: false
hide_table_of_contents: false
sidebar_label: OpenMEV
sidebar_position: 1
pagination_label: Introduction
description: OpenMEV Specification
keywords:
  - technical
  - specification
  - openmev
  - flashbots
  - mev
---

# OpenMEV Protocol Overview

🕵️ Full privacy <br /> 🛡️ Front running protection <br /> 💰 No more costly reverts <br />

### What is OpenMEV?

OpenMEV provides a trading proxy engine that is used to protect your transactions and maximize profits on the blockchain network. It aims to provide traders, arbitrageurs and block producers with an accessible, convenient and secure infrastructure for transactions.

- More accessible: allow ordinary users to easily discover the trading risk and value on the blockchain network

- More convenient: enable the arbitrage traders more opportunities to increase profits at a low-cost More secure: make transactions on the blockchain network more secure and private.

### What public services does OpenMEV provide?

**Trading Proxy**: A private trading proxy that supports private communication between traders and block producers, can be used for efficient transaction protection and value maximization.

**OpenMEV Explorer**: A set of tools used to improve the transparency of profit opportunities on the blockchain network and reduce information asymmetry.

## Status of Services

[Check our statuspage via status.manifoldfinance.com](https://status.manifoldfinance.com/)

## SushiSwap

The SushiSwap integration provides a service that realizes a profit by transaction backrunning swaps direclty in-protocol through the SushiGuardRouterV01 contract.

Right now every user sends a transaction directly to the network mempool and thus give away the arbitrage, front-running, back-running, and sandwhiching opportunities to miners(or random bots).

OpenMEV provides a credibly neutral platform that enables the aggregation of transactions (batching) for the purposes of extracting MEV profits and returning them back to the traders.

### What is `credible neutrality`?

> "...that it is not just neutrality that is required here, it is credible neutrality. That is, it is not just enough for a mechanism to not be designed to favor specific people or outcomes over others; it’s also crucially important for a mechanism to be able to convince a large and diverse group of people that the mechanism at least makes that basic effort to be fair."
>
> - Vitalik Buterin, [credible neutrality as a guiding principle](https://nakamoto.com/credible-neutrality/)

This ethos is at the heart of OpenMEV. Part of establishing credible neutrality is having a clear and comprehensive rule book that regulates off-chain behavior and activities. Our assumption concerning governance is that methods and processes that work in legacy markets may not be applicable in adversarial environments such as permissionless blockchains. With that understanding it is important not to rely solely on such systems and mechanics long term.

Discuss this and more on our [discourse forums](https://forums.manifoldfinance.com)
