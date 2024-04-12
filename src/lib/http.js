class HttpError extends Error {
    constructor({ status, payload }) {
        super('Http Error')
        this.status = status
        this.payload = payload
    }
}
/**
 * @async
 * @description hàm request basic
 * @param {String} method 
 * @param {String} url 
 * @param {object} options 
 */
const request = async (method = 'GET', url = '/', options = {}) => {
    const body = options?.body ? JSON.stringify(options.body) : undefined
    const baseHeaders = {
        'Content-Type': 'application/json'
    }
    const baseUrl = options?.baseUrl === undefined ? process.env.NEXT_PUBLIC_BASE_URL : options.baseUrl
    const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`
    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...baseHeaders,
            ...options?.headers
        },
        body,
        method
    })

    const response = await res.json()
    const data = {
        status: response.status,
        payload: await response.data()
    }
    if (!response.ok) {
        throw new HttpError(data)
    }
    return data
}

const http = {
    get(url) {
        return request('GET', url)
    },
    post(url, body, options) {
        return request('POST', url, {...options, body})
    },
    put(url, body, options) {
        return request('PUT', url, {...options, body})
    },
    delete(url, body, options) {
        return request('DELETE', url, {...options, body})
    }
}

export default http