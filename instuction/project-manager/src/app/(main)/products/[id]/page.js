import PageHeader from "@/components/page-header";
import { notFound } from "next/navigation";
import React from "react";

export const metadata = {
	title: "Product Details",
	description: "Our company supports ...",
};


const Page = ({ params, searchParams }) => {
	console.log("PARAMS", params.id);
	console.log("CATID=", searchParams.catid);

	if(params.id>100) notFound();

	return <>
		<PageHeader title="Product Details"/>
	</>;
};

export default Page;