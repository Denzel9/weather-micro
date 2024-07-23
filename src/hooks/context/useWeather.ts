import { useContext } from "react"
import { WeatherContext } from "../../providers/WeatherProvider"

export const useWeather = () => {
    const weather = useContext(WeatherContext)
    return {...weather}
}