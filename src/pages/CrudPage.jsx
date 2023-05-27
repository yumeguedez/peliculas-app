import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const CrudPage = () => {
  const crearPelicula = async () => {
    const pelicula = {
      name: "Avengers",
      category: "Heroes",
      Image: "https://images2.alphacoders.com/118/thumb-1920-1188043.jpg",
    };

    const collectionPeliculas = collection(db, "peliculas");
    await addDoc(collectionPeliculas, pelicula);
    await obtenerPeliculas();
  };

  const obtenerPeliculas = async () => {
    const collectionPeliculas = collection(db, "peliculas");
    const respuesta = await getDocs(collectionPeliculas);
    const registroPelicula = respuesta.docs.map((pelicula) => ({
      id: pelicula.id,
      ...pelicula.data(),
    }));
    console.log(registroPelicula);
    const autor = import.meta.env.VITE_NAME;
    console.log(autor);
  };

  const actualizarPelicula = async () => {
    const pelicula = {
      name: "Avengers 2",
      category: "Heroes",
      Image: "https://images2.alphacoders.com/118/thumb-1920-1188043.jpg",
    };

    const registro = doc(db, "peliculas", "AeoXHwwimjXGWlUyZANQ");
    await updateDoc(registro, pelicula);
    await obtenerPeliculas();
  };

  const eliminarPelicula = async () => {
    const registro = doc(db, "peliculas", "UX8SrLrNnjN76yh5PK0q");
    await deleteDoc(registro);
    await obtenerPeliculas();
  };

  return (
    <>
      <main className="row">
        <article className="col">
          <h1>CRUD</h1>
        </article>
      </main>
      <section className="row">
        <article className="col">
          <button
            type="button"
            className="btn btn-success"
            onClick={crearPelicula}
          >
            Agregar
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={obtenerPeliculas}
          >
            Obtener
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={actualizarPelicula}
          >
            Actualizar
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={eliminarPelicula}
          >
            Eliminar
          </button>
        </article>
      </section>
    </>
  );
};

export default CrudPage;
