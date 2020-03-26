import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo-header.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gymPoint" />
          <Link to="/dashboard">ALUNOS</Link>
          <Link to="/dashboard">PLANOS</Link>
          <Link to="/dashboard">MATRÍCULAS</Link>
          <Link to="/dashboard">PEDIDO DE AUXÍLIO</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Max Nascimento</strong>
              <Link to="/">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
