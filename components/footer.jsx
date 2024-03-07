"use server";

import Link from "next/link";
import Container from "./container";
import CurrentYear from "./current-year";
import { categoriesQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanity.server";
import { footerCompanyData } from "@/lib/footer.data";
import BrandLink from "./brand-link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default async function Footer() {
	const categories = await sanityFetch({
		query: categoriesQuery,
		tags: ["category"],
	});

	return (
		<footer className="bg-card border-t border-accent-2 py-10">
			<Container>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center">
					<div className="space-y-6 col-span-2 sm:col-span-1">
						<div className="w-[150px] sm:w-[180px]">
							<BrandLink />
						</div>
						<div className="flex items-center text-card-foreground-secondary justify-evenly">
							<Link
								className="hover:text-foreground"
								href="https://www.instagram.com/zappotech/"
								target="_blank"
							>
								<Instagram />
							</Link>
							<Link
								className="hover:text-foreground"
								href="https://twitter.com/zappotech/"
								target="_blank"
							>
								<Twitter />
							</Link>
							<Link className="hover:text-foreground" href="" target="_blank">
								<Linkedin />
							</Link>
						</div>
					</div>
					<FooterColumn heading={"Company"} data={footerCompanyData} />
					<FooterColumn heading={"Topic"} data={categories} />
				</div>
				<div className="text-center pt-14">
					<p className="text-sm font-semibold">
						Copyright © <CurrentYear /> ZappoTech.{" "}
						<br className="block sm:hidden" />
						All rights reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
}

function FooterColumn({ heading, data }) {
	return (
		<div className="font-medium text-card-foreground-secondary space-y-2">
			<span className="text-foreground text-xl leading-7">{heading}</span>
			<ul className="gap-2 grid grid-cols-1">
				{data?.map((it) => (
					<li key={it.slug}>
						<Link className="hover:text-foreground max-w-max" href={it.slug}>
							{it.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
