import React, { useState, useEffect } from 'react';
import { Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
// import { parseISO, formatDistance } from 'date-fns';
// import pt from 'date-fns/locale/pt-BR';

import { Container, List, Table } from './styles';
// import {} from 'react-icons'
import api from '~/services/api';

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      // const data = response.data.map(studant => ({
      //   ...studant,
      //   timeDistance: formatDistance(parseISO(studant.createAt), new Date(), {
      //     addSuffix: false,
      //     locale: pt,
      //   }),
      // }));

      setStudents(response.data);
    }
    loadStudents();
  }, []);

  return (
    <Container>
      <section>
        <text>Gerenciar alunos</text>
        <nav>
          <button type="button">CADASTRAR</button>
          <Input name="search" type="text" placeholder="Buscar aluno" />
        </nav>
      </section>
      <Table>
        <header>
          <tex>NOME</tex>
          <tex>E-MAIL</tex>
          <tex>IDADE</tex>
          <tex />
        </header>
        {students.map(student => (
          <List key={student.id}>
            <li>
              <text>{student.name}</text>
              <text>{student.email}</text>
              <text>{student.age}</text>
              <nav>
                <Link to="">editar </Link>
                <Link to="">excluir</Link>
              </nav>
            </li>
          </List>
        ))}
      </Table>
    </Container>
  );
}
