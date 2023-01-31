import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'Apple Wallet® Integration',
		Svg: require('@site/static/img/Add_to_Apple_Wallet_rgb_US-UK.svg').default,
		description: (
			<>
				PassWick uses the Apple Wallet app so your customers with iOS devices already have everything they need.
				No external or third party apps are required.

				Design passes and integrate with your business application data. PassWick has powerful integration APIs
				and expression builders that can pull data from your application endpoints, make realtime decisions
				about how wallet passes will look and behave, and fully customize wallet passes.
			</>
		),
	},
	{
		title: 'Automated Pass Design',
		Png: require('@site/static/img/icon.png').default,

		description: (
			<>
				Use the Automated Pass Designer to build passes for your organization. You choose the pass style:
				Boarding Pass, Coupon, Store Card, Event Ticket, or a Generic pass. Then, add your organization's
				colors, icons, logos, phrases, and terms or conditions.

				PassWick provides the ability to change the behavior of wallet passes based on information contained in
				the pass. Using a powerful expression language and designer, you can add dynamic and custom
				front-of-pass images based on wallet pass data.
			</>
		),
	},
	{
		title: 'Rich API',
		Png: require('@site/static/img/icon.png').default,
		description: (
			<>
				With a PassWick account you have complete access to the PassWick APIs for customer management, pass
				delivery, linking to passes from your web site, pass redemption, and template pass maintenance. </>
		),
	},
];

function Feature({Svg, Png, title, description}) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				{Svg &&
					<Svg className={styles.featureSvg} role="img"/>
				}
				{Png &&
					<img className={styles.featurePng} role="img" src={Png} alt="PassWick Doc Image"/>
				}
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
