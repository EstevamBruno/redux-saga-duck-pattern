import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductActions } from '../../store/ducks/products';

function Form(props) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [price, setPrice] = useState(0);

  function resetForm() {
    setName('');
    setCode('');
    setPrice(0);
  }

  function register(event) {
    event.preventDefault();

    const data = {
      id: Math.random(),
      name,
      code,
      price,
    };
    props.addProductSuccess(data);
  }

  return (
    <>
      <h2>Cadastro de Produto</h2>
      <form onSubmit={register}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Nome</label>
        </div>
        <div>
          <input
            type='text'
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <label>Código</label>
        </div>
        <div>
          <input
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>Preço</label>
        </div>

        <button type='submit'>Salvar</button>
        <button type='button' onClick={() => resetForm()}>
          Limpar
        </button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ProductActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
