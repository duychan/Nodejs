const DEFAUL_PAGE = 1
const DEFAUL_LIMIT = 10
export default function getPaging(page, limit){
    page =  page || DEFAUL_PAGE
    limit = limit || DEFAUL_LIMIT
    let skip = (page - 1) * limit
    return {
        skip, limit
    }
}