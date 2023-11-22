import style from "./Form.module.css";

const Form = () => {
  return (
    <form>
      <div>
        <label>Codigo Emprendedora</label>
        <input></input>
      </div>
      <div>
        <label>Nombre</label>
        <input></input>
      </div>
      <div>
        <label>Ciclo Alta</label>
        <input></input>
      </div>
      <div>
        <label>Otras Actividades</label>
        <input></input>
      </div>
      <div>
        <label>Localidad</label>
        <input></input>
      </div>
      <div>
        <label>Provincia</label>
        <input></input>
      </div>
      <div>
        <label>Telefono</label>
        <input></input>
      </div>
      <div>
        <label>Categoria</label>
        <select>
          <option>Naranja</option>
          <option>Amarillo</option>
          <option>Verde</option>
          <option>Celeste</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
