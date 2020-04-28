import React from 'react';
import { connect } from 'react-redux';

function Table(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Código</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {props.products.data.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.code}</td>
              <td>{prod.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Table);
