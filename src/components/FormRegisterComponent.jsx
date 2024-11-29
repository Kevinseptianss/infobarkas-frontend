function FormRegisterComponent() {
  return (
    <div className="form-container">
      <form className="forms">
        <label>Registrasi</label>
        <div className="form-group">
          <label>Nama</label>
          <input type="text"></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div className="form-group">
          <label>Konfirmasi Password</label>
          <input type="password"></input>
        </div>

        <button className="btn-jual" type="submit">
          Daftar
        </button>
      </form>
    </div>
  );
}

export default FormRegisterComponent;
