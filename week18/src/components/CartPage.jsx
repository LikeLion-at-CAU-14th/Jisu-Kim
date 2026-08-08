import styled from "styled-components";
import React, { useState } from 'react'
import useCartStore from "../store/useCartStore";


function CartPage () {
  const cartItems = useCartStore(((state) => state.cartItems));
  const removeFromCart = useCartStore((state)=> state.removeFromCart);
  const plusFromCart = useCartStore((state) => state.plusFromCart);
  const minusFromCart = useCartStore((state) => state.minusFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setIsOrderComplete(true);
  };

  if (isOrderComplete) {
    return (
      <Section>
        <SectionTitle>장바구니🛒</SectionTitle>
        <OrderComplete>주문이 완료되었습니다.😊</OrderComplete>
      </Section>
    );
  }

  return (
    <Section>
      <SectionTitle>장바구니🛒</SectionTitle>
      {cartItems.length === 0 ? (
        <Empty>담긴 상품이 없습니다.</Empty>
      ) : (
        <>
          <List>
            {cartItems.map((item, index) => (
              <Item key = {index}>
                <ItemName>{item.name}</ItemName>

                <QuantityControl>
                  <MinusButton onClick = { () => minusFromCart(item.id)}>-</MinusButton>
                  <span> {item.quantity}</span>
                  <PlusButton onClick = { () => plusFromCart(item.id)}>+</PlusButton>
                </QuantityControl>

                <ItemPrice>{(item.price * item.quantity).toLocaleString()}원</ItemPrice>
                <RemoveButton onClick = { () => removeFromCart(index)}>삭제</RemoveButton>
              </Item>
            ))}
          </List>

          <Total>총 금액 {getTotalPrice().toLocaleString()}원</Total>
          <CheckoutButton onClick = {handleCheckout}>결제하기</CheckoutButton>
        </>
        
      )}
    </Section>
  );
}


export default CartPage;

const Section = styled.section``;

const SectionTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
`;

const Empty = styled.p`
  font-size: 13px;
  color: #999;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const ItemName = styled.span`
  flex: 1;
  font-size: 13px;
  color: #1a1a1a;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
`;

const MinusButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background: #fff;
  cursor: pointer;
  font-size: 13px;
`;

const PlusButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background: #fff;
  cursor: pointer;
  font-size: 13px;
`;

const ItemPrice = styled.span`
  font-size: 13px;
  color: #666;
  white-space: nowrap;
`;

const RemoveButton = styled.button`
  font-size: 12px;
  padding: 5px 10px;
  border: 1px solid #d33;
  border-radius: 6px;
  background: #fff;
  color: #d33;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #d33;
    color: #fff;
  }
`;

const Total = styled.p`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #f1f1f1;
  text-align: right;
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
`;

const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #ff6b35;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #e85a2a;
  }
`;

const OrderComplete = styled.p`
  text-align: center;
  padding: 40px 0;
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
`;