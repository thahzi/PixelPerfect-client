import axios from "axios"

export const commonApi = async (httpRequest, url, reqBody, reqHeader)=>{
    const reqConfiq ={
        method:httpRequest,
        url,
        data:reqBody,
        header:reqHeader?reqHeader:{'content-type':'applucation/josn'}
    }
    return await axios(reqConfiq).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}