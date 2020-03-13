const BASE_URL_API = 'http://192.168.1.67:3000';

class APITransport {

	// Obtiene en token en cada inicio de sesión
  async getToken(email, password) {
    const query = await fetch(`${BASE_URL_API}/signin-passenger`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				postEmail: 'joseperez@gmail.com',
				postPassword: '123453789'
			}),

    });

		const data = await query.json();
				return data['response'];
	}

	// Obtiene los datos de la ruta
	async getDataRoute(passengerId, apiKey) {
		const query = await fetch(`${BASE_URL_API}/routes/${passengerId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'gte-access-token': apiKey
			},
		});
		const data = await query.json();
    return data;
	}

	// Obtiene los datos de un incidente de las paradas
	async getDataIncident(idHistorialParada, apiKey) {
		const query = await fetch(`${BASE_URL_API}/incident/${idHistorialParada}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'gte-access-token': apiKey
			},
		});
		const data = await query.json();
    return data;
	}

	// Obtiene los datos de los incidentes de la ruta en uso
	async getDataIncidents(idRuta, apiKey) {
		const query = await fetch(`${BASE_URL_API}/incidents/${idRuta}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'gte-access-token': apiKey
			},
		});
		const data = await query.json();
    return data['incidentes'];
	}

// Obtiene los datos de la califición de un chofer de la ruta en uso
	async getRateRouteData(idRuta, apiKey) {
		const query = await fetch(`${BASE_URL_API}/rate-driver-info/${idRuta}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'gte-access-token': apiKey
			},
		});
		const data = await query.json();
    return data;
	}

	// Inserta la calificación del viaje
	async insertTravelRate(rate, apiKey) {
		const query = await fetch(`${BASE_URL_API}/rate-travel`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'gte-access-token': apiKey
			},
			body: JSON.stringify(rate)
    });

		const data = await query.json();
		return data;
	}
}

export default new APITransport();