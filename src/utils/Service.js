class Service {
    constructor({url, body}){
        let _url =url,_body=body
        this.getFetchData= function(){
            return{
                _url,
                _body
            }
        }
    }
        
    async get(){
        try {
            const res = await fetch(this.getFetchData()._url)
            const data = await res.json()
            return {
            data ,
            status: res.statusCode,
            isLoading: false,
            error: ''
            }

        } catch(ex) {
            return {
                data : [],
                status: 500,
                isLoading: false,
                error: 'there is some error'
                }
        }
                    
    }

    async put(){
        try {
            const {_url, _body} = this.getFetchData()
            const res = await fetch(_url,{
                method: 'POST',
                body: JSON.stringify(_body)
            })
            const data = await res.json()
            return {
            data,
            status: res.statusCode,
            isLoading: false,
            error: ''
            }

        } catch(ex) {
            return {
                data : [],
                status: 500,
                isLoading: false,
                error: 'there is some error'
                }
        }
                    
    }

    
}

export default Service