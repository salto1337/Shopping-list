import { useState } from "react";

type HandleAddProduct = (name: string, number: number) => void;

export function Form({
	handleAddProduct,
}: {
	handleAddProduct: HandleAddProduct;
}) {
	const [inputValue, setInputValue] = useState("");
	const [inputNumber, setInputNumber] = useState(0);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		handleAddProduct(inputValue, inputNumber);
		setInputValue("");
		setInputNumber(0);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex gap-3">
				<input
					className="pl-3 border-2 w-full  text-black rounded-full py-1"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					type="text"
					placeholder="Product name"
					required
				/>
				<input
					value={inputNumber ? inputNumber : "Quantity"}
					className="pl-3 border-2 w-full  text-black rounded-full py-1"
					onChange={(e) => setInputNumber(Number(e.target.value))}
					type="number"
					placeholder="Quantity"
					min={1}
					max={15}
					required
				/>
			</div>
			<div className="flex justify-center mt-8">
				<button className="bg-white border-2 text-black w-full rounded-xl py-1 transition-all hover:bg-slate-300">
					Add
				</button>
			</div>
		</form>
	);
}
