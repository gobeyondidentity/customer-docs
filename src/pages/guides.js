import React, { useState } from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link'
import { Grid, Box } from '@site/src/components/Grid'

const GuideItems = [
  {
    title: <>Change how long Netdata stores metrics</>,
    href: '/guides/longer-metrics-storage',
    category: 'mdm',
    description: (
      <>
        Learn how to store metrics to your hard drive.
      </>
    )
  },
  {
    title: <>Machine learning (ML) powered anomaly detection</>,
    href: '/guides/monitor/anomaly-detection',
    category: 'web-login',
    description: (
      <>
        Enable Netdata's machine learning algorithm to spot anomalies effortlessly. 
      </>
    )
  },
  {
    title: <>Stop notifications for individual alarms</>,
    href: '/guides/monitor/stop-notifications-alarms',
    category: 'desktop-login',
    description: (
      <>
        Learn how to disable select alarms to minimize distractions.
      </>
    )
  },
  {
    title: <>Develop a custom data collector in Python</>,
    href: '/guides/python-collector',
    category: 'mdm',
    description: (
      <>
        Learn how write a custom data collector in Python, which you'll use to collect metrics from and monitor any application that isn't supported out of the box.
      </>
    )
  },
  {
    title: <>How to use any StatsD data source with Netdata</>,
    href: '/guides/monitor/statsd',
    category: 'policy',
    description: (
      <> 
        Learn how to monitor any custom application instrumented with StatsD with per-second metrics and fully customizable, interactive charts.
      </>
    )
  },
  {
    title: <>Unsupervised anomaly detection for Raspberry Pi monitoring</>,
    href: '/guides/monitor/raspberry-pi-anomaly-detection',
    category: 'policy',
    description: (
      <>
        Use a low-overhead machine learning algorithm and an open-source monitoring tool to detect anomalous metrics on a Raspberry Pi.
      </>
    )
  },
  {
    title: <>LAMP stack monitoring (Linux, Apache, MySQL, PHP) with Netdata</>,
    href: '/guides/monitor/lamp-stack',
    category: 'policy',
    description: (
      <>
        Set up robust LAMP stack monitoring (Linux, Apache, MySQL, PHP) in just a few minutes using a free, open-source monitoring tool that collects metrics every second.
      </>
    )
  },
  {
    title: <>Detect anomalies in systems and applications (part 1)</>,
    href: '/guides/monitor/anomaly-detection-python',
    category: 'policy',
    description: (
      <>
        Detect anomalies in any system, container, or application in your infrastructure with machine learning and the open-source Netdata Agent.
      </>
    )
  },
  {
    title: <>Monitor and visualize anomalies (part 2)</>,
    href: '/guides/monitor/visualize-monitor-anomalies',
    category: 'policy',
    description: (
      <>
        Using unsupervised anomaly detection, trigger alarms seconds after your mission-critical metrics behave strangely, then visualize everything in parallel to find the root cause.
      </>
    )
  },
  {
    title: <>Monitor any process in real-time with Netdata</>,
    href: '/guides/monitor/process',
    category: 'policy',
    description: (
      <>
        Tap into Netdata's powerful collectors, with per-second utilization metrics for every process, to troubleshoot faster and make data-informed decisions.
      </>
    )
  },
  {
    title: <>Monitor a Kubernetes (k8s) cluster with Netdata</>,
    href: '/guides/monitor/kubernetes-k8s-netdata',
    category: 'policy',
    description: (
      <>
        Use Netdata's helmchart, service discovery plugin, and Kubelet/kube-proxy collectors for real-time visibility into your Kubernetes cluster.
      </>
    )
  }, 
  {
    title: <>Monitor, troubleshoot, and debug applications with eBPF metrics</>,
    href: '/guides/troubleshoot/monitor-debug-applications-ebpf',
    category: 'policy',
    description: (
      <>
        Using this guide, you'll learn the fundamentals of setting up Netdata to give you kernel-level metrics from your application so that you can monitor, troubleshoot, and debug to your heart's content.
      </>
    )
  },
  {
    title: <>Monitor Pi-hole (and a Raspberry Pi) with Netdata</>,
    href: '/guides/monitor/pi-hole-raspberry-pi',
    category: 'api',
    description: (
      <>
        Netdata helps you monitor and troubleshoot all kinds of devices and the applications they run, including IoT devices like the Raspberry Pi and applications like Pi-hole.
      </>
    )
  },
  {
    title: <>How to optimize the Netdata Agent's performance</>,
    href: '/guides/configure/performance',
    category: 'api',
    description: (
      <>
        While the Netdata Agent is designed to monitor a system with only 1% CPU, you can optimize its performance for low-resource systems.
      </>
    )
  },
  {
    title: <>Use host labels to organize systems, metrics, and alarms</>,
    href: '/guides/using-host-labels',
    category: 'data-events',
    description: (
      <>
        Let's take a peek into how to create host labels and apply them across a few of Netdata's features to give you more organization power over your infrastructure.
      </>
    )
  },
  {
    title: <>Export and visualize Netdata metrics in Graphite</>,
    href: '/guides/export/export-netdata-metrics-graphite',
    category: 'data-events',
    description: (
      <>
        In this guide, we'll show you how to export Netdata metrics to Graphite for long-term storage and further analysis.
      </>
    )
  },
  {
    title: <>Monitor Nginx or Apache web server log files with Netdata</>,
    href: '/guides/collect-apache-nginx-web-logs',
    category: 'data-events',
    description: (
      <>
        This guide will walk you through using the new Go-based web log collector to turn the logs these web servers constantly write to into real-time insights into your infrastructure.
      </>
    )
  },
  {
    title: <>Use dimension templates to create dynamic alarms</>,
    href: '/guides/monitor/dimension-templates',
    category: 'data-events',
    description: (
      <>
        Dimension templates can condense many individual entities into one—no more copy-pasting one entity and changing the alarm/template and lookup lines for each dimension you'd like to monitor.
      </>
    )
  },
  {
    title: <>Monitor Unbound DNS servers with Netdata</>,
    href: '/guides/collect-unbound-metrics',
    category: 'data-events',
    description: (
      <>
        This guide will show you how to collect dozens of essential metrics from your Unbound servers with minimal configuration.
      </>
    )
  },
  {
    title: <>Monitor CockroachDB metrics with Netdata</>,
    href: '/guides/monitor-cockroachdb',
    category: 'data-events',
    description: (
      <>
        Collect more than 50 unique metrics from CockroachDB databases and put them on interactive visualizations designed for better visual anomaly detection.
      </>
    )
  },
  {
    title: <>Monitor a Hadoop cluster with Netdata</>,
    href: '/guides/monitor-hadoop-cluster',
    category: 'data-events',
    description: (
      <>
        Netdata comes with built-in and pre-configured support for monitoring both HDFS and Zookeeper.
      </>
    )
  },
  {
    title: <>The step-by-step Netdata guide</>,
    href: '/guides/step-by-step/step-00',
    category: 'data-events',
    description: (
      <>
        Learn about Netdata's many features and capabilities in a guided experienced designed for those new to monitoring and troubleshooting.
      </>
    )
  },
  {
    title: <>Step 1. Netdata's building blocks</>,
    href: '/guides/step-by-step/step-01',
    category: 'step-by-step',
    description: (
      <>
        In this introductory step, we'll talk about the fundamental ideas, philosophies, and UX decisions behind Netdata.
      </>
    )
  },
  {
    title: <>Step 2. Get to know Netdata's dashboard</>,
    href: '/guides/step-by-step/step-02',
    category: 'step-by-step',
    description: (
      <>
        Visit Netdata's dashboard to explore, manipulate charts, and check out alarms. Get your first taste of visual anomaly detection.
      </>
    )
  },
  {
    title: <>Step 3. Monitor more than one system with Netdata</>,
    href: '/guides/step-by-step/step-03',
    category: 'step-by-step',
    description: (
      <>
        While the dashboard lets you quickly move from one agent to another, Netdata Cloud is our SaaS solution for monitoring the health of many systems. We'll cover its features and the benefits of using Netdata Cloud on top of the dashboard.
      </>
    )
  },
  {
    title: <>Step 4. The basics of configuring Netdata</>,
    href: '/guides/step-by-step/step-04',
    category: 'data-events',
    description: (
      <>
        While Netdata can monitor thousands of metrics in real-time without any configuration, you may want to tweak some settings based on your system's resources.
      </>
    )
  },
  {
    title: <>Step 5. Health monitoring alarms and notifications</>,
    href: '/guides/step-by-step/step-05',
    category: 'data-events',
    description: (
      <>
        Learn how to tune, silence, and write custom alarms. Then enable notifications so you never miss a change in health status or performance anomaly.
      </>
    )
  },
  {
    title: <>Step 6. Collect metrics from more services and apps</>,
    href: '/guides/step-by-step/step-06',
    category: 'data-events',
    description: (
      <>
        Learn how to enable/disable collection plugins and configure a collection plugin job to add more charts to your Netdata dashboard and begin monitoring more apps and services, like MySQL, Nginx, MongoDB, and hundreds more.
      </>
    )
  },
  {
    title: <>Step 7. Netdata's dashboard in depth</>,
    href: '/guides/step-by-step/step-07',
    category: 'data-events',
    description: (
      <>
        Now that you configured your Netdata monitoring agent to your exact needs, you'll dive back into metrics snapshots, updates, and the dashboard's settings.
      </>
    )
  },
  {
    title: <>Step 8. Building your first custom dashboard</>,
    href: '/guides/step-by-step/step-08',
    category: 'data-events',
    description: (
      <>
        Using simple HTML, CSS, and JavaScript, we'll build a custom dashboard that displays essential information in any format you choose. You can even monitor many systems from a single HTML file.
      </>
    )
  },
  {
    title: <>Step 9. Long-term metrics storage</>,
    href: '/guides/step-by-step/step-09',
    category: 'step-by-step',
    description: (
      <>
        By default, Netdata can store lots of real-time metrics, but you can also tweak our custom database engine to your heart's content. Want to take your Netdata metrics elsewhere? We're happy to help you archive data to Prometheus, MongoDB, TimescaleDB, and others.
      </>
    )
  },
  {
    title: <>Step 10. Set up a proxy</>,
    href: '/guides/step-by-step/step-10',
    category: 'step-by-step',
    description: (
      <>
        Run Netdata behind an Nginx proxy to improve performance, and enable TLS/HTTPS for better security.
      </>
    )
  },
  {
    title: <>Deploy Netdata with Ansible</>,
    href: '/guides/deploy/ansible',
    category: 'data-events',
    description: (
      <>
        Deploy an infrastructure monitoring solution in minutes with the Netdata Agent and Ansible. Use and customize a simple playbook for monitoring as code.
      </>
    )
  },
  {
    title: <>Troubleshoot Agent-Cloud connectivity issues</>,
    href: '/guides/troubleshoot/troubleshooting-agent-with-cloud-connection',
    category: 'data-events',
    description: (
      <>
        A simple guide to troubleshoot occurrences where the Agent is showing as offline after claiming.
      </>
    )
  }
]

const GuideCategories = [
  {
    label: 'step-by-step',
    title: 'Step-by-step',
    description: <>Learn about Netdata's many features and capabilities in a guided experienced designed for those new to monitoring and troubleshooting.</>
  },
  {
    label: 'platform',
    title: 'Platform',
    description: <>Extract and visualize metrics from essential services or applications on your infrastructure.</>
  },
  {
    label: 'FAQ',
    title: 'FAQ',
    description: <>Frequent Asked Questions</>
  },
  {
    label: 'web-login',
    title: 'Web Login',
    description: <>Advanced configuration options for those who want to elevate their Netdata Agent-monitored nodes.</>
  },
  {
    label: 'deskotp-login',
    title: 'Desktop Login',
    description: <>Strategies and playbooks for bootstrapping an infrastructure monitoring solution with Netdata and infrastructure as code tools.</>
  },
  {
    label: 'policy',
    title: 'Policy',
    description: <>Improve Netdata's developer experience through code contributions, developing new data collectors, and more.</>
  },
  {
    label: 'data-events',
    title: 'Data & Events',
    description: <>Explore Netdata's interoperability with other monitoring and visualization platforms.</>
  },
  {
    label: 'api',
    title: 'API',
    description: <>Explore Netdata's interoperability with other monitoring and visualization platforms.</>
  },
  {
    label: 'mdm',
    title: 'Mobile Device Management',
    description: <>Explore Netdata's interoperability with other monitoring and visualization platforms.</>
  },
]

export default function Guides() {  
  let itemsFiltered = GuideItems;
  let categoriesFiltered = GuideCategories;

  const [searchTerm, setSearchTerm] = useState(null);

  if (searchTerm) {
    let searchTerms = searchTerm.split(" ");
    itemsFiltered = itemsFiltered.filter(item => {
      let content = `${item.title.props.children.toLowerCase()} ${item.category.toLowerCase()}`;
      return searchTerms.every(term => {
        return content.includes(term.toLowerCase())
      })
    })

    if (itemsFiltered.length) {
      categoriesFiltered = GuideCategories.filter(category => {
        let match = itemsFiltered.filter(item => {
          return category.label.includes(item.category)
        })

        if (match.length) {
          return true
        }
      })
    } else {
      categoriesFiltered = []
    }
  }

  return (


      <Layout
        title={`Guides`}
        description="Thoughtful guides to help you learn more about ...">
        <header className="overflow-hidden bg-gradient-to-br from-gray-200 to-gray-50 dark:from-gray-800 dark:to-gray-900 py-16 mb-16">
          <div className="container relative">
            <div className="z-10 relative w-full md:w-3/4 lg:w-1/2">
              <h1 className="text-2xl lg:text-5xl text-text font-semibold mb-6 dark:text-gray-50">Guides</h1>
              <p className="prose text-lg lg:text-xl text-text mb-6 dark:text-gray-50">Thoughtful guides to help you learn more about...</p>
              <input
                className="text-xl lg:text-2xl p-4 w-full dark:text-gray-200 dark:bg-gray-700"
                type="text"
                onChange={(event) => setSearchTerm(event.currentTarget.value)}
                placeholder="🔍 Search Netdata's guides..." />
            </div>
          </div>
        </header>
        <main className="container">
          {categoriesFiltered.map((props, idx) => (
            <>
              <div key={idx}>
                <div>
                  <h2 className="text-xl lg:text-3xl font-bold mb-2">{props.title}</h2>
                  <p className="lg:text-lg mb-6">{props.description}</p>
                </div>
              </div>
              <Grid columns="3" className="mb-24">
                {itemsFiltered.filter(item => item.category.includes(props.label)).map((props, idx) => (
                  <Box
                    key={idx}
                    to={props.href}
                    title={props.title}>
                    <p>{props.description}</p>
                  </Box>
                ))}
              </Grid>
            </>
          ))}

          {itemsFiltered.length == 0 &&
            <div className="">
              <div className="w-1/2 markdown">
                <p>Whoops! There is no guide matching matching your search. If you feel we're missing an essential guide and would like to request it, or discuss contributing the content yourself, hop over to our <Link href="https://community.netdata.cloud">community forum</Link>. Create a new topic and we'll be happy to discuss the guide with you there.</p>
              </div>
            </div>
          }
        </main>
      </Layout>

  );
}

