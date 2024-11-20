"use client"
import Logo from "@/images/logo";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

const sampleData = [
    {
        name: "Apple",
        image: "https://greaatapptest.b-cdn.net/ronz/Apple_logo_black%20(1)-svg.png",
        request: 144,
        description: "Apple Inc. makes iPhones and Macs. Founded in 1976."
    },
    {
        name: "Puma",
        image: "https://greaatapptest.b-cdn.net/puma-logo.png",
        request: 72,
        description: "A German brand founded in 1948, famous for sportswear and footwear."
    },
    {
        name: "Starbucks",
        image: "https://greaatapptest.b-cdn.net/ronz/starbucks-seeklasdogo.png",
        request: 265,
        description: "Offers coffee and beverages, started in Seattle in 1971."
    },
    {
        name: "Xiaomi",
        image: "https://greaatapptest.b-cdn.net/ronz/Xiaomi_logo_(2021-).svg%20(1).png",
        request: 22,
        description: "Chinese tech giant, known for smartphones and gadgets since 2010."
    },
    {
        name: "Nike",
        image: "https://greaatapptest.b-cdn.net/ronz/nike-logo-png_seeklogo-99482%20(1).png",
        request: 106,
        description: "U.S. brand launched in 1964, leading in athletic gear."
    },
    {
        name: "Udemy",
        image: "https://greaatapptest.b-cdn.net/udemy-logo%20(1).png",
        request: 44,
        description: "Online learning platform with global courses, started in 2010."
    },
    {
        name: "Sony",
        image: "https://greaatapptest.b-cdn.net/ronz/png-clipart-sony-logo-fujifilm-company-lenovo-logo-text-trademark%20(1).png",
        request: 84,
        description: "Japanese company founded in 1946, known for electronics and entertainment."
    },
];

export default function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const resultsRef = useRef(null);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            const results = sampleData.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (resultsRef.current && !resultsRef.current.contains(event.target)) {
                setFilteredResults([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-[98%] mx-auto py-4 flex items-center justify-between">
            <div className="w-[34%] flex items-center gap-4">
                <Logo />
                <label className="w-full relative">
                    <input
                        placeholder="Search for brands, product or more"
                        className="pl-9 w-full text-xs py-2 rounded-lg px-3 placeholder-zinc-600 text-zinc-300 outline-none border border-darkest bg-darkest"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 pl-3">
                        <IoSearchOutline className="text-zinc-500" />
                    </span>
                    {filteredResults.length > 0 && (
                    <div ref={resultsRef} className="absolute top-10 max-h-[24vh] z-10 bg-darkest border overflow-y-scroll border-darkest rounded-lg mt-1 w-full">
                        {filteredResults.map((result, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 transition-all delay-200 duration-200 hover:bg-[#030303] cursor-pointer">
                                <div className="size-5 rounded-full overflow-auto flex items-center justify-center">
                                    <img className="w-[80%] h-auto" src={result.image}/>
                                </div>
                                <div className="flex flex-col gap-px">
                                    <div className="flex items-center gap-2">
                                        <p className="text-xs">{result.name}</p>
                                        <p className="font-light text-[9px] bg-zinc-900/60 px-2 rounded-[4px] text-zinc-400/50 py-px">{result.request} request</p>
                                    </div>
                                    <p className="text-xs text-gray-600">{result.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                </label>
            </div>
            <button className="bg-white text-black rounded-lg py-2 px-4 text-xs">Getting started</button>
        </div>
    );
}