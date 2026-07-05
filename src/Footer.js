import React from "react";
import './App.css';

import logo from "./assets/apple-logo.png"; // <-- point this to your own logo file

/**
 * Apple Store style footer.
 *
 * Note: the long legal/offer disclaimer paragraphs below are written as
 * generic placeholder copy (same structure/topics as Apple's real footer —
 * EMI, cashback, trade-in, education pricing, Apple Music trial, etc.)
 * rather than word-for-word copies of Apple's own legal text, since that
 * text is Apple's copyrighted copy. Swap in your own store's real terms
 * before shipping.
 */

const quickLinks = ["Find a Store", "Order Status", "Shopping Help", "Your Saves"];

const columns = [
  {
    heading: "Shop and Learn",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
    extra: { heading: "Apple Wallet", links: ["Wallet"] },
  },
  {
    heading: "Account",
    links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
    extra: {
      heading: "Entertainment",
      links: [
        "Apple One",
        "Apple TV",
        "Apple Music",
        "Apple Arcade",
        "Apple Podcasts",
        "Apple Books",
        "App Store",
      ],
    },
  },
  {
    heading: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Summer Camp",
      "Ways to Buy",
      "Apple Trade In",
      "Recycling Programme",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    heading: "For Business",
    links: ["Apple and Business"],
    extra: {
      heading: "For Education",
      links: ["Apple and Education", "Shop for Education", "Shop for College"],
      extra2: {
        heading: "For Healthcare",
        links: ["Apple in Healthcare", "Health on Apple Watch"],
      },
    },
  },
  {
    heading: "Apple Values",
    links: [
      "Accessibility",
      "Environment",
      "Privacy",
      "Supply Chain",
    ],
    extra: {
      heading: "About Apple",
      links: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="apple-footer">
      <div className="apple-footer__inner">
        {/* Quick Links */}
        <div className="apple-footer__quicklinks">
          <h2>Quick Links</h2>
          <div className="apple-footer__quicklink-buttons">
            {quickLinks.map((label) => (
              <a key={label} href="#" className="apple-footer__pill">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Legal disclaimers (placeholder copy — see note above) */}
        <div className="apple-footer__legal">
          <p>
            <sup>◇</sup> No Cost EMI offers are available on eligible products purchased with
            participating cards over select tenures. Monthly installment amounts are rounded and
            set by your card issuer, and minimum spend thresholds may apply. This offer excludes
            Business, Education, and Corporate Employee Purchase Plan pricing, and may be changed
            or withdrawn at any time. <a href="#">See terms</a>.
          </p>

          <p>
            <sup>Δ</sup> Instant cashback is offered on qualifying purchases made with select
            partner bank cards, subject to a minimum order value. Cashback is limited to a set
            number of orders within a rolling period and is calculated on the transaction total
            after any discounts or trade-in credit. Cancellations or adjustments may result in
            cashback being recalculated or clawed back. This offer excludes Business, Education,
            and Corporate Employee Purchase Plan pricing. <a href="#">Additional terms apply</a>.
          </p>

          <p>
            <sup>±</sup> Education pricing is open to current and newly admitted students, their
            parents, and teaching staff at all levels. <a href="#">See terms</a> for details.
          </p>

          <p>
            <sup>†</sup> Listed prices are Maximum Retail Price, inclusive of all applicable taxes.
          </p>

          <p>
            <sup>‡</sup> Trade-in for select device categories is only available in physical
            stores in this region and is not offered through the online store. Trade-in values
            depend on the condition, age, and configuration of the device submitted, and not
            every device will qualify for credit. Trade-in credit is applied toward a new
            purchase, and the final value awarded is based on inspection of the device against the
            original estimate. A valid photo ID may be required in-store. The retailer and its
            trade-in partners reserve the right to refuse, limit, or cancel any trade-in
            transaction. Restrictions apply.
          </p>

          <p>
            <sup>※</sup> Offer limited to new subscribers only; standard subscription pricing
            applies after an introductory trial period on a new eligible device, for a limited
            time. Redeeming the offer on audio or wearable devices requires pairing with a
            compatible phone or tablet running current system software. The offer is valid for a
            few months following activation of the eligible device, limited to one redemption per
            account regardless of how many eligible devices are purchased. The subscription
            renews automatically until cancelled. Restrictions and other <a href="#">terms</a>{" "}
            apply.
          </p>

          <ol>
            <li>
              Special pricing is available to qualified customers. Speak with a store specialist
              or call our sales line to find out how to qualify.
            </li>
            <li>
              On-device AI features are available in beta and may not be available in all regions
              or languages. See the support site for current feature and language availability.
            </li>
          </ol>
        </div>

        <div className="apple-footer__location-note">
          <p>
            We use your location to show you delivery options faster. We found your location using
            your IP address or because you entered it during a previous visit to Apple.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="apple-footer__breadcrumb">
          <img src={logo} alt="Logo" className="apple-logo" />
          <span className="sep">&gt;</span>
          <strong>Apple Store Online</strong>
        </div>

        {/* Link columns */}
        <div className="apple-footer__columns">
          {columns.map((col) => (
            <div className="apple-footer__column" key={col.heading}>
              <h3>{col.heading}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>

              {col.extra && (
                <div className="apple-footer__column--split">
                  <h3>{col.extra.heading}</h3>
                  <ul>
                    {col.extra.links.map((link) => (
                      <li key={link}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {col.extra && col.extra.extra2 && (
                <div className="apple-footer__column--split">
                  <h3>{col.extra.extra2.heading}</h3>
                  <ul>
                    {col.extra.extra2.links.map((link) => (
                      <li key={link}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More ways to shop */}
        <div className="apple-footer__more-ways">
          <p>
            More ways to shop: <a href="#">Find a Store</a> or <a href="#">other retailers</a> near
            you. Or call our sales line.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="apple-footer__bottom">
          <span>Copyright © {year} Your Company. All rights reserved.</span>
          <div className="apple-footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#">Terms of Use</a>
            <span className="divider">|</span>
            <a href="#">Sales Policy</a>
            <span className="divider">|</span>
            <a href="#">Legal</a>
            <span className="divider">|</span>
            <a href="#">Site Map</a>
          </div>
          <span className="apple-footer__country">India</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;