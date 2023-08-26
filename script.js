const cleanFields = () => {
  const fieldIds = ["name", "height", "weight"];
  fieldIds.forEach(id => {
    document.getElementById(id).value = "";
  });
};

const getElements = () => {
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const clientName = document.getElementById("name").value;
  const result = document.getElementById("result");

  if (areFilledFields(clientName, height, weight)) {
    const bmi = calculate(height, weight);
    print(clientName, result, bmi, score(bmi));
    cleanFields()
  } else {
    result.innerHTML = "Por favor, preencha todos os campos corretamente";
    cleanFields()
  }
};

const areFilledFields = (name, height, weight) => {
  if (!name || height === 0 || weight === 0) {
    return false;
  }
  return true;
};

const score = (bmi) => {
  switch (true) {
    case bmi < 18.5:
      return "Magreza";
    case bmi <= 24.9:
      return "Normal";
    case bmi <= 29.9:
      return "Sobrepeso";
    case bmi <= 34.9:
      return "Obesidade grau 1";
    case bmi <= 39.9:
      return "Obesidade grau 2";
    case bmi > 40:
      return "Obesidade grau 3";
      default:
      return "Categoria não encontrada";
  }
};

const calculate = (height, weight) => weight / (height/100) ** 2;

const print = (name, result, bmi, score) => result.innerHTML = `O IMC de ${name} é ${bmi.toFixed(2)} e a classificação é ${score}`;

// Events
document.getElementById("calculate").addEventListener("click", getElements);
