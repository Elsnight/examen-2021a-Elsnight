import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import "../styles/App.css";
import { Form } from "antd";

const Joker = () => {
  const [bromas, setBromas] = useState([]);
  const [catego, setCatego] = useState([]);
  const [searching, setSearching] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchDat();
  }, []);

  // llamado de datos
  const fetchData = async () => {
    const data = await fetch("https://api.chucknorris.io/jokes/random");
    const users = await data.json();
    setBromas(users);
  };

  // llamado de categor
  const fetchDat = async () => {
    const data = await fetch("https://api.chucknorris.io/jokes/categories");
    const info = await data.json();
    setCatego(info);
  };

  const handleSearchNewAdvice = () => {
    const getData = async () => {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const users = await response.json();
      //console.log("data: ", data);
      setBromas(users);
    };
    getData();
  };

  //
  const handleSearchAdvice = () => {
    const wordToSearch = document.getElementById("advice").value.toLowerCase();
    const getData = async () => {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${wordToSearch}`
      );
      const data = await response.json();
      console.log("resultados de busqueda: ", data);
      if (data.total !== undefined) {
        setSearching(data);

        // console.log("2", data);
      } else {
        setSearching([]);
      }
      // console.log(data);
    };
    if (wordToSearch !== "") {
      getData();
    } else {
      setSearching([]);
    }
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Form>
      <div className="random-advice">
        <div className="random-advice">
          <h1>Chuck Norris Jokes</h1>
          <br />
          <h2>Categorias :</h2>
          <br />
          {/*Llamado desde la base */}
          {/*<Checkbox onChange={onChange}>*/}
          {/*  Checkbox*/}
          {/*  <select name="categorias" id="selCategorias">*/}
          {/*    {catego.map((item, i) => (*/}
          {/*      <option key={"categoria" + i} value={i}>*/}
          {/*        {item}*/}
          {/*      </option>*/}
          {/*    ))}*/}
          {/*  </select>*/}
          {/*</Checkbox>*/}
          <div>
            <select onChange={onChange}>
              <option value="DEFAULT">Escoja una situacion ...</option>
              <option value="Cualquiercategoría">Cualquier categoría</option>
              <option value="animal">animal</option>
              <option value="celebrity">celebrity</option>
              <option value="career">career</option>
              <option value="dev">dev</option>
              <option value="explicit">explicit</option>
              <option value="fashion">fashion</option>
              <option value="food">food</option>
              <option value="history">history</option>
              <option value="money">animal</option>
              <option value="movie">celebrity</option>
              <option value="music">career</option>
              <option value="political">dev</option>
              <option value="religion">explicit</option>
              <option value="science">fashion</option>
              <option value="sport">food</option>
              <option value="travel">history</option>
            </select>
          </div>

          <br />
          <h3>{bromas.value}</h3>
          <div className="random-advice__buttons">
            <Button
              className="blue-button"
              button_name="Otra broma"
              button_func={() => handleSearchNewAdvice(bromas.id)}
            />
          </div>
          <div className="searching-section">
            <h2>Búsqueda de consejos</h2>
            <div className="searching-section__bar">
              <label htmlFor="advice">Palabra clave: </label>
              <input type="text" name="advice" id="advice" />
              <Button button_name="Buscar" button_func={handleSearchAdvice} />
            </div>
            <h3>Resultados de la búsqueda</h3>
            <div className="searching-section__table">
              {searching.length === 0
                ? "No hay resultados"
                : searching.result.map((item, key) => (
                    <div className="searching-section__table--item" key={key}>
                      <p>{item.value} </p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Joker;
