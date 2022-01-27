import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import peliculasJson from "./peliculas.json";
import Pagination from "./Pagination";
function App() {
  let peliculas = peliculasJson;

  return (
    <>
      <PageWrapper>
        {peliculas.map((pelicula) => {
          return (
            <>
              <Pelicula
                titulo={pelicula.titulo}
                calificacion={pelicula.calificacion}
                director={pelicula.director}
                actores={pelicula.actores}
                fecha={pelicula.fecha}
                duracion={pelicula.duracion}
                descripcion={pelicula.descripcion}
                img={pelicula.img}
              ></Pelicula>
            </>
          );
        })}
        <Pagination pagina={1} total={5}></Pagination>
      </PageWrapper>
    </>
  );
}

export default App;
