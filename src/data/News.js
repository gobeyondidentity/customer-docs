import React from 'react';

export const ReleaseVersion = '1.38.0';

export const ReleaseDate = 'February 6, 2023';

export const ReleaseNotes = [
	'DBENGINE v2',
	'Runtime functions',
	'Events feed',
	'Cloud alert notificcations',
	'Improved RBAC',
];



export const News = [
	{
		title: <>Netdata Paid Subscriptions Released</>,
		href: 'https://blog.netdata.cloud/introducing-netdata-paid-subscriptions/',
		date: 'Feb 22, 2023',
		type: 'Link',
		description: (
			<>
				Additional features and capabilities for users and businesses that need tighter and customizable integration of the monitoring solution to their processes.
			</>
		),
	},
	{
		title: <>Netdata Feed</>,
		href: 'https://learn.netdata.cloud/docs/troubleshooting-and-machine-learning/events-feed',
		date: 'Feb 21, 2023',
		type: 'Link',
		description: (
			<>
				Receive Live feed of events from your infrastructure! 
			</>
		),
	},
	{
		title: <>Netdata Functions</>,
		href: 'https://blog.netdata.cloud/netdata-functions/',
		date: 'Feb 09, 2023',
		type: 'Link',
		description: (
			<>
				Execute anything from the Netdata Agent Collector in run-time and on-demand using Functions.
			</>
		),
	},	
	{
		title: <>Netdata release 1.38.0</>,
		href: 'https://github.com/netdata/netdata/releases/tag/v1.38.0',
		date: 'Feb 06, 2023',
		type: 'Link',
		description: (
			<>
				Huge performance, scalability and stability improvements, runtime functions, events feed, more alert notifications on Netdata Cloud and more! 	
			</>
		),
	},
	{
		title: <>Netdata data source plugin for Grafana</>,
		href: 'https://www.netdata.cloud/blog/introducing-netdata-source-plugin-for-grafana',
		date: 'Nov 09, 2022',
		type: 'Link',
		description: (
			<>
				This initial release of the Netdata data source plugin aims to maximize the troubleshooting capabilities of Netdata in Grafana, making them more widely available. 
			</>
		),
	},
	{
		title: <>New Demo space kickoff</>,
		href: 'https://app.netdata.cloud/spaces/netdata-demo/',
		date: 'Oct 23, 2022',
		type: 'Link',
		description: (
			<>
				We have made available multiple rooms in our Demo space for you to experience the power and simplicity of Netdata with live infrastructure monitoring. 
			</>
		),
	},
	{
		title: <>A PostgreSQL collector, as it supposed to be</>,
		href: 'https://blog.netdata.cloud/postgresql-monitoring/',
		date: 'Sept 26, 2022',
		type: 'Link',
		description: (
			<>
				Netdata now collects 100+ PostgreSQL metrics and visualizes them across 60+ composite charts.
			</>
		),
	},
	{
		title: <>Netdata Agent patch release</>,
		href: 'https://github.com/netdata/netdata/releases/tag/v1.35.1',
		date: 'June 9, 2022',
		type: 'Doc',
		description: (
			<>
				For users who installed Netdata with a Static build since March 22, 2022, the v1.35.1 patch release fixes an issue in the static build installation code that causes automatic updates to be unintentionally disabled when updating static installs.
			</>
		),
	},
	{
		title: <>Anomaly Advisor, on-device machine learning, and Metric Correlations on the Agent</>,
		href: 'https://github.com/netdata/netdata/releases/tag/v1.35.0',
		date: 'June 8, 2022',
		type: 'Doc',
		description: (
			<>
				Check out our Netdata v1.35.0 release notes to learn about our newest feature offerings, including Anomaly Advisor, on-device machine learning, and our introduction of Metric Correlations on our open-source agent dashboard.
			</>
		),
	},
	{
		title: <>Netdata's new Home tab</>,
		href: 'docs/cloud/visualize/overview',
		date: 'May 18, 2022',
		type: 'Doc',
		description: (
			<>
				Our new Home tab provides a predefined dashboard of relevant information about entities in a War Room. This tab will automatically present summarized information in an easily digestible display.
			</>
		),
	},
	{
		title: <>SNMP collector now runs on Go</>,
		href: '/docs/agent/collectors/go.d.plugin/modules/snmp',
		date: 'March 28, 2022',
		type: 'Doc',
		description: (
			<>
				Go is known for its reliability and blazing speed - precisely what you need when monitoring networks. We've rewritten our SNMP collector from Node.js to Go. Apart from improved configuration options, the new collector eliminates the need for Node.js, slimming down our dependency tree.
			</>
		),
	},
	{
		title: <>Play pretend: The kickstart script now has a dry-run mode</>,
		href: '/docs/agent/packaging/installer/update#determine-which-installation-method-you-used',
		date: 'Mar 16, 2022',
		type: 'Doc',
		description: (
			<>
				If you have a system that you need to be extra careful on, we have good
				news for you: When installing or updating Netdata using the kickstart
				script, you can use the <code>--dry-run</code> option to get a report of
				what would happen on your node.
			</>
		),
	},
];

export default function NewsTimeline() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout description="Here you'll find documentation and reference material for monitoring and troubleshooting your systems with Netdata.">
			<HomepageHeader />
			<main className="container">
				<Grid className="mb-16" columns="2">
					<Box
						to="/docs/getting-started/install-netdata"
						title="Get started"
						cta="Install now"
						image={true}
					>
						Install the open-source monitoring agent on physical/virtual systems
						running most Linux distributions (Ubuntu, Debian, CentOS, and more),
						container platforms (Kubernetes clusters, Docker), and many other
						operating systems, with no <code>sudo</code> required.
					</Box>
					<Box to="/docs/getting-started" title="Docs" cta="Read the docs" image={false}>
						Solution- and action-based docs for Netdata's many features and
						capabilities. Your table of contents to becoming an expert in using
						Netdata to monitor and troubleshoot applications and their
						infrastructure.
					</Box>
				</Grid>
				<div id="updates" className="relative flex flex-row flex-wrap pb-12">
					<div className="relative w-full lg:w-3/4">
						<h2 className="z-10 relative text-xl lg:text-3xl font-semibold mb-6">
							What's new at Netdata?
						</h2>
						<div className="z-0 absolute top-4 -bottom-8 left-1.5">
							<div
								className="z-0 absolute top-0 w-1 h-full"
								id="timeline"
							></div>
						</div>
						<ul>
							{News.map((props, idx) => (
								<li key={`${props.title}-${idx}`} className="group">
									<Link
										to={props.href}
										className="grid md:grid-cols-8 xl:grid-cols-9 items-start"
									>
										<div className="md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 p-8 rounded group-hover:bg-gray-50 dark:group-hover:bg-gray-800">
											<h3 className="text-lg lg:text-xl font-semibold mb-2">
												{props.title}
											</h3>
											<p>{props.description}</p>
										</div>
										<div className="flex items-center md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 pt-8">
											<div className="z-10 w-4 h-4 mr-8 bg-green rounded-full group-hover:bg-blue" />
											<time className="text-base text-gray-500 font-medium uppercase dark:text-gray-400">
												{props.date}
											</time>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="flex-1 markdown prose-lg ml-0 lg:ml-8 mt-16">
						<h2 className="z-10 relative text-lg lg:text-2xl font-semibold mb-6">
							Latest major release
							<span className="flex items-center font-semibold">
								<code className="text-base">{ReleaseVersion}</code>
								<span className="text-base mx-2">•</span>
								<time className="text-base text-gray-500 font-medium uppercase dark:text-gray-400">
									{ReleaseDate}
								</time>
							</span>
						</h2>
						<ul>
							{ReleaseNotes.map((props, idx) => (
								<li
									key={props}
									dangerouslySetInnerHTML={{ __html: props }}
								></li>
							))}
						</ul>
						<p>
							Read the{' '}
							<Link
								to={`https://github.com/netdata/netdata/releases/tag/v${ReleaseVersion}`}
							>
								release notes
							</Link>{' '}
							or{' '}
							<Link to="/docs/agent/packaging/installer/update">
								{' '}
								update now
							</Link>
							.
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
}