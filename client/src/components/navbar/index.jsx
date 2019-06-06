import React from "react";
import {
Collapse,
Navbar,
NavbarToggler,
DropdownItem,
DropdownToggle,
DropdownMenu,
UncontrolledDropdown,
NavbarBrand,
Nav,
NavItem,
NavLink,
Input,
Container,
Row,
Col,
Jumbotron,
Button
} from 'reactstrap';
import { CSSTransitionGroup } from 'react-transition-group';



class NavBar extends React.Component {
render(){
    const searchbutton = () => {
        if(this.props.searchstring){
            return (
                <Button outline color="info">Search</Button>
            )
        }
    }
return (
<>
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Input onChange={(event)=> this.props.searchactions(event)} value =
    {this.props.searchstring} type = "text" className="search-input"  />
    <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={5000}     
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {searchbutton()}
        </CSSTransitionGroup>
            <NavbarToggler /*onClick={this.toggle}*/ />
            <Collapse /*isOpen={this.state.isOpen}*/ navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    {/* <h1>Hello World!</h1>
    <input onChange={(event)=> this.props.searchactions(event)} type="text" name = "search" value =
    {this.props.searchstring}/> */}
</>
)
}
}

export default NavBar;