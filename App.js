import React, { useCallback, useState } from 'react';
import { View, ImageBackground, TextInput, ActivityIndicator, Text } from 'react-native';
import css from './styles/Style';
import axios from 'axios';
const api = {
  key: "f13ad93756fbadc14a5a500b211a8fef",
  base: "https://api.openweathermap.org/data/2.5/"
}
export default function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const fetchDataHandler = useCallback(() => {
    setInput(true);
    setInput('');
    axios({
      method: "GET",
      url: `${api.base}weather?q=${input}&units=metric&APPID=${api.key}`,

    }).then(
      response => {
        console.log(response.data);
        setData(response.data)
      }
    ).catch(error => console.dir(error))
      .finally(() => setLoading(false))

  }, [api.base, api.key, input])
  return (
    <>
      <View style={css.root} >
        {/* root ==================== */}
        <ImageBackground
          source={require("./assets/nature1.jpg")}
          style={css.image}
        >
          <View style={css.container}>
            <View style={css.mt50}>
              <TextInput
                style={css.inputControl}
                placeholder='Search...'
                onChangeText={text => setInput(text)}
                value={input}
                placeholderTextColor={'#000'}
                onSubmitEditing={fetchDataHandler}
              />
            </View>
            {/* mt50 ==================== */}
            {
              loading && (
                <View >
                  <ActivityIndicator size={'large'} color="#fff" />
                </View>
              )
            }

            {
              data ? (<View style={css.infoView}>
                <Text style={css.cityCountryText}>
                  {data?.name !== undefined &&
                    data?.sys?.country !== undefined ?
                    `${data?.name} ${data?.sys?.country}` :
                    ""}
                </Text>
                <Text style={css.dateText}>
                  {new Date().toLocaleString()}
                </Text>
                <Text style={css.tempText}>
                  {data?.main?.temp !== undefined ? `${Math.round(data?.main?.temp)} ℃` : ""}
                </Text>
                <Text style={css.minMaxText}>{`Min ${data?.main?.temp_min !== undefined ? Math.round(data?.main?.temp_min) : ""} ℃ / Max ${data?.main?.temp_max !== undefined ? Math.round(data?.main?.temp_max) : ""}`}</Text>

              </View>) : ""

            }
          </View>
          {/* container ==================== */}

        </ImageBackground>

      </View>

    </>
  );
}

// 