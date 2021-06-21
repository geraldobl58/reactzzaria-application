import React, { useState, useEffect, useReducer, useRef } from 'react';

import TextField from 'components/TextField';

import { Grid, CircularProgress  } from '@material-ui/core';

function FormAddress() {
  const [cep, setCep] = useState('');
  const [addressState, dispatch] = useReducer(reducer, initialState);
  const [fetchingCep, setFetchingCep] = useState(false);
  const numberField = useRef();

  useEffect(() => {
    async function fetchAddress() {
      if (cep.length < 9) {
        return;
      }

      setFetchingCep(true);
      const data = await fetch(`https://ws.apicep.com/cep/${cep}.json`);
      setFetchingCep(false);
      const result = await data.json();

      dispatch({
        type: 'UPDATE_FULL_ADDRESS',
        payload: result
      });

      numberField.current.focus();
    }

    fetchAddress();
  }, [cep]);

  function handleChangeCep(e) {
    setCep(cepMask(e.target.value));
  }

  function cepMask(value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  }

  function handleChangeField(e) {
    const { name, value } = e.target;

    dispatch({
      type: 'UPDATE_FIELD',
      payload: { name, value }
    });
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <TextField
        label='CEP'
        xs={4}
        autoFocus
        value={cep}
        onChange={handleChangeCep}
      />
      <Grid item xs={8}>
        {fetchingCep && <CircularProgress color="secondary" />}
      </Grid>
      {[
        {
          label: 'Rua',
          xs: 9,
          name: 'address',
        },
        {

          label: 'Número',
          xs: 3,
          name: 'number',
          inputRef: numberField
        },
        {

          label: 'Complemento',
          xs: 12,
          name: 'complement',
        },
        {

          label: 'Cidade',
          xs: 9,
          name: 'city',
        },
        {

          label: 'Estado',
          xs: 3,
          name: 'state',
        },
      ].map((field) => (
        <TextField
          {...field}
          key={field.name}
          value={addressState[field.name]}
          onChange={handleChangeField}
          disabled={fetchingCep}
        />
      ))}
    </Grid>
  )
}

function reducer(state, action) {
  if (action.type === 'UPDATE_FULL_ADDRESS') {
    return {
      ...state,
      ...action.payload
    }
  }

  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      [action.payload.name]: action.payload.value
    }
  }

  return state;
}

const initialState = {
  code: '',
  address: '',
  number: '',
  district: '',
  complement: '',
  city: '',
  state: '',
  error: null
}

export default FormAddress;