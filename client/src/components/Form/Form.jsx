import style from "./Form.module.css";

const Form = () => {
  return (
    <div className={style.body}>
      <h1 className={style.title}>Sumar Emprendedora</h1>
      <hr className={style.separador} />
      <form className={style.form}>
        <div className={style.section}>
          <label className={style.label}>Codigo Emprendedora</label>
          <input className={style.input}></input>
        </div>
        <div className={style.section}>
          <label className={style.label}>Nombre</label>
          <input className={style.input}></input>
        </div>
        <div className={style.section}>
          <label className={style.label}>Ciclo Alta</label>
          <input className={style.input}></input>
        </div>
        <div className={style.section}>
          <label className={style.label}>Otras Actividades</label>
          <input className={style.input}></input>
        </div>
        <div className={style.section}>
          <label className={style.label}>Localidad</label>
          <input className={style.input}></input>
        </div>
        <div className={style.section}>
          <label className={style.label}>Provincia</label>
          <input className={style.input}></input>
        </div>
        <div className={style.section}>
          <label className={style.label}>Telefono</label>
          <input className={style.input}></input>
        </div>
        <div className={style.section}>
          <label className={style.label}>Comentarios</label>
          <input className={style.input}></input>
        </div>
        <div className={style.section}>
          <label className={style.label}>Categoria</label>
          <select className={style.selector}>
            <option>Naranja</option>
            <option>Amarillo</option>
            <option>Verde</option>
            <option>Celeste</option>
          </select>
        </div>
        <button className={style.button}>SUMAR</button>
      </form>
    </div>
  );
};

export default Form;
