// Run this example by adding <%= javascript_pack_tag 'Hello' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Hello extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: 'David'
  }

  @observable open = false;

  render() {
    return (
      <div>
        <UncontrolledDropdown>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        {this.open && (<div>Hello {this.props.name}</div>)}
        <ButtonToolbar>
          <Button color="primary" onClick={() => this.open = true}>Save</Button>
          <Button>Cancel</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="Gary" />,
    document.getElementById('main')
  )
})
