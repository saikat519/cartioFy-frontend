import React,{useState} from 'react';
import { Card, Container } from 'react-bootstrap';
import karolina from '../../images/karolina.jpg';
import Button from '@material-ui/core/Button';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { useStateValue } from "../../StateProvider"
import Login from '../Login/LoginScreen'
import Signup from '../SignUp/SignUp'

function Products() {
    const [{ user }, dispatch] = useStateValue();
    const [isLogin, setisLogin] = useState(false);
    const [isSignup, setisSignup] = useState(false);
    const addToCart = ()=>{
        dispatch({
          type: "ADD_TO_CART",
          item: {
           name:"test item"
          },
        });
    }
    const signinToPurchase = () =>{
        setisLogin(true);
    }

    return (
        <>
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={karolina} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                ₹179
                </Card.Text>
                {user && <Button
                    variant="contained"
                    style={{backgroundColor:"#fbcc57"}}
                    startIcon={<AddShoppingCartSharpIcon />}
                    onClick={addToCart}
                  >
                   Add to Cart
                    </Button>}
                    {!user && <Button
                        variant="contained"
                        style={{backgroundColor:"#fbcc57"}}
                        onClick={signinToPurchase}
                      >
                       Sign-in To Purchase 
                      </Button>}
                 </Card.Body>
            </Card>
            <br/>
            </Container>
            {isLogin &&
                <Login
                show={isLogin}
                onHide={() => setisLogin(false)}
                openSignup={() => setisSignup(true)}
                />
            }
            {
                isSignup &&
                <Signup
                    show={isSignup}
                    onHide={() => setisSignup(false)}
                    openLogin={() => setisLogin(true)}
                />
            }
        
        </>
    )
}

export default Products
