import React from 'react';
import Link from '@docusaurus/Link';

import { Grid, Box } from '@site/src/components/Grid';

export const ReleaseVersion = '2.76.0';

export const ReleaseDate = 'March 14, 2023';

export const ReleaseNotes = [
	'Improved RDP experience',

];



export const News = [
	{
		title: <>[Enticing title for release]</>,
		href: 'https://blog.netdata.cloud/introducing-netdata-paid-subscriptions/',
		date: 'Mar 14, 2023',
		type: 'Link',
		description: (
			<>
				Additional features and capabilities for users and businesses that need tighter and customizable integration ...
			</>
		),
	},
	{
		title: <>[Enticing title for release]</>,
		href: 'https://blog.netdata.cloud/introducing-netdata-paid-subscriptions/',
		date: 'Feb 28, 2023',
		type: 'Link',
		description: (
			<>
				Additional features and capabilities for users and businesses that need tighter and customizable integration ...
			</>
		),
	},
];

export default function NewsTimeline() {


	return (

<Grid className="mb-16" columns="2">
			<main className="container">

				<div id="updates" className="relative flex flex-row flex-wrap pb-12">
					<div className="relative w-full lg:w-3/4">
						<h2 className="z-10 relative text-xl lg:text-3xl font-semibold mb-6">
							What's new
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
			</Grid>
	);
}