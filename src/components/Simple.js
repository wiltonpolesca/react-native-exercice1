import React from 'react';
import { Text } from 'react-native';

//Exemplo de componente baseado em função

//O parâmetro da função corresponde as propriedades do componente
// export default function(props) {
//   return <Text>{ props.text }</Text>;
// }

export default (props) => <Text >Arrow Function: { props.text}</Text>;

