import React, { useState } from "react";

export default function App() {
  const [route, setRoute] = useState("home");
  const startDate = "29/09/2025";

  return (
    <div className="app-root">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <img src="/logo.png" alt="Winners logo" className="logo" />
            <div>
              <div className="brand-title">Curso de Língua Inglesa Winners</div>
              <div className="brand-sub">Comunicação prática | Presencial • Remoto • À domicílio</div>
            </div>
          </div>

          <nav className="nav">
            <button onClick={() => setRoute("home")} className="nav-btn">Início</button>
            <button onClick={() => setRoute("student")} className="nav-btn">Área do Aluno</button>
            <button onClick={() => setRoute("parent")} className="nav-btn">Pais / Responsáveis</button>
            <button onClick={() => setRoute("teacher")} className="nav-btn">Área Docente</button>
            <a href="#contato" className="cta">Matricule-se</a>
          </nav>
        </div>
      </header>

      <main className="container main">
        {route === "home" && (
          <section>
            <div className="grid">
              <div className="hero">
                <h1>Aprenda inglês de forma prática e personalizada</h1>
                <p className="muted">A Winners oferece aulas com foco em comunicação, fluência e uso real da língua — presenciais, remotas ou à domicílio.</p>

                <ul className="features">
                  <li>Direcionamento por níveis: Iniciante → Intermediário → Avançado</li>
                  <li>Materiais: série Oxford (Básico → Avançado) + apostilas exclusivas</li>
                  <li>Professora: metodologia comunicativa e aulas personalizadas</li>
                </ul>

                <div className="actions">
                  <a href="#matricule" className="btn primary">Garanta sua vaga</a>
                  <button onClick={() => setRoute("teacher")} className="btn">Área docente</button>
                </div>
              </div>

              <aside className="card info-card">
                <h3>Informações rápidas</h3>
                <p>Início das aulas: <strong>{startDate}</strong></p>
                <p>Modalidades: <strong>Presencial • Remoto • À domicílio</strong></p>
                <p>Carga horária: consulte no ato da matrícula</p>
                <div className="contact">
                  <h4>Contato</h4>
                  <p>WhatsApp: <a href="https://wa.me/5583999999999">(83) 99999-9999</a></p>
                  <p>E-mail: <a href="mailto:contato@winners.com">contato@winners.com</a></p>
                </div>
              </aside>
            </div>

            <hr className="divider" />

            <section>
              <h2>Modalidades</h2>
              <div className="cards">
                <div className="card"><h4>Presencial</h4><p>Aulas na sua cidade, com foco na conversação e acompanhamento presencial.</p></div>
                <div className="card"><h4>Remoto</h4><p>Aulas via videoconferência com materiais digitais e flexibilidade de horário.</p></div>
                <div className="card"><h4>À domicílio</h4><p>Aulas na sua casa — conforto e atenção individualizada.</p></div>
              </div>
            </section>

            <hr className="divider" />

            <section>
              <h2>Materiais</h2>
              <p className="muted">Utilizamos a renomada série <strong>Oxford</strong> como base, complementada por apostilas próprias, exercícios práticos e conteúdo multimídia. Na área docente temos a biblioteca completa (acesso restrito).</p>
              <div className="small-cards">
                <div className="small-card">Oxford - Básico</div>
                <div className="small-card">Oxford - Intermediário</div>
                <div className="small-card">Oxford - Avançado</div>
              </div>
            </section>

            <div id="matricule" className="matricule">
              <h3>Matrículas abertas</h3>
              <p>Preencha o formulário de matrícula ou entre em contato via WhatsApp para garantir sua vaga.</p>
              <a href="#" className="btn primary">Formulário de Matrícula</a>
            </div>
          </section>
        )}

        {route === "student" && (
          <section>
            <h2>Área do Aluno</h2>
            <p className="muted">Bem-vindo(a)! Aqui você terá acesso aos materiais liberados para seu nível, cronograma de aulas e exercícios.</p>
            <div className="panels">
              <div className="panel"><h4>Material liberado</h4>
                <ul><li>Apostila - Unidade 1</li><li>Exercícios - Gramática</li><li>Vídeo: Pronúncia básica</li></ul>
              </div>
              <div className="panel"><h4>Progresso & Cronograma</h4>
                <p>Aulas por semana: <strong>2</strong></p>
                <p>Próxima aula: <strong>Segunda, 19:00</strong></p>
              </div>
            </div>
          </section>
        )}

        {route === "parent" && (
          <section>
            <h2>Área dos Pais / Responsáveis</h2>
            <p className="muted">Nessa seção os responsáveis podem acompanhar frequência, desempenho e entrar em contato direto com a instituição.</p>
            <div className="panel"><h4>Relatório de Progresso</h4>
              <p>Frequência: <strong>85%</strong></p>
              <p>Comentários do professor: <em>A aluna demonstra boa evolução na conversação.</em></p>
            </div>
          </section>
        )}

        {route === "teacher" && (
          <section>
            <h2>Área Docente (Demo)</h2>
            <p className="muted">Área privada para gerenciar turmas, acessar a biblioteca Oxford (links privados) e preparar aulas.</p>
            <div className="card">
              <h3>Biblioteca Oxford (acesso restrito)</h3>
              <ol><li>Oxford - Starter / Básico</li><li>Oxford - Intermediário</li><li>Oxford - Advanced</li></ol>
              <div><h4>Ferramentas de Aula</h4><p>Carregar slide, criar atividade e compartilhar link para os alunos (implementação futura).</p></div>
            </div>
          </section>
        )}

        <hr className="divider" />

        <footer id="contato" className="footer">
          <p>© {new Date().getFullYear()} Curso de Língua Inglesa Winners</p>
          <p>Contato: <a href="mailto:contato@winners.com">contato@winners.com</a> | WhatsApp: <a href="https://wa.me/5583999999999">(83) 99999-9999</a></p>
        </footer>
      </main>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="card"><h4>{title}</h4><p>{text}</p></div>
  );
}