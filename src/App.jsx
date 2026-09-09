import { useState } from "react";
import FormPesquisa from "./FormPesquisa";
import FormEvento from "./FormEvento";

function App() {
  const [pagina, setPagina] = useState("menu");

  return (
    <div>
      <nav>
        <button onClick={() => setPagina("menu")}>Menu</button>
        <button onClick={() => setPagina("pesquisa")}>
          Pesquisa de satisfação
        </button>
        <button onClick={() => setPagina("evento")}>
          Inscrição em evento
        </button>
      </nav>

      {pagina === "menu" && (
        <div>
          <h1>Exercícios de Formulários</h1>
          <ul>
            <li>
              <button onClick={() => setPagina("pesquisa")}>
                Exercício 1 — Pesquisa de satisfação
              </button>
            </li>
            <li>
              <button onClick={() => setPagina("evento")}>
                Exercício 2 — Inscrição em evento
              </button>
            </li>
          </ul>
        </div>
      )}

      {pagina === "pesquisa" && <FormPesquisa />}
      {pagina === "evento" && <FormEvento />}
    </div>
  );
}

export default App;