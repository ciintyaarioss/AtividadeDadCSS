import styles from "./Cars.module.css"; // 👈 importa o CSS module

const Cars = () => {
  const carros = [
    { id: 1, marca: "Ferrari", modelo: "488 GTB", ano: 2020, cor: "Vermelho" },
    { id: 2, marca: "Tesla", modelo: "Model S", ano: 2022, cor: "Branco" },
    { id: 3, marca: "BMW", modelo: "M4 Competition", ano: 2021, cor: "Azul" },
    { id: 4, marca: "Lamborghini", modelo: "Huracán EVO", ano: 2019, cor: "Amarelo" },
    { id: 5, marca: "Porsche", modelo: "911 Carrera", ano: 2023, cor: "Cinza" },
    { id: 6, marca: "Audi", modelo: "R8", ano: 2020, cor: "Preto" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.lista}>
        {carros.map((carro) => (
          <div key={carro.id} className={styles.card}>
            <h3>{carro.modelo}</h3>
            <p><strong>Marca:</strong> {carro.marca}</p>
            <p><strong>Ano:</strong> {carro.ano}</p>
            <p><strong>Cor:</strong> {carro.cor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
