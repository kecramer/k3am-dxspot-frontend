import React, { Component} from 'react'
import { Container, Menu, Dropdown } from 'semantic-ui-react'

export default class Header extends Component {
  render(){
    return(
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            K3AM DXspot
          </Menu.Item>
          <Dropdown item simple text='About'>
            <Dropdown.Menu>
              <Dropdown.Item>Edit Filters</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>About</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Source Code</span>
                <Dropdown.Menu>
                  <Dropdown.Item><a style={{color: 'inherit'}} href="https://github.com/kecramer/k3am-dxspot-frontend" target="_blank" rel="noopener noreferrer">Frontend (React/Redux)</a></Dropdown.Item>
                  <Dropdown.Item><a style={{color: 'inherit'}} href="https://github.com/kecramer/k3am-dxspot-backend" target="_blank" rel="noopener noreferrer">Backend (Node/Express)</a></Dropdown.Item>
                  <Dropdown.Header>NPM Modules</Dropdown.Header>
                  <Dropdown.Item>
                    <a style={{color: 'inherit'}} href="https://github.com/kecramer/dxcluster" target="_blank" rel="noopener noreferrer">dxcluster</a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a style={{color: 'inherit'}} href="https://github.com/kecramer/dxccjs" target="_blank" rel="noopener noreferrer">dxccjs</a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>About K3AM</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    )
  }
}
