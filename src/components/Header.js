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
                  <Dropdown.Item>Frontend</Dropdown.Item>
                  <Dropdown.Item>Backend</Dropdown.Item>
                  <Dropdown.Item>dxcluster</Dropdown.Item>
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
