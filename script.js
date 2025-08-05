// Agendamento
document.getElementById("form-agendamento").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const obs = document.getElementById("obs").value;

  const agendamento = { nome, telefone, servico, data, obs, status: "Pendente" };
  const agendamentos = JSON.parse(localStorage.getItem("agendamentos") || "[]");
  agendamentos.push(agendamento);
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

  alert("Agendamento realizado com sucesso!");
  this.reset();
});