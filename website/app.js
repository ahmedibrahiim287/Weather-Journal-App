/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
const apiDefKey = "7cc2a5bba97266ab069b8f8b3d35557b"

const calcButton = document.querySelector("#generate")
calcButton.addEventListener("click", async () => {

    const zipInput = document.querySelector("#zip").value
    const feeling = document.querySelector("#feelings").value

    try {
        const fUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipInput},&appid=${apiDefKey}&units=metric`
        const res = await fetch(fUrl)
        const dataTemp = await res.json()
        const temp = dataTemp.main.temp
        await fetch('/setWeather', {
            method: "POST",
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: newDate,
                temp: temp,
                feeling: feeling

            })
        });

        const result = await fetch('/getWeather')
        const fData = await result.json()
        document.getElementById('date').innerHTML = `Date : ${newDate} `;
        document.getElementById('temp').innerHTML = `temp: ${temp}`;
        document.getElementById('content').innerHTML = `i feel : ${feeling}`;



    } catch (err) {
        console.log(err);
    }
})