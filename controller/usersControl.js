import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function userDB() {
    return open({
      filename: 'd:/ciphersys/users/users',
      driver: sqlite3.Database
    })
  }

  export async function databases() {
    return open({
      filename: 'd:/ciphersys/database.sqlite',
      driver: sqlite3.Database
    })
  }


export async function selectUser(){
    return userDB().then(db=>{
        return db.all(`SELECT * FROM users`)
        .then(res=>res)
    })
}

export async function selectNome(nome) {
  return databases().then(db => {
      return db.all(`SELECT * FROM pessoas WHERE LOWER(nome) = LOWER(?)`, [nome])
          .then(res => res);
  });
}

export async function selectCpf(cpf) {
  return databases().then(db => {
      return db.all(`SELECT * FROM datasus WHERE cpf = ?`, [cpf])
          .then(res => res);
  });
}

export async function selectCep(cep) {
  return databases().then(db => {
      return db.all(`SELECT * FROM datasus WHERE cep = ?`, [cep])
          .then(res => res);
  });
}

export async function selectPlaca(placa) {
  return databases().then(db => {
      return db.all(`SELECT * FROM vehicles WHERE placa = ?`, [placa])
          .then(res => res);
  });
}



