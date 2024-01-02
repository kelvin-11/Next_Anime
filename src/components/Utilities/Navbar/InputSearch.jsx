"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return; //jika keyword atau spasi tidak diisi tidak menjalankan perintah berikutnya

    if (event.key == "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="cari anime..."
        className="w-full p-2 rounded-md"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
