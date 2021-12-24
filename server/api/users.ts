import axios, {AxiosResponse} from "axios";

export interface User {
    name: string,
    favouriteColor: string
}

export default async (): Promise<AxiosResponse<User[]>> => {
    const { data: response } = await axios.get('http://localhost:3001/users')
    return response
}
