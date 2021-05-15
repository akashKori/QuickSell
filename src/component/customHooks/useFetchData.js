import Service from '../../utils/Service'

export default function useFetchData({
    type = 'GET',
    body,
    url,
}) {
    function fetchData() {
        const service = new Service({ url, body })
        console.log(service)
        if (type === 'GET') {
            return service.get()
        } {
            return service.put()
        }
    }
    return [fetchData]
}