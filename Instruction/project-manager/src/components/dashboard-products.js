import Link from "next/link";
import React from "react";
import { Table } from "react-bootstrap";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const DashboardProducts = ({ products }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Category</th>
					<th>Price</th>
					<th className="text-center">
						<Link href="/dashboard/products/new" className="btn btn-warning">
							<FaPlus /> New
						</Link>
					</th>
				</tr>
			</thead>
			<tbody>
				{products.map((item, index) => (
					<tr key={item.id}>
						<td>{index + 1}</td>
						<td>{item.title}</td>
						<td>{item.category}</td>
						<td>${item.price}</td>
						<td className="text-center">
							<FaEdit />
							<FaTrash />
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default DashboardProducts;
