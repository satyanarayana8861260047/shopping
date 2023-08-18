import { Badge, Fade } from "@material-ui/core";
import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import { useState } from "react";
import {useSelector} from 'react-redux';



const Header = () => {

  const getdata= useSelector((state)=>state.cartreducer)
  console.log(getdata)


  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: 60 }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge badgeContent={4} color="primary">
            <i
              class="fa-sharp fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
        <div className="card_details d-flex justify-content-center align-items-center" style={{width:'24rem',padding:10,position:'relative'}}>
            <i className="fa fa-window-close smallclose" style={{position:'absolute',top:2,right:20,fontsize:23,cursor:'pointer'}} 
            onClick={handleClose}></i>
        <p  style={{fontSize:22}}>Your carts is Empty</p>
        <img src="https://img.freepik.com/premium-vector/vector-shopping-cart-icon-paper-sticker-with-shadow-colored-shopping-symbol-isolated_118339-1774.jpg?w=2000" 
       className="emptycart_img"  style={{width:'5rem',padding:10}}
        alt="" />

        </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
