import axios, {AxiosResponse} from "axios";

export interface User {
    id: string,
    name: string,
    favouriteColor: string,
    groupId: string
}

export default async (): Promise<AxiosResponse<User>> => {
    const { data: response } = await axios.get('http://localhost:3001/users/recent')
    return response
}
