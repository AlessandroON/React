import './App.css';
import Header from './Header';
import Footer from './Footer';
import Noticia from './News';

function App() {
  return (
    <div className="container">
      <Header titulo="Jornal Fofoca" />

      <div className="noticias">
        <Noticia
          categoria="GREVE HÁ 2 MESES"
          titulo="MP-BA dá prazo de 24h para retorno das aulas em escolas de Salvador"
          imagem="https://midias.correio24horas.com.br/2025/04/07/escola-municipal-maria-constanca-na-mata-escura-2679557-article.webp"
          data="18/07/2025"
        />
        <Noticia
          categoria="FALA À NAÇÃO"
          titulo="'Chantagem inaceitável', diz Lula em pronunciamento na TV sobre taxação de Trump"
          imagem="https://midias.correio24horas.com.br/2025/07/17/598x337/lula-em-pronunciamento-em-cadeia-nacional-de-radio-e-tv-2819147.webp"
          data="18/07/2025"
        />
        <Noticia
          categoria="TOMOU FERMENTO?"
          titulo="‘Parece fisiculturista’: filho de Ivete impressiona com foto exibindo músculos"
          imagem="https://midias.correio24horas.com.br/2024/01/28/286x161/marcelo-cady--1995117.jpg"
          data="18/07/2025"
        />
        <Noticia
          categoria="BIZARRO"
          titulo="Agentes da Transalvador encontram corpo dentro de carro durante blitz"
          imagem="https://midias.correio24horas.com.br/2025/07/17/286x161/corpo-foi-encontrado-durante-abordagem-na-orla-de-salvador-2818701.webp"
          data="18/07/2025"
        />
      </div>

      <Footer nome="Alessandro Oliveira" telefone="(71) 99999-9999" />
    </div>
  );
}

export default App;
