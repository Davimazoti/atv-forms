import { useState } from "react";

function FormPesquisa() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [satisfacao, setSatisfacao] = useState("neutro");
  const [comentario, setComentario] = useState("");
  const [aceiteTermos, setAceiteTermos] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ nome, email, satisfacao, comentario, aceiteTermos });

    setNome("");
    setEmail("");
    setSatisfacao("neutro");
    setComentario("");
    setAceiteTermos(false);
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
        <legend>Nível de satisfação</legend>
        <label>
          <input
            type="radio"
            name="satisfacao"
            value="insatisfeito"
            checked={satisfacao === "insatisfeito"}
            onChange={(e) => setSatisfacao(e.target.value)}
          />
          Insatisfeito
        </label>
        <label>
          <input
            type="radio"
            name="satisfacao"
            value="neutro"
            checked={satisfacao === "neutro"}
            onChange={(e) => setSatisfacao(e.target.value)}
          />
          Neutro
        </label>
        <label>
          <input
            type="radio"
            name="satisfacao"
            value="satisfeito"
            checked={satisfacao === "satisfeito"}
            onChange={(e) => setSatisfacao(e.target.value)}
          />
          Satisfeito
        </label>
      </fieldset>

      <label>
        Comentário:
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={aceiteTermos}
          onChange={(e) => setAceiteTermos(e.target.checked)}
        />
        Aceito os termos de privacidade da pesquisa
      </label>

      <input type="submit" value="Enviar" disabled={!aceiteTermos} />
    </form>
  );
}

export default FormPesquisa;