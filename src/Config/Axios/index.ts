import { Method } from 'axios'
import { stringify } from 'qs'

const baseUrl: string = process.env.REACT_APP_API || ''

export const requestApi = async <T = any, R = T>({
	baseUri = '',
	endpoint = '',
	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	method = <Method>'GET',
	payload = {} as any,
	Authorization = '',
	returnOriginal = false,
	sendAccept = true,
}): Promise<{ status: boolean; data: R, error: any }> => {
	let data: any
	try {
		let url = `${baseUri || baseUrl}/${endpoint}`

		const headers: any = {
			'Content-Type': 'application/json',
		}

		headers.Accept = 'application/json'

		if (Authorization) {
			headers.Authorization = `Bearer ${Authorization}`
		}

		const options: RequestInit = {
			method,
			headers,
		}

		if (method === 'GET' && payload) {
			url += `?${stringify(payload)}`
		} else if (payload) {
			options.body = JSON.stringify(payload)
		}

		const response = await fetch(url, options)

		data = returnOriginal ? response : await response.json()

		data = { data, status: response.ok }
	} catch (error) {
		data = { status: false, error }
	}

	return data
}
