export async function fetchWeather(city) {
  const response = await fetch(`http://16.16.27.130:8080/api/weather?city=${encodeURIComponent(city)}`)

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || 'Unable to fetch weather right now.')
  }

  return response.json()
}
