import axios, {AxiosResponse} from "axios";

export interface Group {
    id: string,
    name: string,
    usersIds: string[]
}

export default async (): Promise<AxiosResponse<Group[]>> => {
    const { data: response } = await axios.get('http://localhost:3001/groups')
    return response
}
