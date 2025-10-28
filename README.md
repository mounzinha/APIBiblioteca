🌷 BibliotecaDB — Sistema de Gestão de Biblioteca

Bem-vindo ao BibliotecaDB, um sistema web simples e fofo para gerenciar usuários, autores, livros e empréstimos. Criado com carinho para facilitar o controle de uma biblioteca digital 💖

---

✨ Funcionalidades

- 👩‍🎓 Cadastro de usuários
- 🖋️ Cadastro de autores
- 📚 Cadastro de livros
- 🔄 Registro de empréstimos
- 🌸 Interface web rosa claro com fonte Poppins
- 📱 Layout responsivo e delicado

---

🛠️ Tecnologias utilizadas

| Camada        | Ferramenta                     |
|---------------|--------------------------------|
| Backend       | Node.js + Express              |
| Banco de dados| MongoDB + Mongoose             |
| Frontend      | HTML + CSS + JavaScript        |
| Estilo        | Fonte Poppins + Rosa claro     |
| Dev Tools     | Nodemon + REST Client (VS Code)|

---

🚀 Como rodar o projeto

1. Clone o repositório:

`bash
git clone https://github.com/seu-usuario/BibliotecaDB.git
cd BibliotecaDB
`

2. Instale as dependências:

`bash
npm install
`

3. Configure o arquivo .env:

`env
MONGODB_URI=mongodb://localhost:27017/biblioteca
PORT=3000
`

4. Inicie o servidor:

`bash
npm run dev
`

5. Abra o painel web:

- Vá até o arquivo painel-fofo.html
- Clique duas vezes para abrir no navegador
- Use as abas para cadastrar usuários, autores e empréstimos 🌸

---

📁 Estrutura de pastas

`
BibliotecaDB/
├── src/
│   ├── models/
│   ├── routers/
│   ├── index.js
├── public/
│   └── painel-fofo.html
├── .env
├── package.json
└── README.md
`

---

💌 Créditos

Projeto desenvolvido com carinho por moon em Cataguases, MG.  
Feito para quem ama livros, organização e interfaces fofinhas 🌈📖

---

🧁 Sugestões de melhoria

- Adicionar aba para cadastro de livros com seleção de autor
- Listar registros em tabelas visuais
- Exportar relatórios de empréstimos
- Autenticação de usuários
