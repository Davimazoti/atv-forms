import { useState } from "react";

function FormEvento() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipoParticipante, setTipoParticipante] = useState("estudante");
  const [turno, setTurno] = useState("manha");
  const [oficinas, setOficinas] = useState([]);
  const [aceiteRegulamento, setAceiteRegulamento] = useState(false);

  function handleOficina(e) {
    const { value, checked } = e.target;

    if (checked) {
      setOficinas([...oficinas, value]);
    } else {
      setOficinas(oficinas.filter((o) => o !== value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      nome,
      email,
      tipoParticipante,
      turno,
      oficinas,
      aceiteRegulamento,
    });

    setNome("");
    setEmail("");
    setTipoParticipante("estudante");
    setTurno("manha");
    setOficinas([]);
    setAceiteRegulamento(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>

      <label>
        E-mail:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <fieldset>
        <legend>Tipo de participante</legend>
        <label>
          <input
            type="radio"
            name="tipoParticipante"
            value="estudante"
            checked={tipoParticipante === "estudante"}
            onChange={(e) => setTipoParticipante(e.target.value)}
          />
          Estudante
        </label>
        <label>
          <input
            type="radio"
            name="tipoParticipante"
            value="profissional"
            checked={tipoParticipante === "profissional"}
            onChange={(e) => setTipoParticipante(e.target.value)}
          />
          Profissional
        </label>
      </fieldset>

      <label>
        Turno preferido:
        <select value={turno} onChange={(e) => setTurno(e.target.value)}>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </label>

      <fieldset>
        <legend>Oficinas de interesse</legend>
        <label>
          <input
            type="checkbox"
            value="frontend"
            checked={oficinas.includes("frontend")}
            onChange={handleOficina}
          />
          Front-end
        </label>
        <label>
          <input
            type="checkbox"
            value="backend"
            checked={oficinas.includes("backend")}
            onChange={handleOficina}
          />
          Back-end
        </label>
        <label>
          <input
            type="checkbox"
            value="dados"
            checked={oficinas.includes("dados")}
            onChange={handleOficina}
          />
          Dados
        </label>
        <label>
          <input
            type="checkbox"
            value="ia"
            checked={oficinas.includes("ia")}
            onChange={handleOficina}
          />
          Inteligência Artificial
        </label>
      </fieldset>

      <label>
        <input
          type="checkbox"
          checked={aceiteRegulamento}
          onChange={(e) => setAceiteRegulamento(e.target.checked)}
        />
        Aceito o regulamento do evento
      </label>

      <input type="submit" value="Inscrever" disabled={!aceiteRegulamento} />
    </form>
  );
}

export default FormEvento;