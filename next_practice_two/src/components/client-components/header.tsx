"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
	const currentPage = usePathname();

	const [search, setSearch] = useState("");

	return (
		<header className="flex items-center w-full bg-slate-200 shadow-lg p-2">
			<div className="max-w-7xl mx-auto flex justify-between items-center w-full">
				<div className="flex gap-10 justify-center items-center p-4 font-bold text-gray-500 text-base">
					<Link
						href="/"
						className={`${currentPage === "/" ? "text-black" : ""}`}
					>
						Home
					</Link>
					<Link
						href="/about"
						className={`${currentPage === "/about" ? "text-black" : ""}`}
					>
						About
					</Link>
				</div>
				<div className="">
					<input
						type="text"
						value={search}
						placeholder="Search..."
						className="p-2 px-5 rounded-full border border-slate-400 focus:outline-none text-sm"
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
