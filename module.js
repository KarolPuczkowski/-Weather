function setValues(obj){
    document.querySelector('#Temperature').innerHTML = obj[0].Temperature.Metric.Value.toString();
    document.querySelector('#WeatherText').innerHTML = obj[0].WeatherText.toString();
}

async function fetchLocation(cityText) {
    const response = await fetch('http://dataservice.accuweather.com/locations/v1/cities/search?apikey=X1GiTCjrqvX2rhLRBqLtF5Aj4W0gRnGB&q='+cityText+'&language=pl');
    const responseObject = await response.json();
    return responseObject;
}

async function fetchData(cityCode) {
    const response = await fetch('http://dataservice.accuweather.com/currentconditions/v1/'+cityCode+'?apikey=X1GiTCjrqvX2rhLRBqLtF5Aj4W0gRnGB&language=pl-pl&details=true');
    const responseObject = await response.json();
    // let responseObject = [
    // {
    //     "LocalObservationDateTime": "2022-12-19T11:42:00+01:00",
    //     "EpochTime": 1671446520,
    //     "WeatherText": "Słonecznie",
    //     "WeatherIcon": 1,
    //     "HasPrecipitation": false,
    //     "PrecipitationType": null,
    //     "IsDayTime": true,
    //     "Temperature": {
    //         "Metric": {
    //             "Value": -7.8,  
    //             "Unit": "C",
    //             "UnitType": 17
    //         },
    //         "Imperial": {
    //             "Value": 18,
    //             "Unit": "F",
    //             "UnitType": 18
    //         }
    //     },
    //     "RealFeelTemperature": {
    //         "Metric": {
    //             "Value": -15.4,
    //             "Unit": "C",
    //             "UnitType": 17,
    //             "Phrase": "Przejmująco zimno"
    //         },
    //         "Imperial": {
    //             "Value": 4,
    //             "Unit": "F",
    //             "UnitType": 18,
    //             "Phrase": "Przejmująco zimno"
    //         }
    //     },
    //     "RealFeelTemperatureShade": {
    //         "Metric": {
    //             "Value": -16.2,
    //             "Unit": "C",
    //             "UnitType": 17,
    //             "Phrase": "Przejmująco zimno"
    //         },
    //         "Imperial": {
    //             "Value": 3,
    //             "Unit": "F",
    //             "UnitType": 18,
    //             "Phrase": "Przejmująco zimno"
    //         }
    //     },
    //     "RelativeHumidity": 79,
    //     "IndoorRelativeHumidity": 25,
    //     "DewPoint": {
    //         "Metric": {
    //             "Value": -11.1,
    //             "Unit": "C",
    //             "UnitType": 17
    //         },
    //         "Imperial": {
    //             "Value": 12,
    //             "Unit": "F",
    //             "UnitType": 18
    //         }
    //     },
    //     "Wind": {
    //         "Direction": {
    //             "Degrees": 135,
    //             "Localized": "SE",
    //             "English": "SE"
    //         },
    //         "Speed": {
    //             "Metric": {
    //                 "Value": 20.4,
    //                 "Unit": "km/h",
    //                 "UnitType": 7
    //             },
    //             "Imperial": {
    //                 "Value": 12.7,
    //                 "Unit": "mi/h",
    //                 "UnitType": 9
    //             }
    //         }
    //     },
    //     "WindGust": {
    //         "Speed": {
    //             "Metric": {
    //                 "Value": 20.4,
    //                 "Unit": "km/h",
    //                 "UnitType": 7
    //             },
    //             "Imperial": {
    //                 "Value": 12.7,
    //                 "Unit": "mi/h",
    //                 "UnitType": 9
    //             }
    //         }
    //     },
    //     "UVIndex": 1,
    //     "UVIndexText": "Niskie",
    //     "Visibility": {
    //         "Metric": {
    //             "Value": 16.1,
    //             "Unit": "km",
    //             "UnitType": 6
    //         },
    //         "Imperial": {
    //             "Value": 10,
    //             "Unit": "mi",
    //             "UnitType": 2
    //         }
    //     },
    //     "ObstructionsToVisibility": "",
    //     "CloudCover": 10,
    //     "Ceiling": {
    //         "Metric": {
    //             "Value": 12192,
    //             "Unit": "m",
    //             "UnitType": 5
    //         },
    //         "Imperial": {
    //             "Value": 40000,
    //             "Unit": "ft",
    //             "UnitType": 0
    //         }
    //     },
    //     "Pressure": {
    //         "Metric": {
    //             "Value": 1034,
    //             "Unit": "mb",
    //             "UnitType": 14
    //         },
    //         "Imperial": {
    //             "Value": 30.53,
    //             "Unit": "inHg",
    //             "UnitType": 12
    //         }
    //     },
    //     "PressureTendency": {
    //         "LocalizedText": "Maleje",
    //         "Code": "F"
    //     },
    //     "Past24HourTemperatureDeparture": {
    //         "Metric": {
    //             "Value": -2.8,
    //             "Unit": "C",
    //             "UnitType": 17
    //         },
    //         "Imperial": {
    //             "Value": -5,
    //             "Unit": "F",
    //             "UnitType": 18
    //         }
    //     },
    //     "ApparentTemperature": {
    //         "Metric": {
    //             "Value": -7.8,
    //             "Unit": "C",
    //             "UnitType": 17
    //         },
    //         "Imperial": {
    //             "Value": 18,
    //             "Unit": "F",
    //             "UnitType": 18
    //         }
    //     },
    //     "WindChillTemperature": {
    //         "Metric": {
    //             "Value": -15,
    //             "Unit": "C",
    //             "UnitType": 17
    //         },
    //         "Imperial": {
    //             "Value": 5,
    //             "Unit": "F",
    //             "UnitType": 18
    //         }
    //     },
    //     "WetBulbTemperature": {
    //         "Metric": {
    //             "Value": -8.5,
    //             "Unit": "C",
    //             "UnitType": 17
    //         },
    //         "Imperial": {
    //             "Value": 17,
    //             "Unit": "F",
    //             "UnitType": 18
    //         }
    //     },
    //     "Precip1hr": {
    //         "Metric": {
    //             "Value": 0,
    //             "Unit": "mm",
    //             "UnitType": 3
    //         },
    //         "Imperial": {
    //             "Value": 0,
    //             "Unit": "in",
    //             "UnitType": 1
    //         }
    //     },
    //     "PrecipitationSummary": {
    //         "Precipitation": {
    //             "Metric": {
    //                 "Value": 0,
    //                 "Unit": "mm",
    //                 "UnitType": 3
    //             },
    //             "Imperial": {
    //                 "Value": 0,
    //                 "Unit": "in",
    //                 "UnitType": 1
    //             }
    //         },
    //         "PastHour": {
    //             "Metric": {
    //                 "Value": 0,
    //                 "Unit": "mm",
    //                 "UnitType": 3
    //             },
    //             "Imperial": {
    //                 "Value": 0,
    //                 "Unit": "in",
    //                 "UnitType": 1
    //             }
    //         },
    //         "Past3Hours": {
    //             "Metric": {
    //                 "Value": 0,
    //                 "Unit": "mm",
    //                 "UnitType": 3
    //             },
    //             "Imperial": {
    //                 "Value": 0,
    //                 "Unit": "in",
    //                 "UnitType": 1
    //             }
    //         },
    //         "Past6Hours": {
    //             "Metric": {
    //                 "Value": 0,
    //                 "Unit": "mm",
    //                 "UnitType": 3
    //             },
    //             "Imperial": {
    //                 "Value": 0,
    //                 "Unit": "in",
    //                 "UnitType": 1
    //             }
    //         },
    //         "Past9Hours": {
    //             "Metric": {
    //                 "Value": 0,
    //                 "Unit": "mm",
    //                 "UnitType": 3
    //             },
    //             "Imperial": {
    //                 "Value": 0,
    //                 "Unit": "in",
    //                 "UnitType": 1
    //             }
    //         },
    //         "Past12Hours": {
    //             "Metric": {
    //                 "Value": 0,
    //                 "Unit": "mm",
    //                 "UnitType": 3
    //             },
    //             "Imperial": {
    //                 "Value": 0,
    //                 "Unit": "in",
    //                 "UnitType": 1
    //             }
    //         },
    //         "Past18Hours": {
    //             "Metric": {
    //                 "Value": 0,
    //                 "Unit": "mm",
    //                 "UnitType": 3
    //             },
    //             "Imperial": {
    //                 "Value": 0,
    //                 "Unit": "in",
    //                 "UnitType": 1
    //             }
    //         },
    //         "Past24Hours": {
    //             "Metric": {
    //                 "Value": 0,
    //                 "Unit": "mm",
    //                 "UnitType": 3
    //             },
    //             "Imperial": {
    //                 "Value": 0,
    //                 "Unit": "in",
    //                 "UnitType": 1
    //             }
    //         }
    //     },
    //     "TemperatureSummary": {
    //         "Past6HourRange": {
    //             "Minimum": {
    //                 "Metric": {
    //                     "Value": -11.1,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Imperial": {
    //                     "Value": 12,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             },
    //             "Maximum": {
    //                 "Metric": {
    //                     "Value": -7.8,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Imperial": {
    //                     "Value": 18,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             }
    //         },
    //         "Past12HourRange": {
    //             "Minimum": {
    //                 "Metric": {
    //                     "Value": -11.1,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Imperial": {
    //                     "Value": 12,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             },
    //             "Maximum": {
    //                 "Metric": {
    //                     "Value": -6.1,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Imperial": {
    //                     "Value": 21,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             }
    //         },
    //         "Past24HourRange": {
    //             "Minimum": {
    //                 "Metric": {
    //                     "Value": -11.1,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Imperial": {
    //                     "Value": 12,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             },
    //             "Maximum": {
    //                 "Metric": {
    //                     "Value": -3.9,
    //                     "Unit": "C",
    //                     "UnitType": 17
    //                 },
    //                 "Imperial": {
    //                     "Value": 25,
    //                     "Unit": "F",
    //                     "UnitType": 18
    //                 }
    //             }
    //         }
    //     },
    //     "MobileLink": "http://www.accuweather.com/pl/pl/warsaw/274663/current-weather/274663",
    //     "Link": "http://www.accuweather.com/pl/pl/warsaw/274663/current-weather/274663"
    // }
    // ];
    setValues(responseObject);
}

const cityInput = document.querySelector('#CityInput');
const changeButton = document.querySelector('.changeButton');

cityInput.addEventListener('click', (event) => {
    console.log("click");
    changeButton.classList.remove("hiden");
});

cityInput.addEventListener('change', (event) => {
    console.log("change");
    changeButton.classList.add("hiden");
    fetchLocation(cityInput.value).then(data => {
        fetchData(data[0].Key);
    });
});

