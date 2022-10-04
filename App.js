import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button'
import {useState} from 'react';
import StyleSheet from './Styles';

export default function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [alc, setAlc] = useState(0)
  const [col, setCol] = useState(StyleSheet.res0)

  const bottleCount = [
    {label: '1', value: '1.0'},
    {label: '2', value: '2.0'},
    {label: '3', value: '3.0'},
    {label: '4', value: '4.0'},
    {label: '5', value: '5.0'},
    {label: '6', value: '6.0'},
    {label: '7', value: '7.0'},
    {label: '8', value: '8.0'},
    {label: '9', value: '9.0'},
    {label: '10', value: '10.0'},
    {label: '11', value: '11.0'},
    {label: '12', value: '12.0'},
    {label: '13', value: '13.0'},
  ]

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]

  const times = [
    {label: '1', value: '1.0'},
    {label: '2', value: '2.0'},
    {label: '3', value: '3.0'},
    {label: '4', value: '4.0'},
    {label: '5', value: '5.0'},
    {label: '6', value: '6.0'},
    {label: '7', value: '7.0'},
    {label: '8', value: '8.0'},
    {label: '9', value: '9.0'},
    {label: '10', value: '10.0'},
    {label: '11', value: '11.0'},
    {label: '12', value: '12.0'},
    {label: '13', value: '13.0'},
    {label: '14', value: '14.0'},
    {label: '15', value: '15.0'},
    {label: '16', value: '16.0'},
    {label: '17', value: '17.0'},

  ]

  const calculate = () => {
    let result = 0
    let litres = 0
    let grams = 0
    let burning = 0
    let gramsLeft = 0

    litres = bottles*0.33
    grams = litres*8*4.5
    burning = weight/10
    gramsLeft = grams - (burning*time)

    if(weight != 0){
      if(gender === 'male'){
        result = gramsLeft/(weight*0.7)
      }else{
        result = gramsLeft/(weight*0.6)
      }
      if(result < 0){
        setAlc(0)
        setCol(StyleSheet.res0)
      }
      if(result > 0.05 && alc < 0.15){
          setAlc(result)
          setCol(StyleSheet.res1)
        }
      if(result >= 0.15){
          setAlc(result)
          setCol(StyleSheet.res2)
        }
      

    } else{alert("Please insert your weight")}
    
  }
console.log(alc)

  return (
    <ScrollView style={StyleSheet.scrollView}>
      <Text style={StyleSheet.header}> Alcometer</Text>
      <Text style={StyleSheet.title}>Weight (kg)</Text>
      <TextInput placeholder="Add weight..."  value={weight} onChangeText={text => setWeight(text)} keyboardType = "number-pad" style={StyleSheet.input} />
      <Text style={StyleSheet.title}>Bottles</Text>
      <View style={StyleSheet.pickerBorder}>
      <Picker onValueChange={(itemValue) => setBottles(itemValue)} selectedValue={bottles}>
        {
          bottleCount.map((bottles,index) => (
            <Picker.Item key={index} label={bottles.label} value={bottles.value} />
          ))
        }
      </Picker>
      </View>
      <Text style={StyleSheet.title}>Time (h)</Text>
      <View style={StyleSheet.pickerBorder}>
      <Picker onValueChange={(itemValue) => setTime(itemValue)} selectedValue={time}>
      {
          times.map((time,index) => (
            <Picker.Item key={index} label={time.label} value={time.value} />
          ))
        }
      </Picker>
      </View>
      <Text style={StyleSheet.title}>Gender</Text>
      <RadioForm
      buttonSize={10}
      radio_props={genders}
      initial={0}
      onPress={(value) => setGender(value)}
      />
      <Text style={col}>{alc.toFixed(2)}</Text>
      <Button title="Calculate" onPress={calculate}/>
    </ScrollView>
  );
}

