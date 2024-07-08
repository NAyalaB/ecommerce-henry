"use client";

import React, { useState, useEffect } from "react";
import { getProducts } from "../../helpers/product.helper";
import IProduct from "../../../interfaces/IProduct";
import Cards from "../Cards/Cards";


const Filtro: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);


const categories = [
    {id:1, name: "Celulares"},
    {id:2, name: "Computadoras"},
    {id:3, name: "Tablets"},
    {id:4, name: "Relojes"},
    {id:5, name: "Auriculares"},
    {id:6, name: "Parlantes"},
]
    



  const showData = async () => {
    const productsList = await getProducts();
    setProductsList(productsList);
    setFilteredProducts(productsList);
  };

  const seacher = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    const filtered = productsList.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };



const handleClick = (id: number) => {
const filterByCategory = productsList.filter((product)=> product.categoryId === id)
setFilteredProducts(filterByCategory)
};

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <div className="py-5px px-20px bg-blueSky flex justify-around mt-5">
        <div className="flex">
          <label htmlFor="Barra buscadora productos"></label>
          <input
            className="w-96 h-7 bg-white border-2  border-greenLight  border-r-grayMedium "
            style={{ borderRightWidth: "1px" }}
            type="text"
            name="buscador"
            value={search}
            onChange={seacher}
            placeholder="Buscar productos"
          />
        </div>

        <div className="ml-2.5 w-72 h-7  bg-white borde-2 border-greenLight flex items-center justify-center relative group">
          <a
            className="  block w-full h-full cursor-pointer no-underline text-center p-2 justify-center "
            href=""
          >
            Filtrar{" "}
          </a>
          <ul className="absolute top-full left-0 w-full z-50 hidden min-w-10 p-2 m-0.5 text-base text-grayDark text-left list-none bg-white bg-clip-padding border-blackOpac15 rounded shadow-blackOpac17 group-hover:block ">
            <li
              className="flex flex-col justify-start ml-2 relative text-grayOpac70 transition duration-200 "

            >
             <span className="font-bold">Categoria</span>
              <ul >
                <li onClick={() => setFilteredProducts(productsList)}
                    className=" ml-6 p-1 cursor-pointer text-grayOpac70 hover:text-black hover:bg-gray-100 transition duration-200"
                    >Todas</li>
                {categories.map((category) => {
                  return  <li key={category.id} className=" ml-6 p-1 cursor-pointer text-grayOpac70 hover:text-black hover:bg-gray-100 transition duration-200"
                  onClick={() => handleClick(category.id)}
                  > {category.name} </li>

                })}
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Cards products={filteredProducts} />
    </>
  );
};

export default Filtro;
