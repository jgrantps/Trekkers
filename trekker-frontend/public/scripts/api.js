class ApiAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    get(URL) {
        return fetch(this.baseUrl + URL)
        .then(r => r.json())
    }

    post(URL, configurationObject) {
        
        return fetch(this.baseUrl + URL, configurationObject)
        .then(r => r.json())
    }
}

