// Operações bancárias

const user = {
  name: "Raphael",
  transactions: [],
  balance: 0
};

// Adiciona transação
function createTransaction(type, value) {
  user.transactions.push({ type: type, value: value });
  updateBalance(type, value);
};

// Atualiza saldo
function updateBalance(type, value) {
  if (type === "credit") {
    user.balance += value;
  }
  else if (type === "debit") {
    user.balance -= value;
  }
};

// Gera relatório

// Transação de maior valor por tipo
function getHigherTransactionByType(type) {
  let highTransaction;
  let highValue = 0;
  for (let transaction of user.transactions) {
    if (transaction.type === type && transaction.value > highValue) {
      highValue = transaction.value;
      highTransaction = transaction;
    }
  }
  return highTransaction;
};

// Valor médio das transações
function getAverageTransactionValue() {
  let average = 0;
  for (let transaction of user.transactions) {
    average += transaction.value;
  }
  return average / user.transactions.length;
};

// Retorna o número de transações de cada tipo
function getTransactionsCount() {
  let credit = 0;
  let debit = 0;
  for (let transaction of user.transactions) {
    if (transaction.type === "credit") {
      credit ++
    }
    else {
      debit ++
    }
  }
  return {credit, debit};
};

createTransaction("credit", 50);
createTransaction("credit", 120);
createTransaction("debit", 80);
createTransaction("debit", 30);

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }