import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';

export default function Compile() {
  const [err, setErr] = useState(false);
  const [profile, setProfile] = useState({
    email: '',
    cardName: '',
    type: '',
    date: null,
    cardDetails: null,
    cvv: null,
  });

  function change(event) {
    const { name, value, type, checked } = event.target;

    setProfile((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  const user = (
    <div>
      <form className="user">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" name="names" placeholder="name" />
        </div>
        <div className="name">
          <label htmlFor="email">
            Email Address <span className="star">*</span>
          </label>
          <p className="alert">
            The purchased receipt would be sent to this address
          </p>
          {err && <p>please provide your email</p>}
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={change}
            required
          />
        </div>
        <div className="address">
          <label htmlFor="address1">Address 1</label>
          <input type="text" name="add1" placeholder="home address" />
        </div>
        <div className="address">
          <label htmlFor="address2">Address 2</label>
          <input type="text" name="address2" placeholder="work address" />
        </div>
        <div>
          <div className="localgovernment">
            <div className="locale">
              <label htmlFor="local">Local Government</label>
              <input type="text" name="local" placeholder="local government" />
            </div>
            <div className="state">
              <label htmlFor="state">State</label>
              <select name="state">
                <option value="Abuja">Abuja</option>
                <option value="Lagos">Lagos</option>
                <option value="Kwara">Kwara</option>
                <option value="Kogi">Kogi</option>
                <option value="Benue">Benue</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div className="btn">
        <button className="colored" onClick={next}>
          Next
        </button>
        <button className="not-colored" onClick={cancel}>
          Cancel Payment
        </button>
      </div>
    </div>
  );

  const billOne = (
    <div>
      <form className="bill1">
        <div className="card">
          <label htmlFor="card">
            Name on Card <span className="star">*</span>
          </label>
          <input
            type="text"
            name="cardName"
            placeholder="name of card"
            onChange={change}
            required
          />
        </div>
        <div className="card">
          <label htmlFor="card-type">
            Card Type <span className="star">*</span>
          </label>
          <select name="type" onChange={change} required>
            <option value="visa">Visa</option>
            <option value="verve">Verve</option>
            <option value="masterCard">MasterCard</option>
          </select>
        </div>
        <div className="card-details">
          <div className="card">
            <label htmlFor="card">
              Card details <span className="star">*</span>
            </label>
            <input
              type="number"
              name="cardDetails"
              onChange={change}
              placeholder="1232 45671 29933 91837"
              min="12"
              max="12"
              required
            />
          </div>
          <div className="cvv-date">
            <div className="card">
              <label htmlFor="card">
                Expiry date <span className="star">*</span>
              </label>
              <input
                type="number"
                name="date"
                placeholder="01 / 29"
                onChange={change}
                required
              />
            </div>
            <div className="card">
              <label htmlFor="card">
                CVV <span className="star">*</span>
              </label>
              <input
                type="number"
                name="cvv"
                placeholder="987"
                onChange={change}
                required
              />
            </div>
          </div>
        </div>
      </form>
      <div className="btn">
        <button className="colored" onClick={next2}>
          Next
        </button>
        <button className="not-colored" onClick={cancel}>
          Cancel Payment
        </button>
      </div>
    </div>
  );

  const billTwo = (
    <div>
      <div className="bill2">
        <nav className="itemize">
          <p className="item">Item Name</p>
          <p className="price">₦ Price</p>
        </nav>
        <div className="itemize space">
          <p className="item">Data science and useability</p>
          <p className="price">50,000.00</p>
        </div>
        <div className="itemize space">
          <p className="item">Shipping</p>
          <p className="price">0.00</p>
        </div>
        <br />
        <hr />
        <br />
        <div className="itemize total">
          <p className="item">Total</p>
          <p className="price">50,000.00</p>
        </div>
      </div>
      <div className="btn">
        <button className="colored" onClick={next3}>
          Pay
        </button>
        <button className="not-colored" onClick={cancel}>
          Cancel Payment
        </button>
      </div>
    </div>
  );

  const pay = (
    <div className="payment">
      <div className="pay">
        <span className="paid">
          <FcCheckmark className="paid-pikin" />
        </span>
        <h2 className="complete">Purchase Completed</h2>
        <p className="check">
          Please check your email for details concerning this transaction
        </p>
        <a href="#" className="link" onClick={cancel}>
          Return Home
        </a>
      </div>
    </div>
  );

  const stile = {
    background: '#F2994A',
    borderRadius: '10px',
  };

  let style1 = null;
  let style2 = null;
  let style3 = null;

  const [show, setShow] = useState(user);
  const [view, setView] = useState(true);
  const [color1, setColor1] = useState(stile);
  const [color2, setColor2] = useState(null);

  function next(event) {
    setShow(billOne);
    setColor1(null);
    setColor2(stile);
  }
  function next2(event) {
    setShow(billTwo);
    setColor1(null);
    setColor2(stile);
  }
  function next3(event) {
    setView(false);
  }
  function cancel(event) {
    setShow(user);
    setView(true);
    setColor1(stile);
    setColor2(null);
  }

  let output = (
    <div>
      <h2 className="heading">Complete your Purchase</h2>
      <div className="row-heading">
        <ul>
          <li>
            <p className="">Personal Info</p>
            <div className="fa" style={color1}></div>
          </li>
          <li>
            <p className="">Biling Info</p>
            <div className="fa" style={color2}></div>
          </li>
          <li>
            <p className="">Confirm Payment</p>
            <div className="fa"></div>
          </li>
        </ul>
      </div>
      {show}
    </div>
  );

  let render = '';
  if (view) {
    render = output;
  } else {
    render = pay;
    console.log('-ve');
  }

  return <div className="app">{render}</div>;
}
