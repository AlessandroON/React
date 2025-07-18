import React, { useState } from 'react';
import "./AstronautForm.css"

const AstronautForm = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    rua: '',
    bairro: '',
    escolaridade: '',
    profissao: '',
    planeta: '',
    telefone: '',
    cep: '',
    numeroDaCasa: '',
    cpf: '',
    aceitaRiscos: false,
    plenaSaude: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    console.log('Formulário enviado:', form);
    alert('Formulário enviado com sucesso!');
  };

  return (

    <form onSubmit={handleSubmit} className='forms'>

      <label>
        Nome:<br/>
        <input type="text" name="nome" value={form.nome} onChange={handleChange} required /><br/>
      </label>

      <label>
        E-mail:<br/>
        <input type="email" name="email" value={form.email} onChange={handleChange} required /><br/>
      </label>

      <label>
        Rua:<br/>
        <input type="text" name="rua" value={form.rua} onChange={handleChange} required /><br/>
      </label>

      <label>
        Bairro: <br/>
        <input type="text" name="bairro" value={form.bairro} onChange={handleChange} required /><br/>
      </label>


      <label>
        Escolaridade:<br/>
        <select name="escolaridade" value={form.escolaridade} onChange={handleChange} required>
          <option value="">Selecione</option> 
          <option value="Médio">Ensino Médio</option>
          <option value="Superior">Ensino Superior</option>
          <option value="Mestrado">Mestrado</option>
          <option value="Doutorado">Doutorado</option>
        </select><br/>
      </label>

      <label>
        Profissão: <br/>
        <input type="text" name="profissao" value={form.profissao} onChange={handleChange} required /><br/>
      </label>

      <label>
        Planeta que deseja visitar: <br/>
        <select name="planeta" value={form.planeta} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="Marte">Marte</option>
          <option value="Urano">Urano</option>
          <option value="Neturno">Neturno</option>
          <option value="Plutão">Plutão</option>
        </select><br/>
      </label>

      <label>
        Telefone: <br/>
        <input type="number" name="telefone" value={form.telefone} onChange={handleChange} required/> <br/>
      </label>

      <label>
        CEP:<br/>
        <input type="number" name="cep" value={form.cep} onChange={handleChange} required /> <br/>
      </label>

      <label>
        CPF:<br/>
        <input type="number" name="cpf" value={form.cpf} onChange={handleChange} required /> <br/>
      </label>

      <label>
        Numero da casa:<br/>
        <input type="number" name="numeroDaCasa" value={form.numeroDaCasa} onChange={handleChange} required /> <br/>
      </label>


      <label>
        Aceito Riscos da viagem <br/>
        <input type="checkbox" name="aceitaRiscos" checked={form.aceitaRiscos} onChange={handleChange} required /><br/>
      </label>

      <label>
        Estou em plena saúde<br/>
        <input type="checkbox" name="plenaSaude" checked={form.plenaSaude} onChange={handleChange} required /><br/>
      </label>
      
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AstronautForm;
