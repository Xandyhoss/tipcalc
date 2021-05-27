import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

  const Page = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: pink;
  `;

  const HeaderText = styled.Text`
    margin-top: 20px;
    font-size: 25px;
    margin-bottom: 10px;
  `;

  const Input = styled.TextInput`
    height: 40px;
    width: 80%;
    font-size: 18px;
    background-color: #EEE;
    text-align: center;
    border-radius: 20px;
    padding: 10px;
  `;

  const CalcButton = styled.Button`
    margin-top: 10px;
    border-radius: 25px;
  `;

  const ResultArea = styled.View`
    margin-top: 30px;
    background-color: #eee;
    padding: 20px;
    justify-content: center;
    align-items: center;
    width: 90%;
    border-radius: 20px;
  `;

  const ResultItemTitle = styled.Text`
    font-size: 16px;
  `;

  const ResultItem = styled.Text`
    font-weight: bold;
    margin-bottom: 10px;
  `;

  const PctArea = styled.View`
    flex-direction: row;
    margin: 10px;
  `;

  const PctItem = styled.Button`

  `;

export default () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [pct, setPct] = useState(10);


  function calc(){

    let nBill = parseFloat(bill);

    setTip(nBill * (pct/100));

  }

  function verify(){
    bill ? calc() : alert("Digite um valor para a conta!");
  }

  useEffect(()=>{
    calc();
  }, [pct] );

  return(
    <Page>
      <HeaderText>Tip Calculator</HeaderText>

      <Input
      keyboardType='numeric'
      placeholder='Insira o valor:'
      value = {bill}
      onChangeText={n=>setBill(n)}
      />

      <PctArea>

        <PctItem title="5%" onPress={()=>setPct(5)}/>
        <PctItem title="10%" onPress={()=>setPct(10)}/>
        <PctItem title="15%" onPress={()=>setPct(15)}/>
        <PctItem title="20%" onPress={()=>setPct(20)}/>

      </PctArea>

      <CalcButton title={`Calcular ${pct}%`} onPress={verify}/>


      {tip > 0 &&
        <ResultArea>
      
        <ResultItemTitle>Valor da Conta: </ResultItemTitle>
        <ResultItem> R$ {parseFloat(bill).toFixed(2)}</ResultItem>

        <ResultItemTitle>Valor da Gorgeta: </ResultItemTitle>
        <ResultItem> R$ {tip.toFixed(2)} ({pct}%)</ResultItem>

        <ResultItemTitle>Valor Total: </ResultItemTitle>
        <ResultItem> R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>

        </ResultArea>
      }

    </Page>
  );
}