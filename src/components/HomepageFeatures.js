import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList1 = [
  {
    title: "Device360 Getting started",
    Svg: require("@site/static/img/get-started.svg").default,
    description: (
      <>
        Get started with Beyond Identity with ready-made instructions for common
        use cases.
      </>
    ),
    link: "/docs/device360-qs",
  },
  {
    title: "Device360 Installation",
    Svg: require("@site/static/img/platform.svg").default,
    description: <>A review of our platform and how to put it to good use.</>,
    link: "/docs/install-authenticator",
  },
  {
    title: "Device360 Release Notes ⧉",
    Svg: require("@site/static/img/reference.svg").default,
    description: <>Stay informed with the latest updates and enhancements.</>,
    link: "/docs/release-notes",
  },
];

const FeatureList2 = [
  {
    title: "Secure Workforce API Reference ⧉",
    Svg: require("@site/static/img/reference.svg").default,
    description: (
      <>Manage resources programmatically with our API and CLI tools.</>
    ),
    link: "/api/v1",
  },
  {
    title: "Slack ⧉",
    Svg: require("@site/static/img/slack.svg").default,
    description: (
      <>
        Join our Slack community for questions or support with your Beyond
        Identity account.
      </>
    ),
    link: "https://join.slack.com/t/byndid/shared_invite/zt-1anns8n83-NQX4JvW7coi9dksADxgeBQ",
  },
  {
    title: "Support ⧉",
    Svg: require("@site/static/img/support.svg").default,
    description: (
      <>
        Connect with our Support team for prompt solutions and guidance on any
        aspect of your experience.
      </>
    ),
    link: "https://support.beyondidentity.com",
  },
];

function Feature({ Svg, title, description, link }) {
  if (title === "Release Notes ⧉") {
    return (
      <div className={clsx("square col col--4")}>
        <a
          className="card__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <div className="card__svg padding-top--xs padding-right--sm">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="tile_content">
          <div className="card__title">{title}</div>
          <div className="card__subtitle">{description}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={clsx("square col col--4")}>
        <a className="card__link" href={link}></a>
        <div className="card__svg padding-top--xs padding-right--sm">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="tile_content">
          <div className="card__title">{title}</div>
          <div className="card__subtitle">{description}</div>
        </div>
      </div>
    );
  }
}

function FeatureExt({ Svg, title, description, link }) {
  return (
    <div className={clsx("square col col--4")}>
      <a
        className="card__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      ></a>
      <div className="card__svg padding-top--xs padding-right--sm">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="tile_content">
        <div className="card__title">{title}</div>
        <div className="card__subtitle">{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList1.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {FeatureList2.map((props, idx) => (
            <FeatureExt key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
