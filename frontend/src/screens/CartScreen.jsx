import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Message from '../components/Message';

const CartScreen = () => {
  const params = useParams();
  const dipatch = useDispatch();
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (params.id) {
      dipatch(addToCart(params.id, qty));
    }
  }, [dipatch, params.id, qty]);
  return (
    <div>
      <h1>This is my cart</h1>
    </div>
  );
};

export default CartScreen;
