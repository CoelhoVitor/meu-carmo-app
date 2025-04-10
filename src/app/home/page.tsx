import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>Meu Carmo App</h1>
            </header>
            <div className="content">
                <nav className="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
                <main className="main">
                    <h2>Bem-vindo!</h2>
                    <p>Este é o espaço principal da página inicial.</p>
                </main>
            </div>
            <footer className="footer">
                <p>&copy; 2023 Meu Carmo App. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;