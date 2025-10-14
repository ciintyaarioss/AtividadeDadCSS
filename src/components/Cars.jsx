import styles from "./Cars.module.css";

import ferrari from "../assets/ferrari488gtb.jpg";
import tesla from "../assets/Tesla.jpg";
import bmw from "../assets/bmw.jpg";
import lamborghini from "../assets/lamborghini.jpg";
import porsche from "../assets/porsche.jpeg";
import audi from "../assets/audir8.jpeg";

const Cars = () => {
  const carros = [
    { id: 1, foto: ferrari, marca: "Ferrari", modelo: "488 GTB", ano: 2020, cor: "Vermelho" },
    { id: 2, foto: tesla, marca: "Tesla", modelo: "Model S", ano: 2022, cor: "Branco" },
    { id: 3, foto: bmw, marca: "BMW", modelo: "M4 Competition", ano: 2021, cor: "Azul" },
    { id: 4, foto: lamborghini, marca: "Lamborghini", modelo: "Huracán EVO", ano: 2019, cor: "Amarelo" },
    { id: 5, foto: porsche, marca: "Porsche", modelo: "911 Carrera", ano: 2023, cor: "Cinza" },
    { id: 6, foto: audi, marca: "Audi", modelo: "R8", ano: 2020, cor: "Preto" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.lista}>
        {carros.map((carro) => (
          <div key={carro.id} className={styles.cardCarro}>
            <img src={carro.foto} className={styles.foto} />
            <div className={styles.card}>
              <span className={styles.marca}>{carro.marca}</span>
              <h3>{carro.modelo}</h3>
              <div className={styles.detalhe}>
                <p><strong>Ano:</strong> {carro.ano}</p>
                <p><strong>Cor:</strong> {carro.cor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;