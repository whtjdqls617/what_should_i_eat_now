import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { food_name } from "./data";
import { ShowSearchPreview } from "./ShowSearchPreview";
import { arrayToObjectsInArray } from "./func_change_var_type";

export const ShowSearchBar = ({ foodList, setFoodList }) => {
  const [previewFood, setPreviewFood] = useState([]);
  const [value, setValue] = useState("");
  const [buttonOpacity, setButtonOpacity] = useState(0);

  const matchFoodName = (input) => {
    let foodObject = [];
    if (input.length > 0) {
      const food = food_name.filter((food) => food.includes(input));
      foodObject = arrayToObjectsInArray(food);
    }
    setPreviewFood(foodObject);
  };

  return (
    <>
        <TextInput
          style={{
			marginTop : '5%',
            height: 40,
            width: "90%",
            backgroundColor: "gray",
            borderRadius: 30,
            color: "white",
			paddingHorizontal: '4%',
          }}
          placeholder="음식 검색!"
          placeholderTextColor="white"
          value={value}
          onChangeText={(input) => {
            setValue(input);
            if (input.length > 0) setButtonOpacity(100);
            else setButtonOpacity(0);
            matchFoodName(input);
          }}
        />
        <View style={{ opacity: buttonOpacity, position : 'absolute', marginTop : '6.5%', paddingStart : '90%' }}>
          <TouchableOpacity
		  	style={{ width : 20,  }}
            onPress={() => {
              setButtonOpacity(0);
              setValue("");
            }}
          >
			  <Text style={{color : 'black', fontSize : 20, color : 'white'}}>x</Text>
		  </TouchableOpacity>
        </View>
      <ShowSearchPreview
        input={value}
        previewFood={previewFood}
        foodList={foodList}
        setFoodList={setFoodList}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholderstyle: {},
  inputalign: {
    flexDirection: "row",
  },
});
