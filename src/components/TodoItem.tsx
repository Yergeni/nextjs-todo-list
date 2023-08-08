"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";

type TodoItemProps = {
	id: string;
	title: string;
	complete: boolean;
	toggleTodo: (id: string, complete: boolean) => void;
	removeTodo: (id: string) => void;
};

export default function TodoItem({
	id,
	title,
	complete,
	toggleTodo,
	removeTodo,
}: TodoItemProps) {
	const router = useRouter();

	return (
		<li key={id} className="flex gap-1 items-center">
			<input
				id={id}
				type="checkbox"
				className="cursor-pointer peer"
				defaultChecked={complete}
				onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<label
				htmlFor={id}
				className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
			>
				{title}
			</label>
			<button
				className="ml-3 px-1 text-red-500"
				onClick={() => {
					removeTodo(id);
					router.refresh();
				}}
			>
				&#10008;
			</button>
		</li>
	);
}
